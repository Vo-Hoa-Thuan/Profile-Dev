"use client"
import type React from "react"
import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Github, Mail, Linkedin, Download, ArrowRight, MapPin, Phone, Send, ExternalLink, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import HeroViz from "@/components/hero-viz"
import { NAV_LINKS, STATS, EXPERTISE, SKILL_GROUPS, PROJECTS, EXPERIENCE_BULLETS } from "@/components/portfolio-data"

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}>
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")
  const formRef = useRef<HTMLFormElement>(null)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setStatus("sending")
    setTimeout(() => { setStatus("sent"); formRef.current?.reset(); setTimeout(() => setStatus("idle"), 4000) }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#030305] text-white selection:bg-indigo-500/30">

      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center pt-4 px-4">
        <motion.div className="w-full max-w-5xl flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-3 backdrop-blur-xl"
          initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <a href="/" className="text-base font-bold">
            <span className="gradient-text">VHT</span>
            <span className="text-white/30 text-xs font-mono ml-2">v2026</span>
          </a>
          <nav className="hidden md:flex items-center gap-5">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-white/45 hover:text-white transition-colors animated-underline">{l.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="/VoHoaThuan_FullStack_Engineer_CV.pdf" download
              className="hidden sm:flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 transition-all font-medium">
              <Download className="h-3 w-3" /> Resume
            </a>
            <ThemeToggle /><MobileMenu />
          </div>
        </motion.div>
      </header>

      <main>
        {/* HERO */}
        <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-5xl w-full px-4 sm:px-6 pt-28 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-7">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/8 mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                    <span className="text-xs font-mono text-indigo-300">Open to opportunities</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold leading-[1.05] tracking-tight">
                    <span className="text-white">Vo Hoa</span><br />
                    <span className="gradient-text">Thuan</span>
                  </h1>
                  <p className="mt-3 text-base md:text-lg text-white/35 font-mono">Full-Stack · Platform Engineering · AI Systems</p>
                </motion.div>

                <motion.p className="text-white/55 text-lg leading-relaxed max-w-md"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                  I build production systems — backend APIs, AI-integrated services, and Linux infrastructure that handle real traffic and real users.
                </motion.p>

                <motion.div className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}>
                  <a href="#contact">
                    <Button className="gap-2 bg-indigo-600 hover:bg-indigo-500 text-white border-0 px-5 h-10 rounded-xl text-sm font-medium">
                      <Mail className="h-3.5 w-3.5" /> Get In Touch
                    </Button>
                  </a>
                  <a href="#projects">
                    <Button variant="outline" className="gap-2 border-white/10 bg-white/5 hover:bg-white/10 text-white px-5 h-10 rounded-xl text-sm font-medium">
                      View Work <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </a>
                </motion.div>

                <motion.div className="flex items-center gap-4 pt-1"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                  {[
                    { href: "https://github.com/Vo-Hoa-Thuan", Icon: Github, label: "GitHub" },
                    { href: "https://www.linkedin.com/in/thuan-dev2004/", Icon: Linkedin, label: "LinkedIn" },
                    { href: "mailto:vohoathuan.devt@gmail.com", Icon: Mail, label: "Email" },
                  ].map(({ href, Icon, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-white/30 hover:text-white/70 transition-colors text-sm">
                      <Icon className="h-4 w-4" /><span className="hidden sm:inline">{label}</span>
                    </a>
                  ))}
                  <span className="text-white/15 mx-1">·</span>
                  <span className="text-sm text-white/30 flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> HCMC, Vietnam</span>
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.35 }}>
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-3 backdrop-blur-sm">
                  <div className="flex items-center justify-between px-2 pb-2">
                    <span className="text-[10px] font-mono text-white/20">system.topology</span>
                    <div className="flex gap-1.5">
                      {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} className="w-2.5 h-2.5 rounded-full opacity-70" style={{ background: c }} />)}
                    </div>
                  </div>
                  <HeroViz />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-white/[0.05] bg-white/[0.015]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="text-center">
                <div className="text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-white/35 mt-1">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="section-padding">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Reveal className="mb-12">
              <p className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-2">Core Competencies</p>
              <h2 className="text-3xl md:text-4xl font-bold">What I Build</h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {EXPERTISE.map((e, i) => (
                <Reveal key={e.title} delay={i * 0.1}>
                  <div className="group relative h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 hover:border-white/[0.12] transition-all duration-300 hover-lift overflow-hidden">
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(ellipse at top left, ${e.color}10 0%, transparent 65%)` }} />
                    <div className="relative">
                      <div className="inline-flex p-2.5 rounded-xl mb-4" style={{ background: `${e.color}15`, border: `1px solid ${e.color}25` }}>
                        <e.icon className="h-5 w-5" style={{ color: e.color }} />
                      </div>
                      <h3 className="text-base font-semibold mb-2">{e.title}</h3>
                      <p className="text-white/45 text-sm leading-relaxed mb-4">{e.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {e.tags.map(t => (
                          <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-md"
                            style={{ background: `${e.color}12`, border: `1px solid ${e.color}25`, color: e.color }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section-padding border-t border-white/[0.05]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Reveal className="mb-12">
              <p className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-2">Work History</p>
              <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-12">
              <Reveal delay={0.1}>
                <div className="pl-5 border-l border-white/[0.08] relative">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-6">
                    <div className="flex flex-wrap gap-2 justify-between items-start mb-1">
                      <h3 className="text-white font-semibold text-sm">System Administrator & Backend Developer</h3>
                      <span className="text-[11px] font-mono text-white/30 bg-white/5 px-2 py-0.5 rounded">Jan 2026 – May 2026</span>
                    </div>
                    <p className="text-indigo-400 text-xs mb-4">Sieu Toc Viet — Ho Chi Minh City</p>
                    <ul className="space-y-2">
                      {EXPERIENCE_BULLETS.map((b, i) => (
                        <li key={i} className="flex gap-2 text-xs text-white/50 leading-relaxed">
                          <span className="mt-1 w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="pl-5 border-l border-white/[0.08] relative">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 ring-4 ring-cyan-500/20" />
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-6">
                    <div className="flex flex-wrap gap-2 justify-between items-start mb-1">
                      <h3 className="text-white font-semibold text-sm">Bachelor of Information Technology</h3>
                      <span className="text-[11px] font-mono text-white/30 bg-white/5 px-2 py-0.5 rounded">2022 – 2026</span>
                    </div>
                    <p className="text-cyan-400 text-xs mb-4">Academy of Cryptography Techniques (ACT)</p>
                    <ul className="space-y-2">
                      {["Major: Information Technology","Technical working proficiency in English","Focus on secure systems and backend engineering"].map((b,i)=>(
                        <li key={i} className="flex gap-2 text-xs text-white/50 leading-relaxed">
                          <span className="mt-1 w-1 h-1 rounded-full bg-cyan-500 flex-shrink-0" />{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section-padding border-t border-white/[0.05]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Reveal className="mb-12">
              <p className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-2">Technical Arsenal</p>
              <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SKILL_GROUPS.map((g, i) => (
                <Reveal key={g.category} delay={i * 0.08}>
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: g.color }} />
                      <h3 className="text-sm font-semibold text-white/80">{g.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {g.skills.map(s => (
                        <span key={s} className="text-xs font-mono px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/55 hover:text-white/80 transition-colors">{s}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section-padding border-t border-white/[0.05]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Reveal className="mb-12">
              <p className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-2">Case Studies</p>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            </Reveal>
            <div className="space-y-8">
              {PROJECTS.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-white/[0.12] transition-all duration-300 hover-lift">
                    <div className="grid md:grid-cols-5">
                      <div className="md:col-span-2 relative overflow-hidden bg-white/[0.03]">
                        <Image src={p.image} alt={p.title} width={700} height={400} className="w-full h-48 md:h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#030305] hidden md:block" />
                      </div>
                      <div className="md:col-span-3 p-7">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <div>
                            <h3 className="text-lg font-bold text-white">{p.title}</h3>
                            <p className="text-indigo-400 text-xs font-mono">{p.subtitle}</p>
                          </div>
                          <div className="flex gap-2 flex-shrink-0">
                            {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/40 hover:text-white hover:border-white/20 transition-all"><Github className="h-3.5 w-3.5" /></a>}
                            {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/40 hover:text-white hover:border-white/20 transition-all"><ExternalLink className="h-3.5 w-3.5" /></a>}
                          </div>
                        </div>
                        <p className="text-white/45 text-sm leading-relaxed my-4">{p.description}</p>
                        <ul className="space-y-1.5 mb-5">
                          {p.highlights.map((h, j) => (
                            <li key={j} className="flex gap-2 text-xs text-white/50">
                              <CheckCircle2 className="h-3.5 w-3.5 text-indigo-500 flex-shrink-0 mt-0.5" />{h}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {p.tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-padding border-t border-white/[0.05]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Reveal className="text-center mb-12">
              <p className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-2">Get In Touch</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Let's Work Together</h2>
              <p className="text-white/40 max-w-md mx-auto text-sm">Open to backend, full-stack, or platform engineering roles. Also happy to discuss freelance infrastructure projects.</p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
              <Reveal delay={0.1} className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "vohoathuan.devt@gmail.com", href: "mailto:vohoathuan.devt@gmail.com" },
                  { icon: Phone, label: "Phone", value: "(+84) 867 962 672", href: "tel:+84867962672" },
                  { icon: Github, label: "GitHub", value: "github.com/Vo-Hoa-Thuan", href: "https://github.com/Vo-Hoa-Thuan" },
                  { icon: MapPin, label: "Location", value: "Ho Chi Minh City, Vietnam", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-white/30">{label}</p>
                      {href ? <a href={href} className="text-sm text-white/70 hover:text-white transition-colors">{value}</a>
                        : <p className="text-sm text-white/70">{value}</p>}
                    </div>
                  </div>
                ))}
              </Reveal>

              <Reveal delay={0.2}>
                <form ref={formRef} onSubmit={onSubmit} className="space-y-3">
                  {[
                    { id: "name", type: "text", placeholder: "Your name" },
                    { id: "email", type: "email", placeholder: "your@email.com" },
                  ].map(f => (
                    <input key={f.id} id={f.id} type={f.type} placeholder={f.placeholder} required
                      className="w-full px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-indigo-500/50 transition-colors" />
                  ))}
                  <textarea id="message" placeholder="Your message..." required rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none" />
                  <Button type="submit" disabled={status === "sending"} className="w-full gap-2 bg-indigo-600 hover:bg-indigo-500 text-white h-10 rounded-xl text-sm font-medium">
                    {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent ✓" : <><Send className="h-3.5 w-3.5" /> Send Message</>}
                  </Button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.05] py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-bold"><span className="gradient-text">VHT</span><span className="text-white/20 font-normal text-xs ml-1.5">© {new Date().getFullYear()}</span></span>
          <p className="text-xs text-white/25">Full-Stack · Platform Engineering · AI Systems</p>
          <div className="flex gap-4">
            {[
              { href: "https://github.com/Vo-Hoa-Thuan", Icon: Github },
              { href: "https://www.linkedin.com/in/thuan-dev2004/", Icon: Linkedin },
              { href: "mailto:vohoathuan.devt@gmail.com", Icon: Mail },
            ].map(({ href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white/70 transition-colors"><Icon className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
