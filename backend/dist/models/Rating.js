"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
const mongoose_1 = require("mongoose");
const RatingSchema = new mongoose_1.Schema({
    rate: { type: Number, default: 0 },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
});
exports.Rating = (0, mongoose_1.model)("rating", RatingSchema);
