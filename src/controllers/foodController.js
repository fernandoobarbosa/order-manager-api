import { create, update, remove, getById } from "../services/foodService";

export const createFood = async (name, price, imageUrl, res) => {
  try {
    const result = await create(name, price, imageUrl);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateFood = async (id, name, price, imageUrl, res) => {
  try {
    const result = await update(id, name, price, imageUrl);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const removeFood = async (id, res) => {
  try {
    await remove(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getFoodById = async (id, res) => {
  try {
    const result = await getById(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
