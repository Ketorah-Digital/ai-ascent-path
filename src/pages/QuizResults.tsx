import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { EmailCapture } from "@/components/Quiz/EmailCapture";
import { ResultsDisplay } from "@/components/Quiz/ResultsDisplay";
import { toast } from "@/hooks/use-toast";

interface StoredResults {
  score: number;
  level: number;
  levelName: string;
  profession: string;
  challenge: string;
  answers: Record<string, string>;
}

export default function QuizResults() {
  const navigate = useNavigate();
  const [results, setResults] = useState<StoredResults | null>(null);
  const [showFullResults, setShowFullResults] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("quizResults");
    if (stored) {
      setResults(JSON.parse(stored));
    } else {
      // No results, redirect to quiz
      navigate("/quiz");
    }
  }, [navigate]);

  const handleEmailSubmit = (email: string) => {
    // In a real app, this would send to your email service
    console.log("Email submitted:", email, results);

    toast({
      title: "Check your inbox! 📬",
      description: "Your personalized results and AI prompt pack are on the way.",
    });

    setShowFullResults(true);
  };

  if (!results) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading results...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-12 px-4">
        {showFullResults ? (
          <ResultsDisplay
            score={results.score}
            profession={results.profession}
            challenge={results.challenge}
          />
        ) : (
          <EmailCapture
            score={results.score}
            levelName={results.levelName}
            onSubmit={handleEmailSubmit}
          />
        )}
      </main>
    </div>
  );
}
