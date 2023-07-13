const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
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
    desc: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    dream: {
      type: String,
      max: 50,
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
