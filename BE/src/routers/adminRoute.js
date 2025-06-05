
import express from 'express';
import {create_users_bulk, deleteAccount,createJurusan , createKelas,createMapel} from '../controllers/adminController.js';
import auth  from '../middlewares/authMiddleware.js';


import roles from '../middlewares/roleMiddleware.js';
import { generatePenilaianAndCalculateSAW, getAllHasilSAW} from '../controllers/sawController.js';

const router = express.Router();

router.post('/create-users', auth(), roles('admin'), create_users_bulk);
router.delete('/user/:id', auth(), roles('admin'), deleteAccount);
router.post('/create-jurusan',auth(), roles('admin'), createJurusan);
router.post('/create-mapel',auth(), roles('admin'), createMapel);
router.post('/create-kelas',auth(), roles('admin'), createKelas);
router.get('/calculate-saw', auth(), roles('admin'),generatePenilaianAndCalculateSAW);
router.get("/hasil-saw", auth(), roles('admin'),getAllHasilSAW);
export default router;
