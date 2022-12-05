import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { IUserProps } from "../models/User";

export const createHash = (pass: string): string => {
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(pass, salt);
  return passwordHash;
};
export const createToken = (user: IUserProps): string => {
  const token = jwt.sign({ user }, process.env.SECRET_KEY || "Nariman");

  return token;
};
