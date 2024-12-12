import { Request, Response } from "express";
import { create, gets, get } from "@services/food.service";
import { UploadFile } from "@middlewares/upload/cloudinary";

interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
  [key: string]: unknown;
}

export const createFood = async (req: Request, res: Response) => {
  try {
    const {
      file,
      body: { name, description, price, category },
    } = req;

    if (!file) {
      res.status(400).json({ message: "Image is required" });
      return;
    }

    const folderPath = `FoodImages/${category}`;

    // Upload image
    const upload = (await UploadFile(
      file.path,
      folderPath
    )) as CloudinaryUploadResult;

    const { secure_url: image_url } = upload;

    const newFood = await create({
      name,
      description,
      price,
      image_url,
      category,
    });
    res.status(201).json({ message: "Success", data: newFood });
  } catch (error) {
    res.status(400).json({ message: "Failed to Create Food", data: error });
  }
};

export const getFoods = async (req: Request, res: Response) => {
  try {
    const foods = await gets();
    res.status(200).json({ message: "Get Foods", data: foods });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const getFood = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const food = await get(id);
    if (!food) {
      res.status(404).json({ message: "Food Not Found" });
      return;
    }
    res.status(200).json({ message: "Get Food", data: food });
  } catch (error) {
    res.status(404).json({ message: "Food Not Found", error });
  }
};
