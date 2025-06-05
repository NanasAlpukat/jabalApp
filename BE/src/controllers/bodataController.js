import { prisma } from '../config/prisma.js';
import bcrypt from 'bcrypt';

export const createBiodata = async (req, res) => {
  try {
    const { email, address, phone, birthDate, penghasilanOrtu } = req.body;

    // Cari user dan student-nya
    const user = await prisma.user.findUnique({
      where: { email },
      include: { student: true },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Cek apakah biodata sudah ada
    const existingBiodata = await prisma.biodata.findUnique({
      where: { userId: user.id }
    });

    if (existingBiodata) {
      return res.status(400).json({ error: 'Biodata already exists for this user' });
    }

    // Jalankan semua proses dalam satu transaksi
    const result = await prisma.$transaction(async (tx) => {
      // Buat biodata
      const biodata = await tx.biodata.create({
        data: {
          userId: user.id,
          address,
          phone,
          birthDate: new Date(birthDate),
        },
      });

      // Update penghasilan ortu jika student ada
      if (user.student) {
        await tx.student.update({
          where: { userId: user.id },
          data: {
            penhasilanOrtu: penghasilanOrtu ? parseInt(penghasilanOrtu) : null
          }
        });
      }

      return biodata;
    });

    res.status(201).json({
      message: 'Biodata & penghasilan berhasil disimpan',
      biodata: result,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal membuat biodata', detail: error.message });
  }
};

export const updateBiodataDanStudent = async (req, res) => {
  try {
    const {
      studentId,
      name,
      phone,
      address,
      birthDate,
      jurusanId,
      kelasId,
      penghasilanOrtu,
      tahunMasuk
    } = req.body;
    // res.json({penghasilanOrtu})
    // Cari student berdasarkan id
    const student = await prisma.student.findUnique({
      where: { id: studentId }
    });

    if (!student) return res.status(404).json({ error: 'Student not found' });

    // Ambil user dan relasinya
    const user = await prisma.user.findUnique({
      where: { id: student.userId },
      include: {
        biodata: true,
        student: true
      }
    });

    if (!user) return res.status(404).json({ error: 'User not found' });

    const result = await prisma.$transaction(async (tx) => {
      // Update user name
      const updatedUser = await tx.user.update({
        where: { id: user.id },
        data: { name }
      });

      // Upsert biodata (update jika ada, create jika tidak)
      const updatedBiodata = await tx.biodata.upsert({
        where: { userId: user.id },
        update: {
          phone,
          address,
          birthDate: new Date(birthDate)
        },
        create: {
          userId: user.id,
          phone,
          address,
          birthDate: new Date(birthDate)
        }
      });

      // Update student
      const updatedStudent = await tx.student.update({
        where: { id: studentId },
        data: {
          jurusanId,
          kelasId,
          penhasilanOrtu: penghasilanOrtu ? parseInt(penghasilanOrtu) : null,
          tahunMasuk: tahunMasuk ? parseInt(tahunMasuk) : null
        }
      });

      return { updatedUser, updatedBiodata, updatedStudent };
    });

    res.status(200).json({ message: 'Data berhasil diupdate', data: result });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal update data', detail: error.message });
  }
};





export const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { name, email, password: hashed, role },
  });

  res.status(201).json(user);
};




export const getAllStudentBio = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;
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
        user: {
          include: {
            biodata: true,
          }
        },
        kelas: true,
        jurusan: true,
        nilai: true,
      }
    });

    const allResults = allStudents.map(student => ({
      id: student.id,
      nis: student.nis,
      nama: student.user.name,
      email: student.user.email,
      penghasilanOrangTua: student.penhasilanOrtu,
      tahun: student.tahunMasuk,
      kelas: {
        kelasId: student.kelas?.id || '-',
        kelasKode: student.kelas?.kode || '-',
      },
      jurusan: {
        jurusanId: student.jurusan?.id || '-',
        jurusanKode: student.jurusan?.kode || '-',
        nama: student.jurusan?.nama || '-',
      },
      biodata: {
        address: student.user.biodata?.address || '-',
        phone: student.user.biodata?.phone || '-',
        birthDate: student.user.biodata?.birthDate
        ? student.user.biodata.birthDate.toISOString().split('T')[0]
        : '-'
      }
    }));

    const paginatedResults = allResults.slice(skip, skip + limit);

    res.json({
      message: 'Data biodata siswa berhasil diambil',
      currentPage: page,
      totalPages: Math.ceil(allResults.length / limit),
      totalData: allResults.length,
      data: paginatedResults
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal mengambil data biodata', detail: error.message });
  }
};

