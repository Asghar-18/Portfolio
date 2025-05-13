"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Links() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    const revealElements = document.querySelectorAll(".reveal")
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      description: "Check out my code repositories",
      url: "https://github.com/Asghar-18",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      description: "Connect with me professionally",
      url: "https://linkedin.com/in/asghar18",
    },    
    {
      name: "Email",
      icon: <Mail className="h-6 w-6" />,
      description: "Get in touch via email",
      url: "mailto:asgharali23890@gmail.com",
    },
  ]

  return (
    <section id="links" className="bg-black py-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-purple-500">Links</span>
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Connect with me on various platforms and check out my social media profiles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.name === "Email" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-purple-500">
                {link.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">{link.name}</h3>
                <p className="text-sm text-gray-400">{link.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}