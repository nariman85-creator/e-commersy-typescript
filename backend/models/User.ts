import { Schema, model, SchemaDefinitionProperty } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export interface IUserProps {
  firstname: string;
  lastname: string;
  gender: "men" | "women";
  email: string;
  password: string;
  age: number;
  role: "admin" | "user";
  order: SchemaDefinitionProperty<string> | undefined[];
  address: SchemaDefinitionProperty<string>;
}

const UserSchema = new Schema<IUserProps>(
  {
    firstname: { type: String },
    lastname: { type: String },
    gender: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    age: { type: Number, default: 0 },
    role: {
      type: String,
      default: "user",
    },
    order: {
      type: Schema.Types.ObjectId,
      ref: "order",
    },
    address: { type: Schema.Types.ObjectId, ref: "address" },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  try {
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = await bcrypt.hashSync(this.password, salt);
    this.password = passwordHash;
    next();
  } catch (error) {
    return;
  }
});
UserSchema.methods.createToken = function () {
  const token = jwt.sign(this, process.env.SECRET_KEY || "nariman");

  return this.model("User");
};
UserSchema.methods.parseToken = function (token:string) {
  const tokenParse = jwt.verify(token, process.env.SECRET_KEY || "nariman");

  return this.model("User");
};

UserSchema

export const User = model<IUserProps>("User", UserSchema);
