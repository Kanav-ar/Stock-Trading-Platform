import { Router } from "express";
import { loginUser, logoutUser, registerUser, verifyEmail } from "../controllers/user.controllers";
import { validateUser } from "../middlewares/validation.middleware";
import { registerValidationSchema } from "../validators/user/register.validator";
import { loginValidationSchema } from "../validators/user/login.validator";
import { authenticate } from "../middlewares/auth.middleware";

const userRouter = Router();

userRouter
  .route("/register")
  .post(validateUser(registerValidationSchema), registerUser);

userRouter
  .route("/login")
  .post(validateUser(loginValidationSchema), loginUser);


userRouter.route("/verify-email/:verificationToken").post(verifyEmail);

// protected routes
userRouter.route("/logout").post(authenticate, logoutUser );


export default userRouter;
