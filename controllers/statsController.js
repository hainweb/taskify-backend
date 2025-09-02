const Task = require("../models/Task.js");

// @desc Get task statistics
const getTaskStats = async (req, res) => {
  const total = await Task.countDocuments({ user: req.user.id });
  const completed = await Task.countDocuments({
    user: req.user.id,
    completed: true,
  });
  const pending = total - completed;

  res.json({ total, completed, pending });
};

module.exports = { getTaskStats };
