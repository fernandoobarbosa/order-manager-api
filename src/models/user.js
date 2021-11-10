import mongoose from "../config/database";
import uniqueValidator from "mongoose-unique-validator";

const UserSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model("User", UserSchema);
UserSchema.plugin(uniqueValidator);
export default User;
