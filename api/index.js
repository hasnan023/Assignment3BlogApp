const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
 const cors = require("cors");

app.use(bodyParser.json({ limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}))

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const MONGO_URL = "mongodb://hasnan:hasnan023@ac-lyn3vpu-shard-00-00.tv7gjfs.mongodb.net:27017,ac-lyn3vpu-shard-00-01.tv7gjfs.mongodb.net:27017,ac-lyn3vpu-shard-00-02.tv7gjfs.mongodb.net:27017/?ssl=true&replicaSet=atlas-rpm5q6-shard-0&authSource=admin&retryWrites=true&w=majority"
app.use(cors());
dotenv.config();
//app.use(express.json());
mongoose
.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("connected to MongoDB"))
.catch((err) => console.log(err));

const storage =multer.diskStorage({
    destination:(req, file, cb) => {
    cb(null,"images")
    },
    filename: (req,file,cb) => {
        cb(null, "helo.jpeg");
    },
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000", () => {
    console.log("Backened is running");
});