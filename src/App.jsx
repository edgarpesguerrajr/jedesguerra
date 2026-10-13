import { useState } from "react";
import { Loader } from "@/components/Loader"; // adjust path
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Education } from "@/sections/Education";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Certificate } from "@/sections/Certificate";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <Loader onFinish={() => setLoading(false)} />
  ) : (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Certificate />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
