import { Router } from "express";

import {
  createCompanyController,
  getCompaniesController,
} from "./company.controller.js";

const router = Router();

router.post(
  "/",
  createCompanyController
);

router.get(
  "/",
  getCompaniesController
);

export default router;