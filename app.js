const express = require ("express")
const mongoose= require("mongoose")
const cors= require("cors")
const empModel = require("./Model/empModel")
const navsModel = require("./Model/navsModel")

const app=express()

app.use(express.json())
app.use(cors())

mongoose
.connect("mongodb://127.0.0.1:27017/workerdb")
.then(()=>console.log("DB is connected"))

app.get("/", (req,res)=>{
    res.send("API is running")
})

app.get("/navs",async(req,res)=>{
    const result=await navsModel.find({})
    res.send(result)
})

app.post("/addnav",(req,res)=>{
    const payload=req.body
    const newNav=new navsModel(payload)
    newNav.save()
    res.send("Added Navigation")
})

app.get("/emp", async(req,res)=>{
    const result = await empModel.find({})
    res.send(result)
})

app.post("/addemp",(req,res)=>{
    const payload= req.body
    const newEmp=new empModel(payload)
    newEmp.save()
    res.send("Employee is added")
})

app.listen(5055,()=>{
    console.log("server is running on port 5055")
})

