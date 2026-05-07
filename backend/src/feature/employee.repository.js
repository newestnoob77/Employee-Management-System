import { EmployeeModel } from "./employee.model.js";
export default class EmployeeRepository {
  //creating new employee 
  async createEmployee(employeeData) {
    const newEmployee = new EmployeeModel(employeeData);
    return await newEmployee.save();
  }
//getting details by id 
  async getDetailsById(id) {
    return await EmployeeModel.findById(id);
  }
  //getting all active  employee details
  async allActiveEmployeeDetails(){
    const allEmployeeDetails = await EmployeeModel.find()
    return Object.values(allEmployeeDetails).filter(employee=>employee.status!="INACTIVE")
  }
  //update employee details by id 
  async updateEmployeeDetails(id,updateDetails){
    return await EmployeeModel.findByIdAndUpdate(id, updateDetails, { returnDocument: "after" });
  }
  // inactive users by id 
  async intoInactiveEmployee(id){
    const employee= await EmployeeModel.findById(id);
    return await EmployeeModel.findByIdAndUpdate(id,{status:"INACTIVE"},{returnDocument:"after"}) 
  }
}
