"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Contact Me</h2>
         <div className="max-w-3xl mx-auto text-center"> <p className="text-lg mb-8 text-neon-blue"> I'm always open to new opportunities and collaborations. Feel free to contact me. </p>
         </div>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg shadow-lg p-8"
          >
            
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-royal-blue mr-4 text-xl" />
                <a
                  href="mailto:salma.aboutofil@gmail.com"
                  className="text-white hover:text-neon-blue transition-colors"
                >
                  salma.aboutofil@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-royal-blue mr-4 text-xl" />
                <a href="tel:+212600000000" className="text-white hover:text-neon-blue transition-colors">
                  +212 688552930
                </a>
              </div>
              <div className="flex items-center">
                <FaLinkedin className="text-royal-blue mr-4 text-xl" />
                <a
                  href="https://www.linkedin.com/in/aboutofil-salma-77789b263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neon-blue transition-colors"
                >
                  Salma ABOUTOFIL
                </a>
              </div>
              <div className="flex items-center">
                <FaGithub className="text-royal-blue mr-4 text-xl" />
                <a
                  href="https://github.com/salma-aboutofil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neon-blue transition-colors"
                >
                  salma-aboutofil
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

