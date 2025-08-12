import express from "express";
import { getTaskStats } from "../controllers/statsController.js";
import protect from "../middleware/authMiddleware.js";

const statsRoutes = express.Router();
router.get("/", protect, getTaskStats);

export default statsRoutes;
