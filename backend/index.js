const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');
require('dotenv').config();
const cors = require('cors');
//hi
const app = express();
// const corsOptions = {
//     origin: 'https://test-sigma-eosin-14.vercel.app/', 
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials:true,
//     // allowedHeaders: ['Content-Type','Authorization','multipart/form-data'],
//     // optionsSuccessStatus: 200, 
//   };
  
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use('/uploads', express.static('uploads')); 
app.use('/api/v1', userRoutes);
app.use((err, req, res, next) => {
    console.error(err); // Log the error
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
