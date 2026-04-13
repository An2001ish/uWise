import { Request, Response } from "express";
import { ChatSession, IChatSession } from "../models/ChatSession";
// import { GoogleGenerativeAI } from "@google/generative-ai";
import { v4 as uuidv4 } from "uuid";
import { logger } from "../utils/logger";
import { inngest } from "../inngest/index";
import { User } from "../models/Users";
import { InngestSessionResponse, InngestEvent } from "../types/inngest";
import { Types } from "mongoose";
import { Inngest } from "inngest";

export const createChatSession = async (req: Request, res: Response) => {
    try {
            if(!req.user || !req.user._id){
                return res.status(401).json({ message: "Unauthorized" });
            }
            const userId = new Types.ObjectId(req.user.id);
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            const sessionId = uuidv4();
            const session = new ChatSession({
                sessionId,
                userId,
                startTime: new Date(),
                status:"Active",
                messages: []    
            })
            await session.save()  
            res.send(201).json({
                message: "Chat session created successfully",
                sessionId: session.sessionId
            })

    } catch (error) {
        logger.error("Error creating chat session:", error);
        res.status(500).json({
            message: "Error creating chat session",
            error:error instanceof Error? error.message : "Unknown error",
        })
    }
}

export const sendMessage = async (req: Request, res: Response) => {
    try {
        const {sessionId} = req.params;
        const {message} = req.body;
        const userId = new Types.ObjectId(req.user.id)

        logger.info("Processing message:",{sessionId, message})
        const session = await ChatSession.findOne ({sessionId, userId})

        if (!session) {
            logger.warn("Session not found:",{sessionId})
            return res.status(404).json({message:"Session not found"})
        }

        if (session.userId.toString()!==userId.toString()) {
            logger.warn("Unauthorized access attempted:",{sessionId, userId})
            return res.status(403).json({message:"Unauthorized"})
        }

        const event:InngestEvent = {
            name:"therapt/session.message",
            data:{

            }
        }

    } catch (error) {
        
    }
}