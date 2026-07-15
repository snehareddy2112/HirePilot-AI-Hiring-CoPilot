import { Request, Response } from "express";

import { asyncHandler } from "../../shared/utils/asyncHandler.js";

import { successResponse } from "../../shared/responses/apiResponse.js";

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