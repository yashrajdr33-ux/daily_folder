//
var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    res.send(`<h1>User Form</h1>
        <form action='' method="post">
            <input type="text" name="n1"/>
            Gender:<input type="radio" name="Gender">male
            <input type="radio" name="Gender"/>female
            <input type="radio" name="Gender"/>others
            Skill:<input type="cheackbox" name="n5"/>Python
            <input type="checkbox" name="n6"/>React
            <input type="checkbox" name="n7"/>Node
            <input type="checkbox" name="n8"/>Express
            <select name=""Dept><option>CST</option><option>CSE</option></select>
            <button type="submit">Submit</button></form>`)
})
app.post("/details",(req,res)=>
{
        name=req.body.n1
        res.write(name)
        Gender=req.body.n2
        res.write(Gender)
        res.send(`Name: ${name}\n gender :${Gender}`)
    
})
app.listen(3005,()=>
{
       console.log("running")
})