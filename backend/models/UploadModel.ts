import { Schema, model, SchemaDefinitionProperty } from "mongoose";

interface IUploadProps {
  filename: string;
  filepath: string;
  filesize: number;
  category_id: SchemaDefinitionProperty<string> | undefined;
  product_id: SchemaDefinitionProperty<string> | undefined;
}

const UploadSchema = new Schema<IUploadProps>({
  filename: { type: String, required: true },
  filepath: String,
  category_id: { type: Schema.Types.ObjectId, ref: "Category"},
  product_id: { type: Schema.Types.ObjectId, ref: "Product" },
  filesize: Number,
});

export const Upload = model("Upload", UploadSchema);
