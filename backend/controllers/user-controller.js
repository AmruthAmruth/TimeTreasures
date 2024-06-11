
import User from '../model/UserModel.js';
import bcrypt from 'bcrypt'

export const userSignup= async(req,res)=>{
    const {name,email ,password}=req.body;
    const hashPassword=bcrypt.hashSync(password,10)
    let user;
    try{
        user =  new User({
            name,
            email,
            password:hashPassword
        }) 
      user=await user.save()
}catch(err){
    return console.log(err);
}
if(!user){
    return res.json({message:"Unexpected Error"})
}else{
    return res.json({user})
}
}


export const userLogin= async(req,res)=>{
    const {email ,password}=req.body;
    
    let exsitingUser;
    try{
        exsitingUser = await User.findOne({email})
    }catch(err){
        return console.log(err);
    }
    if(!exsitingUser){
        return res.json({message:"User Not Found."})
    }else{
        const isPasswordCorrect= bcrypt.compareSync(password,exsitingUser.password)
        if(!isPasswordCorrect){
            return res.json({message:"Incorrect Password."})
        }else{
            return res.json({message:"Login Successfully.!",exsitingUser})
        }
    }
}

export const getAlluser=async(req,res)=>{
    let user ;
    try{
        user = await User.find({})
    }catch(err){
        return console.log(err);
    }
    if(!user){
        return res.json({message:"Unexpected Error"})
    }else{
        return res.json({user})
    }
}

export const getUserById=async(req,res)=>{
        const id = req.params.id;
        let user
        try{
            user =await User.findById(id)
        }catch(err){
            return console.log(err);
        }
        if(!user){
            return res.json({message:"Unexpected Error"})
        }else{
            return res.json({user})
        }
}


export const deleteUserById=async(req,res)=>{
    const id = req.params.id;
    let user
    try{
        user =await User.findByIdAndDelete(id)
    }catch(err){
        return console.log(err);
    }
    if(!user){
        return res.json({message:"Unexpected Error"})
    }else{
        return res.json({message:"User Account Deleted"})
    }
}