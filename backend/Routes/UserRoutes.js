import express from "express";
import { UserController } from "../Controllers/UserController.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.get("/", protectRoute, UserController.getUserForTheSideBar);
export default router;
