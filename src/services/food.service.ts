import { Food, IFood } from "@models/food.model";

export const create = async (food: IFood): Promise<IFood> => {
  try {
    const newFood = await Food.create(food);
    return newFood; // Tidak perlu Promise.resolve
  } catch (error) {
    throw error; // Tidak perlu Promise.reject
  }
};

export const gets = async () => {
  try {
    const foods = await Food.find({});
    return foods;
  } catch (error) {
    throw error;
  }
};

export const get = async (id: string) => {
  try {
    const food = await Food.findById({});
    if (!food) {
      throw new Error("Food Not Found"); // Return string diubah menjadi error
    }
    return food;
  } catch (error) {
    throw error;
  }
};
