"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    company: "OCP",
    position: "Intern",
    date: "July 2024 (1 month)",
    description: [
      "ResolveIT an Incident Management Web App using **Python**, **Django**, and **MySQL**:",
      "• Integrating dedicated spaces for employees, supervisors, and technicians, along with a statistical dashboard and a real-time notification system.",
      "• Implementing an architecture that allows smooth tracking of incidents, from reporting to resolution, with automatic generation of detailed reports",
    ],
  },
  {
    company: "Gudcy",
    position: "Intern",
    date: "June 2024 (1 month)",
    description: [
      "• Integrated a **GitHub** repository for version control.",
      "• Secured the application with an **SSL certificate** (Let's Encrypt).",
      "• Resolved server compatibility issues and monitored logs for production testing.",
      "• Optimized the application's performance for production.",
      "• Configured the domain's **DNS** to point to the IP address of the **VPS** server.",
      "• Deployed the application to the production environment.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-neon-blue">Professional Experiences</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-neon-blue transition-all duration-300"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-royal-blue text-white text-sm font-bold py-2 px-4 rounded-full">
                {exp.date}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-royal-blue">
                {exp.position} <span className="text-neon-blue">@ {exp.company}</span>
              </h3>
              <div className="space-y-2">
                {exp.description.map((line, lineIndex) => (
                  <p
                    key={lineIndex}
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: line.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-neon-blue">$1</span>'),
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

