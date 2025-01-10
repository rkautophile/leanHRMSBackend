const express = require('express');
const { addEmployee, getEmployees } = require('../controllers/employeeController');
const router = express.Router();

router.post('/add', addEmployee);
router.get('/', getEmployees);

module.exports = router;
