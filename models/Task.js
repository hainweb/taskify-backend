const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ["todo", "in-progress", "done"],
      default: "todo",
    },
    dueDate: { type: Date },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    dueDate: { type: Date },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
