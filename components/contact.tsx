"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+1 (123) 456-7890",
      link: "tel:+11234567890",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "San Francisco, CA",
      link: null,
    },
  ]

  return (
    <section id="contact" className="bg-gray-950 py-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to me using the form below or through any
            of the provided contact methods.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p className="text-gray-400">
              I&apos;m interested in freelance opportunities – especially ambitious or large projects. However, if you
              have other requests or questions, don&apos;t hesitate to use the form.
            </p>

            <div className="space-y-4 mt-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 text-gray-300">
                  <div className="bg-gray-800 p-3 rounded-full text-purple-400">{info.icon}</div>
                  <div>
                    <h4 className="text-sm text-gray-400">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="hover:text-purple-400 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-gray-400">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to talk about..."
                  required
                  className="min-h-[150px] bg-gray-800 border-gray-700"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
