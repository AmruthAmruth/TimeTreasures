import express from "express";
import { deleteUserById, getAlluser, getUserById, userLogin, userSignup } from "../controllers/user-controller.js";
import { verifyToken } from "../middleware/middleware.js";


const userRouter = express.Router()  

userRouter.post('/',userSignup) 
userRouter.post('/login',userLogin) 
userRouter.get('/',getAlluser) 
userRouter.get('/:id',getUserById)
userRouter.delete('/:id',deleteUserById)
export default userRouter  