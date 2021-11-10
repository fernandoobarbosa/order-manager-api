import jwt from "jsonwebtoken";
import authConfig from "../config/auth.json";
import hash from "object-hash";
import User from "../models/user";

export const loginValidation = async (email, password) => {
  const hashPassword = hash(password);

  const user = await User.findOne({
    login: email,
    password: hashPassword,
  });
  if (user) {
    const id = user._id;

    const token = jwt.sign({ id }, authConfig.secret, {
      expiresIn: 86400, // expira em 1 dia
    });
    const userInfo = {
      email: email,
      id: user._id,
      isAdmin: user.isAdmin,
    };
    return { token: token, user: userInfo };
  }
};
