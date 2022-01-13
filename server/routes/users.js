const User = require("../models/user");

const userRouter = require("express").Router();

userRouter
  .route("/users")
  .get(async (req, res) => {
    try {
      const user = await User.findAll();
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .post(async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      return res.status(200).json(newUser);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

module.exports = userRouter;
