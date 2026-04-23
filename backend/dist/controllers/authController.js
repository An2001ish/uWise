"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.register = void 0;
const Users_1 = require("../models/Users");
const Session_1 = require("../models/Session");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res
                .status(400)
                .json({ message: "Name, email and password are required" });
        }
        const existingUser = await Users_1.User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already in use." });
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const user = new Users_1.User({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },
            message: "User registered successfully.",
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error registering user.", error });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Email and password are required." });
        }
        const user = await Users_1.User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials." });
        }
        const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials." });
        }
        const token = jsonwebtoken_1.default.sign({
            userId: user.id,
        }, process.env.JWT_SECRET || "Anish9869031045", { expiresIn: "24hr" });
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + 24);
        const session = new Session_1.Session({
            userId: user._id,
            token,
            expiresAt,
            deviceInfo: req.headers["user-agent"],
        });
        await session.save();
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },
            token,
            message: "Login Successful!",
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error logging in.", error });
    }
};
exports.login = login;
const logout = async (req, res) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (token) {
            await Session_1.Session.deleteOne({ token });
        }
        res.json({ message: "Logged out successfully!" });
    }
    catch (error) {
        res.status(500).json({ message: "Error logging out.", error });
    }
};
exports.logout = logout;
//# sourceMappingURL=authController.js.map