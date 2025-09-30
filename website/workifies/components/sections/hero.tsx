"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <Star className="h-4 w-4" />
            <span>Trusted by 10,000+ companies worldwide</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Work Smarter.{" "}
            <span className="gradient-text">Manage Better.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Streamline your workforce management with powerful tools for employee tracking, company management, and seamless communication. Built for modern teams.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/auth/register">
              <Button size="lg" className="gradient-bg hover:opacity-90 text-lg px-8 py-6 rounded-2xl">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="mx-auto w-80 h-[600px] bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-6 bg-black flex items-center justify-between px-6 text-white text-xs">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App Screenshot Placeholder */}
                  <div className="h-full bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col">
                    <div className="p-6 text-white">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                          <span className="font-bold">W</span>
                        </div>
                        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Good Morning!</h2>
                      <p className="text-white/80">Ready to manage your team?</p>
                    </div>
                    
                    <div className="flex-1 bg-white rounded-t-3xl p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-2xl">
                          <div>
                            <div className="w-20 h-4 bg-gray-300 rounded mb-2"></div>
                            <div className="w-16 h-3 bg-gray-200 rounded"></div>
                          </div>
                          <div className="w-12 h-12 bg-green-100 rounded-xl"></div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-2xl">
                          <div>
                            <div className="w-24 h-4 bg-gray-300 rounded mb-2"></div>
                            <div className="w-20 h-3 bg-gray-200 rounded"></div>
                          </div>
                          <div className="w-12 h-12 bg-blue-100 rounded-xl"></div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-2xl">
                          <div>
                            <div className="w-18 h-4 bg-gray-300 rounded mb-2"></div>
                            <div className="w-14 h-3 bg-gray-200 rounded"></div>
                          </div>
                          <div className="w-12 h-12 bg-purple-100 rounded-xl"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-green-500 rounded-2xl shadow-lg flex items-center justify-center text-white text-2xl"
              >
                ✓
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-500 rounded-2xl shadow-lg flex items-center justify-center text-white text-2xl"
              >
                👥
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
}