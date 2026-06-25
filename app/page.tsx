"use client"

import type React from "react"

import Image from "next/image"
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  Download,
  Send,
  MapPin,
  Calendar,
  Phone,
  User,
  Code,
  Briefcase,
  GraduationCap,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { SectionTitle } from "@/components/section-title"
import { SkillProgress } from "@/components/skill-progress"
import { TimelineItem } from "@/components/timeline-item"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

export default function Home() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      if (formRef.current) formRef.current.reset()

      // Reset status after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000)
    }, 1500)
  }

  const projects = [
    {
      title: "ToeicLab VN – AI-Powered TOEIC Learning Platform",
      description:
        "A full-stack TOEIC learning platform split into two independently deployable services: a NestJS API owning all application state and a FastAPI service for AI inference. Features JWT authentication with HttpOnly cookies, relational schema managed via Prisma, and an AI explanation workflow powered by LLMs.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["NestJS", "FastAPI", "PostgreSQL", "Prisma", "Redis", "Docker", "TypeScript", "Python"],
      demoUrl: "",
      githubUrl: "https://github.com/Vo-Hoa-Thuan",
      responsibilities: [
        "Split the platform into two independently deployable services instead of one monolith: a NestJS API and a FastAPI AI inference service",
        "Implemented JWT-based authentication with HttpOnly cookies to reduce exposure to XSS-based token theft",
        "Designed the relational schema in PostgreSQL using Prisma, modeling users, TOEIC question sets, and attempt/answer history",
        "Built the AI explanation pipeline so users receive per-question LLM-generated explanations after answering",
        "Containerized all services with Docker Compose for one-command local setup with environment-based config",
      ],
    },
    {
      title: "Postfix Outbound Relay – Mail Infrastructure & DevOps",
      description:
        "A self-hosted outbound SMTP relay for transactional email. Application services authenticate to the relay which is locked down to only allow known authenticated services, reducing open-relay and spam risks. Containerized with Docker for repeatable deployment.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Linux", "Docker", "Postfix", "SMTP", "SPF", "DKIM", "DMARC"],
      demoUrl: "",
      githubUrl: "https://github.com/Vo-Hoa-Thuan",
      responsibilities: [
        "Built a self-hosted outbound SMTP relay where only authenticated, known services can submit mail",
        "Configured SPF (authorized sending IPs), DKIM (cryptographic message signing), and DMARC policy on the sending domain",
        "Containerized the relay with Docker for repeatable, version-controlled deployment without manual reconfiguration",
      ],
    },
    {
      title: "HCM_METRO – Metro Management & Tracking Platform",
      description:
        "A full-stack metro management platform built with React.js and Node.js/Express.js, handling route management, tracking simulation, and user authentication via Google OAuth and OTP. Modeled routes, stations, and tracking data in MongoDB with targeted indexing strategies.",
      image: "/metrohcm.png?height=400&width=600",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Docker"],
      demoUrl: "",
      githubUrl: "https://github.com/Vo-Hoa-Thuan/HCM_METRO",
      responsibilities: [
        "Built the Node.js/Express.js backend handling route management and tracking simulation via REST endpoints",
        "Modeled routes, stations, and tracking data as MongoDB collections with targeted indexes for main read patterns",
        "Implemented Google OAuth for sign-in and OTP-based verification for new sign-ups",
        "Containerized with Docker for consistent local development and setup across environments",
      ],
    },
  ]

  const backendSkills = [
    { name: "Node.js & NestJS", level: 92 },
    { name: "FastAPI & Python", level: 82 },
    { name: "RESTful API Design", level: 93 },
    { name: "PostgreSQL & Prisma ORM", level: 88 },
    { name: "MongoDB & Redis", level: 85 },
    { name: "JWT & OAuth2 Auth", level: 88 },
  ]

  const frontendSkills = [
    { name: "React.js & Next.js", level: 88 },
    { name: "TypeScript & JavaScript", level: 92 },
    { name: "Tailwind CSS", level: 87 },
    { name: "Zustand & TanStack Query", level: 80 },
    { name: "Responsive UI Development", level: 88 },
    { name: "PHP", level: 78 },
  ]

  const otherSkills = [
    "Docker & Docker Compose",
    "Linux (Ubuntu/CentOS)",
    "Nginx Reverse Proxy",
    "GitHub Actions",
    "AI APIs (OpenAI, Gemini, Claude)",
    "Postfix / SMTP / Mail Security",
    "Shell Scripting",
    "Prompt Engineering",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 caret-transparent">
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/80 border-b caret-transparent">
        <div className="container flex items-center justify-between h-24">
          <motion.h1
            className="text-3xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            
            <a href="/">
              <span className="text-primary">Vo</span>HoaThuan
            </a>
          </motion.h1>
          <motion.nav
            className="hidden md:flex items-center gap-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#about" className="text-2sm font-medium hover:text-primary transition-colors relative group">
              About Me
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#experience" className="text-2sm font-medium hover:text-primary transition-colors relative group">
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="text-2sm font-medium hover:text-primary transition-colors relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="text-2sm font-medium hover:text-primary transition-colors relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-2sm font-medium hover:text-primary transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </motion.nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="about" className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="caret transparent inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-4sm font-medium mb-2">
                Full Stack · Platform Engineering · AI-Integrated Systems
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">Vo Hoa Thuan</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Full-Stack Engineer building modern web applications, backend services, and Linux-based infrastructure with AI integration.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href="#contact">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/VoHoaThuan_FullStack_Engineer_CV.pdf" download>
                    <Download className="mr-2 h-4 w-4" /> Download CV
                  </a>
                </Button>
              </div>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Vo-Hoa-Thuan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-10 w-10" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/thuan-dev2004/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-10 w-10" />
                </motion.a>
                <motion.a
                  href="mailto:vohoathuan.devt@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-10 w-10" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              className="relative aspect-square max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 blur-3xl opacity-50 animate-pulse"></div>
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Vo Hoa Thuan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Objective Section */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container">
            <SectionTitle title="Career Objective" subtitle="My professional goals and aspirations" />
            <motion.div
              className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-md border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Full-Stack Engineer with hands-on experience building modern web applications, backend services, and{" "}
                  <span className="text-primary font-medium">
                    Linux-based infrastructure.
                  </span>{" "}
                  Developed AI-integrated systems using OpenAI, Gemini, and Claude APIs while designing scalable backend
                  architectures with Node.js, NestJS, FastAPI, PostgreSQL, and Docker.
                </p>
                <p>
                  Experienced across the full software lifecycle, from React frontend development and API design to
                  deployment-ready environments, server administration, mail infrastructure, and production incident response.
                </p>
                <p>
                  Interested in building reliable software platforms that combine strong engineering fundamentals with
                  practical AI capabilities.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Personal Info */}
        <section className="py-12 md:py-16">
          <div className="container">
            <SectionTitle
              title="Personal Information"
              subtitle="Get to know me better with these key details about my background and contact information."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <motion.div
                className="bg-card rounded-lg p-6 shadow-md border border-border/50 hover:border-primary/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground">Full Name</h3>
                </div>
                <p className="text-xl font-semibold break-all">Vo Hoa Thuan</p>
              </motion.div>
              <motion.div
                className="bg-card rounded-lg p-6 shadow-md border border-border/50 hover:border-primary/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground">Date of Birth</h3>
                </div>
                <p className="text-xl font-semibold break-all">August 3, 2004</p>
              </motion.div>
              <motion.div
                className="bg-card rounded-lg p-6 shadow-md border border-border/50 hover:border-primary/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
                </div>
                <p className="text-xl font-semibold break-all">(+84) 867 962 672</p>
              </motion.div>
              <motion.div
                className="bg-card rounded-lg p-6 shadow-md border border-border/50 hover:border-primary/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                </div>
                <p className="text-xl font-semibold break-all">vohoathuan.devt@gmail.com</p>
              </motion.div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <motion.div
                className="bg-card rounded-lg p-6 shadow-md border border-border/50 hover:border-primary/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                </div>
                <p className="text-xl font-semibold">
                  Ho Chi Minh City, Vietnam
                </p>
              </motion.div>
              <motion.div
                className="bg-card rounded-lg p-6 shadow-md border border-border/50 hover:border-primary/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">AI & Software Engineering</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Linux & Platform Infrastructure</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Football & Badminton</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section id="experience" className="bg-muted/30 py-12 md:py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Education */}
              <div>
                <SectionTitle title="Education" subtitle="My academic background and qualifications" className="mb-8" />
                <div className="space-y-6">
                  <TimelineItem
                    title="Academy of Cryptography Techniques (ACT)"
                    date="2022 - 2026 (Expected)"
                    description={
                      <div className="space-y-2">
                        <p>Majoring in Information Technology</p>
                        <p>Technical working proficiency in English</p>
                        <div className="mt-4 flex items-center">
                          <GraduationCap className="h-5 w-5 text-primary mr-2" />
                          <span className="font-medium">Bachelor of Information Technology</span>
                        </div>
                      </div>
                    }
                    index={0}
                  />
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <SectionTitle
                  title="Work Experience"
                  subtitle="My professional journey and projects"
                  className="mb-8"
                />
                <div className="space-y-6">
                  <TimelineItem
                    title="System Administrator & Backend Developer"
                    date="Jan 2026 - May 2026"
                    description={
                      <div className="space-y-2">
                        <p className="font-medium text-primary">Sieu Toc Viet — Ho Chi Minh City, Vietnam</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                          <li>Designed and built 10+ Node.js and Python AI automation services integrating OpenAI, Gemini, and Claude APIs</li>
                          <li>Managed Linux production servers (DirectAdmin + Docker), handling monitoring, patching, and operational support</li>
                          <li>Investigated and remediated malware-related incidents via process analysis, log review, and system hardening</li>
                          <li>Operated Postfix relay infrastructure, configured SPF/DKIM/DMARC, and resolved SMTP delivery issues</li>
                          <li>Built internal automation scripts to streamline data processing and content publishing workflows</li>
                        </ul>
                        <div className="mt-4 flex items-center">
                          <Briefcase className="h-5 w-5 text-primary mr-2" />
                          <span className="font-medium">Full-time Employment</span>
                        </div>
                      </div>
                    }
                    index={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container py-12 md:py-24">
          <SectionTitle
            title="Technical Skills"
            subtitle="The technologies, tools, and methodologies I've mastered throughout my career."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <motion.div
              className="bg-card rounded-lg p-6 shadow-md border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Backend Development</h3>
              </div>
              <div className="space-y-4">
                {backendSkills.map((skill, index) => (
                  <SkillProgress key={index} name={skill.name} level={skill.level} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-card rounded-lg p-6 shadow-md border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Frontend Development</h3>
              </div>
              <div className="space-y-4">
                {frontendSkills.map((skill, index) => (
                  <SkillProgress key={index} name={skill.name} level={skill.level} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-card rounded-lg p-6 shadow-md border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Other Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {otherSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-md bg-muted/50"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-muted/30 py-12 md:py-24">
          <div className="container">
            <SectionTitle
              title="Featured Projects"
              subtitle="A showcase of my work, featuring web applications and software solutions I've developed."
            />
            <div className="space-y-16">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="grid md:grid-cols-2 gap-8 items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="aspect-video bg-muted relative overflow-hidden rounded-lg shadow-lg border border-border/50 group">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        {project.demoUrl && (
                          <Button size="sm" variant="secondary" asChild>
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {project.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary mt-1.5"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <Button size="sm" variant="default" asChild>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24">
          <div className="container">
            <SectionTitle
              title="Get In Touch"
              subtitle="Have a project in mind or want to discuss potential opportunities? Feel free to reach out!"
            />
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out to me through any of these channels. I'm always open to discussing new
                  projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">vohoathuan.devt@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-muted-foreground">(+84) 867 962 672</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">GitHub</h4>
                      <p className="text-muted-foreground">github.com/Vo-Hoa-Thuan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">Ho Chi Minh City, Vietnam</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="bg-card p-6 rounded-lg shadow-md border border-border/50"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-3 py-2 border rounded-md text-sm bg-background"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border rounded-md text-sm bg-background"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full px-3 py-2 border rounded-md text-sm min-h-[120px] bg-background"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <Button className="w-full" type="submit" disabled={formStatus === "submitting"}>
                    {formStatus === "submitting" ? (
                      <>Sending...</>
                    ) : formStatus === "success" ? (
                      <>Message Sent!</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
        
      </main>

      <footer className="bg-background py-8 border-t">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-bold mb-4">
                <span className="text-primary">Vo</span>HoaThuan
              </h3>
              <p className="text-muted-foreground">
                Full Stack Developer passionate about creating elegant solutions to complex problems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">Email: vohoathuan.devt@gmail.com</li>
                <li className="text-muted-foreground">Phone: (+84) 867 962 672</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Vo-Hoa-Thuan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/thuan-dev2004/" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:vohoathuan.devt@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Vo Hoa Thuan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

