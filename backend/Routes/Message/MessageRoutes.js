import express from "express";
import { MessageController } from "../../Controllers/Message/MessageController.js";
const router = express.Router();

router.post("/send/:id", MessageController.sendMessage);

export default router;
