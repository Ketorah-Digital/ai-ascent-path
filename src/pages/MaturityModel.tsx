import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MaturityLevelCard } from "@/components/MaturityLevelCard";
import { MaturityProgressBar } from "@/components/MaturityProgressBar";
import { MATURITY_LEVELS, type MaturityLevelNumber } from "@/lib/maturity-model";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Info } from "lucide-react";

export default function MaturityModel() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              The AI Maturity Model
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              A comprehensive framework designed to guide individuals and teams from AI awareness
              to mastery. Each level builds upon the previous, ensuring skills compound and
              become part of your daily workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Progress */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <Info className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">
                  Interactive Preview — See how progress tracking works
                </span>
              </div>
              <MaturityProgressBar currentLevel={3} progress={45} size="lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Levels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Five Levels of AI Mastery
            </h2>

            <div className="space-y-6">
              {MATURITY_LEVELS.map((level, index) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div
                    onClick={() => setExpandedLevel(expandedLevel === level.level ? null : level.level)}
                    className="cursor-pointer"
                  >
                    <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        {/* Level number */}
                        <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-heading font-bold bg-level-${level.level}/20 text-level-${level.level}`}>
                          {level.level}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-heading font-semibold text-xl text-foreground">
                              {level.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            {level.description}
                          </p>

                          {/* Skills */}
                          <div className="mb-4">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                              Key Skills
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {level.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Outcomes */}
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                              Outcomes
                            </h4>
                            <ul className="space-y-1">
                              {level.outcomes.map((outcome) => (
                                <li key={outcome} className="flex items-center gap-2 text-sm text-foreground">
                                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                                  {outcome}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/auth?mode=signup">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
