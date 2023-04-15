const cors = require("cors");
const express = require("express");
const connect = require("./config/db");
const timeRouter = require("./routes/time.route");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/time", timeRouter);

app.get("/", (req, res) => {
  res.send("Hello World WORKING");
});

app.listen(process.env.port || 8000, async () => {
  try {
    await connect;
  } catch {
    console.log("Could not connect to database");
  }
  console.log(`Server listening on port ${process.env.port || 8000}`);
});