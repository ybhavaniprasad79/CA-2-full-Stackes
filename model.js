const mongoose=require("mongoose")


const restaurantSchema=new mongoose.Schema({
    name:{
        type:String,
        requried:true
    },
    location:{
        type:String,
        requried:true
    },
    cuisine:{
        type:String,
        requried:true
    },
    rating:{
        type:Number
    },
    menu:[{
        name:{
            type:"String",
            requried:true
        },
        description:{
            type:"String",
        },
        price:{
            type:"String",
            requried:true
        }
    }]
})




const restaurantModel=mongoose.model("restaurantModel",restaurantSchema)


module.exports={restaurantModel}