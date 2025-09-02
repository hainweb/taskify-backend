const express = require("express");
const { getTaskStats } = require("../controllers/statsController.js");
const protect = require("../middleware/authMiddleware.js");

const statsRoutes = express.Router();

statsRoutes.get("/", protect, getTaskStats);

module.exports = statsRoutes;
