// settings
const express = require("express");
const morgan = require("morgan");
const userRouter = require("./router/userRouter");
const cors = require("cors");

const app = express();
require("dotenv").config(); 

app.set("port", process.env.PORT || "5001" );

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/users", userRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"),'번 포트에서 대기중');
})