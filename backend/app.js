import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/user-routes.js';
import adminRouter from './routes/admin-routes.js';
import productRouter from './routes/product-routes.js';

const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT | 5000

app.use(express.urlencoded({ extended: true }));

app.use('/user',userRouter)
app.use('/admin',adminRouter)
app.use('/product',productRouter)



mongoose.connect(`mongodb+srv://amruthshyju:${process.env.MONGODB_PASSWORD}@cluster0.czrr6za.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(()=>{
    app.listen(PORT,()=>{
        console.log("Connected to MongoDB and Runing on the Port 5000");
    })
}).catch((err)=>{
    console.log(err);
})