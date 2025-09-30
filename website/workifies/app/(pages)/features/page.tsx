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
  Smartphone,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const managerFeatures = [
  {
    icon: Building2,
    title: "Company Setup & Management",
    description: "Create your company profile with unique codes. Invite employees seamlessly and manage organizational hierarchy with role-based permissions.",
    features: [
      "Generate unique company codes",
      "Role-based access control",
      "Department management",
      "Employee onboarding flows"
    ]
  },
  {
    icon: Users,
    title: "Employee Oversight",
    description: "Monitor your team's activities, track performance metrics, and ensure productivity across all departments with comprehensive oversight tools.",
    features: [
      "Real-time employee status",
      "Activity monitoring",
      "Performance analytics",
      "Attendance tracking"
    ]
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Gain deep insights into workforce patterns, productivity trends, and operational efficiency with powerful analytics and reporting tools.",
    features: [
      "Custom dashboards",
      "Productivity reports",
      "Cost analysis",
      "Trend forecasting"
    ]
  },
  {
    icon: Calendar,
    title: "Schedule Management",
    description: "Plan and optimize work schedules, manage shifts, and coordinate team availability with intelligent scheduling algorithms.",
    features: [
      "Shift scheduling",
      "Resource planning",
      "Conflict resolution",
      "Automated notifications"
    ]
  }
];

const employeeFeatures = [
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Log work hours accurately with automated time tracking, break management, and overtime calculations for transparent time management.",
    features: [
      "One-tap clock in/out",
      "Automatic break detection",
      "Overtime calculations",
      "Timesheet reviews"
    ]
  },
  {
    icon: MessageSquare,
    title: "Team Communication",
    description: "Stay connected with your team through built-in messaging, announcements, and collaboration tools designed for workplace efficiency.",
    features: [
      "Direct messaging",
      "Group channels",
      "File sharing",
      "Voice messages"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Experience",
    description: "Access all features on-the-go with our native mobile app, including offline capabilities and real-time synchronization.",
    features: [
      "Offline functionality",
      "Real-time sync",
      "Push notifications",
      "GPS location tracking"
    ]
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your data is protected with enterprise-grade security, end-to-end encryption, and compliance with international privacy standards.",
    features: [
      "End-to-end encryption",
      "GDPR compliant",
      "Secure data storage",
      "Privacy controls"
    ]
  }
];

export default function FeaturesPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Powerful Features for{" "}
              <span className="gradient-text">Modern Teams</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Discover how Workifies empowers managers and employees with comprehensive tools designed for efficiency, transparency, and growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Manager Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              For Managers & HR
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Comprehensive management tools to oversee operations, analyze performance, and drive organizational success
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {managerFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Features */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              For Employees
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Intuitive tools that make work tracking, communication, and collaboration effortless for your team members
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {employeeFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to experience these features?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start your free trial today and see how Workifies can transform your workforce management
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/auth/register">
                <Button size="lg" className="gradient-bg hover:opacity-90 text-lg px-8 py-6 rounded-2xl">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}