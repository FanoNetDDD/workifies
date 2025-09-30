"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Zap, Heart } from "lucide-react";
import Link from "next/link";

const timeline = [
  {
    year: "2023",
    title: "The Idea",
    description: "Recognizing the need for better workforce management tools that work seamlessly across mobile and desktop platforms."
  },
  {
    year: "2024",
    title: "Development",
    description: "Built the first version with focus on mobile-first design and user experience, incorporating feedback from early beta users."
  },
  {
    year: "2024",
    title: "Launch",
    description: "Officially launched Workifies to help companies worldwide manage their workforce more efficiently and transparently."
  },
  {
    year: "Future",
    title: "Innovation",
    description: "Continuing to innovate with AI-powered insights, advanced analytics, and expanding our platform capabilities."
  }
];

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    bio: "10+ years in workforce management and enterprise software"
  },
  {
    name: "Sarah Chen",
    role: "CTO & Co-Founder",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    bio: "Former tech lead at major SaaS companies, expert in scalable systems"
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    bio: "Product strategist with a passion for user-centered design"
  },
  {
    name: "Emma Thompson",
    role: "VP of Customer Success",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    bio: "Dedicated to ensuring every customer achieves their workforce goals"
  }
];

const values = [
  {
    icon: Target,
    title: "Simplicity First",
    description: "We believe powerful tools should be intuitive and easy to use, not overwhelming or complex."
  },
  {
    icon: Users,
    title: "People-Centered",
    description: "Everything we build puts people first - both the managers who need oversight and employees who deserve transparency."
  },
  {
    icon: Zap,
    title: "Continuous Innovation",
    description: "We're constantly evolving our platform based on user feedback and emerging workforce trends."
  },
  {
    icon: Heart,
    title: "Customer Success",
    description: "Your success is our success. We're committed to helping your team achieve their goals."
  }
];

export default function AboutPage() {
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
              Building the Future of{" "}
              <span className="gradient-text">Workforce Management</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              We&apos;re on a mission to transform how companies manage their workforce by providing intuitive, powerful, and mobile-first tools that benefit both managers and employees.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Traditional workforce management tools are often complex, expensive, and built for desktops in a mobile world. We saw an opportunity to create something better.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Workifies was born from the belief that workforce management should be transparent, accessible, and beneficial for everyone involved - from executives to frontline workers.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Transparency:</strong> Clear visibility into work hours, productivity, and company operations for all stakeholders.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Accessibility:</strong> Mobile-first design that works seamlessly across all devices and platforms.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Empowerment:</strong> Tools that help both managers make informed decisions and employees track their contributions.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl flex items-center justify-center">
                  <div className="w-64 h-64 gradient-bg rounded-2xl shadow-2xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Target className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                      <p className="text-white/80 text-sm px-4">
                        A world where workforce management is effortless, transparent, and empowering for everyone.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              From idea to launch and beyond
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg text-white font-bold text-xl mb-4">
                              {item.year}
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              The passionate individuals behind Workifies
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-400">
                      {/* Placeholder for team member image */}
                      <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
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
              Join us in transforming workforce management
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you&apos;re a small startup or a large enterprise, we&apos;re here to help you build a better workplace.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/auth/register">
                <Button size="lg" className="gradient-bg hover:opacity-90 text-lg px-8 py-6 rounded-2xl">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}