//
var express=require("express")
var app=express()
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send(`<h1>User Form</h1>
        <form action='user' method="post">
            <input type="text" name="n1"/>
            <button type="submit">click</button></form>`)
})
app.post("/user",(req,res)=>
{
    name=req.body.n1
    res.send(name)

})
app.listen(6051,()=>
{
    console.log("running")
})