import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MATURITY_LEVELS } from "@/lib/maturity-model";
import { Clock, Users, Star, ArrowRight, BookOpen, Zap, Lock } from "lucide-react";

const courses = [
  {
    id: "ai-foundations",
    title: "AI Foundations for Business",
    description: "Master the fundamentals of AI and understand how it can transform your business operations.",
    level: 1,
    duration: "2 hours",
    lessons: 8,
    rating: 4.9,
    students: 2450,
    topics: ["What is AI?", "AI terminology", "Identifying use cases", "AI ethics basics"],
    isFeatured: true,
  },
  {
    id: "prompt-engineering-101",
    title: "Prompt Engineering 101",
    description: "Learn to write effective prompts that get consistent, high-quality results from AI tools.",
    level: 1,
    duration: "1.5 hours",
    lessons: 6,
    rating: 4.8,
    students: 3200,
    topics: ["Prompt structure", "Context setting", "Iteration techniques", "Common mistakes"],
    isFeatured: false,
  },
  {
    id: "ai-for-content",
    title: "AI for Content Creation",
    description: "Create compelling content faster using AI as your creative partner.",
    level: 2,
    duration: "3 hours",
    lessons: 12,
    rating: 4.9,
    students: 1890,
    topics: ["Writing with AI", "Editing workflows", "Content templates", "Quality control"],
    isFeatured: true,
  },
  {
    id: "ai-productivity",
    title: "AI Productivity Mastery",
    description: "Build powerful workflows that multiply your output without sacrificing quality.",
    level: 3,
    duration: "4 hours",
    lessons: 15,
    rating: 4.7,
    students: 980,
    topics: ["Workflow design", "Task automation", "Multi-tool integration", "Measuring gains"],
    isFeatured: false,
  },
  {
    id: "advanced-ai-systems",
    title: "Building AI-Powered Systems",
    description: "Design and implement sophisticated AI solutions for complex business challenges.",
    level: 4,
    duration: "6 hours",
    lessons: 20,
    rating: 4.9,
    students: 420,
    topics: ["System architecture", "API integration", "Data pipelines", "Performance optimization"],
    isFeatured: true,
  },
  {
    id: "ai-enablement",
    title: "AI Training & Enablement",
    description: "Learn to teach others and lead AI adoption initiatives within your organization.",
    level: 5,
    duration: "5 hours",
    lessons: 18,
    rating: 4.8,
    students: 280,
    topics: ["Training design", "Change management", "Mentoring skills", "Measuring adoption"],
    isFeatured: false,
  },
];

function CourseCard({ course, index }: { course: typeof courses[0]; index: number }) {
  const level = MATURITY_LEVELS.find((l) => l.level === course.level);
  const isLocked = course.level > 2; // Demo: lock advanced courses

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`relative group ${isLocked ? "opacity-80" : ""}`}
    >
      {course.isFeatured && (
        <div className="absolute -top-3 -right-3 z-10">
          <span className="px-3 py-1 text-xs font-semibold bg-warning text-warning-foreground rounded-full shadow-md">
            Featured
          </span>
        </div>
      )}

      <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col">
        {/* Level badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-level-${course.level}/20 text-level-${course.level}`}>
            Level {course.level} • {level?.name}
          </span>
          {isLocked && (
            <Lock className="w-4 h-4 text-muted-foreground" />
          )}
        </div>

        {/* Title & description */}
        <h3 className="font-heading font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1">
          {course.description}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {course.topics.slice(0, 3).map((topic) => (
            <span key={topic} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md">
              {topic}
            </span>
          ))}
          {course.topics.length > 3 && (
            <span className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded-md">
              +{course.topics.length - 3} more
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pt-4 border-t border-border">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {course.duration}
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            {course.lessons} lessons
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-warning" />
            {course.rating}
          </div>
        </div>

        {/* CTA */}
        <Button
          variant={isLocked ? "outline" : "default"}
          className="w-full"
          disabled={isLocked}
        >
          {isLocked ? (
            <>Complete previous levels to unlock</>
          ) : (
            <>
              Start Course
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
}

export default function Courses() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.05),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              AI Courses & Learning Paths
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Structured courses designed for real-world application. Each course maps
              to a specific maturity level, building skills that compound over time.
            </p>

            {/* Filter by level */}
            <div className="flex flex-wrap justify-center gap-2">
              <Button variant="secondary" size="sm">All Courses</Button>
              {MATURITY_LEVELS.map((level) => (
                <Button key={level.level} variant="ghost" size="sm">
                  Level {level.level}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Accelerate Your AI Skills?
            </h2>
            <p className="text-muted-foreground mb-8">
              Create your free account to access Level 1 courses and start your journey today.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/auth?mode=signup">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
