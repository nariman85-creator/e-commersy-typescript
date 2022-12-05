import { Schema, model, SchemaDefinitionProperty } from "mongoose";

export interface ICatalogSchema {
  _id?: string;
  name: string;
  category: SchemaDefinitionProperty<string>;
  gender: { _id: SchemaDefinitionProperty<string> }[];
}

const CatalogSchema = new Schema<ICatalogSchema>(
  {
    name: { type: String, required: true, unique: true },
    category: { type: Schema.Types.ObjectId, ref: "category" },
    gender: [{ type: Schema.Types.ObjectId, ref: "gender" }]
  },
  { timestamps: true }
);

export const Catalog = model("catalog", CatalogSchema);
