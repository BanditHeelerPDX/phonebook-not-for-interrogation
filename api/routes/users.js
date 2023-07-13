const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      try {
        req.body.password = await bcrypt.hash(req.body.password, 16);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Ain't no ain't no more!");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("Ain't no updating others round here!");
  }
});

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      await User.findByIdAndDelete({ _id: req.params.id });
      res.status(200).json("Ain't nothin but ain't now!");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("Ain't no deleting others round here!");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.minions.includes(req.body.userId)) {
        await user.updateOne({ $push: { minions: req.body.userId } });
        await currentUser.updateOne({ $push: { friends: req.params.id } });
        res.status(200).json("Banana!");
      } else {
        res
          .status(403)
          .json("There is a fine line between following and stalking!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Ain't no following yourself round here!");
  }
});

router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.minions.includes(req.body.userId)) {
        await user.updateOne({ $pull: { minions: req.body.userId } });
        await currentUser.updateOne({ $pull: { friends: req.params.id } });
        res.status(200).json("Banana!");
      } else {
        res.status(403).json("It is good to know when to walk away!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Ain't no unfollowing yourself round here!");
  }
});

module.exports = router;
