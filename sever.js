const express=require("express")
const mongoose=require("mongoose")

const {restaurantModel}=require("./model")
require("dotenv").config()
const app=express()
app.use(express.json())
const port=process.env.PORT

mongoose.connect(process.env.mongodb)
.then(()=>{console.log("your are connected to the database")})
.catch((error)=>{console.error(error)})


app.post("/menu",async(req,res)=>{

    try {
    const menu=new restaurantModel(req.body)
    await menu.save()
    res.status(201).json({message:"The data is saved",menu})
    } catch (error) {
        res.status(500).json({message:"data is not saved due to the error in the below",error:error.message})
    }
    
})

app.get("/menu",async(req,res)=>{

    try {
    const menu=await restaurantModel.find()
   
    res.status(201).json({message:"Here is all your data",menu})
    } catch (error) {
        res.status(500).json({message:"data is not found due to the error in the below",error:error.message})
    }
    
})

app.put("/menu/:id",async(req,res)=>{

    try {
    const id=req.params.id
    const menu=await restaurantModel.findByIdAndUpdate(id,req.body,{new:true})
    
    res.status(201).json({message:"your updated data",menu})
    } catch (error) {
        res.status(500).json({message:"data is not updated due to the error in the below",error:error.message})
    }
    
})

app.delete("/menu/:id",async(req,res)=>{

    try {
    const id=req.params.id
    const menu=await restaurantModel.findByIdAndDelete(id)
    
    res.status(201).json({message:"The data is deleted",menu})
    } catch (error) {
        res.status(500).json({message:"data is not deleted due to the error in the below",error:error.message})
    }
    
})





app.listen(port,()=>{


    try {
        console.log(`app is running on http://localhost:${port}`)
        
    } catch (error) {
        console.error(error)
    }
   
})