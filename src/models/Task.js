import mongoose from "mongoose";

// Create Task schema
// Fields:
// - title (String, required)
// - description (String)
// - completed (Boolean, default false)
// - owner (ObjectId, ref "User", required)
// - createdAt (default Date.now)

const taskSchema = new mongoose.Schema({
<<<<<<< HEAD
  title: {
    type: String,
    required: [true, "Please provide a task title"],
  },
  description: {
    type: String,
    default: "",
  },
  completed: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
=======
  
>>>>>>> 0d48d89afdc5bc63a745997571f640b46ffc8420
});

const Task = mongoose.model("Task", taskSchema);

<<<<<<< HEAD
export default Task;
=======
export default Task;
>>>>>>> 0d48d89afdc5bc63a745997571f640b46ffc8420
