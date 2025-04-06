import express from "express";
import { login, register } from "../controllers/user.controller.js";
console.log("✅ Route file loaded, login:", typeof login); 
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);


export default router;