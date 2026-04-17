var express=require("express")
var app=express()
const addName=(req,res,next)=>
{
    req.name="Siya"
    console.log("Name Added");
    next()
}
const add=(req,res,next)=>
{
    req.college="LJU"
    console.log("College Added Added");
    next()
}
const addMarks=(req,res,next)=>
{
    req.total=50+40
    console.log("Marks Added");
    next()
}
app.get("/student",addName,add,addMarks,(req,res)=>
{
    res.send("Name : "+req.name
        +"college : "+req.college
        +"Marks : "+req.total
    )
})
app.listen(3005,()=>
    {
           console.log("running")
    })