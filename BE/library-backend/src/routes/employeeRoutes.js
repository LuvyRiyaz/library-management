const express = require('express')
const router = express.Router();
const employeeControllers = require('../controllers/employeeControllers')

router.get('/getemployee',employeeControllers.getEmployeeDetails);
router.post ('/addemployee', employeeControllers.addEmployeeDetails)

module.exports= router;