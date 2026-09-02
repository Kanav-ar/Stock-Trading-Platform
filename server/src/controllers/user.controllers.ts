import type { Request, Response } from "express";
import WrapAsync from "../utils/WrapAsync";
import { User, type IUser } from "../models/user.models";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import type { AuthenticatedRequest } from "../types/auth.types";

const generateAccessAndRefreshTokens = (user: IUser) => {
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();
  return { accessToken, refreshToken };
};

const registerUser = WrapAsync(async (req: Request, res: Response) => {
  const { username, email, fullname, password } = req.body;

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    if (existingUser.username === username) {
      throw new ApiError(409, "Username already exists");
    }

    if (existingUser.email === email) {
      throw new ApiError(409, "Email already exists");
    }
  }

  const newUser = new User({
    username,
    email,
    password,
    fullname,
    isEmailVerified: false,
  });

  const { unHashedToken, hashedToken, tokenExpiry } =
    newUser.generateTemporaryToken();

  newUser.emailVerificationToken = hashedToken;
  newUser.emailVerificationExpiry = tokenExpiry;
  const { accessToken, refreshToken } = generateAccessAndRefreshTokens(newUser);

  newUser.refreshToken = refreshToken;
  await newUser.save();

  // send mail - yet to implement

  const createdUser = await User.findById(newUser._id).select(
    "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  const cookieOptions = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        200,
        { user: createdUser },
        "User registered successfully and verification link has been sent to your email",
      ),
    );
});

const loginUser = WrapAsync(async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const user = await User.findOne({ $or: [{ username }, { email }] });

  if (!user) {
    throw new ApiError(404, "Invalid credentials");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid password");
  }

  const { accessToken, refreshToken } = generateAccessAndRefreshTokens(user);

  user.refreshToken = refreshToken;

  await user.save({ validateBeforeSave: false });

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
  );

  const cookieOptions = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken },
        "User logged in successfully",
      ),
    );
});

const logoutUser = WrapAsync(
  async (req: AuthenticatedRequest, res: Response) => {
   const loggedOutUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        $set: {
          refreshToken: null,
        },
      },
      {
        returnDocument: "after",
      },
    );

    const cookieOptions = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .clearCookie("accessToken", cookieOptions)
      .clearCookie("refreshToken", cookieOptions)
      .json(new ApiResponse(200, {loggedOutUser}, "User logged out successfully"));
  },
);



export { registerUser, loginUser, logoutUser };
