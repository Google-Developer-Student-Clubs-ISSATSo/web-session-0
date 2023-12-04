const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const connectDB = require("./config/connectDB");
const person = require("./models/persons")
const cors = require("cors");
//const bodyParser = require("body-parser")

app.use(cors());
//app.use(bodyParser())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get("/",(req ,res)=>{
    res.send("Hello bouk");
})


app.post("/addPerson",(req,res)=>{
    const {name, date_naiss, niveau, commentaire} = req.body;
    const personToAdd = new person({
        name:name,
        date_naiss: date_naiss,
        niveau: Number(niveau),
        commentaire: commentaire
    })
    personToAdd.save();
    res.json(personToAdd).status(200);
    console.log(personToAdd);
})

app.get("/getPersons", async (req,res)=>{
    const data = await person.find();
    res.send(data);
})

app.listen(PORT,()=>{
    connectDB("mongodb://localhost:27017/session_attendees");
    console.log(`Server started on port ${PORT}`);
})