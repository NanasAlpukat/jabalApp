// middlewares/corsConfig.js
import cors from 'cors';

const corsOptions = {
  origin: 'http://localhost:3000', // Ganti sesuai domain frontend
  credentials: true, // Izinkan kirim cookie dari frontend
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
