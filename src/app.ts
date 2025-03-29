import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import { connectDB } from './config/db';
import bedsRoutes from './routes/bedsRoutes';
import userRoutes from './routes/userRoutes';
import cors from 'cors';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// User Routes
app.use('/api', userRoutes);
app.use('/api/beds', bedsRoutes);

// Global error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
