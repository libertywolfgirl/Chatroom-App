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

userSchema.statics.createUser = async function (
	firstName, 
    	lastName, 
    	type
) {
  try {
    const user = await this.create({ firstName, lastName, type });
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = mongoose.model("User", userSchema);