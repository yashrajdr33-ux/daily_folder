//write an express js to perfome following task
//1.create an ejs file names contact.ejsthat displays a heading contact form and conatins a form with (i)text input for namr (2)email input for email(3)submit
//2.render this ejs file on the content root
//3.handle form submission using the post method on the submit root
//4.after form submission  display a message on the browser thank you and we have recived your mail
const express = require("express")
const app = express()
app.set('view engine','ejs');
app.use(express.urlencoded())
app.get("/contact",(req,res)=>
{
    res.render("contact")
})
app.post("/submit",(req,res)=>
{
    name=req.body.name
    email=req.body.email
    res.send(`Thamk you ${name}`)
})
app.listen(3800)
