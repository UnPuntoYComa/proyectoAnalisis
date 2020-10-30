import { Router } from "express";
import { checkDuplicateEmail } from "../middlewares/verifySignup";
import * as authController from "../controllers/auth.controller";

const router = Router();

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);

export default router;
