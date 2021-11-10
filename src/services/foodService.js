import Food from "../models/food";

export const create = async (name, price, imageUrl) => {
  const food = await Food.insertMany([
    { name: name, price: price, imageUrl: imageUrl },
  ]);
  return food;
};

export const update = async (id, name, price, imageUrl) => {
  const food = await Food.findOneAndUpdate(
    { _id: id },
    { name: name, price: price, imageUrl: imageUrl },
    { new: true }
  );

  return food;
};

export const remove = async (id) => {
  const food = await Food.findOneAndDelete({ _id: id });
  return food;
};

export const getById = async (id) => {
  const food = await Food.findById(id);
  return food;
};
