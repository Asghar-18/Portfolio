"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiKotlin,
  SiDart,
  SiHtml5,
  SiCss3,
  SiFlutter,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiFastapi,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiGit,
  SiGithub,
  SiFirebase,
  SiGooglecloud,
  SiAmazonwebservices,
  SiPostman,
  SiAndroidstudio,
  SiMongodb,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Technologies() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const technologies = [
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiKotlin />, name: "Kotlin" },
    { icon: <SiDart />, name: "Dart" },
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <SiJquery />, name: "jQuery" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiGooglecloud />, name: "Google Cloud" },
    { icon: <SiAmazonwebservices />, name: "AWS" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiAndroidstudio />, name: "Android Studio" },
  ];

  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section id="tech" className="py-20 bg-gray-950 overflow-hidden">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech I <span className="text-purple-400">Use</span>
          </h2>
          <div className="w-20 h-1 bg-purple-400 rounded mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            I work with a variety of technologies to build modern, scalable, and
            performant web and mobile applications.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full"
        >
          <div className="tech-scroll-container mb-8">
            <div className="tech-scroll tech-scroll-left">
              {duplicatedTechnologies.map((tech, index) => (
                <div key={`tech-${index}`} className="tech-item">
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-4xl text-purple-400 mb-2">
                      {tech.icon}
                    </div>
                    <span className="text-sm text-gray-300">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .tech-scroll-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 20px 0;
        }

        .tech-scroll {
          display: flex;
          white-space: nowrap;
          will-change: transform;
        }

        .tech-scroll-left {
          animation: scrollLeft 60s linear infinite;
        }

        .tech-item {
          flex: 0 0 auto;
          width: 120px;
          height: 120px;
          margin: 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(24, 24, 27, 0.5);
          border: 1px solid rgba(39, 39, 42, 0.3);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .tech-item:hover {
          transform: translateY(-5px);
          border-color: rgba(147, 51, 234, 0.5);
          box-shadow: 0 0 20px rgba(147, 51, 234, 0.2);
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              calc(
                -120px * ${technologies.length} - 40px * ${technologies.length}
              )
            );
          }
        }

        @media (max-width: 768px) {
          .tech-item {
            width: 100px;
            height: 100px;
            margin: 0 15px;
          }

          @keyframes scrollLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(
                calc(
                  -100px * ${technologies.length} - 30px * ${technologies.length}
                )
              );
            }
          }
        }
      `}</style>
    </section>
  );
}
