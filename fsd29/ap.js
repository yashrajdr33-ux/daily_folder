const express = require("express")
const app = express()
app.set('view engine','ejs');
path=require("path")
app.set('views',path.join(__dirname))
app.get("/",(req,res)=>
{
    res.render("fifth",{name:"raj"})
})
app.listen(3800)