//multiple file maximum number 5 to be uploaded using multer midlewhere and saves the file to specific multiple

const multer = require("multer");
express=require("express")
app=express()
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname,{index:"m2.html"}));
store=multer.diskStorage(
    {
        destination:"multiple",
        filename:function(req,file,cb)
        {
            cb(null,file.originalname)
        }
    }
)

var upload=multer({storage:store})
app.post("/uploadfile",
    upload.array("myfile",5),
    (req,res)=>{
        const file=req.files;
        if(file){
            for(i of file)
            {
                res.write("<h1>File : "+file.originalname+"has been upload in"+file.destination+" folder")
            }
            
        }
    }
)
app.listen(9877)
