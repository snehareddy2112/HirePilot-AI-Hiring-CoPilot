import { Request, Response } from "express";

import { asyncHandler } from "../../shared/utils/asyncHandler.js";

import { successResponse } from "../../shared/responses/apiResponse.js";
import { User } from "./user.model.js";

export const meController =
  asyncHandler(async (_: Request, res: Response) => {
    return successResponse(
      res,
      200,
      "Auth module working",
      {
        authenticated: false,
      }
    );
  });

export const onboardingController =
  asyncHandler(async (req, res) => {
    const { companyName, mailbox } =
      req.body;

    const userId = (req as any)
      .user.userId;

    const user =
      await User.findByIdAndUpdate(
        userId,
        {
          companyName,
          mailbox,
        },
        {
          new: true,
        }
      );

    return successResponse(
      res,
      200,
      "Onboarding completed",
      user
    );
  });