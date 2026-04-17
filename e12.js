//create web server that except get reqest with dinemic user id in the url also accept addti data name and age
// using query parameter extract id from root parameter name and age from query string return a json rsponse conataing all recived data 
var express=require("express")
var app=express()
app.get("/user/:id",(req,res)=>
{
    userid=req.params.id;
    name=req.query.name;
    age=req.query.age;
    res.json({
        id:userid,
        name1:name,
        age1:age
    })
})
app.listen(3005,()=>
{
    console.log("running")
})

