const express = require('express');
const router = express.Router();
const { createEmployee, getEmployees } = require('../controllers/employeeController');

router.post('/employees', createEmployee);
router.get('/employees', getEmployees);

module.exports = router;
