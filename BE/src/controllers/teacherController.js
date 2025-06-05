import { prisma } from '../config/prisma.js';
import xlsx from 'xlsx'
export const createNilai = async (req, res) => {
  try {
    const inputData = Array.isArray(req.body) ? req.body : [req.body];

    const result = await prisma.$transaction(async (tx) => {
      const responses = [];

      for (const data of inputData) {
        const { studentId, mapelId, nilai, upsensi } = data;

        // Validasi apakah student dan mapel ada
        const [student, mapel] = await Promise.all([
          tx.student.findUnique({
            where: { id: studentId },
            include: { user: true, kelas: true, jurusan: true },
          }),
          tx.mapel.findUnique({ where: { id: mapelId } }),
        ]);

        if (!student) throw new Error(`Student ID ${studentId} tidak ditemukan`);
        if (!mapel) throw new Error(`Mapel ID ${mapelId} tidak ditemukan`);

        // Cek duplikat nilai
        const existing = await tx.nilai.findUnique({
          where: { studentId_mapelId: { studentId, mapelId } },
        });

        if (existing) {
          throw new Error(
            `Nilai untuk ${student.user.name} - ${mapel.nama} sudah ada`
          );
        }

        const newNilai = await tx.nilai.create({
        data: {
          studentId,
          mapelId,
          nilai: parseInt(nilai),
          upsensi: parseInt(upsensi),
        },
      });


        responses.push({
          id: newNilai.id,
          studentId: newNilai.studentId,
          nama: student.user.name,
          kelas: student.kelas.kode,
          jurusan: student.jurusan.nama,
          mapel: mapel.nama,
          nilai: newNilai.nilai,
          upsensi: newNilai.upsensi,
        });
      }

      return responses;
    });

    res.status(201).json({
      message: 'Semua nilai berhasil ditambahkan',
      data: result,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error.message || 'Gagal menambahkan nilai' });
  }
};

export const getAllNilaiSummary = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;
    const sort = req.query.sort === 'asc' ? 'asc' : 'desc';
    const jurusanFilter = req.query.jurusan || '';
    const kelasFilter = req.query.kelas || '';

    const allStudents = await prisma.student.findMany({
      where: {
        ...(jurusanFilter && {
          jurusan: {
            is: {
              nama: {
                contains: jurusanFilter,
                mode: 'insensitive'
              }
            }
          }
        }),
        ...(kelasFilter && {
          kelas: {
            is: {
              kode: kelasFilter
            }
          }
        })
      },
      include: {
        user: true,
        kelas: true,
        jurusan: true,
        nilai: true
      }
    });

    const allResults = allStudents.map(student => {
      const totalNilai = student.nilai.reduce((sum, n) => sum + n.nilai, 0);
      const avgNilai = student.nilai.length > 0 ? totalNilai / student.nilai.length : 0;

      return {
        id: student.id,
        nis: student.nis,
        nama: student.user.name,
        kelas: student.kelas?.kode || '-',
        jurusan: student.jurusan?.nama || '-',
        nilai_avg: parseFloat(avgNilai.toFixed(2))
      };
    });

    const sortedResults = allResults
      .sort((a, b) => sort === 'asc' ? a.nilai_avg - b.nilai_avg : b.nilai_avg - a.nilai_avg)
      .map((item, index) => ({
        ...item,
        rank: index + 1
      }));

    const paginatedResults = sortedResults.slice(skip, skip + limit);

    res.json({
      message: 'Data nilai berhasil diambil',
      currentPage: page,
      totalPages: Math.ceil(allResults.length / limit),
      totalData: allResults.length,
      data: paginatedResults
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal mengambil data nilai', detail: error.message });
  }
};



export const getAllNilaiMapel = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const sort = req.query.sort === 'asc' ? 'asc' : 'desc';
    const jurusanFilter = req.query.jurusan || '';
    const kelasFilter = req.query.kelas || '';
    const mapelFilter = req.query.mapel || '';

    const students = await prisma.student.findMany({
      where: {
        ...(jurusanFilter && {
          jurusan: {
            is: {
              nama: {
                contains: jurusanFilter,
                mode: 'insensitive'
              }
            }
          }
        }),
        ...(kelasFilter && {
          kelas: {
            is: {
              kode: kelasFilter
            }
          }
        })
      },
      include: {
        user: true,
        kelas: true,
        jurusan: true,
        nilai: {
          include: {
            mapel: true
          }
        }
      }
    });

    const allResults = students.flatMap(student => {
      const nilaiFiltered = student.nilai.filter(n =>
        mapelFilter
          ? n.mapel?.nama?.toLowerCase().includes(mapelFilter.toLowerCase())
          : true
      );

      return nilaiFiltered.map(n => ({
        id : n.id,
        studentId: student.id,
        nis: student.nis,
        nama: student.user.name,
        kelas: student.kelas?.kode || '-',
        jurusan: student.jurusan?.nama || '-',
        mapelId: n.mapel?.id || '-',
        mapel: n.mapel?.nama || '-',
        upsensi: n.upsensi || '-',
        nilai: n.nilai
      }));
    });

    const sortedResults = allResults.sort((a, b) =>
      sort === 'asc' ? a.nilai - b.nilai : b.nilai - a.nilai
    );

    const paginatedResults = sortedResults.slice(skip, skip + limit);

    res.json({
      message: 'Data nilai per mapel berhasil diambil',
      currentPage: page,
      totalPages: Math.ceil(allResults.length / limit),
      totalData: allResults.length,
      data: paginatedResults
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal mengambil data nilai', detail: error.message });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany({
      include: {
        user: {
          include: {
            biodata: true,
          }
        }
      }
    });

    const mappedStudents = students.map(student => ({
      id: student.id,
      name: student.user.name,
      email: student.user.email,
      penghasilanOranTua: student.penhasilanOrtu,
      biodata: {
        address: student.user.biodata?.address,
        phone: student.user.biodata?.phone,
        birthDate: student.user.biodata?.birthDate
      }
    }));

    res.status(200).json({ success: true, data: mappedStudents });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};






export const getAllMapel = async (req, res) => {
  try {
    const mapel = await prisma.mapel.findMany({
      include: {
        teachers: true,
        students: true
      }
    });

    const mappedMapel = mapel.map(item => ({
      id: item.id,
      kode: item.kode,
      nama: item.nama
    }));

    res.status(200).json({ success: true, data: mappedMapel });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getAllKelas = async (req, res) => {
  try {
    const kelas = await prisma.kelas.findMany({
      include: {
        students: {
          include: {
            user: true,
            
          }
        }
      }
    });
     const mappedKelas = kelas.map(item => ({
      id: item.id,
      kode: item.kode,
    }));
    res.status(200).json({ success: true, data: mappedKelas });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllJurusan = async (req, res) => {
  try {
    const jurusan = await prisma.jurusan.findMany({
      include: {
        students: {
          include: {
            user: true
          }
        }
      }
    });
    const mappedJurusan = jurusan.map(item => ({
      id: item.id,
      kode: item.kode,
      nama: item.nama
    }));
    res.status(200).json({ success: true, data: mappedJurusan });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const updateNilai = async (req, res) => {
  try {
    const inputData = Array.isArray(req.body) ? req.body : [req.body];

    const result = await prisma.$transaction(async (tx) => {
      const responses = [];

      for (const data of inputData) {
        const { studentId, mapelId, nilai, upsensi } = data;

        // Validasi apakah student dan mapel ada
        const [student, mapel] = await Promise.all([
          tx.student.findUnique({
            where: { id: studentId },
            include: { user: true, kelas: true, jurusan: true },
          }),
          tx.mapel.findUnique({ where: { id: mapelId } }),
        ]);

        if (!student) throw new Error(`Student ID ${studentId} tidak ditemukan`);
        if (!mapel) throw new Error(`Mapel ID ${mapelId} tidak ditemukan`);

        // Cek apakah nilai sudah ada
        const existing = await tx.nilai.findUnique({
          where: { studentId_mapelId: { studentId, mapelId } },
        });

        if (!existing) {
          throw new Error(`Nilai untuk ${student.user.name} - ${mapel.nama} belum ada`);
        }

        const updatedNilai = await tx.nilai.update({
          where: {
            studentId_mapelId: { studentId, mapelId },
          },
          data: {
            nilai: parseInt(nilai),
            upsensi: parseInt(upsensi),
          },
        });

        responses.push({
          nama: student.user.name,
          kelas: student.kelas.kode,
          jurusan: student.jurusan.nama,
          mapel: mapel.nama,
          nilai: updatedNilai.nilai,
          upsensi: updatedNilai.upsensi,
        });
      }

      return responses;
    });

    res.status(200).json({
      message: 'Nilai berhasil diperbarui',
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'Gagal memperbarui nilai' });
  }
};
export const deleteNilai = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await prisma.nilai.findUnique({
      where: { id: id.toString() }, // ✅ id as string
    });

    if (!existing) {
      return res.status(404).json({ error: 'Data nilai tidak ditemukan' });
    }

    await prisma.nilai.delete({
      where: { id: id.toString() }, // ✅ pakai string juga di sini
    });

    res.status(200).json({ message: 'Nilai berhasil dihapus' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'Gagal menghapus nilai' });
  }
};


export const importNilaiExcel = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'File tidak ditemukan' });
    }

    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    const results = [];
    const errors = [];

    await prisma.$transaction(async (tx) => {
      for (const [index, row] of data.entries()) {
        const { studentId, mapelId, nilai, upsensi } = row;

        // ✅ Validasi struktur dan tipe data
        if (
          !studentId || !mapelId ||
          isNaN(parseInt(nilai)) ||
          isNaN(parseInt(upsensi))
        ) {
          errors.push({ row: index + 2, error: 'Format data tidak valid' }); // baris Excel biasanya mulai dari 2
          continue;
        }

        // ✅ Cek apakah student dan mapel ada
        const [student, mapel] = await Promise.all([
          tx.student.findUnique({ where: { id: studentId } }),
          tx.mapel.findUnique({ where: { id: mapelId } }),
        ]);

        if (!student || !mapel) {
          errors.push({ row: index + 2, error: 'Student atau mapel tidak ditemukan' });
          continue;
        }

        // ✅ Cek apakah data nilai sudah ada
        const existing = await tx.nilai.findUnique({
          where: { studentId_mapelId: { studentId, mapelId } },
        });

        let entry;

        if (existing) {
          // Update
          entry = await tx.nilai.update({
            where: { studentId_mapelId: { studentId, mapelId } },
            data: {
              nilai: parseInt(nilai),
              upsensi: parseInt(upsensi),
            },
          });
        } else {
          // Create baru
          entry = await tx.nilai.create({
            data: {
              studentId,
              mapelId,
              nilai: parseInt(nilai),
              upsensi: parseInt(upsensi),
            },
          });
        }

        results.push(entry);
      }
    });

    res.status(200).json({
      message: 'Import selesai',
      total: results.length,
      success: results,
      errors,
    });
  } catch (error) {
    console.error('Import error:', error);
    res.status(500).json({ message: 'Gagal mengimport nilai', error: error.message });
  }
};
