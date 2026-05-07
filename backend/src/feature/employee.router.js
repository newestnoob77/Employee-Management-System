import express from "express";
import EmployeeController from "./employee.controller.js";
const employeeController = new EmployeeController()
export const employeeManagementRouter = express.Router()
employeeManagementRouter.post("/addEmployee",(req,res,next)=>{
employeeController.addEmployee(req,res,next)
})
employeeManagementRouter.get("/getEmployeeDetailsById/:id",(req,res,next)=>{
employeeController.getEmployeeDetailsById(req,res,next)
})
employeeManagementRouter.get("/allActiveEmployeeDetails",(req,res,next)=>{
employeeController.getAllActiveEmployeeDetails(req,res,next)
})
employeeManagementRouter.put("/updateEmployeeDetails/:id",(req,res,next)=>{
employeeController.updateEmployeeDetails(req,res,next)
})
employeeManagementRouter.put("/inactivateEmployee/:id",(req,res,next)=>{
employeeController.softDelete(req,res,next)
})