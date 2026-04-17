var express=require("express")
var app=express()
app.get("/",(req,res)=>
{
    res.set("content-type","text/plain")
    res.send("<h1>Be Kind<\h1>")

});
app.get("/about",(req,res)=>
    {
        res.set("content-type","text/html")
        res.send("<h1>to one end all<\h1>")
    
    });
app.listen(6501,()=>{
    console.log("Program End")
})