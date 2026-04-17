//create basic veb app that display a form on the home page to enter user name and marks sent the form data to the server using post req 
//the server should read the submitted name and marks from the req body finally display message that user one get 
var express=require("express")
var app=express()
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send(`<h1>User Form</h1>
        <form action='user' method="post">
            <input type="text" name="n1"/>
            <input type="text"/ name=n2>
            <input type="text" name="n3"/>
            <input type="text" name="n1"/>
            <button type="submit">Calculate</button></form>`)
})
app.post("/user",(req,res)=>
{
    name=req.body.n1
    res.write(name)
    t1=parseInt(req.body.n2)
    res.write(t1)
    t2=parseInt(req.body.n2)
    res.write(t2)
    t3=parseInt(req.body.n2)
    res.write(t3)
    res.send()
})


app.listen(6051,()=>
{
    console.log("running")
})