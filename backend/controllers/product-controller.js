 import mongoose from "mongoose";
import ProductModel from "../model/ProductModel.js";
import UserModel from "../model/UserModel.js";
 

 export const addProduct = (req,res)=>{
  const {brand,price,cutprice,description}=req.body
  let newProduct
  try{
   newProduct = new ProductModel({
    brand,
    price,
    cutprice,
    description
  })
  if(req.file){
    newProduct.image = req.file.path

  }
 newProduct = newProduct.save()

  }catch(err){
    return console.log(err);
  }

  if(newProduct){
    return res.json({message:"Product Uploded Successfully",newProduct})
  }else{
    return res.josn({message:"Uploding error"})
  }

 }

 export const getAllProduct= async(req,res)=>{
  let product;
  try{
    product = await ProductModel.find()
  }catch(err){
    return console.log(err);
  }
  if(product){
    return res.json({product})
  }else{
    return res.json({message:"Unexpected Error"})
  }
 }


 export const getProductById= async (req,res)=>{
  const id = req.params.id
  let product;
  try{
    product=await ProductModel.findById(id)
  }catch(err){
    return console.log(err);
  }
  if(product){
    return res.json({product})
  }else{
    return res.json({message:"Unexpected Error"})
  }
 }



 export const deleteProduct= async(req,res)=>{
  const id = req.params.id
  let product;
  try{
    product = await ProductModel.findByIdAndDelete(id)
  }catch(err){
    return console.log(err);
  }
  if(product){
    return res.json({message:"Deleted Successfully"})
  }else{
    return res.json({message:"Unexpected Error"})
  }
 }



 export const updateProduct = async (req, res) => {
  const { brand, price, cutprice, description } = req.body;
  const id = req.params.id;
  const image = req.file.path;

  try {
      const product = await ProductModel.findOneAndUpdate(
          { _id: id }, 
          {
              $set: {
                  brand,
                  price,
                  cutprice,
                  description,
                  image
              }
          },
          { new: true }  
      );

      if (product) {
          return res.json({ product, message: "Updated Successfully" });
      } else {
          return res.json({ message: "Product not found" });
      }
  } catch (err) {
      return console.log(err);
  } 
};




export const addToCart = async (req, res) => {
  const { productId, userId } = req.body;

  
  if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: 'Invalid user ID or product ID' });
  }
  let cart;
  try {
    const product = await UserModel.findById(userId).populate();
    const existingProduct=product.cart.includes(productId)
    if(existingProduct){
      return res.json({message:"The Product is Already Existing"})
    }else{  
  cart=  await UserModel.findByIdAndUpdate(
        userId,
        { $push: { cart: productId } },
    );
    }
} catch (error) {
    console.error('Error adding item to array:', error);
}
if(cart){
  return res.json({message:"ProductAdded Successfully"})
}
};

export const removeFromcart=async(req,res)=>{
      const {userId,productId}=req.body

      if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ message: 'Invalid user ID or product ID' });
    }
      let cart;

      try{
        const product = await UserModel.findById(userId).populate();
        const existingProduct=product.cart.includes(productId)
          if(existingProduct){
            cart = await UserModel.findByIdAndUpdate(
              userId,
              { $pull: { cart: productId } },
          );
          
          }else{
            return res.json({message:"The Product is not existing in the Cart"})
          }

      }catch(err){
        return console.log(err);
      }
      if(cart){
        return res.json({message:"Product Removed From Cart"})
      }
     
}



export const productOrder = async (req, res) => {
  const { productId, price, date, location, phone, userId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ message: 'Invalid user ID or product ID' });
  }

  let user;
  let order;
  try {
    user = await UserModel.findById(userId);
    if (user) {
      order = await UserModel.findByIdAndUpdate(
        userId,
        {
          $push: {
            ordersummary: { productId, price, date, location, phone }
          }
        },
        { new: true }
      );
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Server error' });
  }

  if (order) {
    return res.json({ message: "Order Successfully Completed" });
  } else {
    return res.json({ message: "Unexpected Error" });
  }
};
