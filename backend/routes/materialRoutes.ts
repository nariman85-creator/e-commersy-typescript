import { Request, Response, Router } from "express";
import { Material } from "../models/Materials";

const routerMaterial = Router();

routerMaterial.post("/material", async (req: Request, res: Response) => {
  try {
    const { material } = req.body;

    if (!material) {
      res.status(400).json({
        status: "error",
        message: "Нет материала для добавления в базу",
      });
      return;
    }
    const matchMaterial = await Material.findOne({
      name: material.toLowerCase().trim(),
    });
    if (matchMaterial) {
      res.status(400).json({
        status: "error",
        message: "Материал уже существует",
      });
      return;
    }

    const newMaterial = await new Material({
      name: material.toLowerCase().trim(),
    });
    await newMaterial.save();
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
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});
routerMaterial.get("/material/all", async (req: Request, res: Response) => {
  try {
    const material = await Material.find({});
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
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});
routerMaterial.delete("/material/:id", async (req: Request, res: Response) => {
  try {
    const material = req.params;
    if (!material) {
      res.status(400).json({
        status: "error",
        message: "Нет материала для удаления в базу",
      });
      return;
    }
    const deleteMaterial = await Material.findByIdAndDelete({ _id: material });
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
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});
routerMaterial.put("/material/:id", async (req: Request, res: Response) => {
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
    const updateMaterial = await Material.findByIdAndUpdate(
      {
        _id: materialId,
      },
      { name: material }
    );
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
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});
export default routerMaterial;

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
