import mongoose from "mongoose";
 
const productSchema = mongoose.Schema({
    brand:{ 
        type:String,
        require:true
    },
    price:{ 
        type:Number,
        require:true
    }, 
    cutprice:{
        type:Number,
        require:true 
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
})

export default mongoose.model("Product",productSchema)