import { Schema, model } from "mongoose";
import * as Yup from "yup";

export const FoodSchemaValidate = Yup.object({
  name: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
  image_url: Yup.string(),
  //   Check if category is either "Makanan" or "Minuman"
  //   Add message error if category is not "Makanan" or "Minuman"
  category: Yup.string()
    .oneOf(["Makanan", "Minuman"])
    .required()
    .test({
      message: "Category must be either 'Makanan' or 'Minuman'",
      test: (value) => ["Makanan", "Minuman"].includes(value!),
    }),
});

export interface IFood {
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
}

const FoodSchema = new Schema<IFood>(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
    },
    price: {
      type: Schema.Types.Number,
      required: true,
    },
    image_url: {
      type: Schema.Types.String,
      default: "abc.jpg",
    },
    category: {
      type: Schema.Types.String,
      enum: ["Makanan", "Minuman"],
      required: true,
    },
  },
  { timestamps: true }
);

export const Food = model("Food", FoodSchema);
