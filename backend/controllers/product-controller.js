 import ProductModel from "../model/ProductModel.js";
 

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
 