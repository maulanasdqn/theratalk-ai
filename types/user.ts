export type TUser = {
  id: string;
  fullname?: string | null;
  image?: string | null;
  email: string;
  emailVerified: Date | null;
  address?: string | null;
  password: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
};
