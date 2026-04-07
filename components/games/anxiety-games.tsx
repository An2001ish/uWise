"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  BrainCircuit,
  Heart,
  MessageSquare,
  ArrowRight,
  Waves,
  Wind
} from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { desc } from "framer-motion/client";

const games = [
    {
        id: "breathing",
        title: "Breathing Patterns",
        description: "Follow calming breating exercises with visual guidance.",
        icon: Wind,
        color: "from-blue-500",
        bgColor: "bg-blue-500/10",
        duration: "5 mins",
    },
    {
        id: "waves",
        title: "Ocean Waves",
        description: "Match your beath with gentle ocean waves.",
        icon: Waves,
        color: "from-cyan-500",
        bgColor: "bg-cyan-500/10",
        duration: "8 mins",
    },
    
]

interface AnxietyGamesProps {
  onGamePlayed?: (gameName: string, description: string) => Promise<void>;
}

export const AnxietyGames = ({onGamePlayed}: AnxietyGamesProps)=>{
    const [selectedGame, setSelectedGame] = useState<string | null>(null);
    const [showGame, setShowGame] = useState(false);
    
    const hanldeGameStart = async (gameId: string) => {
        setSelectedGame(gameId);
        setShowGame(true);
        if(onGamePlayed){
            try{
                await onGamePlayed(gameId, games.find((g) => g.id === gameId)?.description || "");
            }catch(e){
                console.error("Error logging game activity:",e);
            }
        }
    }

    const renderGame = () =>{
        switch (selectedGame){
            case "beathing":    
            case "garden":
            case "forest":
            case "waves":

            default:
                return null;
        
        }
    }

    return(
        <>

        <Card className="border-primary/10">
        <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
                {/* <Gamepad2 className="w-5 h-5 text-primary">Anxitey Relief Activities</Gamepad2> */}
            </CardTitle>
            <CardDescription> Interactive exercises to help reduce stress and anxitey</CardDescription>
        </CardHeader>
        </Card>

        </>
    )
}