"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Smartphone, Layers, Database, Code, PenTool, Zap, Server, GitBranch } from "lucide-react"

const skills = [
  {
    category: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    items: ["Flutter"],
  },
  {
    category: "Frontend",
    icon: <Layers className="h-6 w-6" />,
    items: ["React.js", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Backend Integration",
    icon: <Server className="h-6 w-6" />,
    items: ["RESTful APIs"],
  },
  {
    category: "Databases",
    icon: <Database className="h-6 w-6" />,
    items: ["MySQL", "MongoDB", "SQLite"],
  },
  {
    category: "UI/UX Design",
    icon: <PenTool className="h-6 w-6" />,
    items: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    category: "Development Tools",
    icon: <Code className="h-6 w-6" />,
    items: ["Git", "VsCode"],
  },
  {
    category: "Performance",
    icon: <Zap className="h-6 w-6" />,
    items: ["Code Optimization", "Memory Management", "Profiling", "Analytics"],
  },
  {
    category: "Version Control",
    icon: <GitBranch className="h-6 w-6" />,
    items: ["Git", "GitHub"],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-gray-900 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              My Skills
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            I've developed expertise in various technologies and tools related to mobile app development. Here's a
            comprehensive overview of my technical skillset.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 mr-3">{skill.icon}</div>
                  <h3 className="font-semibold text-lg text-white">{skill.category}</h3>
                </div>

                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
