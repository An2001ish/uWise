"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const express_2 = require("inngest/express");
const inngest_1 = require("./inngest");
const functions_1 = require("./inngest/functions");
const logger_1 = require("./utils/logger");
const db_1 = require("./utils/db");
const error_handler_1 = require("./middleware/error-handler");
const auth_1 = __importDefault(require("./routes/auth"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const chat_1 = __importDefault(require("./routes/chat"));
const mood_1 = __importDefault(require("./routes/mood"));
const activity_1 = __importDefault(require("./routes/activity"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use("/api/inngest", (0, express_2.serve)({ client: inngest_1.inngest, functions: functions_1.functions }));
app.use("/auth", auth_1.default);
app.use("/chat", chat_1.default);
app.use("/api/mood", mood_1.default);
app.use("/api/activity", activity_1.default);
app.use(error_handler_1.errorHandler);
// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello!");
// });
// app.get("/api/chat", (req: Request, res: Response) => {
//   res.send("Hi, how may i help you today?");
// });
const startServer = async () => {
    try {
        await (0, db_1.connectDB)();
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            logger_1.logger.info(`Server is running on port ${PORT}`);
            logger_1.logger.info(`Inngest endpoint available at http://localhost:${PORT}/api/inngest`);
        });
    }
    catch (error) {
        logger_1.logger.error("Failed to start server:", error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=index.js.map