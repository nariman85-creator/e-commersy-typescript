import express, { Request, Response } from "express";
import { Gender } from "../models/Gender";

const genderRouter = express.Router();

genderRouter.post("/gender/create", async (req: Request, res: Response) => {
  try {
    const { gender_item } = req.body;
    if (!gender_item) {
      res.status(400).json({
        status: "error",
        message: "Нет гендерных имен",
      });
      return;
    }
    const gender = await Gender.findOne({ name: gender_item });
    if (gender) {
      res.status(400).json({
        status: "error",
        message: "Уже есть гендер сохранить гендер",
      });
      return;
    }
    const newGender = await Gender.create({ name: gender_item });
    if (!newGender) {
      res.status(400).json({
        status: "error",
        message: "Не удалось сохранить гендер",
      });
      return;
    }
    res.status(201).json({
      status: "success",
      message: newGender,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});
genderRouter.get("/gender/all", async (req: Request, res: Response) => {
  try {
    const genderList = await Gender.find({});
    console.log(genderList);

    if (!genderList) {
      res.status(400).json({
        status: "error",
        message: "Не удалось получить  гендер",
      });
      return;
    }
    res.status(200).json({
      status: "error",
      message: genderList,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});
genderRouter.get("/gender/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(req.params);

    if (!id) {
      res.status(400).json({
        status: "error",
        message: "Нет идентификатор гендерных имен",
      });
      return;
    }

    const newGender = await Gender.findById({ _id: id });
    if (!newGender) {
      res.status(400).json({
        status: "error",
        message: "Не удалось получить  гендер",
      });
      return;
    }
    res.status(200).json({
      status: "error",
      message: newGender,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});
genderRouter.delete("/gender/:id", async (req: Request, res: Response) => {
  try {
    const { gender_id } = req.params;
    if (!gender_id) {
      res.status(400).json({
        status: "error",
        message: "Нет идентификатор гендерных имен",
      });
      return;
    }

    const newGender = await Gender.findByIdAndDelete({ _id: gender_id });
    if (!newGender) {
      res.status(400).json({
        status: "error",
        message: "Не удалось удалить  гендер",
      });
      return;
    }
    res.status(200).json({
      status: "error",
      message: newGender,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});

export default genderRouter;
