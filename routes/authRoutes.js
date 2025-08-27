const express = require("express");
const { registerUser, loginUser, updateProfile } = require("../controllers/authController.js");
const protect = require("../middleware/authMiddleware.js");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});


export default router;