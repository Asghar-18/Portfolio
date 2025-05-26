"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  SiJavascript,
  SiReact,
  SiRadixui,
  SiLucide,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiPython,
  SiKotlin,
  SiAndroidstudio,
  SiTensorflow,
} from "react-icons/si";
import {} from "react-icons/fa";

export default function Projects() {
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

  const projects = [
    {
      title: "Silent Speech",
      type: "Accessibility App",
      icon: (
        <Image
          src="/icons/silent-speech-icon.png"
          alt="Silent Speech Icon"
          width={48}
          height={48}
        />
      ),
      iconContainerClass: "h-12",
      description:
        "An Android application using Machine Learning to interpret sign language to text from live feed, videos, and images, aiding the deaf community in communication.",
      image: "/images/silent-speech.png",
      technologies: [
        { name: "Python", icon: <SiPython className="w-8 h-8" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="w-8 h-8" /> },
        { name: "Kotlin", icon: <SiKotlin className="w-8 h-8" /> },
        {
          name: "Android Studio",
          icon: <SiAndroidstudio className="w-8 h-8" />,
        },
      ],
      liveUrl: "https://silentspeech.vercel.app/",
      codeUrl: "https://github.com/Asghar-18/silent-speech",
    },
    {
      title: "Eccentrik",
      type: "E-commerce Web Application",
      icon: (
        <Image
          src="/icons/eccentrik-icon.png"
          alt="Eccentrik Icon"
          width={48}
          height={48}
        />
      ),
      iconContainerClass: "h-6",
      description:
        "A modern e-commerce platform for clothing and accessories, featuring product browsing, search, cart, and checkout experiences. Built with Next.js, TypeScript, and Tailwind CSS for a fast, responsive, and scalable user interface.",
      image: "/images/eccentrik.png",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8" /> },
        { name: "Radix UI", icon: <SiRadixui className="w-8 h-8" /> },
        { name: "Lucide React", icon: <SiLucide className="w-8 h-8" /> },
      ],
      liveUrl: "https://eccentrik-shop.vercel.app/",
      codeUrl: "https://github.com/Asghar-18/Eccentrik",
    },
    {
      title: "Parhlai",
      type: "EdTech Platform",
      icon: (
        <Image
          src="/icons/parhlai-icon.png"
          alt="User Clock Icon"
          width={24}
          height={24}
        />
      ),
      iconContainerClass: "h-12",
      description:
        "An employee attendance system with a responsive frontend built using React and SCSS, featuring Redux for state management and React Router for navigation.",
      image: "/images/parhlai.png",
      technologies: [
        { name: "React", icon: <SiReact className="w-8 h-8" /> },
        { name: "Redux", icon: <SiRedux className="w-8 h-8" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-8 h-8" /> },
        { name: "Express.js", icon: <SiExpress className="w-8 h-8" /> },
      ],
      liveUrl: "https://parhlai.com/",
      codeUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project
            represents a unique challenge and showcases different skills and
            technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col bg-gray-900">
                {/* Project Type and Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-12 rounded-lg ${project.iconContainerClass}`}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{project.type}</p>
                    <h3 className="text-xl font-bold text-purple-400">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 text-sm mt-2 mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-auto">
                  <h4 className="text-purple-400 text-sm mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-4 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="text-purple-400">
                        {tech.icon}
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full transition-colors"
                    >
                      Live Link
                    </a>
                    {project.codeUrl !== "#" && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full transition-colors"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
