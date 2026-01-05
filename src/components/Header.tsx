import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center group-hover:shadow-glow transition-shadow">
            <Brain className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-heading font-semibold text-lg text-foreground">
            AI Maturity
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Courses
          </Link>
          <Link
            to="/maturity-model"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Maturity Model
          </Link>
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/auth">Sign In</Link>
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link to="/auth?mode=signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
