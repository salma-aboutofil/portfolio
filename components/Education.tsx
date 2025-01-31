"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const education = [
  {
    degree: "Software Engineering Studies",
    institution: "ENSA Khouribga",
    date: "2023 - Present",
  },
  {
    degree: "Integrated Preparatory Classes",
    institution: "ENSA Khouribga",
    date: "2021 - 2023",
  },
  {
    degree: "High School Diploma in Physical Sciences",
    institution: "Lycée Mohammed V - Benguerir",
    date: "2020-2021",
  },
]

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const highwayHeight = useTransform(scrollYProgress, [0, 1], ["0%", "119%"])

  return (
    <section id="education" className="py-20 min-h-screen " ref={containerRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-24 text-center text-white">Education</h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-neon-blue"
            style={{
              height: highwayHeight,
              top: 0,
              bottom: 0,
            }}
          />

          {/* Education Items */}
          <div className="relative">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="flex items-center mb-32 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-neon-blue rounded-full z-10" />

                {/* Content */}
                <div className={`w-full flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-neon-blue mb-1">{edu.institution}</p>
                    <p className="text-gray-400">{edu.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

