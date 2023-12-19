import express from 'express';
import userRoutes from './routes/user.routes';
import errorHandler from './errors/error-handler';
import rateLimit from 'express-rate-limit';
import connectDB from './config/db';

const app = express();
const port = 3000;

// Database Connection
connectDB();

// Rate Limiting
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

// Middlewares
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
