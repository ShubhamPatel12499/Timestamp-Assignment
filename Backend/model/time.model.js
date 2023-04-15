const mongoose = require("mongoose");
const timeSchema = new mongoose.Schema(
  {
    d: {
      type: Date,
      required: true,
    },
    t: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Time = mongoose.model("time", timeSchema);
module.exports = Time;