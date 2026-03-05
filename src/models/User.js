import mongoose from "mongoose";

<<<<<<< HEAD
=======

>>>>>>> 0d48d89afdc5bc63a745997571f640b46ffc8420
// Create User schema
// Fields:
// - name (String, required)
// - email (String, required, unique)
// - password (String, required, minlength 6)
// - createdAt (default Date.now)

<<<<<<< HEAD
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
    select: false, // Don't return password by default
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
=======


const userSchema = new mongoose.Schema({
  // Students implement
>>>>>>> 0d48d89afdc5bc63a745997571f640b46ffc8420
});

const User = mongoose.model("User", userSchema);

<<<<<<< HEAD
export default User;
=======
export default User;
>>>>>>> 0d48d89afdc5bc63a745997571f640b46ffc8420
