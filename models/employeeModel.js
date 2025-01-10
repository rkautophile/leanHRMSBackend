const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    role: { type: String, default: 'employee' },
    leaveBalance: { type: Number, default: 30 },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
