var express=require("express")
var app=express()
student={
    u1:[{name:"LJU",id:2},
        {name:"LJU1",id:3},
        {name:"LJU2",id:4}
    ]
}
app.get("/student",(req,res)=>
{
    res.set("content-type","text/html")
    res.write("<table border='1'><tr><th>Name</th><th>ID</th></tr>")
    for(i of student.u1)
    {
        res.write("<tr><td>"+i.name+"</td>")
        res.write("<td>"+i.id+"</td></tr>")
    }
    res.write("</table>")
    res.send()
});
app.listen(6007);