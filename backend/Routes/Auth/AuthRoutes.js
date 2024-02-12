import express from "express";
import { AuthControllers } from "../../Controllers/Auth/AuthControllers.js";
const router = express.Router();

router.post("/signup", AuthControllers.signUp);
router.post("/login", AuthControllers.login);
router.post("/logout", AuthControllers.logOut);

export default router;
