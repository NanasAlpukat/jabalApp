// src/index.js (atau src/app.js)

import express from 'express';
import cookieParser from 'cookie-parser';
import authRoute from './routers/authRoute.js';
import adminRoute from './routers/adminRoute.js';
// import studentRoute from './routers/studentRoute.js';
import globalRoute from './routers/globalRoute.js';
import teacherRoute from './routers/teacherRoute.js';
import dummyRoute from './routers/dummyRoute.js';
import corsMiddleware from './middlewares/corsConfig.js';

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/global', globalRoute);
app.use('/api/teacher', teacherRoute);
// app.use('/api/student', studentRoute);
app.use('/api/admin', adminRoute);
app.use('/api/dummy', dummyRoute);

export default app;
