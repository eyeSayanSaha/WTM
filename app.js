var express     =     require("express") ,
    app         =     express(),
    bodyParser  =     require('body-parser');
    
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine","ejs");


app.get("/home",function (req,res) {

    res.render("girls");
});
app.get("/login",function (req,res) {

    res.render("login");
});
app.get("/login/farmer",function (req,res) {

    res.render("farmer");
});

app.listen(process.env.PORT,process.env.ID,function(){
    console.log("Open!");
}); 