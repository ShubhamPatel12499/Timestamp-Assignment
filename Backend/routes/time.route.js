const express = require("express");
const Time = require("../model/time.model");
const timeRouter = express.Router();

timeRouter.post("/createTime", async (req, res) => {
  const { d,t } = req.body;

  if (!d || !t) {
    return res.send({ message: "Please enter full Details" });
  }

  try {
      let time = await Time.create({
       d,
       t,
      });
      res.send({ message: "Sucessfully created" });

  } catch (e) {
    res.status(404).send(e);
  }
});

timeRouter.get("/getTime", async (req, res) => {
  let temp = await Time.find();
  res.send(temp);
});


module.exports = timeRouter;