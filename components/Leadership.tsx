"use client"

import { motion } from "framer-motion"
import { FaUsers, FaCode, FaBook } from "react-icons/fa"
import Image from "next/image"

const activities = [
  {
    role: "Active Member",
    organization: "Courses and Projects Unit-CODEX Club",
    period: "2024-present",
    description: "organizing educational training programs and overseeing the development and execution of projects in the fields of software development and data science.",
    icon: FaUsers,
    logo: "/codexx.png?height=100&width=100", // Replace with actual CODEX logo
    color: "from-blue-400 to-purple-500",
  },
  {
    role: "Vice President",
    organization: "Open Source Days version 13.0",
    period: "2024",
    description: " Led a team to organize the annual event serves as a platform for developers, entrepreneurs, and students to explore and discuss open-source software.",
    icon: FaCode,
    logo: "/OS.png?height=100&width=100", // 
    color: "from-neon-blue to-royal-blue",
  },
  {
    role: "Project Leader",
    organization: "Rofof Library",
    period: "2022-2024",
    description: "Led a team responsible for managing a physical library, overseeing book cataloging, membership handling, and daily operations. Ensured smooth circulation of books and provided an organized system for library users. Additionally, managed the library's social media presence to engage the community",
    icon: FaBook,
    logo: "/rofof.jpg?height=100&width=100", 
    color: "from-royal-blue to-blue-900",
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-royal-blue">Leadership & Activities</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.role}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="relative group"
            >
              {/* Background Card with Gradient */}
              <div
                className={`
                absolute inset-0 bg-gradient-to-br ${activity.color}
                rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity
                duration-500
              `}
              />

              {/* Main Card Content */}
              <div
                className="relative bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-8
                            border border-white border-opacity-10 hover:border-opacity-20
                            transition-all duration-500 group-hover:transform group-hover:scale-[1.02]"
              >
                {/* Logo Circle */}
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  {/* Glowing circle background */}
                  <div
                    className={`
                    absolute inset-0 rounded-full bg-gradient-to-r ${activity.color}
                    opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500
                  `}
                  />

                  {/* Logo container */}
                  <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white border-opacity-20">
                    <Image
                      src={activity.logo || "/placeholder.svg"}
                      alt={`${activity.organization} logo`}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <motion.h3 className="text-2xl font-bold text-white mb-2" whileHover={{ scale: 1.05 }}>
                    {activity.role}
                  </motion.h3>
                  <p className="text-neon-blue font-semibold mb-1">{activity.organization}</p>
                  <p className="text-gray-400 text-sm mb-4">{activity.period}</p>
                  <p className="text-gray-300">{activity.description}</p>
                </div>

                {/* Decorative Elements */}
                <div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2
                              w-1/2 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent
                              opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-royal-blue rounded-full blur-[100px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-neon-blue rounded-full blur-[100px] opacity-20" />
      </div>
    </section>
  )
}

