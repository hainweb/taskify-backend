const Task = require("../models/Task.js");

// @desc Create task
const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      user: req.user.id,
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get all user tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
};

// @desc Update task
const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });
  if (task.user.toString() !== req.user.id)
    return res.status(401).json({ message: "Not authorized" });

  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

// @desc Delete task
const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });
  if (task.user.toString() !== req.user.id)
    return res.status(401).json({ message: "Not authorized" });

  await task.deleteOne();
  res.json({ message: "Task removed" });
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
