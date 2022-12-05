"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethod = void 0;
const mongoose_1 = require("mongoose");
const paymentMethodSchema = new mongoose_1.Schema({
    paymantMethod: {
        creditCard: String,
        payCardCode: String,
        payCardDate: Date,
        payCardCVC: String,
    } || String,
    isPaid: { type: Boolean, default: false },
    paidAt: Date,
    paymentResult: {
        orderId: { type: mongoose_1.Schema.Types.ObjectId, ref: "order" },
        payerId: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
    },
});
exports.PaymentMethod = (0, mongoose_1.model)("Payment", paymentMethodSchema);
