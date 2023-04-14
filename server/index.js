const express = require("express");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const multer = require('multer');
const UserModelVerify = require("./model/otpVerfiy");
const Image = require("./model/product");
const app = express();
const cors = require("cors");
const port = 3001;


mongoose.connect("mongodb://127.0.0.1:27017/Users", ).then(async ()=>{
  await console.log("Connected to DB")
}).catch(async (err)=>{
  await console.log(err)
})


const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "buck38@ethereal.email",
    pass: "M4YKXUKg1Fd5zGJZPn",
  },
});

app.use(cors());
app.use(express.json());

app.post("/SendOTP", async (req, res) => {
  const data = req.body.email;
  const otp = Math.floor(1000 + Math.random() * 9000);
  try {
     await UserModelVerify.create({
      email: data,
      OTP: otp,
      createdAt: new Date(),
      expireAt: new Date(new Date().getTime() + 10 * 60 * 1000),
    });
    async (data,otp) => {
      await transporter.sendMail({
        from: "buck38@ethereal.email",
        to: data,
        subject: "Sending Email using Node.js",
        text: "<h1>OTP</h1><p>OTP is </p>"+otp,
      });
    };
    console.log(data);
    res.json({ status: "sendihdsf", otp: otp });
  } catch (err) {
    console.log(err);
    res.json({ status: "error" });
  }
});

app.post("/", (req, res) => {
  console.log(req.body);
  console.log("OK");
  res.json({ status: "ok" });
});

app.get("/", (req, res) => {
  console.log("OK#");
  res.send("HIh");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const storage = multer.diskStorage({
  destination: 'upload',
  filename: function(req, file, cb) {
    cb(null,file.originalname);
  }
});
const upload = multer({ storage: storage }).single('testImage');

app.post('/upload', upload, function(req, res, next) {
  console.log("data received");
  const newImage = new Image({
    // name: req.file.originalname,
    name:req.body.name,
    image: {
      data: req.file.filename,
      contentType: 'image/png'
    }
    // contentType: req.file.mimetype
  });
  newImage.save(function(err) {
    if (err) return next(err);
    res.send('File uploaded successfully!');
  });
});

