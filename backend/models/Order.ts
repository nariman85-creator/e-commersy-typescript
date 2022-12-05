import { Schema, model, SchemaDefinitionProperty } from "mongoose";

interface IOrderProps {
  orderItems: {
    product: SchemaDefinitionProperty<string> | undefined;
  }[];
  userID: SchemaDefinitionProperty<string> | undefined;
  shipping: { shippingMethod: string };
  payment: SchemaDefinitionProperty<string> | undefined;
  address: SchemaDefinitionProperty<string> | undefined;
  returnProduct: boolean;
  ordered: boolean;
  isDelivered: boolean;
  deliveredAt: Date;
  createdAt: string;
}

export const OrderSchema = new Schema<IOrderProps>({
  orderItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  userID: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  ordered:{type:Boolean,default:false},
  payment: [{ type: Schema.Types.ObjectId, ref: "payment" }],
  shipping: { shippingMethod: String },
  returnProduct: Boolean,

  isDelivered: Boolean,
  deliveredAt: Date,
  createdAt: String,
});
OrderSchema.pre("save", function (next) {
  this.createdAt = `${new Date().getDay()}:${new Date().getMonth()}:${new Date().getUTCFullYear()}`;
  console.log(this);

  next();
});

export const Order = model<IOrderProps>("Order", OrderSchema);
