"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload = void 0;
const mongoose_1 = require("mongoose");
const UploadSchema = new mongoose_1.Schema({
    filename: { type: String, required: true },
    filepath: String,
    category_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category" },
    product_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "Product" },
    filesize: Number,
});
exports.Upload = (0, mongoose_1.model)("Upload", UploadSchema);
