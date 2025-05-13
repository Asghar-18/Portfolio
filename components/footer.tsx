import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-bold text-white">
              Portfolio
            </Link>
            <p className="text-sm text-gray-400 mt-1">
              &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-4">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#tech" className="text-sm text-gray-400 hover:text-white transition-colors">
              Tech
            </Link>
            <Link href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#links" className="text-sm text-gray-400 hover:text-white transition-colors">
              Links
            </Link>
            <Link href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
