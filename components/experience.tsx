"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function Experience() {
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

  const experiences = [
    {
      title: "Full-Stack Lead",
      company: "Parhlai",
      logo: "/images/parhlai.svg",
      period: "March 2024 - Present",
      responsibilities: [
        "Developed a responsive frontend using Next.js, Tailwind CSS, TypeScript, and Shadcn components, ensuring optimal user experience across devices.",
        "Integrated API for newsletter sign-up, establishing seamless communication between frontend and backend systems.",
        "Implemented Google Analytics to monitor website traffic and user engagement, facilitating data-driven decision-making.",
        "Created and integrated modals for streamlined sign-up processes, enhancing user experience and conversion rates.",
      ],
    },
    {
      title: "MERN Stack Developer",
      company: "DevGate",
      logo: "/images/devgate.jpeg",
      period: "July 2024 - Present",
      responsibilities: [
        "Developed and deployed the 'Bachat' web application, enabling users to pool money for committees, with a focus on dashboard and new committee program screens.",
        "Utilized Next.js, TypeScript, Express.js, Tailwind CSS, and MongoDB to build robust and scalable APIs, ensuring seamless integration across the application.",
        "Led the frontend development of an Attendance System for government employees, managing a team of 3 to deliver a high-quality, user-friendly application.",
        "Collaborated closely with backend engineers, ensuring smooth integration and adherence to project timelines in a MERN stack environment.",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-black py-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Work <span className="text-purple-400">Experience</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey and the roles I&apos;ve taken on throughout
            my career.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[28px] md:left-1/2 md:ml-[-1px] top-0 bottom-0 w-[2px] bg-purple-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 md:-ml-[30px] mt-0 md:mt-0 z-10">
                  <div className="w-[60px] h-[60px] rounded-full border-4 border-purple-800 bg-gray-900 flex items-center justify-center overflow-hidden">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 md:pr-12 md:text-right ml-20 md:ml-0">
                  {index % 2 === 0 ? (
                    <div className="hidden md:block"></div>
                  ) : (
                    <div className="md:pl-0">
                      <h3 className="text-2xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <div className="flex items-center md:justify-end gap-2 text-gray-400 mb-2">
                        <span>{exp.company}</span>
                        <span className="text-purple-400">•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-purple-400" />
                          {exp.period}
                        </span>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold mb-2">
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <span className="text-purple-400 mt-1.5">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="md:w-1/2 md:pl-12 ml-20 md:ml-0">
                  {index % 2 === 1 ? (
                    <div className="hidden md:block"></div>
                  ) : (
                    <div className="md:pl-0">
                      <h3 className="text-2xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <span>{exp.company}</span>
                        <span className="text-purple-400">•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-purple-400" />
                          {exp.period}
                        </span>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold mb-2">
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <span className="text-purple-400 mt-1.5">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
