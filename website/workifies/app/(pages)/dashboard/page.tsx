"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Clock, 
  TrendingUp, 
  MessageSquare,
  Calendar,
  Settings,
  Bell,
  Search,
  Filter,
  ArrowRight,
  Play
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Active Employees",
    value: "48",
    change: "+12%",
    icon: Users,
    color: "text-blue-600"
  },
  {
    title: "Hours This Week",
    value: "1,847",
    change: "+5%",
    icon: Clock,
    color: "text-green-600"
  },
  {
    title: "Productivity",
    value: "94%",
    change: "+8%",
    icon: TrendingUp,
    color: "text-purple-600"
  },
  {
    title: "Messages",
    value: "127",
    change: "-3%",
    icon: MessageSquare,
    color: "text-orange-600"
  }
];

const recentActivity = [
  {
    user: "Sarah Johnson",
    action: "clocked in",
    time: "9:00 AM",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  },
  {
    user: "Michael Chen",
    action: "submitted timesheet",
    time: "8:45 AM",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    user: "Emma Rodriguez",
    action: "requested time off",
    time: "8:30 AM",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    user: "James Wilson",
    action: "completed task",
    time: "8:15 AM",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  }
];

const upcomingEvents = [
  {
    title: "Team Meeting",
    time: "10:00 AM",
    participants: 8
  },
  {
    title: "Project Review",
    time: "2:00 PM",
    participants: 5
  },
  {
    title: "Training Session",
    time: "4:00 PM",
    participants: 12
  }
];

export default function DashboardPage() {
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
              Experience the{" "}
              <span className="gradient-text">Dashboard</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Get a preview of how managers and employees interact with Workifies. See real-time insights, team management, and productivity tracking in action.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/auth/register">
                <Button size="lg" className="gradient-bg hover:opacity-90 text-lg px-8 py-6 rounded-2xl">
                  Try It Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            {/* Dashboard Frame */}
            <div className="bg-card border rounded-3xl shadow-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-muted/30 border-b px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                      <span className="text-white font-bold">W</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">Workifies Dashboard</h2>
                      <p className="text-sm text-muted-foreground">TechCorp Solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm">
                      <Search className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Bell className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <div className="w-8 h-8 rounded-full bg-primary"></div>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-muted-foreground mb-2">
                                {stat.title}
                              </p>
                              <p className="text-3xl font-bold text-foreground">
                                {stat.value}
                              </p>
                              <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                {stat.change} vs last week
                              </p>
                            </div>
                            <div className={`w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center`}>
                              <stat.icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Recent Activity */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2"
                  >
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Recent Activity</CardTitle>
                        <Button variant="ghost" size="sm">
                          <Filter className="h-4 w-4" />
                        </Button>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {recentActivity.map((activity, index) => (
                            <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                              <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-400">
                                {/* Placeholder for user avatar */}
                                <div className="w-full h-full flex items-center justify-center text-white text-sm font-bold">
                                  {activity.user.split(' ').map(n => n[0]).join('')}
                                </div>
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-foreground">
                                  <span className="font-semibold">{activity.user}</span> {activity.action}
                                </p>
                                <p className="text-xs text-muted-foreground">{activity.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Upcoming Events */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Today&apos;s Schedule</CardTitle>
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {upcomingEvents.map((event, index) => (
                            <div key={index} className="p-3 rounded-lg border">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-foreground">{event.title}</h4>
                                <span className="text-sm text-muted-foreground">{event.time}</span>
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Users className="h-3 w-3 mr-1" />
                                {event.participants} participants
                              </div>
                            </div>
                          ))}
                        </div>
                        <Button variant="outline" className="w-full mt-4">
                          View Full Calendar
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1">
                          <Users className="h-5 w-5" />
                          <span className="text-xs">Add Employee</span>
                        </Button>
                        <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1">
                          <Calendar className="h-5 w-5" />
                          <span className="text-xs">Schedule</span>
                        </Button>
                        <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1">
                          <TrendingUp className="h-5 w-5" />
                          <span className="text-xs">Reports</span>
                        </Button>
                        <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1">
                          <Settings className="h-5 w-5" />
                          <span className="text-xs">Settings</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Highlight */}
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
              What you can do with Workifies
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              The dashboard is just the beginning. Explore all the features available to transform your workforce management.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Manage Teams</h3>
              <p className="text-muted-foreground">
                Organize employees, assign roles, and track performance across departments
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Time</h3>
              <p className="text-muted-foreground">
                Automated time tracking with detailed reports and analytics
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Analyze Data</h3>
              <p className="text-muted-foreground">
                Gain insights with comprehensive analytics and reporting tools
              </p>
            </motion.div>
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
              Ready to try the real thing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              This is just a preview. Create your account to access the full dashboard with real data and complete functionality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/auth/register">
                <Button size="lg" className="gradient-bg hover:opacity-90 text-lg px-8 py-6 rounded-2xl">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl">
                  Explore All Features
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}