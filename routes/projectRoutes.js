import express from "express";
import {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";
import protect from "../middleware/authMiddleware.js";

const projectRoutes = express.Router();

router.route("/")
  .post(protect, createProject)
  .get(protect, getProjects);

router.route("/:id")
  .put(protect, updateProject)
  .delete(protect, deleteProject);

export default projectRoutes;
