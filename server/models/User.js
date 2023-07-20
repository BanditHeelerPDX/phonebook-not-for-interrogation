const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 5,
      max: 25,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 75,
    },
    password: {
      type: String,
      required: true,
      min: 10,
    },
    profileImage: {
      type: String,
      default: "",
    },
    coverImage: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    minions: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
