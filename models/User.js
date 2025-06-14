import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: { type: String, required: true },
  username: { type: String },
});

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

export const User = mongoose.model("User", UserSchema);
