import { Request, Response } from "express";

import {
  createCompany,
  getCompanies,
} from "./company.service.js";

import { createCompanySchema } from "./company.validation.js";

export async function createCompanyController(
  req: Request,
  res: Response
) {
  try {
    const data =
      createCompanySchema.parse(req.body);

    const company =
      await createCompany(data);

    return res.status(201).json({
      success: true,
      message: "Company created successfully",
      data: company,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      error,
    });
  }
}

export async function getCompaniesController(
  _: Request,
  res: Response
) {
  const companies =
    await getCompanies();

  return res.json({
    success: true,
    data: companies,
  });
}