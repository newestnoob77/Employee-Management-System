import { EmployeeModel } from "./employee.model.js";
export default class EmployeeRepository {
  async createEmployee(employeeData) {
    const newEmployee = new EmployeeModel(employeeData);
    return await newEmployee.save();
  }

  async getDetailsById(id) {
    return await EmployeeModel.findById(id);
  }
  async allActiveEmployeeDetails(){
    const allEmployeeDetails = await EmployeeModel.find()
    return Object.values(allEmployeeDetails).filter(employee=>employee.status!="INACTIVE")
  }
  async updateEmployeeDetails(id,updateDetails){
    return await EmployeeModel.findByIdAndUpdate(id, updateDetails, { returnDocument: "after" });
  }
  async intoInactiveEmployee(id){
    const employee= await EmployeeModel.findById(id);
    return await EmployeeModel.findByIdAndUpdate(id,{status:"INACTIVE"},{returnDocument:"after"}) 
  }
}
