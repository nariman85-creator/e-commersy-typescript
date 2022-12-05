import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { Category } from "../models/Category";

const router = express.Router();

router.post("/category", async (req: Request, res: Response) => {
  try {
    const category = req.body.category as string;
    const lowerCategory = category.trim().toLowerCase();

    if (lowerCategory === "") {
      res.status(401).json({
        status: "error",
        message: "Category name not.....",
      });
      return;
    }

    const isCategory = await Category.findOne({ name: lowerCategory });
    if (isCategory) {
      res.json({
        status: "error",
        data: isCategory,
      });
      return;
    }
    const newCategory = await new Category({ name: category });
    await newCategory.save();
    res.json({
      status: "success",
      data: newCategory,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});

router.delete("/category/:id", async (req: Request, res: Response) => {
  try {
    const { id: _id } = req.params;
    if (!_id) {
      res.status(404).json({
        status: "error",
        message: "Категория не найдена",
      });
    }

    if (mongoose.Types.ObjectId.isValid(_id)) {
      const categoryDel = await Category.findOneAndDelete({ _id });
      res.status(200).json({
        status: "success",
        data: categoryDel,
      });
      return;
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message:error
    })
  }
});
router.get("/category/all", async (req: Request, res: Response) => {
  try {
    const categoryRes = await Category.find({});
    if (categoryRes.length === 0) {
      res.status(404).json({
        status: "error",
        message: "Категории не найдены",
      });
      return;
    }
    res.status(200).json({
      status: "success",
      data: categoryRes,
    });
  } catch (error) {
    res.status(500).json({
      status: "Internal Error",
      message: "Что-то пошло не так",
    });
  }
});

export { router };
