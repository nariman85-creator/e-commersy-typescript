import { Schema, model } from "mongoose";

interface IGenderProps {
  name: string;
  createdIn: Date;
}

const GenderSchema = new Schema<IGenderProps>({
  name: {type:String,required:true},
  createdIn: Date
});

export const Gender = model("gender", GenderSchema);
