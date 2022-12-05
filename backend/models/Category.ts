import { Schema, model } from "mongoose";

export interface ICategorySchemaProps {
  _id?: string;
  name: string;
}

const CategorySchema = new Schema<ICategorySchemaProps>({
  name: { type: String, required: true, unique: true },
});

export const Category = model("category", CategorySchema);
