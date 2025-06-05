// teacherRoute.js
import express from 'express';
import multer from 'multer'
import auth  from '../middlewares/authMiddleware.js';
import roles from '../middlewares/roleMiddleware.js';
import {  createKriteria, createPenilaian} from '../controllers/sawController.js';
import { createNilai, deleteNilai, getAllJurusan, getAllKelas, getAllMapel, getAllNilaiMapel, getAllNilaiSummary, getAllStudents, importNilaiExcel, updateNilai } from '../controllers/teacherController.js';
import { nilaiValidator } from '../validations/nilaiValidation.js';
import validationHandler from '../middlewares/validationHandler.js';
const router = express.Router();

// router.post('/views-allNilai',auth(), roles('teacher'), viewsNilai);
const storage = multer.memoryStorage()
const upload = multer({ storage })

router.post('/import-excel', upload.single('file'),auth(), roles('teacher') ,importNilaiExcel)

router.post('/create-nilai',auth(), roles('teacher'), nilaiValidator, validationHandler, createNilai);
router.put('/update-nilai', auth(), roles('teacher'), nilaiValidator, validationHandler, updateNilai); 
router.delete('/delete-nilai/:id', auth(), roles('teacher'), deleteNilai)
// POST: Tambah kriteria baru
router.post('/kriteria',auth(), roles('teacher') ,createKriteria);

// POST: Tambah penilaian siswa untuk kriteria tertentu
router.post('/penilaian',auth(), roles('teacher') ,createPenilaian);

// POST: Simpan hasil skor SAW per siswa
// router.get('/calculate-saw', auth(), roles('teacher'),calculateSAW);

router.get('/nilai/summary', auth(),getAllNilaiSummary);
router.get('/nilai/mapel', auth(),getAllNilaiMapel);

router.get('/student', getAllStudents);
router.get('/mapel', getAllMapel);
router.get('/kelas', getAllKelas);
router.get('/jurusan', getAllJurusan);


export default router;
