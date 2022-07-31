const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const ObjectId = require("mongodb").ObjectId;
// username: admin
// password: 6iA57hoatUuBpTKZ

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Redux Toolkit server is server");
});

// db users
app.listen(port, () => {
  console.log(`Redux Toolkit server is ${port}`);
});
