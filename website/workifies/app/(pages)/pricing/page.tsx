"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 employees",
      "Basic time tracking",
      "Simple reporting",
      "Mobile app access",
      "Email support",
      "Basic team chat"
    ],
    limitations: [
      "Limited to 5 employees",
      "Basic features only",
      "Email support only"
    ],
    cta: "Start Free",
    popular: false,
    buttonVariant: "outline" as const
  },
  {
    name: "Pro",
    price: "$12",
    period: "per user/month",
    description: "Ideal for growing businesses",
    features: [
      "Unlimited employees",
      "Advanced time tracking",
      "Detailed analytics",
      "GPS location tracking",
      "Priority support",
      "Advanced team chat",
      "Schedule management",
      "Custom reports",
      "API access",
      "Mobile & desktop apps"
    ],
    limitations: [],
    cta: "Start Pro Trial",
    popular: true,
    buttonVariant: "default" as const
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large organizations with custom needs",
    features: [
      "Everything in Pro",
      "Single Sign-On (SSO)",
      "Advanced security",
      "Custom integrations",
      "Dedicated support",
      "On-premise deployment",
      "Custom branding",
      "Advanced compliance",
      "Data export tools",
      "Training & onboarding"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false,
    buttonVariant: "outline" as const
  }
];

const faqs = [
  {
    question: "Can I switch plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a 30-day free trial for our Pro plan with no credit card required. You can also use our Free plan indefinitely."
  },
  {
    question: "How does billing work?",
    answer: "We bill monthly or annually based on your preference. Annual plans receive a 20% discount. You're only charged for active users."
  },
  {
    question: "What kind of support do you provide?",
    answer: "Free plans receive email support, Pro plans get priority support with faster response times, and Enterprise customers get dedicated support with phone access."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade security with end-to-end encryption, regular backups, and comply with international privacy standards including GDPR."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
  }
];

export default function PricingPage() {
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
              Simple, Transparent{" "}
              <span className="gradient-text">Pricing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Choose the perfect plan for your team. Start free and scale as you grow. No hidden fees, no surprises.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center justify-center space-x-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                30-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Cancel anytime
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                <Card className={`h-full relative overflow-hidden ${
                  plan.popular 
                    ? 'border-primary shadow-xl ring-2 ring-primary/20' 
                    : 'hover:shadow-lg'
                } transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-medium">
                      <Star className="inline h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  
                  <CardHeader className={`text-center ${plan.popular ? 'pt-8' : 'pt-6'}`}>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      {plan.price !== "Custom" && (
                        <span className="text-muted-foreground ml-2">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-2">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={plan.name === "Enterprise" ? "/contact" : "/auth/register"} className="block">
                      <Button 
                        variant={plan.buttonVariant}
                        size="lg"
                        className={`w-full ${
                          plan.popular 
                            ? 'gradient-bg hover:opacity-90' 
                            : ''
                        }`}
                      >
                        {plan.cta}
                        {plan.name !== "Enterprise" && (
                          <ArrowRight className="ml-2 h-4 w-4" />
                        )}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
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
              Why choose Workifies?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              See how we compare to traditional workforce management solutions
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-card border rounded-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="p-8">
                  <Zap className="h-12 w-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Traditional Tools</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Complex setup process</li>
                    <li>High upfront costs</li>
                    <li>Limited mobile support</li>
                    <li>Slow customer support</li>
                  </ul>
                </div>
                
                <div className="p-8 bg-primary/5">
                  <div className="h-12 w-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">W</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Workifies</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Quick 5-minute setup</li>
                    <li>Start free, pay as you grow</li>
                    <li>Mobile-first design</li>
                    <li>24/7 priority support</li>
                  </ul>
                </div>
                
                <div className="p-8">
                  <div className="h-12 w-12 bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-gray-600 dark:text-gray-400 font-bold text-xl">?</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Spreadsheets</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Manual data entry</li>
                    <li>Error-prone processes</li>
                    <li>No real-time updates</li>
                    <li>Limited collaboration</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Everything you need to know about our pricing and plans
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of companies using Workifies to manage their workforce more effectively
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/auth/register">
                <Button size="lg" className="gradient-bg hover:opacity-90 text-lg px-8 py-6 rounded-2xl">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl">
                  View All Features
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}