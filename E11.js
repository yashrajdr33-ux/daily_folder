var express=require("express")
var app=express()
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send(`<h1>User Form</h1>
        
        <form action='user' method="post">
            <input type="text" name="n1"/>
            <input type="number" name=n2>
            <input type="text" name="n3"/>
            <input type="number" name="n4"/>
            <input type="text" name="n5"/>
            <button type="submit">Submit</button></form>`)
})
app.post("/details",(req,res)=>
{
        name=req.body.n1
        res.write(name)
        Age=parseInt(req.body.n2)
        res.write(Age)
        city=req.body.n3
        res.write(city)
        Marks=parseInt(req.body.n4)
        res.write(Marks)
        course=req.body.n5
        res.write(course)
        res.send(`
            <p></p>`)

})
app.listen(6051,()=>
    {
        console.log("running")
    })