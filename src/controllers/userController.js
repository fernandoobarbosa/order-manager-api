import { create, getById } from "../services/userService";

export const createUser = async (email, password, res) => {
  try {
    const result = await create(email, password);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUser = async (id, res) => {
  try {
    const result = await getById(id);
    if (result) res.send(result);
    res.status(404).send("User not found");
  } catch (error) {
    res.status(500).send(error);
  }
};
