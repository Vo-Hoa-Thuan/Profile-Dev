"use client"

import { motion } from "framer-motion"
import { Code, Copy, Terminal, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function CodeInstructions() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const instructions = [
    {
      id: "clone",
      title: "Clone the repository",
      code: "git clone https://github.com/yourusername/portfolio.git",
      description: "Clone the repository to your local machine using Git.",
    },
    {
      id: "install",
      title: "Install dependencies",
      code: "npm install",
      description: "Navigate to the project directory and install the required dependencies.",
    },
    {
      id: "dev",
      title: "Run development server",
      code: "npm run dev",
      description: "Start the development server to preview the website locally.",
    },
    {
      id: "build",
      title: "Build for production",
      code: "npm run build",
      description: "Build the project for production deployment.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">How to Run This Code</h3>
        <p className="text-muted-foreground">
          Follow these steps to download and run this portfolio website on your local machine using Visual Studio Code.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-card p-6 rounded-lg shadow-md border border-border/50">
          <h4 className="flex items-center gap-2 text-lg font-semibold mb-4">
            <Code className="h-5 w-5 text-primary" />
            Prerequisites
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              Install{" "}
              <a
                href="https://nodejs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Node.js
              </a>{" "}
              (version 18 or higher)
            </li>
            <li>
              Install{" "}
              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Git
              </a>{" "}
              for version control
            </li>
            <li>
              Install{" "}
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Visual Studio Code
              </a>{" "}
              as your code editor
            </li>
          </ul>
        </div>

        {instructions.map((instruction, index) => (
          <motion.div
            key={instruction.id}
            className="bg-card p-6 rounded-lg shadow-md border border-border/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-2">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary text-sm">
                {index + 1}
              </span>
              {instruction.title}
            </h4>
            <p className="text-muted-foreground mb-3">{instruction.description}</p>
            <div className="relative">
              <div className="flex items-center bg-muted/50 p-3 rounded-md font-mono text-sm overflow-x-auto">
                <Terminal className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                <code>{instruction.code}</code>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2"
                onClick={() => copyToClipboard(instruction.code, instruction.id)}
              >
                {copied === instruction.id ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-card p-6 rounded-lg shadow-md border border-border/50">
        <h4 className="flex items-center gap-2 text-lg font-semibold mb-4">
          <Code className="h-5 w-5 text-primary" />
          Opening in VS Code
        </h4>
        <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
          <li>Open Visual Studio Code</li>
          <li>Go to File → Open Folder</li>
          <li>Navigate to the cloned repository folder and select it</li>
          <li>VS Code will open the project with all files and folders</li>
          <li>Open the integrated terminal in VS Code (View → Terminal)</li>
          <li>Run the commands listed above to install dependencies and start the development server</li>
        </ol>
      </div>

      <div className="bg-primary/10 p-4 rounded-lg">
        <p className="text-sm text-center">
          You can also{" "}
          <a
            href="https://github.com/yourusername/portfolio/archive/refs/heads/main.zip"
            className="text-primary font-medium hover:underline"
          >
            download the ZIP file
          </a>{" "}
          directly if you prefer not to use Git.
        </p>
      </div>
    </div>
  )
}

