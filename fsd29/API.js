//write js in which rest api is created for json object named data which contains name,id,branch,city and contact properties
//1.on api page it should display all thr content 
//2.upon passing id on the it should display the content that having id (localhost:/7899/api/101)
//3.upon passing branch on the broswer url  it shoud display content that having tha branch(localhost:7899/api/brach/id)
expr=require("express")
router=expr.Router();
data=[
    {id:101,name:'ABC',branch:"CSE",contact:9898989898,city:"surat"},
    {id:102,name:'BCD',branch:"CST",contact:9898989102,city:"ahm"},
    {id:103,name:'XYZ',branch:"CE",contact:9898989103,city:"mum"},
    {id:104,name:'PQR',branch:"AIML",contact:9898989104,city:"vadodra"},
    {id:105,name:'ABC',branch:"CST",contact:9898989105,city:"delhi"},
    {id:106,name:'ABC',branch:"AI",contact:9898989106,city:"kheda"}
]
router.get("/",(req,res)=>{
    res.set("content-type","text/html")
    for (i of data)
    {
        res.write("<h3>ID : "+i.id+"name : "+i.name+"branch : "+i.branch+"contant : "+i.contant+"city : "+i.city+"</h3>")
    }
    res.send()
})
router.get("/:id",(req,res)=>{
    var current_data=
    data.filter((i1)=>i1.id==req.params.id)
    if(current_data.length>0)
    {res.send(current_data)}
    else{
        res.send("not found")
    }
})
router.get("/branch/:branch",(req,res)=>
{
    var cd=
    data.filter((b)=>b.branch.toLowerCase()==req.params.branch.toLowerCase())
    if(cd.length>0)
    {
        res.send(cd)
    }
    else{
        res.send("not found")
    }
})
router.get("/city/:city",(req,res)=>
{
    var ca=
    data.filter((a)=>a.city.toLowerCase()==req.params.city.toLowerCase())
    if(ca.length>0)
    {
        res.send(ca)
    }
    else{
        res.send("not found")
    }
})
module.exports=router