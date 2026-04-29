//devlpoe a web app using express and ejs that allows  a user to enter sutdent name and marks throw a form after a submission thge 
//application sholud display the enter details and determine the result if the marks are 9 or above show pass in green color otherwise 
//show fail in red collor
//1.form.ejs,2.my.js,3.result.ejs
const express = require("express")
const app = express()
app.set('view engine','ejs');
app.use(express.urlencoded())
app.get("/form",(req,res)=>
{
    res.render("form")
})
app.post("/submit",(req,res)=>
{
    name=req.body.name
    mark=req.body.mark
    res.send(`Thamk you ${name}`)
})
app.get("/result",(req,res)=>
    {
        res.render("result",{name,mark})
    })
app.listen(3800)