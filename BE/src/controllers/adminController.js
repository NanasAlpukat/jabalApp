import { prisma } from '../config/prisma.js';
import bcrypt from 'bcrypt';

export const create_users_bulk = async (req, res) => {
  const users = Array.isArray(req.body) ? req.body : [req.body];

  try {
    const result = await prisma.$transaction(async (tx) => {
      const results = [];

      for (const userData of users) {
        const {
          name,
          email,
          password,
          role,
          kodeJurusan,
          kodeKelas,
          tahunMasuk,
          kodeMapel,
        } = userData;

        if (
          role === 'student' &&
          (!kodeJurusan || !kodeKelas || !tahunMasuk)
        ) {
          throw new Error('Student requires kodeJurusan, kodeKelas, and tahunMasuk');
        }

        if (role === 'teacher' && (!kodeMapel || !tahunMasuk)) {
          throw new Error('Teacher requires kodeMapel and tahunMasuk');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await tx.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
            role,
          },
        });

        if (role === 'student') {
          const jurusan = await tx.jurusan.findUnique({
            where: { kode: kodeJurusan },
          });

          if (!jurusan) {
            throw new Error(`Jurusan ${kodeJurusan} tidak ditemukan`);
          }

          const kelas = await tx.kelas.findUnique({
            where: { kode: kodeKelas },
          });

          if (!kelas) {
            throw new Error(`Kelas ${kodeKelas} tidak ditemukan`);
          }

          const totalStudent = await tx.student.count();
          const newNIS = parseInt(
            `${tahunMasuk}${kodeJurusan}${(totalStudent + 1).toString().padStart(3, '0')}`
          );

          await tx.student.create({
            data: {
              userId: user.id,
              jurusanId: jurusan.id,
              kelasId: kelas.id,
              tahunMasuk: parseInt(tahunMasuk),
              nis: newNIS,
            },
          });

          results.push({ user, newNIS });
        } else if (role === 'teacher') {
          const totalTeacher = await tx.teacher.count();
          const newNIK = parseInt(
            `${tahunMasuk}${(totalTeacher + 1).toString().padStart(3, '0')}`
          );

          await tx.teacher.create({
            data: {
              userId: user.id,
              kodeMapel,
              nik: newNIK,
            },
          });

          results.push({ user, newNIK });
        } else {
          results.push({ user });
        }
      }

      return results;
    });

    res.status(201).json({
      message: 'Users created successfully',
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'Failed to create users' });
  }
};



export const deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    await prisma.user.delete({ where: { id } });
    res.json({ message: 'Account successfully deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete account', error: err.message });
  }
};


export const createJurusan = async (req, res) => {
  try {
    const { nama, kode } = req.body;

    // Validasi input
    if (!nama || !kode) {
      return res.status(400).json({ error: 'Nama dan kode jurusan wajib diisi' });
    }

    const jurusan = await prisma.jurusan.create({
      data: { nama, kode },
    });

    res.status(201).json(jurusan);
  } catch (error) {
    res.status(500).json({ error: 'Gagal membuat jurusan', detail: error.message });
  }
};


// Create Mapel
export const createMapel = async (req, res) => {
  try {
    const { nama, kode } = req.body;
    const mapel = await prisma.mapel.create({
      data: { nama, kode },
    });
    res.status(201).json(mapel);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create mapel' });
  }
};


// Create Kelas
export const createKelas = async (req, res) => {
  try {
    const { kode } = req.body; // kode = "K10", "K11", dll sesuai enum
    const kelas = await prisma.kelas.create({
      data: { kode },
    });
    res.status(201).json(kelas);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create kelas' });
  }
};

export const getAllStudents = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  try {
    const totalStudents = await prisma.student.count();
    const students = await prisma.student.findMany({
      skip,
      take: limit,
      include: {
        user: { select: { name: true, email: true } },
        jurusan: { select: { nama: true } },
        kelas: { select: { kode: true } },
      },
    });

    const result = students.map(student => ({
      id: student.id,
      name: student.user.name,
      email: student.user.email,
      jurusan: student.jurusan.nama,
      kelas: student.kelas.kode,
    }));

    res.status(200).json({
      students: result,
      page,
      totalPages: Math.ceil(totalStudents / limit),
      totalItems: totalStudents,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
