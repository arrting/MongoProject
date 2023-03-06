const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");

//connect to mongoDB

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/exampleDB')
.then(() =>{                          //成功回傳
    console.log("connect to mongoDB");
}).catch(err => {                    //失敗回傳
        console.log("connect failed.");
        console.log(err);
});

//define a schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    major:String,
    scholarship:{
        merit:Number,
        other:Number
    }
});
//create a model for students
const Student = mongoose.model("Student", studentSchema);


//find object in students
// Student.find({}).then((data) => {
//     console.log(data);
// })
// Student.findOne({name: "Shu Yamino"}).then((data) => {
//     console.log(data);
// })



app.use(express.static("public"));

app.get("/",(req , res) =>{
    res.render("index.ejs");
});

app.listen(3000, () =>{
    console.log("Server is running on port 3000.")
});