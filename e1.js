var express=require("express")
var app=express()
app.get("/",(req,res)=>
{
    res.set("content-type","text/plain")
    res.send("Hello World")
});app.listen(3005)