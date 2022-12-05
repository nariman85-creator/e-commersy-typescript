"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comments = void 0;
const mongoose_1 = require("mongoose");
const CommentSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    product_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "product" },
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
}, { timestamps: true });
exports.Comments = (0, mongoose_1.model)("Comments", CommentSchema);
