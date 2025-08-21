"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"></div>
        </div>
      </Container>
    </div>
  );
}
