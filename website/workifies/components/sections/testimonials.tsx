"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Manager",
    company: "TechCorp Solutions",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    content: "Workifies has revolutionized how we manage our remote team. The real-time tracking and communication features have increased our productivity by 40%.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Operations Director",
    company: "Global Logistics Inc",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: "The analytics dashboard provides incredible insights into our workforce patterns. We've optimized our scheduling and reduced overtime costs significantly.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Team Lead",
    company: "Creative Agency Pro",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: "The mobile-first approach is perfect for our field teams. Easy to use, reliable, and the offline sync ensures we never lose important data.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Loved by teams{" "}
            <span className="gradient-text">worldwide</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            See what our customers have to say about their experience with Workifies
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-card border rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-blue-400 to-purple-400">
                    {/* Placeholder for testimonial author image */}
                    <div className="w-full h-full flex items-center justify-center text-white text-sm font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}