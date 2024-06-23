const express = require('express');
const router = express.Router();

const TestController = require('./controller');

router.route('/SaveCompletedJob')
    .post(TestController.saveJob);

router.route('/GetAllCompletedJob')
    .get(TestController.getAllJobs)

// router.route('/:employeeId')
//     .get(EmployeeController.getEmployeeByEmployeeId);

// router.route('/:nicNumber')
//     .get(EmployeeController.getEmployeeByEmployeeId);

module.exports = router;
