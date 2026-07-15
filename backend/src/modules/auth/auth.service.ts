import { User } from "./user.model.js";

export async function findUserByEmail(
  email: string
) {
  return User.findOne({ email });
}

export async function createUser(
  data: {
    name: string;
    email: string;
    googleId: string;
    avatar?: string;
  }
) {
  return User.create(data);
}

export async function completeOnboarding(
  userId: string,
  companyName: string,
  mailbox: string
) {
  return User.findByIdAndUpdate(
    userId,
    {
      companyName,
      mailbox,
    },
    {
      new: true,
    }
  );
}