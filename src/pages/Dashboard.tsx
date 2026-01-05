import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MaturityProgressBar } from "@/components/MaturityProgressBar";
import { Button } from "@/components/ui/button";
import { MATURITY_LEVELS, type MaturityLevelNumber } from "@/lib/maturity-model";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Trophy,
  TrendingUp,
  CheckCircle,
  PlayCircle,
  Flame,
  Target,
  Zap,
} from "lucide-react";

// Mock user data
const mockUser = {
  name: "Alex Johnson",
  email: "alex@company.com",
  currentLevel: 2 as MaturityLevelNumber,
  levelProgress: 65,
  streak: 7,
  completedCourses: 3,
  totalXP: 1250,
  achievements: [
    { id: "first-course", name: "First Steps", icon: "🎯" },
    { id: "streak-7", name: "Week Warrior", icon: "🔥" },
    { id: "prompt-master", name: "Prompt Pro", icon: "✨" },
  ],
};

const inProgressCourses = [
  {
    id: "ai-for-content",
    title: "AI for Content Creation",
    progress: 60,
    nextLesson: "Creating Blog Posts with AI",
    timeLeft: "45 min",
  },
];

const recommendedCourses = [
  {
    id: "prompt-engineering-advanced",
    title: "Advanced Prompt Engineering",
    level: 2,
    duration: "2 hours",
    description: "Take your prompting skills to the next level",
  },
  {
    id: "ai-workflows",
    title: "Building AI Workflows",
    level: 3,
    duration: "3 hours",
    description: "Create repeatable AI-powered processes",
  },
];

const recentActivities = [
  { type: "completed", text: "Completed 'Basic Prompt Structure' lesson", time: "2 hours ago" },
  { type: "achievement", text: "Earned 'Week Warrior' badge", time: "1 day ago" },
  { type: "started", text: "Started 'AI for Content Creation' course", time: "3 days ago" },
];

export default function Dashboard() {
  const currentLevelData = MATURITY_LEVELS.find((l) => l.level === mockUser.currentLevel);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Welcome section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
                  Welcome back, {mockUser.name.split(" ")[0]}!
                </h1>
                <p className="text-muted-foreground">
                  You're on a {mockUser.streak}-day streak. Keep it up!{" "}
                  <Flame className="inline w-4 h-4 text-warning" />
                </p>
              </div>
              <Button variant="hero" asChild>
                <Link to="/courses">
                  Continue Learning
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {[
              { label: "Current Level", value: `Level ${mockUser.currentLevel}`, icon: Target, color: "primary" },
              { label: "Courses Completed", value: mockUser.completedCourses, icon: BookOpen, color: "accent" },
              { label: "Total XP", value: mockUser.totalXP.toLocaleString(), icon: Zap, color: "warning" },
              { label: "Day Streak", value: mockUser.streak, icon: Flame, color: "destructive" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-card border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-${stat.color}/10 flex items-center justify-center`}>
                    <stat.icon className={`w-5 h-5 text-${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="font-heading font-semibold text-xl text-foreground">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Maturity Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-heading font-semibold text-lg text-foreground">
                    Your AI Maturity Journey
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Currently at <span className="font-medium text-primary">Level {mockUser.currentLevel}: {currentLevelData?.name}</span>
                  </p>
                </div>
                <Link
                  to="/maturity-model"
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  View Model
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <MaturityProgressBar
                currentLevel={mockUser.currentLevel}
                progress={mockUser.levelProgress}
                size="lg"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - Learning */}
            <div className="lg:col-span-2 space-y-8">
              {/* In Progress */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Continue Learning
                </h2>
                {inProgressCourses.map((course) => (
                  <div
                    key={course.id}
                    className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-1">
                          {course.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Next: {course.nextLesson}
                        </p>
                      </div>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {course.timeLeft}
                      </span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{course.progress}% complete</span>
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${course.progress}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>

                    <Button variant="default" className="w-full sm:w-auto">
                      <PlayCircle className="w-4 h-4" />
                      Resume Course
                    </Button>
                  </div>
                ))}
              </motion.div>

              {/* Recommended */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Recommended for You
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recommendedCourses.map((course) => (
                    <div
                      key={course.id}
                      className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full bg-level-${course.level}/20 text-level-${course.level}`}>
                          Level {course.level}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {course.duration}
                        </span>
                      </div>
                      <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {course.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right column - Activity & Achievements */}
            <div className="space-y-8">
              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Achievements
                </h2>
                <div className="p-5 rounded-xl bg-card border border-border">
                  <div className="flex gap-3">
                    {mockUser.achievements.map((achievement) => (
                      <div
                        key={achievement.id}
                        className="flex-1 p-3 rounded-lg bg-secondary text-center group cursor-pointer hover:bg-primary/10 transition-colors"
                        title={achievement.name}
                      >
                        <span className="text-2xl">{achievement.icon}</span>
                        <p className="text-xs text-muted-foreground mt-1 truncate">
                          {achievement.name}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full mt-4">
                    View All Badges
                  </Button>
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Recent Activity
                </h2>
                <div className="p-5 rounded-xl bg-card border border-border">
                  <ul className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          activity.type === "completed"
                            ? "bg-accent/20 text-accent"
                            : activity.type === "achievement"
                            ? "bg-warning/20 text-warning"
                            : "bg-primary/20 text-primary"
                        }`}>
                          {activity.type === "completed" ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : activity.type === "achievement" ? (
                            <Trophy className="w-4 h-4" />
                          ) : (
                            <TrendingUp className="w-4 h-4" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm text-foreground">{activity.text}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Quick actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h2 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Quick Actions
                </h2>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/courses">
                      <BookOpen className="w-4 h-4" />
                      Browse All Courses
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/maturity-model">
                      <Target className="w-4 h-4" />
                      View Maturity Model
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
