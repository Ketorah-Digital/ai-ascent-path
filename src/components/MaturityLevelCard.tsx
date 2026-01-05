import { motion } from "framer-motion";
import { Lightbulb, Wrench, Zap, Cpu, Users, Check, Lock } from "lucide-react";
import { MATURITY_LEVELS, type MaturityLevelNumber } from "@/lib/maturity-model";
import { cn } from "@/lib/utils";

const iconMap = {
  Lightbulb,
  Wrench,
  Zap,
  Cpu,
  Users,
};

interface MaturityLevelCardProps {
  level: typeof MATURITY_LEVELS[number];
  currentLevel?: MaturityLevelNumber;
  isExpanded?: boolean;
  onClick?: () => void;
  delay?: number;
}

export function MaturityLevelCard({
  level,
  currentLevel = 1,
  isExpanded = false,
  onClick,
  delay = 0,
}: MaturityLevelCardProps) {
  const Icon = iconMap[level.icon as keyof typeof iconMap];
  const isCompleted = currentLevel > level.level;
  const isCurrent = currentLevel === level.level;
  const isLocked = currentLevel < level.level;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: isLocked ? 1 : 1.02 }}
      onClick={onClick}
      className={cn(
        "relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer group",
        isCompleted && "bg-accent/10 border-accent/30 hover:border-accent/50",
        isCurrent && "bg-primary/10 border-primary/30 hover:border-primary/50 shadow-glow",
        isLocked && "bg-muted/50 border-border/50 opacity-60 cursor-not-allowed",
        !isLocked && !isCompleted && !isCurrent && "bg-card border-border hover:border-primary/30"
      )}
    >
      {/* Level badge */}
      <div className="absolute -top-3 left-6">
        <span
          className={cn(
            "px-3 py-1 text-xs font-semibold rounded-full",
            isCompleted && "bg-accent text-accent-foreground",
            isCurrent && "bg-primary text-primary-foreground",
            isLocked && "bg-muted text-muted-foreground",
            !isLocked && !isCompleted && !isCurrent && "bg-secondary text-secondary-foreground"
          )}
        >
          Level {level.level}
        </span>
      </div>

      <div className="flex items-start gap-4 mt-2">
        {/* Icon */}
        <div
          className={cn(
            "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center",
            isCompleted && "bg-accent/20 text-accent",
            isCurrent && "bg-primary/20 text-primary",
            isLocked && "bg-muted text-muted-foreground",
            !isLocked && !isCompleted && !isCurrent && "bg-secondary text-secondary-foreground"
          )}
        >
          {isCompleted ? (
            <Check className="w-6 h-6" />
          ) : isLocked ? (
            <Lock className="w-5 h-5" />
          ) : (
            <Icon className="w-6 h-6" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-semibold text-lg text-foreground">
            {level.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {level.shortDescription}
          </p>

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-3"
            >
              <p className="text-sm text-foreground/80">{level.description}</p>
              
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Key Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {level.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Status indicator */}
        {isCurrent && (
          <div className="flex-shrink-0">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
