import mongoose from "mongoose";
const { Schema } = mongoose;

const RecordSchema = new Schema({
  name: String,
  position: String,
  level: String,
});

export default mongoose.model("Record", RecordSchema);
