import express from "express";
import EmployeeController from "./employee.controller.js";
const employeeController = new EmployeeController()
export const employeeManagementRouter = express.Router()

//Router for adding new employee
employeeManagementRouter.post("/addEmployee",(req,res,next)=>{
employeeController.addEmployee(req,res,next)
})
//Router for retriving employee details by id
employeeManagementRouter.get("/getEmployeeDetailsById/:id",(req,res,next)=>{
employeeController.getEmployeeDetailsById(req,res,next)
})
//Router for retriving all active users
employeeManagementRouter.get("/allActiveEmployeeDetails",(req,res,next)=>{
employeeController.getAllActiveEmployeeDetails(req,res,next)
})
//Router for updating employee details using id 
employeeManagementRouter.put("/updateEmployeeDetails/:id",(req,res,next)=>{
employeeController.updateEmployeeDetails(req,res,next)
})
//Router for inactivaing employee using id
employeeManagementRouter.put("/inactivateEmployee/:id",(req,res,next)=>{
employeeController.softDelete(req,res,next)
})