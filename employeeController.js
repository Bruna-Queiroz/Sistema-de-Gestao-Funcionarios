const Employee = require('../models/employeeModel');

exports.createEmployee = async (req, res) => {
    const { name, position } = req.body;

    try {
        const employee = new Employee({ name, position });
        await employee.save();
        res.status(201).json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

