import { Company } from "./company.model.js";

interface CreateCompanyDTO {
  name: string;
  domain?: string;
}

export async function createCompany(
  data: CreateCompanyDTO
) {
  const company = await Company.create(data);

  return company;
}

export async function getCompanies() {
  return Company.find().sort({
    createdAt: -1,
  });
}