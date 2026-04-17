//write an express script to define one json array of 3 object having properties like comadian name and age sort this object according to 
//age if user req sorted names in url then all name along with 
//age should be printed according to desending order of age also display this sorted values on sort and display json object on home page
var express=require("express")
var app=express()
student=[
    {name:"Restin",age:50},
    {name:"Kapil",age:30},
    {name:"Manan",age:40}
    ]
    

app.get("/student",(req,res)=>
{
    res.send(student)
});
app.get("/sort",(req,res)=>
{
    res.set("content-type","text/plain")
    sortage=student.sort((a,b)=>b.age-a.age)
    for(i of sortage)
    {
        res.write(i.name+" = "+i.age)
    }
    res.send()
});
app.get("/sortname",(req,res)=>
    {
        res.set("content-type","text/plain")
        sortage=student.sort((a,b)=>b.name-a.name)
        for(i of sortage)
        {
            res.write(i.name+" = "+i.age)
        }
        res.send()
    });
app.listen(6007);