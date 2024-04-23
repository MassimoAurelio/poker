const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const UserShema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    stack: {
      type: Number,
    },
    position: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserShema);

module.exports = User;
