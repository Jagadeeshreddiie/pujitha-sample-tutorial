const express = require("express");
const mongoose = require("mongoose");
const User = require("./model");
require("dotenv").config();



const app = express();
app.use(express.json())
const MongoClient = require("mongodb");
// get api

app.get("/", (req, res) => {
  User.find({})
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
});

// get one 
app.get("/:id", (req, res) => {
  console.log(req.params);
  User.find({_id:req.params.id})
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
});

// update
app.patch("/update", (req, res) => {
  User.findOneAndUpdate({_id:"65ee01088ed84ad76adb006d",$set:{name:"pujitha k"}})
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
});

// delete

app.delete("/delete/:id", (req, res) => {
  User.findOneAndDelete({_id:req.params.id})
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
});


// post api

// app.post("/", async (req, res) => {
//   try {
//     const response = await User.create({ name: "pujitha" });
//     res.json(response);
//   } catch (error) {
//     console.log(error);
//     res.json({ error: error });
//   }
// });

// app.post("/", (req, res) => {
//   User.create({ name: "koppuravur" })
//     .then((data) => res.json(data))
//     .catch((err) => res.json({ error: err }));
// });


app.post("/", async (req, res) => {
  const {name}=req.body;
  try {
    const response1 =new User({ name:name});
    const response=await response1.save();
    console.log(response);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
});

// mongoose connection

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log("Server listening on 3001 and database connected");
    })
  )
  .catch((error) => console.log(error));

// const db=MongoClient.client('')
// const coll=db.MongoClient

// coll.create
// coll.find
