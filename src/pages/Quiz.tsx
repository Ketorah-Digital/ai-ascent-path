import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { QuizProgress } from "@/components/Quiz/QuizProgress";
import { QuestionCard } from "@/components/Quiz/QuestionCard";
import { QUIZ_QUESTIONS, calculateScore, getLevel } from "@/lib/quiz-data";

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const isLastQuestion = currentIndex === QUIZ_QUESTIONS.length - 1;
  const canGoNext = answers[currentQuestion.id] !== undefined;

  const handleSelect = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Calculate results and navigate
      const score = calculateScore(answers);
      const level = getLevel(score);
      const profession = answers["profession"] || "other";
      const challenge = answers["biggest-challenge"] || "unsure";

      // Store in sessionStorage for results page
      sessionStorage.setItem(
        "quizResults",
        JSON.stringify({ score, level: level.level, levelName: level.name, profession, challenge, answers })
      );

      window.location.href = "/quiz/results";
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-12">
            <QuizProgress current={currentIndex + 1} total={QUIZ_QUESTIONS.length} />
          </div>

          {/* Question */}
          <div className="min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <QuestionCard
                key={currentQuestion.id}
                question={currentQuestion}
                selectedValue={answers[currentQuestion.id]}
                onSelect={handleSelect}
              />
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-between items-center mt-8"
          >
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentIndex === 0}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>

            <Button
              variant="hero"
              onClick={handleNext}
              disabled={!canGoNext}
              className="gap-2"
            >
              {isLastQuestion ? "See My Results" : "Next"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Exit link */}
          <div className="text-center mt-8">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Exit quiz
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
