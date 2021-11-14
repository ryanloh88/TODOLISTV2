const { text } = require("express");
const express = require("express");
const app = express();
const date = require(__dirname +"/date.js");

//variables
var items = ["Buy food", "Cook food", "Eat food"]
var workItems =['me', "urMom"]
var day = date.getDate()


app.set('view engine', "ejs");

app.use(express.urlencoded({
  extended: true
}))
app.use(express.static("public"))



//Root Directory
app.get("/", function (req, res) {

  res.render("list", {
    listTitle: day,
    newListItem: items
  })

});

app.post("/", function (req, res) {

  var item = req.body.newItem
  items.push(item)
  res.redirect("/")
})


//work directory
app.get("/work", function(req,res){
  res.render("list",{
    listTitle: "Work List",
    newListItem : workItems
  } )
})
app.post("/work",function(req,res){

  let newListItem = req.body.newItem
  workItems.push(newListItem)
  res.redirect("/work")
})

// about directory

app.get("/about",function(req,res){
  res.render("about")
})



app.listen(3000, function () {
  console.log("Server started on port 3000.");
});