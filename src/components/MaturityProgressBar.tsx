import { motion } from "framer-motion";
import { MATURITY_LEVELS, type MaturityLevelNumber } from "@/lib/maturity-model";
import { cn } from "@/lib/utils";

interface MaturityProgressBarProps {
  currentLevel: MaturityLevelNumber;
  progress?: number; // 0-100 within current level
  showLabels?: boolean;
  size?: "sm" | "md" | "lg";
}

export function MaturityProgressBar({
  currentLevel,
  progress = 0,
  showLabels = true,
  size = "md",
}: MaturityProgressBarProps) {
  const totalProgress = ((currentLevel - 1) * 20) + (progress * 0.2);

  const sizeClasses = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
  };

  return (
    <div className="w-full">
      {showLabels && (
        <div className="flex justify-between mb-2">
          {MATURITY_LEVELS.map((level) => (
            <div
              key={level.level}
              className={cn(
                "text-xs font-medium transition-colors",
                currentLevel >= level.level ? "text-foreground" : "text-muted-foreground"
              )}
            >
              <span className="hidden sm:inline">{level.name}</span>
              <span className="sm:hidden">{level.level}</span>
            </div>
          ))}
        </div>
      )}

      <div className={cn("relative w-full bg-secondary rounded-full overflow-hidden", sizeClasses[size])}>
        {/* Progress segments */}
        <div className="absolute inset-0 flex">
          {MATURITY_LEVELS.map((level, index) => (
            <div
              key={level.level}
              className={cn(
                "flex-1 border-r border-background/20 last:border-r-0",
                index < MATURITY_LEVELS.length - 1 && "border-r"
              )}
            />
          ))}
        </div>

        {/* Animated progress fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${totalProgress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 maturity-gradient rounded-full"
        />

        {/* Current position indicator */}
        <motion.div
          initial={{ left: 0 }}
          animate={{ left: `${totalProgress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-2 border-background shadow-lg"
          style={{ display: totalProgress > 0 ? "block" : "none" }}
        />
      </div>

      {showLabels && (
        <div className="flex justify-between mt-2">
          <span className="text-xs text-muted-foreground">Beginner</span>
          <span className="text-xs text-muted-foreground">Expert</span>
        </div>
      )}
    </div>
  );
}
