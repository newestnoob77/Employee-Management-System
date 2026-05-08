import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import ApplicationError from "./src/middleware/applicationError.middleware.js";
import { employeeManagementRouter } from "./src/feature/employee.router.js";
import { connectMongoose } from "./src/config/config.js";
const server = express()
server.use(express.json())
server.use("/api/employee",employeeManagementRouter)
server.use((err,req,res,next)=>{
    if(err instanceof ApplicationError){
        return res.status(err.code || 500).send(err.message);
    }
    if (err instanceof mongoose.Error.ValidationError){
        return res.status(400).send(err.message)
    }
    return res.status(500).send("Internal Server error")
})
server.listen(process.env.PORT || 3000,()=>{
    console.log(`Server is listening ${process.env.PORT}`)
    connectMongoose()
})