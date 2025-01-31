"use client"
import { motion } from "framer-motion"
import { FaFileDownload } from "react-icons/fa"

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4 text-white font-sans">Salma ABOUTOFIL</h1>
        <p className="text-2xl mb-8 text-neon-blue">Engineering Student | Problem Solver </p>
        <div className="relative mb-8">
          <svg
            className="absolute top-0 left-0 w-8 h-8 text-neon-blue opacity-50"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-xl italic font-serif px-12">Build with purpose, create with passion.</p>
          <svg
            className="absolute bottom-0 right-0 w-8 h-8 text-neon-blue opacity-50"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M22.648 28C27.544 24.544 31 18.88 31 12.64c0-5.088-3.072-8.064-6.624-8.064-3.36 0-5.856 2.688-5.856 5.856 0 3.168 2.208 5.472 5.088 5.472.576 0 1.344-.096 1.536-.192-.48 3.264-3.552 7.104-6.624 9.024L22.648 28zm-16.512 0c4.8-3.456 8.256-9.12 8.256-15.36 0-5.088-3.072-8.064-6.624-8.064-3.264 0-5.856 2.688-5.856 5.856 0 3.168 2.304 5.472 5.184 5.472.576 0 1.248-.096 1.44-.192-.48 3.264-3.456 7.104-6.528 9.024L6.136 28z" />
          </svg>
        </div>
        <div className="flex justify-center space-x-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-royal-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-neon-blue transition-colors"
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="/SalmaABOUTOFIL.cv.pdf"
            download="SalmaABOUTOFIL.CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neon-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-royal-blue transition-colors flex items-center"
          >
            <FaFileDownload className="mr-2" /> Download CV
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

