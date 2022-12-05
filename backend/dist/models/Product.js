"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    slug: { type: String },
    sku: String,
    comments: { type: mongoose_1.Schema.Types.ObjectId, ref: "comments" },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: "category" },
    sale: {
        is: Boolean,
        current: { type: Number, default: 0 },
    },
    name: {
        type: String,
        required: true,
    },
    manufact_details: {
        desc: String,
        feature: String,
        property: { specificity: String, charcter: String, parametr: String },
        care: {
            wash: String,
            ironing: String,
            laundry_detergent: String,
            tumble_dry: String,
        },
    },
    product_details: {
        price: Number,
        size: [{ type: String }],
        colors: [{ type: String }],
        currency: String,
        gender: { type: mongoose_1.Schema.Types.ObjectId, ref: "gender" },
        quantity: Number,
        imageUrl: { type: mongoose_1.Schema.Types.ObjectId, ref: "upload" },
        title: String,
        description: String,
        rating: { type: mongoose_1.Schema.Types.ObjectId, ref: "rating" },
        brand: { type: String },
        material: { type: mongoose_1.Schema.Types.ObjectId, ref: "material" },
        sale: { type: Number, default: 0 },
        createdAt: Date,
    },
}, {
    timestamps: true,
});
ProductSchema.pre("save", function (next) {
    this.slug = this.name + "-" + new Date().getDate();
    this.product_details.createdAt = new Date();
    next();
});
exports.Product = (0, mongoose_1.model)("product", ProductSchema);
