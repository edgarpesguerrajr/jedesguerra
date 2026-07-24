import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <AnimatedSection>
              <div className="animate-fade-in">
                <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground animate-fade-in">
                  About Me
                </span>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                Designing clarity
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  into digital experiences
                </span>
              </h2>
            </AnimatedSection>
            <AnimatedSection>
              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                  I'm Edgar P. Esguerra Jr., a dedicated software engineer with
                  years of experience turning ideas into impactful digital
                  solutions. My journey began with curiosity about the web and
                  has grown into expertise in modern frontend technologies.
                </p>
                <p>
                  I specialize in PHP, MySQL, and JavaScript — building
                  everything from sleek landing pages to robust enterprise
                  applications. My approach blends technical precision with a
                  strong focus on design and user experience.
                </p>
                <p>
                  Beyond coding, I explore emerging technologies, contribute to
                  open-source projects.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                  "My mission is to create digital experiences that are not just
                  functional, but truly delightful — products that users love to
                  use and developers love to maintain."
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <AnimatedSection>
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
