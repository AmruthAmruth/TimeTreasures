import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

const PORT = process.env.PORT | 5000

mongoose.connect(`mongodb+srv://amruthshyju:${process.env.MONGODB_PASSWORD}@cluster0.czrr6za.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(()=>{
    app.listen(PORT,()=>{
        console.log("Connected to MongoDB and Runing on the Port 5000");
    })
}).catch((err)=>{
    console.log(err);
})