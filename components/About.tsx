"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaJava, FaPython, FaReact, FaPhp, FaHtml5, FaCss3, FaGitAlt, FaLinux } from "react-icons/fa"
import { SiC, SiCplusplus, SiSpringboot, SiDjango, SiLaravel, SiMysql, SiOracle, SiSqlite, SiPostman, SiFigma, SiAdobephotoshop, SiJira } from "react-icons/si"

const skills = [
  { name: "Java", icon: FaJava, color: "#f89820" },
  { name: "Python", icon: FaPython, color: "#3572A5" },
  { name: "React", icon: FaReact, color: "#61DBFB" },
  { name: "PHP", icon: FaPhp, color: "#8993BE" },
  { name: "HTML", icon: FaHtml5, color: "#E44D26" },
  { name: "CSS", icon: FaCss3, color: "#264DE4" },
  { name: "C", icon: SiC, color: "#555" },
  { name: "C++", icon: SiCplusplus, color: "#004482" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "MySQL", icon: SiMysql, color: "#00758F" },
  { name: "Oracle", icon: SiOracle, color: "#F80000" },
  { name: "SQLite", icon: SiSqlite, color: "#003B57" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Figma", icon: SiFigma, color: "#A259FF" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Adobe Photoshop", icon: SiAdobephotoshop, color: "#001E36" },
  { name: "Jira", icon: SiJira, color: "#0052CC" },
  { name: "Linux", icon: FaLinux, color: "#FCC624" },
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3 mb-8 md:mb-0"
          >
            <Image
              src="/salma.jpeg" 
              alt="Salma Aboutofil"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-2/3 md:pl-8"
          >
            <p className="text-lg mb-8 text-grey">
           I’m a 4th-year software engineering student with a deep passion for software development, always seeking to learn and explore new technologies and fields. As I look for a final-year internship, I’m eager to apply my skills in a role that allows me to focus on creating efficient, user-centered solutions.
      </p>
          </motion.div>
          </div>
    <div>
    
    <h2 className="text-3xl font-semibold mb-4 text-center text-white">Skills</h2>
    <div className="  grid grid-cols-1 md:grid-cols-2 gap-6">
  
  {skills.map((skill, index) => {
    const Icon = skill.icon;
    return (
      <motion.div
      key={skill.name}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="bg-black p-6 rounded-full shadow-lg hover:shadow-[0_0_15px_5px_rgba(0,123,255,0.8)] hover:scale-105 transition-all duration-300 flex justify-center items-center"
    >
        
        <div className="flex items-center">
          <Icon className="text-3xl mr-2" style={{ color: skill.color }} />
        </div>
        <h4 className="font-semibold text-center mt-2">{skill.name}</h4>
      </motion.div>
    );
  })}
 </div>
        </div>
      </div>
    </section>
  )
}
