expr=require("express")
app=expr();
API=require("./API")
app.use("/API",API);
app.listen(7899);