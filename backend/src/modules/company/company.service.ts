import { Company } from "./company.model.js";

interface CreateCompanyDTO {
  name: string;
  domain?: string;
}

export async function createCompany(
  data: CreateCompanyDTO
) {
  return Company.create(data);
}

export async function getCompanies() {
  return Company.find().sort({
    createdAt: -1,
  });
}