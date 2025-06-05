
import express from 'express';
import {createBiodata, getAllStudentBio, register, updateBiodataDanStudent} from '../controllers/bodataController.js';
import auth  from '../middlewares/authMiddleware.js';


import { getAllStudents } from '../controllers/adminController.js';

const router = express.Router();

router.post('/register', register);
router.post('/create/biodata', auth(), createBiodata);
router.put('/update/biodata', auth(), updateBiodataDanStudent);
router.get('/all/student-bio', auth() ,getAllStudentBio);

router.get('/students', auth(),getAllStudents);
export default router;
