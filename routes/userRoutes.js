import upload from "../middleware/uploadMiddleware.js";
import { updateProfile } from "../controllers/userController.js";

router.put("/profile", protect, upload.single("avatar"), updateProfile);
