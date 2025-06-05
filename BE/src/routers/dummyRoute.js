// routes/dummyRoute.js
import express from 'express';
import { createDummyData } from '../controllers/dummyController.js';

const router = express.Router();
router.get('/create-dummy', createDummyData);
export default router;
