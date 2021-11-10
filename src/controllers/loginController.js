import { loginValidation } from "../services/loginService";

export const generateToken = async (email, password, res) => {
  try {
    const result = await loginValidation(email, password);
    if (result) res.status(200).send(result);
    res
      .status(404)
      .send({ message: "You have entered a incorrect login or password." });
  } catch (err) {
    res.status(500).send(err);
  }
};
