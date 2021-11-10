import User from "../models/user";
import hash from "object-hash";

export const create = async (email, password) => {
  const hashPassword = hash(password);
  const user = await User.insertMany([
    { email: email, password: hashPassword },
  ]);
  return user;
};

export const getById = async (id) => {
  const user = await User.findById(id);
  return user;
};
