import { motion } from "framer-motion";
import { QuizQuestion } from "@/lib/quiz-data";

interface QuestionCardProps {
  question: QuizQuestion;
  selectedValue: string | undefined;
  onSelect: (value: string) => void;
}

export function QuestionCard({ question, selectedValue, onSelect }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground mb-8 text-center">
        {question.question}
      </h2>

      <div className="space-y-3 max-w-lg mx-auto">
        {question.options.map((option, index) => (
          <motion.button
            key={option.value}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            onClick={() => onSelect(option.value)}
            className={`
              w-full p-4 rounded-xl border-2 text-left transition-all duration-200
              ${
                selectedValue === option.value
                  ? "border-primary bg-primary/10 shadow-md"
                  : "border-border bg-card hover:border-primary/50 hover:bg-secondary/50"
              }
            `}
          >
            <span className="font-medium text-foreground">{option.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
