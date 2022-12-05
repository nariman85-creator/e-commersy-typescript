"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gender = void 0;
const mongoose_1 = require("mongoose");
const GenderSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    createdIn: Date
});
exports.Gender = (0, mongoose_1.model)("gender", GenderSchema);
