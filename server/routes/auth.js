const User = require("../models/user");
const registerRouter = require("express").Router();

registerRouter.route("/register").post(async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    return res.status(200).json(newUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = registerRouter;
