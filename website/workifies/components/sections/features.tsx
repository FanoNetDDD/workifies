"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Users, 
  Clock, 
  MessageSquare, 
  Shield, 
  BarChart3,
  Calendar,
  Smartphone
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Company Management",
    description: "Create and manage your company profile with unique codes for easy employee onboarding and organization.",
    color: "bg-blue-500",
  },
  {
    icon: Users,
    title: "Employee Tracking",
    description: "Monitor employee activities, work status, and productivity with real-time tracking and comprehensive insights.",
    color: "bg-green-500",
  },
  {
    icon: Clock,
    title: "Work Hours Logging",
    description: "Accurate time tracking with automated work hours calculation, overtime monitoring, and detailed reports.",
    color: "bg-purple-500",
  },
  {
    icon: MessageSquare,
    title: "Team Chat",
    description: "Seamless communication with built-in messaging system for teams to collaborate and stay connected.",
    color: "bg-orange-500",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security with end-to-end encryption to protect your sensitive business data.",
    color: "bg-red-500",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive analytics and reporting tools to gain insights into team performance and productivity.",
    color: "bg-cyan-500",
  },
  {
    icon: Calendar,
    title: "Schedule Management",
    description: "Plan and manage work schedules, shifts, and appointments with intelligent scheduling tools.",
    color: "bg-indigo-500",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Native mobile app experience with offline capabilities and real-time synchronization across devices.",
    color: "bg-pink-500",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Everything you need to manage your{" "}
            <span className="gradient-text">workforce</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Powerful features designed to streamline your business operations and enhance team productivity
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-card border rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}