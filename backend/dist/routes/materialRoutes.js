"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Materials_1 = require("../models/Materials");
const routerMaterial = (0, express_1.Router)();
routerMaterial.post("/material", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { material } = req.body;
        if (!material) {
            res.status(400).json({
                status: "error",
                message: "Нет материала для добавления в базу",
            });
            return;
        }
        const matchMaterial = yield Materials_1.Material.findOne({
            name: material.toLowerCase().trim(),
        });
        if (matchMaterial) {
            res.status(400).json({
                status: "error",
                message: "Материал уже существует",
            });
            return;
        }
        const newMaterial = yield new Materials_1.Material({
            name: material.toLowerCase().trim(),
        });
        yield newMaterial.save();
        if (!newMaterial) {
            res.status(403).json({
                status: "error",
                message: "Не удалось создать материал",
            });
            return;
        }
        res.status(201).json({
            status: "success",
            data: newMaterial,
        });
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
routerMaterial.get("/material/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const material = yield Materials_1.Material.find({});
        if (!material) {
            res.status(404).json({
                status: "error",
                message: "Material not found",
            });
            return;
        }
        res.status(200).json({
            status: "success",
            data: material,
        });
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
routerMaterial.delete("/material/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const material = req.params;
        if (!material) {
            res.status(400).json({
                status: "error",
                message: "Нет материала для удаления в базу",
            });
            return;
        }
        const deleteMaterial = yield Materials_1.Material.findByIdAndDelete({ _id: material });
        if (!deleteMaterial) {
            res.status(403).json({
                status: "error",
                message: " материал не получилось удалить",
            });
            return;
        }
        res.status(201).json({
            status: "error",
            data: deleteMaterial,
        });
        return;
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
routerMaterial.put("/material/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const materialId = req.params;
        const { material } = req.body;
        if (!materialId && !material) {
            res.status(400).json({
                status: "error",
                message: "Нет материала для изменение в базу",
            });
            return;
        }
        const updateMaterial = yield Materials_1.Material.findByIdAndUpdate({
            _id: materialId,
        }, { name: material });
        if (!updateMaterial) {
            res.status(404).json({
                status: "error",
                message: "Не нашли материл для обновления",
            });
        }
        res.status(201).json({
            status: "error",
            data: updateMaterial,
        });
        return;
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
exports.default = routerMaterial;
// "default-offer":{"isCutPrice":false,"isDSBS":false,"isDigital":false,"isBnpl":true,"isCredit":true},
// "skuId": "101779256114",
//  "offerId": "XSvlfAv6C4mxeqBkzLMbAQ",
//  "price": 3950,
// "oldPrice": 4550,
//  "productId": 1757809964,
//  "wareId": "XSvlfAv6C4mxeqBkzLMbAQ",
//  "feedId": 475690,
//  "shopId": 431782,
//  "supplierId": 431782,
//  "isExpress": false,
//  "isAnyExpress": false,
//  "shop_sku": "BFBd-013-225BonaBomBla-XS",
//  "isBnpl": true,
//  "isCredit": true,
//  "isInstallments": false,
//  "warehouseId": 219445,
//  "businessId": 849684,
//  "isFoodtech": 0,
//  "hasBadgeNew": false,
//  "hasBadgeExclusive": false,
//  "hasBadgeRare": false,
//  "hasBadgeResale": false,
//  "promos": [],
//  "brandName": "yandex-market",
//  "hasAddress": 0,
//  "showUid": "16597182896604742006300001",
//   "actualStock": 3
