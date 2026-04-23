"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Shield,
  Clock,
  MessageSquare,
  Sparkles,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Therapy",
    description:
      "Advanced AI trained on therapeutic techniques to provide meaningful, personalized mental health support.",
  },
  {
    icon: Shield,
    title: "Safe & Confidential",
    description:
      "Your conversations are private and secure. We prioritize your mental health journey with complete confidentiality.",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    description:
      "Access support whenever you need it. No appointments, no waiting rooms—just immediate, compassionate care.",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description:
      "Engage in fluid, empathetic conversations that feel authentic and supportive, not robotic or scripted.",
  },
  {
    icon: Sparkles,
    title: "Personalized Insights",
    description:
      "Receive tailored guidance and coping strategies based on your unique experiences and emotional patterns.",
  },
  {
    icon: Lock,
    title: "Your Data, Your Control",
    description:
      "Full control over your session history. Delete conversations anytime with complete peace of mind.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Features() {
  return (
    <section className="py-24 px-4" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 text-primary">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            uWise Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Experience mental wellness support designed for the modern
            world—accessible, private, and always there when you need it.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={cn(
                "group relative p-6 rounded-2xl",
                "bg-card border border-border",
                "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:bg-primary/10",
                "transition-all duration-300",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-xl mb-4",
                  "bg-primary/10 text-primary",
                  "flex items-center justify-center",
                  "group-hover:bg-primary group-hover:text-primary-foreground",
                  "transition-colors duration-300",
                )}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 cursor-default">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed cursor-default">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
