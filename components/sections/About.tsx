"use client";

import { motion } from "framer-motion";
import { Heart, Users, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description:
      "Every interaction is designed with empathy and understanding at its core.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description:
      "Mental health support should be available to everyone, anytime, anywhere.",
  },
  {
    icon: Target,
    title: "Evidence-Based",
    description:
      "Our approach is grounded in proven therapeutic techniques and methodologies.",
  },
];

export function About() {
  return (
    <section className="py-24 px-4 bg-muted/30" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium text-foreground uppercase tracking-wider">
                About uWise
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2 mb-6 text-primary">
                Mental Wellness,{" "}
                <span className="text-foreground/95">Reimagined</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  uWise was born from a simple belief: everyone deserves access
                  to mental health support. Traditional therapy, while
                  invaluable, isn&apos;t always accessible when you need it
                  most—whether it&apos;s 3 AM during a sleepless night or a
                  difficult moment at work.
                </p>
                <p>
                  Our AI-powered platform bridges this gap, offering a
                  compassionate, judgment-free space where you can explore your
                  thoughts and feelings at your own pace. While we&apos;re not a
                  replacement for professional therapy, we&apos;re here to
                  complement your mental health journey with 24/7 support.
                </p>
                <p>
                  Built with privacy at its foundation, uWise ensures your
                  conversations remain confidential. Your mental health is
                  personal, and we treat it that way.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={cn(
                  "flex gap-4 p-6 rounded-2xl",
                  "bg-background border border-border",
                  "hover:border-primary/20 hover:shadow-md",
                  "transition-all duration-300",
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl shrink-0",
                    "bg-primary/10 text-primary",
                    "flex items-center justify-center",
                  )}
                >
                  <value.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: "24/7", label: "Availability" },
                { value: "100%", label: "Private" },
                { value: "Free", label: "To Start" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="text-center p-4 rounded-xl bg-background border border-border"
                >
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
