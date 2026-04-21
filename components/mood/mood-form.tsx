"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Loader2 } from "lucide-react";
import { useSession } from "@/lib/contexts/session-context";
import { useRouter } from "next/navigation";

interface MoodFormProps {
  onSuccess?: () => void;
}

export function MoodForm({ onSuccess }: MoodFormProps) {
  const [moodScore, setMoodScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { user, isAuthenticated, loading } = useSession();

  const emotions = [
    { value: 0, label: "😔", description: "Very Low" },
    { value: 25, label: "😕", description: "Low" },
    { value: 50, label: "😊", description: "Neutral" },
    { value: 75, label: "😃", description: "Good" },
    { value: 100, label: "🤗", description: "Great" },
  ];

  const currentEmotion =
    emotions.find((em) => Math.abs(moodScore - em.value) < 15) || emotions[2];

    const handleSubmit= async ()=>{
      console.log("MoodForm: Starting submission");
      console.log("MoodForm: Auth state:", { isAuthenticated, loading, user });
      if (!isAuthenticated) {
        alert("You must be logged in to save your mood");
        router.push("/login");
        return
      }
      try {
        setIsLoading(true);
        const token = localStorage.getItem("token");
        console.log(
          "MoodForm: Token from localStorage:",
          token ? "exists" : "not found",
        );

        const response = await fetch("/api/mood", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ score: moodScore }),
        });
        
        console.log("MoodForm: Response status:", response.status);
        
        if(!response.ok){
          const error = await response.json();
          console.error("MoodForm: Error response:", error)
          throw new Error(error.error || "Failed to save mood");
        }


        const data = await response.json();
        alert("Mood saved successfully!"); 
        onSuccess?.();

        }
      catch (err: any) {
       alert(err.message || "Failed to save mood");
      }
      finally{
        setIsLoading(false);
      }
    }

  return (
    <div className="space-y-6 py-4">
      <div className="text-center space-y-2">
        <div className="text-4xl">{currentEmotion.label}</div>
        <div className="text-sm text-muted-foreground">
          {currentEmotion.description}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between px-2">
          {emotions.map((em) => (
            <div
              key={em.value}
              className={`cursor-pointer transition-opacity ${Math.abs(moodScore - em.value) < 15 ? "opacity-100" : "opacity-50"}`}
              onClick={() => setMoodScore(em.value)}
            >
              <div className="text-2xl">{em.label}</div>
            </div>
          ))}
        </div>
        <Slider
          value={[moodScore]}
          onValueChange={(value) => setMoodScore(value[0])}
          min={0}
          max={100}
          step={1}
          className="py-4"
        ></Slider>
      </div>
      <Button className="w-full"
      onClick={handleSubmit}
      disabled = {isLoading || loading}
      >{isLoading || loading ? "Saving...": "Save Mood"}</Button>
    </div>
  );
}
