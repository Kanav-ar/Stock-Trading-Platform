import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controllers";
import { validateUser } from "../middlewares/validation.middleware";
import { registerValidationSchema } from "../validators/user/register.validator";
import { loginValidationSchema } from "../validators/user/login.validator";

const userRouter = Router();

userRouter
  .route("/register")
  .post(validateUser(registerValidationSchema), registerUser);

userRouter
  .route("/login")
  .post(validateUser(loginValidationSchema), loginUser);

export default userRouter;
