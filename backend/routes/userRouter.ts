import express, { Request, Response } from "express";
import { IUserProps, User } from "../models/User";
import { createToken } from "../utils/helper";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userRouter = express.Router();

userRouter.get("/", async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    if (!users) {
      res.status(404).json({
        status: "error",
        message: "Пользователи не найдены",
      });
      return;
    }
    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
    return;
  }
});

userRouter.post("/auth/signin", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body.data;


    const matchUser: IUserProps | null = await User.findOne({
      email,
    });

    if (!matchUser) {
      res.status(400).json({
        status: "error",
        message: "Не правильный эмайл",
      });
      return;
    }
    if (!bcrypt.compareSync(password, matchUser.password)) {
      res.status(400).json({
        status: "error",
        message: "Пароль не верен",
      });
      return;
    }

    res.status(200).json({
      status: "success",
      data: matchUser,
      token: createToken(matchUser),
    });
    return;
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
    return;
  }
});

userRouter.post("/auth/signup", async (req: Request, res: Response) => {
  try {
    const { data } = req.body;
    const user: IUserProps = { ...data };
    if (!user) {
      res.status(400).json({
        status: "error",
        message: "Нет данных для сохранения",
      });
      return;
    }
    const findUser = await User.find({
      email: user.email,
    });

    if (findUser.length > 0) {
      res.status(400).json({
        status: "error",
        message: "Уже есть такой эмаил и пароль",
      });
      return;
    }
    if (findUser.length === 0) {
      const candidate = await new User({
        ...user,
        firstname: user.firstname ? user.firstname : "",
        lastname: user.lastname ? user.lastname : "",
        password: user.password ? user.password : "",
        age: user.age,
        role: user.role ? user.role : "user",
      });

      await candidate.save();
      if (candidate) {
        res.status(201).json({
          status: "success",
          messaage: "signUp",
        });
        return;
      }

      res.status(401).json({
        status: "error",
        messaage: "notSignUp",
      });
      return;
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});

export default userRouter;
