//write an express js script that accept a single file to be uploded using the multer midlewhre and saves the 

const multer = require("multer");

//file to the sprcific dict called lju
express=require("express")
app=express()
app.use(express.static(__dirname,{index:"m1.html"}));
store=multer.diskStorage(
    {
        destination:"lju",
        filename:function(req,file,cb)
        {
            cb(null,file.originalname)
        }
    }
)

var upload=multer({storage:store})
app.post("/uploadfile",
    upload.single("mypic"),
    (req,res)=>{
        const file=req.file;
        if(file){
            res.send("<h1>File : "+file.originalname+"has been upload in"+file.destination+" folder")
        }
    }
)
app.listen(9874)