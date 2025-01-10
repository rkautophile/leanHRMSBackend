const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const employeeRoutes = require('./routes/employeeRoutes');
const app = express();

connectDB();

app.use(express.json());
app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
