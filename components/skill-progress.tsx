"use client"

import { motion } from "framer-motion"

interface SkillProgressProps {
  name: string
  level: number
  index: number
}

export function SkillProgress({ name, level, index }: SkillProgressProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-primary font-semibold">{level}%</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary/80 to-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </div>
  )
}

