import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Share2 } from "lucide-react";
import { getLevel } from "@/lib/quiz-data";

interface ResultsDisplayProps {
  score: number;
  profession: string;
  challenge: string;
}

export function ResultsDisplay({ score, profession, challenge }: ResultsDisplayProps) {
  const levelData = getLevel(score);

  const handleShare = () => {
    const text = `I just took the AI Readiness Quiz and scored ${score}/100 - I'm an ${levelData.name}! 🤖`;
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      {/* Score Header */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-6"
        >
          <span className="font-heading text-5xl font-bold text-primary">{score}</span>
        </motion.div>

        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
          You're an {levelData.name}!
        </h1>
        <p className="text-lg text-muted-foreground">
          {levelData.description}
        </p>

        <Button
          variant="outline"
          size="sm"
          onClick={handleShare}
          className="mt-4"
        >
          <Share2 className="w-4 h-4" />
          Share My Score
        </Button>
      </div>

      {/* Quick Wins */}
      <div className="p-6 rounded-2xl bg-card border border-border mb-8">
        <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-accent" />
          Your Quick Wins
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          Based on your score, here are 3 actions you can take this week:
        </p>
        <ul className="space-y-3">
          {levelData.quickWins.map((win, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent text-sm font-medium flex items-center justify-center">
                {index + 1}
              </span>
              <span className="text-foreground">{win}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Score Breakdown */}
      <div className="p-6 rounded-2xl bg-secondary/30 border border-border mb-8">
        <h2 className="font-heading text-lg font-semibold text-foreground mb-4">
          What This Means
        </h2>
        <div className="grid grid-cols-5 gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((lvl) => (
            <div
              key={lvl}
              className={`h-2 rounded-full ${
                lvl <= levelData.level ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          You're at <strong>Level {levelData.level}</strong> of 5 on the AI Readiness scale.
          {levelData.level < 5 && (
            <> There's plenty of room to grow, and we'll help you get there.</>
          )}
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Check your inbox for your full results and free AI prompt pack!
        </p>
        <Button variant="hero" size="lg" onClick={() => window.location.reload()}>
          Take the Quiz Again
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}
