import express from "express";
import upload from "../middlewares/upload/multer";
import { createFood, getFoods, getFood } from "../controllers/food.controller";

const router = express.Router();

router.post("/", upload.single("image"), createFood);
router.get("/", getFoods);
router.get("/:id", getFood);

export default router;
