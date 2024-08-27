import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  position: String,
  level: String,
});

export default mongoose.model("User", UserSchema);
