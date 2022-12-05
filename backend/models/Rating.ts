import { Schema, model, SchemaDefinitionProperty } from "mongoose";

interface IRateProps {
  rate: number;
  user: SchemaDefinitionProperty<string> | undefined;
}

const RatingSchema = new Schema<IRateProps>({
  rate: { type: Number, default: 0 },
  user: { type: Schema.Types.ObjectId, ref: "user" },
});

export const Rating = model("rating", RatingSchema);
