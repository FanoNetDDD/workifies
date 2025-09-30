"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User, Building2, Chrome } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <Link href="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Workifies</span>
          </Link>
          <h2 className="text-3xl font-bold text-foreground">
            Create your account
          </h2>
          <p className="mt-2 text-muted-foreground">
            Start managing your workforce today
          </p>
        </motion.div>

        {/* Register Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Card className="shadow-xl border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Sign up</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Google Sign In */}
              <Button 
                variant="outline" 
                className="w-full h-12 text-base border-2 hover:bg-muted/50"
                type="button"
              >
                <Chrome className="mr-2 h-5 w-5" />
                Continue with Google
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-card px-4 text-muted-foreground">
                    Or create account with email
                  </span>
                </div>
              </div>

              {/* Registration Form */}
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        className="pl-10 h-12 text-base"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="h-12 text-base"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@company.com"
                      className="pl-10 h-12 text-base"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company name</Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company"
                      className="pl-10 h-12 text-base"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a strong password"
                      className="pl-10 h-12 text-base"
                      required
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Password must be at least 8 characters long
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="pl-10 h-12 text-base"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 mt-1 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
                    required
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:text-primary/80">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:text-primary/80">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base gradient-bg hover:opacity-90"
                >
                  Create account
                </Button>
              </form>

              {/* Sign in link */}
              <div className="text-center">
                <span className="text-muted-foreground">Already have an account? </span>
                <Link 
                  href="/auth/login" 
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center space-y-4"
        >
          <p className="text-sm text-muted-foreground">
            Join thousands of companies already using Workifies
          </p>
          <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground">
            <div className="flex items-center">
              <span className="mr-1">✓</span>
              Free 30-day trial
            </div>
            <div className="flex items-center">
              <span className="mr-1">✓</span>
              No setup fees
            </div>
            <div className="flex items-center">
              <span className="mr-1">✓</span>
              Cancel anytime
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}