"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="bg-gray-950 py-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="reveal fade-bottom">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/myself.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
            </div>
          </div>

          <div className="reveal fade-bottom">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-purple-400">Me</span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Hello! I&apos;m a dedicated full-stack developer with a strong
                background in both web and mobile app development. I thrive on
                creating functional, user-focused solutions that deliver real
                impact.
              </p>
              <p>
                On the web, I specialize in building responsive and dynamic
                applications using Next.js, TypeScript, Tailwind CSS, and
                MongoDB. I enjoy transforming ideas into smooth, scalable
                experiences that users love.
              </p>
              <p>
                Beyond the web, I develop mobile apps using Kotlin, Java, and
                Flutter&mdash;bringing intuitive interfaces and robust
                functionality to Android platforms. I&apos;m also actively
                expanding my knowledge in AWS and cloud computing to build more
                powerful, scalable systems.
              </p>
              <p>
                I believe in continuous learning, clean code, and building tech
                that makes a difference.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
