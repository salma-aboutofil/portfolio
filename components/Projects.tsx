"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
const projects = [
  {
    title: "LocateNOW",
     type:"full-stack car rental web platform",
    description:
      "Design and development interactive platform that allows customers to book vehicles online and pay via Stripe. Administrators have the ability to view and manage reservations, as well as perform CRUD operations on vehicles and users.",
    challenges: "JAVA EE(SPRING BOOT), Spring Security, and Spring Data,HTML,CSS(Bootstrap), JS, REACT VITE, Mysql, GitHub, UML, Postman",
    github: "",
    demo: "soon",
  },
  {
    title: "Nevvision",
    type:" Cross-platform desktop application for task and project management.",
    description: " A Java Swing application that enables professors to manage tasks and projects efficiently. Integrates with Google Calendar for seamless task addition and syncs with Gmail for notifications.",
    challenges: "Java Swing, MongoDB, Google Calendar API, Gmail API,Merise,GitHub",
    github: "",
    demo:"soon",
  },
  {
    title: "BookDive",
    type: "online library management system built with Laravel, PHP, and MySQL.",
    description: "allowing users to search for books, download publications, and manage their personal reading spaces. Implementation of authentication and authorization systems to secure access.",
    challenges:"Laravel, PHP,HTML,CSS(Bootstrap),Merise,MySQL",
    github: "",
    demo: "soon",
  },
  {
    title: "CentreFormation",
    type: "Web-based training center management system",
    description: "A complete platform for managing training centers, including scheduling, group and professor management, and room allocation. Ensures efficient organization of courses and schedules.",
    challenges:"PHP, HTML, CSS,Merise, MySQL",
    github: "",
    demo: "soon",
  },
  {
    title: "Library Management System",
    type: "Desktop library management system",
    description: "development of a complete library management system that allows administrators to manage books, track borrowings and returns, and handle member subscriptions. Includes database management using file storage for efficient data handling.",
    challenges:"C, File Handling, Data Structures",
  },
]

export default function Projects() {
  const [notification, setNotification] = useState<string | null>(null)

  const showNotification = (message: string) => {
    setNotification(message)
    setTimeout(() => setNotification(null), 3000) // Hide notification after 3 seconds
  }
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black  rounded-lg shadow-md overflow-hidden shadow-lg hover:shadow-[0_0_15px_5px_rgba(0,123,255,0.8)] hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-blue-700 mb-4">{project.type}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Technologies:</strong> {project.challenges}
                </p>
                <div className="flex space-x-4">
                  {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-secondary transition-colors"
                  >
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                  )}
                  {project.demo && (
                    <button
                      onClick={() => showNotification("Demo will be available soon!")}
                      className="flex items-center text-neon-blue hover:text-royal-blue transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-1" /> Demo
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg"
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

