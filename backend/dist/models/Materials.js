"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Material = void 0;
const mongoose_1 = require("mongoose");
const MaterialSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    title: String,
});
exports.Material = (0, mongoose_1.model)("Material", MaterialSchema);
