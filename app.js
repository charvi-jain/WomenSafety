//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const favicon=require('serve-favicon');
const path=require('path');



const app = express();


app.set('view engine', 'ejs');
app.use(favicon(path.join(__dirname+ '\\favicon.ico')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var posts=[];
app.get("/",function(req,res){
  res.render("home");
});
app.get("/addcontacts",function(req,res){
  res.render("addcontacts");
});
app.get("/emergencycontacts",function(req,res){
  res.render("emergencycontacts",{
    posts:posts
  });

});

app.post("/addcontacts",function(req,res){
const post={
  name:req.body.postName,
  email:req.body.postEmail,
  relation:req.body.postRelation
};
posts.push(post);
res.redirect("/emergencycontacts");
});
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
