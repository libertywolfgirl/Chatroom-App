const mongoose = require("mongoose");
const { uuidv4 } = require("uuid");

const USER_TYPES = {
  CONSUMER: "consumer",
  SUPPORT: "support",
};

module.exports = USER_TYPES;

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    firstName: String,
    lastName: String,
    type: String,
  },
  {
    timestamps: true,
    collection: "users",
  }
);

module.exports = mongoose.model("User", userSchema);