export interface QuizQuestion {
  id: string;
  question: string;
  type: "readiness" | "research";
  options: {
    label: string;
    value: string;
    score?: number;
  }[];
}

export interface QuizResult {
  score: number;
  level: number;
  levelName: string;
  profession: string;
  challenge: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Readiness questions (7)
  {
    id: "ai-usage",
    question: "How often do you currently use AI tools in your work?",
    type: "readiness",
    options: [
      { label: "Never tried AI", value: "never", score: 0 },
      { label: "Tried a few times", value: "tried", score: 5 },
      { label: "Use occasionally", value: "occasional", score: 10 },
      { label: "Use weekly", value: "weekly", score: 15 },
      { label: "Use daily", value: "daily", score: 20 },
    ],
  },
  {
    id: "ai-confidence",
    question: "How confident are you in getting useful results from AI tools?",
    type: "readiness",
    options: [
      { label: "Not confident at all", value: "none", score: 0 },
      { label: "Slightly confident", value: "slight", score: 5 },
      { label: "Somewhat confident", value: "somewhat", score: 10 },
      { label: "Very confident", value: "very", score: 15 },
      { label: "Expert level", value: "expert", score: 20 },
    ],
  },
  {
    id: "ai-tools",
    question: "Which AI tools have you used? (Pick the most advanced)",
    type: "readiness",
    options: [
      { label: "None yet", value: "none", score: 0 },
      { label: "ChatGPT or similar chatbots", value: "chatgpt", score: 5 },
      { label: "AI writing or image tools", value: "specialized", score: 10 },
      { label: "AI integrated into my work apps", value: "integrated", score: 15 },
      { label: "Custom AI automations", value: "custom", score: 20 },
    ],
  },
  {
    id: "time-repetitive",
    question: "How many hours per week do you spend on repetitive tasks?",
    type: "readiness",
    options: [
      { label: "Less than 2 hours", value: "low", score: 5 },
      { label: "2-5 hours", value: "medium", score: 10 },
      { label: "5-10 hours", value: "high", score: 15 },
      { label: "More than 10 hours", value: "very-high", score: 20 },
    ],
  },
  {
    id: "ai-strategy",
    question: "Do you have a plan for how AI fits into your business?",
    type: "readiness",
    options: [
      { label: "Haven't thought about it", value: "none", score: 0 },
      { label: "Curious but no plan", value: "curious", score: 5 },
      { label: "Some ideas, not implemented", value: "ideas", score: 10 },
      { label: "Active experimentation", value: "experimenting", score: 15 },
      { label: "Clear strategy in place", value: "strategy", score: 20 },
    ],
  },
  {
    id: "ai-results",
    question: "Have you saved time or money using AI in your business?",
    type: "readiness",
    options: [
      { label: "Not yet", value: "none", score: 0 },
      { label: "Maybe a little", value: "little", score: 5 },
      { label: "Yes, noticeable savings", value: "noticeable", score: 15 },
      { label: "Significant ROI", value: "significant", score: 20 },
    ],
  },
  {
    id: "ai-teaching",
    question: "Have you helped others learn to use AI?",
    type: "readiness",
    options: [
      { label: "No", value: "no", score: 0 },
      { label: "Shared tips informally", value: "tips", score: 5 },
      { label: "Trained team members", value: "trained", score: 15 },
      { label: "Created guides or courses", value: "created", score: 20 },
    ],
  },
  // Research questions (3)
  {
    id: "profession",
    question: "What best describes your work?",
    type: "research",
    options: [
      { label: "Consultant / Coach", value: "consultant" },
      { label: "Freelancer / Creative", value: "freelancer" },
      { label: "E-commerce / Retail", value: "ecommerce" },
      { label: "Service Business Owner", value: "service" },
      { label: "Real Estate / Insurance", value: "realestate" },
      { label: "Marketing / Agency", value: "marketing" },
      { label: "Other", value: "other" },
    ],
  },
  {
    id: "team-size",
    question: "How big is your team?",
    type: "research",
    options: [
      { label: "Just me", value: "solo" },
      { label: "2-5 people", value: "small" },
      { label: "6-20 people", value: "medium" },
      { label: "20+ people", value: "large" },
    ],
  },
  {
    id: "biggest-challenge",
    question: "What's your biggest challenge AI could help with?",
    type: "research",
    options: [
      { label: "Content creation (writing, social)", value: "content" },
      { label: "Customer communication", value: "communication" },
      { label: "Admin & repetitive tasks", value: "admin" },
      { label: "Research & analysis", value: "research" },
      { label: "Sales & marketing", value: "sales" },
      { label: "Not sure where to start", value: "unsure" },
    ],
  },
];

export const LEVEL_DETAILS = [
  {
    level: 1,
    name: "AI Curious",
    range: [0, 20],
    description: "You're at the beginning of your AI journey. Perfect time to start!",
    quickWins: [
      "Try ChatGPT for one simple task this week",
      "Ask AI to rewrite an email in a different tone",
      "Use AI to brainstorm 10 ideas for your next project",
    ],
  },
  {
    level: 2,
    name: "AI Explorer",
    range: [21, 40],
    description: "You've dipped your toes in. Time to build consistent habits.",
    quickWins: [
      "Create a 'go-to' prompt for a task you do weekly",
      "Try an AI tool specific to your industry",
      "Use AI to summarize a long document or meeting notes",
    ],
  },
  {
    level: 3,
    name: "AI Practitioner",
    range: [41, 60],
    description: "You're getting real value. Let's optimize and expand.",
    quickWins: [
      "Build a prompt library for your most common tasks",
      "Connect AI to your existing workflow tools",
      "Train AI on your brand voice and style",
    ],
  },
  {
    level: 4,
    name: "AI Optimizer",
    range: [61, 80],
    description: "You're ahead of most. Time to systematize and scale.",
    quickWins: [
      "Create AI-powered automations for repetitive workflows",
      "Document your AI processes for team use",
      "Measure time saved and ROI from AI usage",
    ],
  },
  {
    level: 5,
    name: "AI Leader",
    range: [81, 100],
    description: "You're an AI power user. Share your knowledge!",
    quickWins: [
      "Mentor others on AI adoption",
      "Create case studies from your AI wins",
      "Stay ahead by experimenting with emerging AI tools",
    ],
  },
];

export function calculateScore(answers: Record<string, string>): number {
  let totalScore = 0;
  let maxScore = 0;

  QUIZ_QUESTIONS.filter((q) => q.type === "readiness").forEach((question) => {
    const answer = answers[question.id];
    const option = question.options.find((o) => o.value === answer);
    if (option?.score !== undefined) {
      totalScore += option.score;
    }
    // Calculate max possible score for this question
    const maxOptionScore = Math.max(...question.options.map((o) => o.score || 0));
    maxScore += maxOptionScore;
  });

  // Normalize to 0-100
  return Math.round((totalScore / maxScore) * 100);
}

export function getLevel(score: number): (typeof LEVEL_DETAILS)[number] {
  return (
    LEVEL_DETAILS.find((l) => score >= l.range[0] && score <= l.range[1]) ||
    LEVEL_DETAILS[0]
  );
}
