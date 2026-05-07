import mongoose from "mongoose";

const EmployeeSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    department:{type:String,required:true},
    salary:{type:String,required:true},
    status:{type:String,enum:["INACTIVE","ACTIVE"],default:"ACTIVE"},
})
export const EmployeeModel= mongoose.model("Employees",EmployeeSchema)