import { Request, Response } from "express";

import { asyncHandler } from "../../shared/utils/asyncHandler.js";

import {
  createCompany,
  getCompanies,
} from "./company.service.js";

import { createCompanySchema } from "./company.validation.js";

import { successResponse } from "../../shared/responses/apiResponse.js";

export const createCompanyController =
  asyncHandler(async (req: Request, res: Response) => {
    const data =
      createCompanySchema.parse(req.body);

    const company =
      await createCompany(data);

    return successResponse(
      res,
      201,
      "Company created successfully",
      company
    );
  });

export const getCompaniesController =
  asyncHandler(async (_: Request, res: Response) => {
    const companies =
      await getCompanies();

    return successResponse(
      res,
      200,
      "Companies fetched successfully",
      companies
    );
  });