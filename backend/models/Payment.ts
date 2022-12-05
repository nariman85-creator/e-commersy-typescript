import { Schema, model, SchemaDefinitionProperty } from "mongoose";

interface IPaymentMethod {
  paymantMethod:
    | {
        creditCard: string;
        payCardCode: string;
        payCardDate: Date;
        payCardCVC: string;
      }
    | string;
  isPaid: boolean;
  paidAt: Date;

  paymentResult: {
    orderId: SchemaDefinitionProperty<string>;
    payerId: SchemaDefinitionProperty<string>;
  };
}
const paymentMethodSchema = new Schema<IPaymentMethod>({
  paymantMethod:
    {
      creditCard: String,
      payCardCode: String,
      payCardDate: Date,
      payCardCVC: String,
    } || String,

  isPaid: { type: Boolean, default: false },
  paidAt: Date,
  paymentResult: {
    orderId: { type: Schema.Types.ObjectId, ref: "order" },
    payerId: { type: Schema.Types.ObjectId, ref: "user" },
  },
});

export const PaymentMethod = model("Payment", paymentMethodSchema);
