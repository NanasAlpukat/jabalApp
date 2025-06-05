import { prisma } from '../config/prisma.js';

export const createDummyData = async (req, res) => {
  try {
    // === 1. Data dummy Jurusan ===
    const jurusanData = [
      { nama: 'Teknik Mesin', kode: '001' },
      { nama: 'Teknik Komputer & Jaringan', kode: '002' },
      { nama: 'Accounting', kode: '003' },
    ];

    const jurusans = await prisma.jurusan.createMany({ data: jurusanData });

    // === 2. Data dummy Kelas ===
    const kelasData = [
      { kode: 'K10' },
      { kode: 'K11' },
      { kode: 'K12' },
    ];

    const kelas = await prisma.kelas.createMany({ data: kelasData });

    // === 3. Data dummy Mapel ===
    const mapelData = [
      { nama: 'Matematika', kode: 'MATH' },
      { nama: 'Bahasa Indonesia', kode: 'BIND' },
      { nama: 'Fisika', kode: 'FIS' },
      { nama: 'Ekonomi', kode: 'EKO' },
      { nama: 'Bahasa Inggris', kode: 'BING' },
    ];

    const mapel = await prisma.mapel.createMany({ data: mapelData });

    res.status(201).json({ success: true, message: 'Dummy data berhasil ditambahkan ke Jurusan, Kelas, dan Mapel' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
