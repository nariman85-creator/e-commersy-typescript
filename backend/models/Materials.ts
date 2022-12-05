import { Schema, model } from "mongoose";

export interface IMaterialProps {
  name: string;
  title: string;
}

const MaterialSchema = new Schema<IMaterialProps>({
  name: { type: String, required: true },
  title: String,
});

export const Material = model("Material", MaterialSchema);
