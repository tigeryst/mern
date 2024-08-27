import express from "express";
const router = express.Router();

import User from "../models/index.js";

router.get("/", (req, res) => {
  res.send("API for Mini MERN");
});

router
  .route("/users")
  .get(async (req, res) => {
    const users = await User.find();
    res.json(users);
  })
  .post(async (req, res) => {
    const { name, position, level } = req.body;
    const user = new User({ name, position, level });
    await user.save();
  });

router
  .route("/users/:userId")
  .get(async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.json(user);
  })
  .put(async (req, res) => {
    const { userId } = req.params;
    const { name, position, level } = req.body;
    await User.findByIdAndUpdate(userId, { name, position, level });
  })
  .delete(async (req, res) => {
    const { userId } = req.params;
    await User.findByIdAndDelete(userId);
  });

export default router;
