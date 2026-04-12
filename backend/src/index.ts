import "dotenv/config";
import express, { Request, Response } from "express";
import { serve } from "inngest/express";
import { inngest } from "./inngest";
import { functions as inngestFunctions } from "./inngest/functions";
import { logger } from "./utils/logger";
import { connectDB } from "./utils/db";
import { errorHandler } from "./middleware/error-handler";
import authRoutes from "./routes/auth";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(
  "/api/inngest",
  serve({ client: inngest, functions: inngestFunctions }),
);

app.use("/auth", authRoutes);

app.use(errorHandler);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello!");
// });

// app.get("/api/chat", (req: Request, res: Response) => {
//   res.send("Hi, how may i help you today?");
// });
const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
      logger.info(
        `Inngest endpoint available at http://localhost:${PORT}/api/inngest`,
      );
    });
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
