import { Schema, model, SchemaDefinitionProperty } from "mongoose";

export interface CommentsProps {
  title: string;
  description: string;
  product_id: SchemaDefinitionProperty<string>;
  author: SchemaDefinitionProperty<string>;
}

const CommentSchema = new Schema<CommentsProps>(
  {
    title: String,
    description: String,
    product_id: { type: Schema.Types.ObjectId, ref: "product" },
    author: { type: Schema.Types.ObjectId, ref: "user" },
  },
  { timestamps: true }
);

export const Comments = model("Comments", CommentSchema);
