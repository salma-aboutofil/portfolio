import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Salma Aboutofil - Engineering Student & Developer",
  description:
    "4th-year computer engineering student passionate about designing and developing solutions. Seeking a final-year internship.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-bg-black text-white`}>
        <div className="dynamic-bg"></div>
        <header className="fixed top-0 left-0 right-0 bg-bg-black bg-opacity-70 shadow-md z-50">
          <nav className="container mx-auto px-6 py-3">
            <ul className="flex justify-center space-x-6">
              <li>
                <a href="#home" className="text-neon-blue hover:text-royal-blue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-neon-blue hover:text-royal-blue transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#education" className="text-neon-blue hover:text-royal-blue transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#experience" className="text-neon-blue hover:text-royal-blue transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#projects" className="text-neon-blue hover:text-royal-blue transition-colors">
                  Projects
                </a>
              </li>
              
             
              <li>
                <a href="#leadership" className="text-neon-blue hover:text-royal-blue transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neon-blue hover:text-royal-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="pt-16">{children}</main>
        <footer className="bg-bg-black bg-opacity-70 py-6 mt-12">
          <div className="container mx-auto px-6 text-center text-neon-blue">
            © {new Date().getFullYear()} Salma Aboutofil. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}

