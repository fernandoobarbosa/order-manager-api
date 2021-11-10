import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import auth from "../middleware/auth";
import { createUser } from "../controllers/userController";
import { generateToken } from "../controllers/loginController";
import {
  createFood,
  updateFood,
  removeFood,
  getFoodById,
} from "../controllers/foodController";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.post("/login", (req, res) => {
  generateToken(req.body.email, req.body.password, res);
});

app.post("/user", (req, res) => {
  createUser(req.body.email, req.body.password, res);
});

//food

app.post("/food", auth, (req, res) => {
  console.log(req.body.imageUrl);
  createFood(req.body.name, req.body.price, req.body.imageUrl, res);
});

app.put("/food/:id", auth, (req, res) => {
  updateFood(
    req.params.id,
    req.body.name,
    req.body.price,
    req.body.imageUrl,
    res
  );
});

app.delete("/food/:id", auth, (req, res) => {
  removeFood(req.params.id, res);
});

app.get("/food/:id", auth, (req, res) => {
  getFoodById(req.params.id, res);
});
export default app;
