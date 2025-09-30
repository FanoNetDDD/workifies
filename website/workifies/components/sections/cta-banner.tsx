"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl"
        >
          <div className="relative px-8 py-16 sm:px-16 sm:py-20">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Ready to transform your{" "}
                <span className="text-yellow-300">workforce management?</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
              >
                Join thousands of companies using Workifies to streamline operations, boost productivity, and build stronger teams.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link href="/auth/register">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-2xl">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-2xl"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download App
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 flex items-center justify-center space-x-8 text-blue-100 text-sm"
              >
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  No credit card required
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  30-day free trial
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  Cancel anytime
                </div>
              </motion.div>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full filter blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-yellow-300 rounded-full filter blur-3xl"></div>
            <div className="absolute top-3/4 left-3/4 w-24 h-24 bg-pink-300 rounded-full filter blur-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}