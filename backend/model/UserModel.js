import mongoose from "mongoose";



 
const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true 
    },
    cart: {
        type: [String],
        default: []
    },
    wishlist: {
        type: [String], 
        default: [] 
    }
    ,
    ordersummary: [{
        productId:{
            type:String,
        },
        price:{
            type:Number
        },
        date:{
            type: Date,
            default: Date.now
        },
        location:{
            type:String
        },
        phone:{
            type:Number
        }
        
    } 
    ]
})

export default mongoose.model("User",userSchema)