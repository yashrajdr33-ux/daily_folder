//fetch using query
var express=require("express")
var app=express()
app.get("/data",(req,res)=>
{
    const name=req.query.name;
    const age=req.query.age;
    res.send("name "+name+" age "+age)
})
app.listen(3040)