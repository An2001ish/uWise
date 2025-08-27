"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from 'lucide-react';
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const [currenttime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screnn bg-background p-8">
      <Container className="pt-20 pb-8 space-y-6">
        <div className="flex flex-col gap-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2"
          >
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="text-muted-foreground text-sm">
              {currenttime.toLocaleTimeString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
          </motion.div>
        </div>
        <div className="spave-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <Card className="border-primary/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent"></div>
                    <CardContent className="p-6 relative">
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className=" w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-primary"/>
                          </div>
                        </div>
                      </div>
                        <h3 className="font-semibold text-lg">Quick Actions</h3>
                        <p className="text-sm text-muted-foreground">
                          Start your day with a quick action
                        </p>
                        <div className="grid gap-3">
                          <Button
                          variant="default"
                          className={cn("w-full justify-between items-center p-6 h-auto group/button","bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/100","transition-all duration-200 group-hover:translate-y-[2px]")}
                          onClick={() => {}}>
                          
                          </Button>
                        </div>
                    </CardContent>
                </Card>
              </div>
        </div>
      </Container>
    </div>
  );
}
