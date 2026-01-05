import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Gift, Zap, FileText } from "lucide-react";

interface EmailCaptureProps {
  score: number;
  levelName: string;
  onSubmit: (email: string) => void;
}

export function EmailCapture({ score, levelName, onSubmit }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      onSubmit(email);
    }, 500);
  };

  const benefits = [
    { icon: Zap, text: "3 personalized quick wins for your level" },
    { icon: FileText, text: "Free AI prompt pack (10+ templates)" },
    { icon: Gift, text: "Weekly AI tips for your business" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto text-center"
    >
      {/* Score Preview */}
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4">
          <span className="font-heading text-3xl font-bold text-primary">{score}</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
          You're an {levelName}!
        </h2>
        <p className="text-muted-foreground">
          Your AI Readiness Score: {score}/100
        </p>
      </div>

      {/* Email Form */}
      <div className="p-6 rounded-2xl bg-card border border-border mb-6">
        <div className="flex items-center justify-center gap-2 text-primary mb-4">
          <Mail className="w-5 h-5" />
          <span className="font-medium">Unlock your full results</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 text-center"
            required
          />
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Get My Results"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </form>
      </div>

      {/* Benefits */}
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground font-medium">
          You'll receive:
        </p>
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.text}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            className="flex items-center gap-3 text-sm text-muted-foreground"
          >
            <benefit.icon className="w-4 h-4 text-accent flex-shrink-0" />
            <span>{benefit.text}</span>
          </motion.div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mt-6">
        No spam. Unsubscribe anytime.
      </p>
    </motion.div>
  );
}
