const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  try {
    const hashPass = await bcrypt.hash(req.body.password, 16);
    const user = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPass,
    });
    const newUser = await user.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user &&
      res.status(404).json("Aint nobody running around here with that email");
    const validPass = await bcrypt.compare(req.body.password, user.password);
    !validPass && res.status(400).json("Double check your notes, slick");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
