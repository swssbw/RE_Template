// settings
const express = require("express");
const morgan = require("morgan");

const app = express();
require("dotenv").config(); 

app.set("port", process.env.PORT || "5001" );

app.use(morgan("dev"));

app.listen(app.get("port"), () => {
  console.log(app.get("port"),'번 포트에서 대기중');
})