import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import cors from 'cors';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import yourRoutes from './routes/yourRoute.js

connectDB();

const app = express();
//add your urls for local development, and production
const allowedOrigins = [
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());  

//add your api routes here
app.use('/api/yourRoute', yourRoutes);

app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File too large. Maximum size is 5MB.'
      });
    }
  }
  
  res.status(500).json({
    success: false,
    message: error.message || 'Something went wrong!'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  startMeetingCleanupJob();
});
