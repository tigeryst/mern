import express from "express";
const router = express.Router();

import { Record } from "../models/index.js";

router.get("/", (req, res) => {
  res.send("Home");
});

router
  .route("/records")
  .get(async (req, res) => {
    const records = await Record.find();
    res.json(records);
  })
  .post(async (req, res) => {
    const { name, position, level } = req.body;
    const record = new Record({ name, position, level });
    await record.save();
  });

router
  .route("/records/:recordId")
  .get(async (req, res) => {
    const { recordId } = req.params;
    const record = await Record.findById(recordId);
    res.json(record);
  })
  .put(async (req, res) => {
    const { recordId } = req.params;
    const { name, position, level } = req.body;
    await Record.findByIdAndUpdate(recordId, { name, position, level });
  })
  .delete(async (req, res) => {
    const { recordId } = req.params;
    await Record.findByIdAndDelete(recordId);
  });

export default router;
