const axios = require('axios');


const { ResponseHandler } = require('../../handlers');
const { ERROR, SUCCESS } = ResponseHandler;

module.exports = {

  saveJob: async (req, res) => {
    console.log("🚀 ~ saveJob: ~ req:", req.body)
    try {
      const result = await axios({
        method: 'post',
        url: 'http://localhost:5172/api/Job/SaveCompletedJob',
        data: req.body
      });
      console.log("🚀 ~ saveJob: ~ res:", result.data)
      SUCCESS(res, 201, result.data);
    } catch (error) {
      ERROR(res, error);
    }
  },

  getAllJobs: async (req, res) => {
    try {
      const result = await axios({
        method: 'get',
        url: 'http://localhost:5172/api/Job/GetAllCompletedJob',
      });
      console.log("🚀 ~ getAllJobs: ~ res:", result.data)
      res.status(200).json(result.data);
    } catch (error) {
      ERROR(res, error);
    }
  }

  // getEmployees: async (req, res) => {
  //   try {
  //     const response = await Service.getEmployees();
  //     SUCCESS(res, 200, response);
  //   } catch (error) {
  //     ERROR(res, error);
  //   }
  // },

  // createEmployee: async (req, res) => {
  //   console.log("🚀 ~ createEmployee: ~ req:", req)
  //   try {
  //     const employeeData = req.body;
  //     const response = await Service.createEmployee(employeeData);
  //     SUCCESS(res, 201, response);
  //   } catch (error) {
  //     ERROR(res, error);
  //   }
  // },

  // getEmployeeByEmployeeId: async (req, res) => {
  //   try {
  //     const employeeId = req.params.employeeId
  //     const response = await Service.getEmployeeByEmployeeId(employeeId);
  //     SUCCESS(res, 200, response);
  //   } catch (error) {
  //     ERROR(res, error);
  //   }
  // },

  // getEmployeeByNICNumber: async (req, res) => {
  //   try {
  //     const nicNumber = req.params.nicNumber
  //     const response = await Service.getEmployeeByNICNumber(nicNumber);
  //     SUCCESS(res, 200, response);
  //   } catch (error) {
  //     ERROR(res, error);
  //   }
  // }



}