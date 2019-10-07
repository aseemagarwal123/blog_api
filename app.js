const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const users = require("./routes/users");
const app = express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const RateLimit = require("express-rate-limit");
const paginate = require('express-paginate');
app.use(paginate.middleware(10, 50));


mongoose.connect("url here", {useNewUrlParser: true

})
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to MongoDB..."));

app.listen(3000, () => console.log("Connected on port 3000!"));



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-auth-token");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  next();
});
app.enable("trust proxy");

const apiLimiter = new RateLimit({
  windowMs: 15*60*1000,
  max: 100,
});


app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use("/v1/api/users", users, apiLimiter);

app.get("/", apiLimiter, function(req, res) {
  res.send({title: "Home Page"});
});


