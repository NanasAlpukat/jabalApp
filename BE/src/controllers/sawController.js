import { prisma } from '../config/prisma.js';

// CREATE kriteria
export const createKriteria = async (req, res) => {
  try {
    const { nama, bobot, tipe } = req.body;
    const kriteria = await prisma.kriteria.create({
      data: { nama, bobot, tipe },
    });
    res.status(201).json({ success: true, data: kriteria });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// CREATE penilaian siswa
export const createPenilaian = async (req, res) => {
  try {
    const { studentId, kriteriaId, nilai } = req.body;

    // Ambil detail kriteria
    const kriteria = await prisma.kriteria.findUnique({
      where: { id: kriteriaId },
    });

    if (!kriteria) {
      return res.status(404).json({ success: false, message: "Kriteria tidak ditemukan" });
    }

    let nilaiFinal = nilai;

    if (kriteria.nama.toLowerCase() === "nilai akademik") {
      // Ambil semua nilai akademik siswa
      const nilaiSiswa = await prisma.nilai.findMany({
        where: { studentId },
        select: { nilai: true },
      });

      const total = nilaiSiswa.reduce((sum, item) => sum + item.nilai, 0);
      nilaiFinal = nilaiSiswa.length > 0 ? total / nilaiSiswa.length : 0;
    }

    // Simpan ke tabel Penilaian
    const penilaian = await prisma.penilaian.upsert({
      where: { studentId_kriteriaId: { studentId, kriteriaId } },
      update: { nilai: nilaiFinal },
      create: { studentId, kriteriaId, nilai: nilaiFinal },
    });

    res.status(201).json({ success: true, data: penilaian });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



// CREATE hasil SAW
export const createHasilSAW = async (req, res) => {
  try {
    const { studentId, skor } = req.body;

    const hasil = await prisma.hasilSAW.upsert({
      where: { studentId },
      update: { skor },
      create: { studentId, skor },
    });

    // Update skorSAW & statusBeasiswa di tabel Student (optional)
    await prisma.student.update({
      where: { id: studentId },
      data: {
        skorSAW: skor,
        statusBeasiswa: skor >= 0.7, // contoh threshold
      },
    });

    res.status(201).json({ success: true, data: hasil });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



// Calculate SAW scores for all students
export const calculateSAW = async (req, res) => {
  try {
    // 1. Ambil semua kriteria
    const kriterias = await prisma.kriteria.findMany();

    // 2. Ambil semua penilaian siswa
    const penilaians = await prisma.penilaian.findMany();

    // 3. Kelompokkan penilaian berdasarkan kriteria
    const groupedByKriteria = {};
    kriterias.forEach((kriteria) => {
      groupedByKriteria[kriteria.id] = penilaians.filter((p) => p.kriteriaId === kriteria.id);
    });

    const k = {
      'nilai akademik' : 0.5,
      'kehadiran' : 0.2,
      'kondisi ekonomi' : 0.5,
    }
   
 
    // 4. Hitung normalisasi per kriteria
    const normalized = {}; // { studentId: { kriteriaId: nilaiNormalisasi } }

    kriterias.forEach((kriteria) => {
      const data = groupedByKriteria[kriteria.id];
      const values = data.map((p) => p.nilai);

      const max = Math.max(...values);
      const min = Math.min(...values);

      data.forEach((p) => {
        const nilaiNormal =
          kriteria.tipe === "BENEFIT"
            ? p.nilai / max
            : min / p.nilai;

        if (!normalized[p.studentId]) normalized[p.studentId] = {};
        normalized[p.studentId][kriteria.id] = nilaiNormal;
      });
    });

    // 5. Hitung skor SAW = sum(normalisasi * bobot)
    const results = [];
    for (const studentId in normalized) {
      let skor = 0;
      kriterias.forEach((kriteria) => {
        skor += normalized[studentId][kriteria.id] * kriteria.bobot;
      });

      results.push({ studentId, skor });
    }

    // 6. Simpan skor ke tabel HasilSAW dan update Student
    for (const r of results) {
      await prisma.hasilSAW.upsert({
        where: { studentId: r.studentId },
        update: { skor: r.skor },
        create: { studentId: r.studentId, skor: r.skor },
      });

      await prisma.student.update({
        where: { id: r.studentId },
        data: {
          skorSAW: r.skor,
          statusBeasiswa: r.skor >= 0.7, // threshold contoh
        },
      });
    }

    res.status(200).json({ success: true, data: results });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// export const getAllHasilSAW = async (req, res) => {
//   try {
//     const hasil = await prisma.hasilSAW.findMany({
//       include: {
//         student: {
//           select: {
//             id: true,
//             nama: true,
//             kelas: true,
//             jurusan: true,
//             skorSAW: true,
//             statusBeasiswa: true,
//             penilaian: {
//               include: {
//                 kriteria: true,
//               },
//             },
//             nilai: true,
//           },
//         },
//       },
//     });

//     // Format hasil akhir
//     const formatted = hasil.map((item) => {
//       const student = item.student;

//       // Rata-rata nilai akademik
//       const nilaiAkademik = student.nilai.map((n) => n.nilai);
//       const rataRataAkademik = nilaiAkademik.length > 0
//         ? nilaiAkademik.reduce((a, b) => a + b, 0) / nilaiAkademik.length
//         : 0;

//       // Ambil nilai dari penilaian (kehadiran & ekonomi)
//       const penilaian = {};
//       student.penilaian.forEach((p) => {
//         penilaian[p.kriteria.nama.toLowerCase()] = p.nilai;
//       });

//       return {
//         studentId: student.id,
//         nama: student.nama,
//         kelas: student.kelas,
//         jurusan: student.jurusan,
//         skorSAW: item.skor,
//         statusBeasiswa: student.statusBeasiswa,
//         rataRataNilaiAkademik: rataRataAkademik,
//         nilaiKehadiran: penilaian["kehadiran"] || 0,
//         nilaiEkonomi: penilaian["kondisi ekonomi"] || 0,
//       };
//     });

//     res.status(200).json({ success: true, data: formatted });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

export const getAllHasilSAW = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;
    const sort = req.query.sort === 'asc' ? 'asc' : 'desc';

    const filterKelas = req.query.kelas;
    const filterJurusan = req.query.jurusan;

    const whereClause = {
      student: {
        ...(filterKelas && {
          kelas: {
            kode: {
              equals: filterKelas
            }
          }
        }),
        ...(filterJurusan && {
          jurusan: {
            nama: {
              contains: filterJurusan,
              mode: 'insensitive'
            }
          }
        })
      }
    };

    // Ambil semua hasil untuk dihitung ranking global
    const allSAW = await prisma.hasilSAW.findMany({
      where: whereClause,
      orderBy: { skor: 'desc' },
      include: {
        student: {
          include: {
            user: true,
            kelas: true,
            jurusan: true,
            penilaian: true
          }
        }
      }
    });

    const rankedResults = allSAW.map((hasil, index) => ({
      ...hasil,
      rank: index + 1
    }));

    // Ambil hasil berdasarkan pagination
    const paginatedResults = rankedResults.slice(skip, skip + limit);

    const formattedResults = paginatedResults.map((hasil, index) => {
      const akademik = hasil.student.penilaian.find(p => p.kriteria.toLowerCase() === 'nilai akademik')?.nilai || 0;
      const absensi  = hasil.student.penilaian.find(p => p.kriteria.toLowerCase() === 'kehadiran')?.nilai || 0;
      const ekonomi  = hasil.student.penilaian.find(p => p.kriteria.toLowerCase() === 'kondisi ekonomi')?.nilai || 0;

      return {
        no: skip + index + 1,
        nama: hasil.student.user.name,
        nis: hasil.student.nis,
        kelas: hasil.student.kelas.kode,
        jurusan: hasil.student.jurusan.nama,
        nilaiAkademik: akademik,
        nilaiAbsensi: absensi,
        tingkatEkonomi: ekonomi,
        penghasilan: hasil.student.penhasilanOrtu,
        skorSAW: hasil.skor,
        statusBeasiswa: hasil.student.statusBeasiswa,
        rank: hasil.rank
      };
    });

    res.status(200).json({
      success: true,
      data: formattedResults,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(allSAW.length / limit),
        totalData: allSAW.length,
        limit
      },
      sort
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};






export const generatePenilaianAndCalculateSAW = async (req, res) => {
  const k = {
    'nilai akademik': 0.5,
    'kehadiran': 0.2,
    'kondisi ekonomi': 0.3,
  };

  try {
    const students = await prisma.student.findMany({
      include: {
        nilai: true,
      },
    });

    await prisma.$transaction(async (tx) => {
      const allPenilaian = [];

      // Step 1: Hitung nilai untuk semua siswa dan simpan penilaian
      for (const student of students) {
        const penilaianData = {};

        // 1. Nilai Akademik
        const nilaiAkademik = student.nilai.length > 0
          ? student.nilai.reduce((acc, n) => acc + n.nilai, 0) / student.nilai.length
          : 0;
        penilaianData['nilai akademik'] = nilaiAkademik;

        // 2. Kehadiran
        const nilaiKehadiran = student.nilai.length > 0
          ? student.nilai.reduce((acc, n) => acc + n.upsensi, 0) / student.nilai.length
          : 0;
        penilaianData['kehadiran'] = nilaiKehadiran;

        // 3. Kondisi Ekonomi
        const income = student.penhasilanOrtu ?? 0;
        let ekonomiScore = 1;
        if (income < 1000000) ekonomiScore = 5;
        else if (income < 2000000) ekonomiScore = 4;
        else if (income < 4000000) ekonomiScore = 3;
        else if (income < 10000000) ekonomiScore = 2;
        penilaianData['kondisi ekonomi'] = ekonomiScore;

        for (const kriteria of Object.keys(k)) {
          allPenilaian.push(tx.penilaian.upsert({
            where: {
              studentId_kriteria: {
                studentId: student.id,
                kriteria,
              },
            },
            update: {
              nilai: penilaianData[kriteria],
            },
            create: {
              studentId: student.id,
              kriteria,
              nilai: penilaianData[kriteria],
            },
          }));
        }
      }

      await Promise.all(allPenilaian);

      // Step 2: Hitung normalisasi dan skor SAW
      const penilaians = await tx.penilaian.findMany();

      const grouped = {}; // grouped by kriteria
      for (const p of penilaians) {
        if (!grouped[p.kriteria]) grouped[p.kriteria] = [];
        grouped[p.kriteria].push(p);
      }

      const normalized = {}; // { studentId: { kriteria: nilaiNormalisasi } }

      for (const kriteria of Object.keys(k)) {
        const data = grouped[kriteria];
        const values = data.map((p) => p.nilai);
        const max = Math.max(...values);

        for (const p of data) {
          const nilaiNormal = p.nilai / max;
          if (!normalized[p.studentId]) normalized[p.studentId] = {};
          normalized[p.studentId][kriteria] = nilaiNormal;
        }
      }

      // Step 3: Hitung skor akhir dan simpan
      const hasilSAW = [];
      for (const studentId of Object.keys(normalized)) {
        let skor = 0;
        for (const kriteria of Object.keys(k)) {
          skor += normalized[studentId][kriteria] * k[kriteria];
        }

        hasilSAW.push(tx.hasilSAW.upsert({
          where: { studentId },
          update: { skor },
          create: { studentId, skor },
        }));

        // Update status beasiswa di Student
        hasilSAW.push(tx.student.update({
          where: { id: studentId },
          data: {
            skorSAW: skor,
            statusBeasiswa: skor >= 0.7,
          },
        }));
      }

      await Promise.all(hasilSAW);
    });

    res.status(200).json({ success: true, message: "Penilaian dan SAW berhasil diproses" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
