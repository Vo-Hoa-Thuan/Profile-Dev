"use client"

import type React from "react"

import { motion } from "framer-motion"

interface TimelineItemProps {
  title: string
  date: string
  description: React.ReactNode
  index: number
}

export function TimelineItem({ title, date, description, index }: TimelineItemProps) {
  return (
    <motion.div
      className="relative pl-8 pb-8 border-l border-primary/30 last:border-l-transparent"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary"></div>
      <div className="bg-card rounded-lg p-6 shadow-md border border-border/50 hover:border-primary/30 transition-colors duration-300">
        <div className="flex flex-wrap justify-between gap-4 mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            {date}
          </span>
        </div>
        <div className="text-muted-foreground">{description}</div>
      </div>
    </motion.div>
  )
}

