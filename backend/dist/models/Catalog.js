"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog = void 0;
const mongoose_1 = require("mongoose");
const CatalogSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: "category" },
    gender: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "gender" }]
}, { timestamps: true });
exports.Catalog = (0, mongoose_1.model)("catalog", CatalogSchema);
