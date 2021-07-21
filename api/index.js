const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

dotenv.config();
app.use(express.json());


mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage  = multer.diskStorage({
  destination:(req,file,cb) =>{
    cb (null,"images")
  }, filename:(req,file,cb) =>{
    cb(null,req.body.name);
  }
});

const upload = multer ({storage:storage});
app.post("/api/upload", upload.single("Dokument"),(req,res)=>{
  res.status(200).json("Dokument został przesłany")
})

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/users", userRoute);
app.use("/api/categories", categoryRoute);


app.listen("3000", ()=> {
    console.log("Backend is running");
});