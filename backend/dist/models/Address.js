"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const mongoose_1 = require("mongoose");
const AddressSchema = new mongoose_1.Schema({
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
    city: String,
    zipCode: String,
    country: String,
    street: String,
    phone: String,
});
exports.Address = (0, mongoose_1.model)('Address', AddressSchema);
