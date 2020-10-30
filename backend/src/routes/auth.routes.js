import { Router } from "express";
import { verifySignup } from "../middlewares";
import * as authController from "../controllers/auth.controller";

const router = Router();
const verify = [
  verifySignup.checkDuplicatedUsernameOrEmail,
  verifySignup.checkRolesExisted,
];

router.post("/signup", verify, authController.signup);
router.post("/signin", authController.signin);

export default router;
