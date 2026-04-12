import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import {User} from "../models/Users"

declare module "express-serve-static-core" {
  interface Request {
    user?: any;
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer", "");
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || "Anish9869031045") as any;
        const user = await User.findById(decoded.userId);

        if (!user) {
          return res.status(401).json({ message: "User not found" });
        }

        req.user = user;
        next();

    } catch (error) {
        res.status(401).json({ message: "Invalid authorization token!", error });
    }
}