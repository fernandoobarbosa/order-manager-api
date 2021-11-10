import mongoose from "../config/database";

const FoodSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, default: "" },
});

const Food = mongoose.model("Food", FoodSchema);
export default Food;
