"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">About Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-2 flex justify-center">
              <motion.div
                className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-500/30"
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image src="/Foto.jpg?height=256&width=256" alt="Profile" fill className="object-cover" />
              </motion.div>
            </div>

            <div className="md:col-span-3">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Mobile App Developer & UI/UX Enthusiast</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  With over 5 years of experience in mobile app development, I specialize in creating beautiful,
                  functional, and user-friendly applications that deliver exceptional user experiences. My expertise
                  spans across React Native, Flutter, and native iOS/Android development.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm passionate about combining elegant code with stunning design to build apps that not only work
                  flawlessly but also delight users. My approach focuses on performance optimization, clean
                  architecture, and staying current with the latest mobile development trends.
                </p>

                <div className="grid grid-cols-2 gap-4 text-gray-300">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></div>
                    <span>5+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></div>
                    <span>20+ Mobile Apps</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></div>
                    <span>Cross-Platform Expert</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></div>
                    <span>UI/UX Focused</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
