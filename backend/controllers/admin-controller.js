import AdminModel from "../model/AdminModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const adminSignup=async(req,res)=>{
    const {name, email,password}=req.body
    let existingAdmin;
    try{
        existingAdmin=await AdminModel.findOne({email})
    }catch(err){
        return console.log(err);
    }
    if(existingAdmin){
        return res.json({messagre:"Admin Already Existing , Please Login"})
    }else{
        let admin;
        const hashPassword=bcrypt.hashSync(password,10)
        try{
            admin= await new AdminModel({
                name,
                email,
                password:hashPassword
            })
            admin = await admin.save()
        }catch(err){
            return console.log(err);
        }
        if(!admin){
            return res.json({message:"Unexpected Error"})
        }else{
            return res.json({admin})
        }
    }
}


export const adminLogin=async(req,res)=>{
    const {email,password}=req.body
    let existingAdmin;
    try{
        existingAdmin = await AdminModel.findOne({email})
    }catch(err){
        return console.log(err);
    }
    if(!existingAdmin){
        return res.json({message:"Admin Not Found"})
    }else{
       let isPasswordCorrect=bcrypt.compareSync(password,existingAdmin.password)

       
       if (isPasswordCorrect) {
        const adminData = existingAdmin.toObject ? existingAdmin.toObject() : { ...existingAdmin };   
        const token = jwt.sign(adminData, process.env.SECRET_KEY, { expiresIn: "7d" });
        return res.json({ message: "Admin Authentication Completed", token });
    } else {
        return res.json({ message: "Incorrect Password" });
    }
    
    }
}