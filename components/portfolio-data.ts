import { Server, Cloud, Zap } from "lucide-react"

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export const STATS = [
  { value: "10+", label: "Production Services Built" },
  { value: "3", label: "AI APIs Integrated" },
  { value: "2", label: "Years Engineering" },
  { value: "5+", label: "Infrastructure Projects" },
]

export const EXPERTISE = [
  {
    icon: Server,
    title: "Backend Engineering",
    color: "#6366f1",
    desc: "Production-grade APIs with NestJS & FastAPI. JWT auth, Prisma ORM, PostgreSQL schema design, Redis caching, WebSocket support.",
    tags: ["NestJS", "FastAPI", "Node.js", "Python"],
  },
  {
    icon: Cloud,
    title: "Platform & Infrastructure",
    color: "#06b6d4",
    desc: "Linux server admin, Docker deployments, Nginx reverse proxy, Postfix mail relay with SPF/DKIM/DMARC, incident response.",
    tags: ["Docker", "Linux", "Nginx", "Postfix"],
  },
  {
    icon: Zap,
    title: "AI-Integrated Systems",
    color: "#8b5cf6",
    desc: "Production AI workflows using OpenAI, Gemini, and Claude APIs. Prompt engineering, file-processing pipelines, per-request LLM features.",
    tags: ["OpenAI", "Gemini", "Claude", "Pipelines"],
  },
]

export const SKILL_GROUPS = [
  {
    category: "Frontend",
    color: "#10b981",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query", "Framer Motion"],
  },
  {
    category: "Backend",
    color: "#6366f1",
    skills: ["Node.js", "NestJS", "FastAPI", "Python", "REST API Design", "JWT / OAuth2", "WebSockets"],
  },
  {
    category: "Databases",
    color: "#f59e0b",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Schema Design", "Query Optimization"],
  },
  {
    category: "Platform & DevOps",
    color: "#06b6d4",
    skills: ["Docker & Compose", "Linux (Ubuntu/CentOS)", "Nginx", "GitHub Actions", "Shell Scripting", "DirectAdmin"],
  },
  {
    category: "AI & Tooling",
    color: "#8b5cf6",
    skills: ["OpenAI API", "Gemini API", "Claude API", "Prompt Engineering", "File Processing", "PHP"],
  },
]

export const PROJECTS = [
  {
    title: "ToeicLab VN",
    subtitle: "AI-Powered TOEIC Learning Platform",
    description: "Full-stack platform split into two independently deployable services: a NestJS API owning all application state and a FastAPI service for AI inference. Features JWT auth with HttpOnly cookies and LLM-generated per-question explanations.",
    image: "/placeholder.svg?height=400&width=700",
    tags: ["NestJS", "FastAPI", "PostgreSQL", "Prisma", "Redis", "Docker", "TypeScript", "Python"],
    github: "https://github.com/Vo-Hoa-Thuan",
    demo: "",
    highlights: [
      "Microservice split: NestJS API + FastAPI AI inference service",
      "JWT HttpOnly cookie auth — mitigates XSS token theft",
      "PostgreSQL schema with Prisma — users, question sets, attempt history",
      "LLM pipeline delivering per-question AI explanations after answering",
    ],
  },
  {
    title: "Postfix Outbound Relay",
    subtitle: "Mail Infrastructure & DevOps",
    description: "Self-hosted outbound SMTP relay for transactional email locked down to authenticated internal services only. Full SPF/DKIM/DMARC stack on the sending domain. Containerized for repeatable, version-controlled deployment.",
    image: "/placeholder.svg?height=400&width=700",
    tags: ["Linux", "Docker", "Postfix", "SMTP", "SPF", "DKIM", "DMARC"],
    github: "https://github.com/Vo-Hoa-Thuan/Postfix-Outbound-Relay",
    demo: "",
    highlights: [
      "Authenticated-only relay — zero open-relay exposure",
      "SPF (authorized IPs), DKIM signing, DMARC policy enforced",
      "Docker containerized for consistent, version-controlled deploys",
    ],
  },
  {
    title: "HCM_METRO",
    subtitle: "Metro Management & Tracking Platform",
    description: "Full-stack metro management platform with React.js and Node.js/Express.js. Handles route management, real-time tracking simulation, Google OAuth, and OTP auth. MongoDB with targeted indexing for read-heavy workloads.",
    image: "/metrohcm.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Docker"],
    github: "https://github.com/Vo-Hoa-Thuan/HCM_METRO",
    demo: "",
    highlights: [
      "Express.js REST backend for route management & tracking simulation",
      "MongoDB collections with targeted indexes for main read patterns",
      "Google OAuth sign-in + OTP verification for new sign-ups",
      "Docker Compose for consistent multi-environment setup",
    ],
  },
]

export const EXPERIENCE_BULLETS = [
  "Designed and built 10+ Node.js & Python AI automation services using OpenAI, Gemini, Claude APIs",
  "Managed Linux production servers (DirectAdmin + Docker) — monitoring, patching, operational support",
  "Investigated and remediated malware incidents via process analysis, log review, and system hardening",
  "Operated Postfix relay — configured SPF/DKIM/DMARC and resolved SMTP delivery issues end-to-end",
  "Built internal automation scripts to streamline data processing and content publishing workflows",
]
