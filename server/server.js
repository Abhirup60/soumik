require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./router/auth-router");
const ConnectDB = require("./utils/db");

const corsOption = {
  origin:"http://localhost:5173",
  methods:"GET, PUT, POST, PATCH, HEAD, DELETE",
  credentials:true,
}


app.use(cors(corsOption));

app.use(express.json());

app.use("/api/form", authRouter);

const PORT = 8000;

ConnectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  })
});
