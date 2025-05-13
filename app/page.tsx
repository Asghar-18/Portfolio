import Hero from "@/components/hero"
import About from "@/components/about"
import Technologies from "@/components/technologies"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Links from "@/components/links"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Links />
      <Contact />
      <Footer />
    </main>
  )
}
