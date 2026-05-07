import ApplicationError from "../middleware/applicationError.middleware.js";
import EmployeeRepository from "./employee.repository.js";

export default class EmployeeController{
    constructor(){
        this.employeeRepository = new EmployeeRepository;
    }
    //create new employee
    async addEmployee(req,res){
        try{
            const{name,email,department,salary,status}=req.body;
            const employeeData={name,email,department,salary,status};
            const createNewEmployee = await this.employeeRepository.createEmployee(employeeData);
            if(!createNewEmployee)return res.status(400).send("Adding new employee failed")
            return res.status(201).send(createNewEmployee)
        } catch (err) {
            console.log(err);
            throw new ApplicationError(500, "Something went wrong");
        }
    }

    // get employee details using id
    async getEmployeeDetailsById(req, res) {
        try {
            console.log(req.params);
            const employeeDetails = await this.employeeRepository.getDetailsById(req.params.id);
            if (!employeeDetails) return res.status(400).send("employee details not found");
            return res.status(200).send(employeeDetails);
        } catch (err) {
            console.log(err);
            throw new ApplicationError(500, "Something went wrong");
        }
    }
        async getAllActiveEmployeeDetails(req, res) {
        try {
            const activeEmployeeDetails = await this.employeeRepository.allActiveEmployeeDetails();
            if (!activeEmployeeDetails) return res.status(400).send("active employees not found");
            return res.status(200).send(activeEmployeeDetails);
        } catch (err) {
            console.log(err);
            throw new ApplicationError(500, "Something went wrong");
        }
    }
            async updateEmployeeDetails(req, res) {
        try {
            const updatedEmployeeDetails = await this.employeeRepository.updateEmployeeDetails(req.params.id,req.body)
            if (!updatedEmployeeDetails) return res.status(400).send("cannot update employee details");
            return res.status(200).send(updatedEmployeeDetails);
        } catch (err) {
            console.log(err);
            throw new ApplicationError(500, "Something went wrong");
        }
    }
    async softDelete(req,res){
        try{
        const inactiveEmployee= await this.employeeRepository.intoInactiveEmployee(req.params.id);
        if(!inactiveEmployee)return res.status(400).send("Inactivation failed");
        return res.status(200).send("Employee inactivated")
        }catch(err){
            console.log(err)
            throw new ApplicationError(500, "Something went wrong");
        }     
    }
}
