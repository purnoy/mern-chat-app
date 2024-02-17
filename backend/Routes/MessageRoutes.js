import express from "express";
import { MessageController } from "../Controllers/MessageController.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/send/:id", protectRoute, MessageController.sendMessage);

export default router;