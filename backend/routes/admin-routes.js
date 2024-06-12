import express from 'express'
import { adminLogin, adminSignup } from '../controllers/admin-controller.js'


const adminRouter = express.Router()  


adminRouter.post('/',adminSignup)
adminRouter.post('/login',adminLogin)
export default adminRouter