const express = require("express");
const connectToMongo = require("./db");
const app = express();
const port = 5000;

//write a middleware to allow cors
const cors = require("cors");
app.use(cors());

app.use(express.json());

connectToMongo();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", require("./routes/CreateUser"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
