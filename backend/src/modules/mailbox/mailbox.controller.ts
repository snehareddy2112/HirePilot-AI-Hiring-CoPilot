import { Request, Response } from "express";

import { asyncHandler } from "../../shared/utils/asyncHandler.js";

import { successResponse } from "../../shared/responses/apiResponse.js";

import {
  createMailbox,
  getMailbox,
} from "./mailbox.service.js";

export const createMailboxController =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const mailbox =
        await createMailbox(
          req.body
        );

      return successResponse(
        res,
        201,
        "Mailbox connected",
        mailbox
      );
    }
  );

export const getMailboxController =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const mailbox =
        await getMailbox(
          (req as any).user.userId
        );

      return successResponse(
        res,
        200,
        "Mailbox fetched",
        mailbox
      );
    }
  );