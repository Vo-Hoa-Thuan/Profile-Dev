"use client"
import { motion } from "framer-motion"

const NODES = [
  { label: "Next.js", color: "#10b981", x: 50, y: 8 },
  { label: "NestJS API", color: "#6366f1", x: 80, y: 35 },
  { label: "FastAPI AI", color: "#8b5cf6", x: 65, y: 68 },
  { label: "PostgreSQL", color: "#06b6d4", x: 20, y: 35 },
  { label: "Redis", color: "#f59e0b", x: 20, y: 68 },
  { label: "LLM APIs", color: "#a78bfa", x: 50, y: 88 },
]

const EDGES: [number, number][] = [[0,1],[1,2],[1,3],[1,4],[2,5]]

export default function HeroViz() {
  return (
    <div className="relative w-full h-[320px] md:h-[400px]">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-56 h-56 rounded-full bg-indigo-500/8 blur-3xl" />
      </div>

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {EDGES.map(([fi, ti], i) => {
          const f = NODES[fi], t = NODES[ti]
          return (
            <g key={i}>
              <motion.line
                x1={f.x} y1={f.y} x2={t.x} y2={t.y}
                stroke="rgba(99,102,241,0.18)" strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeOut" }}
              />
            </g>
          )
        })}
      </svg>

      {NODES.map((node, i) => (
        <motion.div
          key={node.label}
          className="absolute"
          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { duration: 0.4, delay: i * 0.12 },
            scale: { duration: 0.4, delay: i * 0.12 },
            y: { duration: 2.8 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 },
          }}
        >
          <div
            className="px-2.5 py-1.5 rounded-lg text-[11px] font-mono font-medium whitespace-nowrap border"
            style={{
              background: "rgba(5,5,15,0.85)",
              borderColor: `${node.color}35`,
              color: node.color,
              backdropFilter: "blur(8px)",
              boxShadow: `0 0 16px ${node.color}18`,
            }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse"
              style={{ background: node.color }}
            />
            {node.label}
          </div>
        </motion.div>
      ))}

      <motion.div
        className="absolute bottom-2 right-3 text-[10px] font-mono text-white/20 flex items-center gap-1.5"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse inline-block" />
        Docker Compose
      </motion.div>
    </div>
  )
}
