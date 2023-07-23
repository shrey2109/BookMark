const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.ObjectId,
        // to link product from category
        ref:'Category',
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    photo:{
        // if cloud then String, butt here we will store it on mongodb
        data:Buffer,
        contentType:String
    },
    shipping:{
        type:Boolean,
    }
    //when product is created then it is added
}, {timestamps:true})

module.exports = mongoose.model("Products", productSchema);
