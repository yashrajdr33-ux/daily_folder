//devlpoe a web application using express and ejs to accept marks of t1 t2 and t3 and t4 each out of 25 throw a form using post method 
//after submission display 
//all entered marks in tabular format along with the total marks and determine the result if totl 35 or more display pass in green color 
const express = require("express")
const app = express()
app.set('view engine','ejs');
app.use(express.urlencoded())
app.get("/form1",(req,res)=>
{
    res.render("form1")
})
app.post("/submit",(req,res)=>
{
    name=req.body.name
    t1=req.body.t1
    t2=req.body.t2
    t3=req.body.t3
    t4=req.body.t4
    total=t1+t2+t3+t4
})
app.get("/result1",(req,res)=>
    {
        res.render("result1",{name,t1,t2,t3,t4})
    })
app.listen(3800)