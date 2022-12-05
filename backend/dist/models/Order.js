"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.OrderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.OrderSchema = new mongoose_1.Schema({
    orderItems: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "product",
        },
    ],
    userID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
    },
    ordered: { type: Boolean, default: false },
    payment: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "payment" }],
    shipping: { shippingMethod: String },
    returnProduct: Boolean,
    isDelivered: Boolean,
    deliveredAt: Date,
    createdAt: String,
});
exports.OrderSchema.pre("save", function (next) {
    this.createdAt = `${new Date().getDay()}:${new Date().getMonth()}:${new Date().getUTCFullYear()}`;
    console.log(this);
    next();
});
exports.Order = (0, mongoose_1.model)("Order", exports.OrderSchema);
