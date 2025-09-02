const express = require("express");

const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} = require("../controllers/projectController.js");

const protect = require("../middleware/authMiddleware.js");

const projectRoutes = express.Router();

// Use projectRoutes instead of router
projectRoutes.route("/")
  .post(protect, createProject)
  .get(protect, getProjects);

projectRoutes.route("/:id")
  .put(protect, updateProject)
  .delete(protect, deleteProject);

module.exports = projectRoutes;
