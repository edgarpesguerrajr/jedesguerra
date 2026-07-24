import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const skills = [
  {
    no: "01",
    category: "Frontend",
    description:
      "Component-driven interfaces with deliberate state management and interaction details.",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Styled Components",
      "Vite",
      "ESLint",
      "Prettier",
    ],
  },
  {
    no: "02",
    category: "Backend & Databases",
    description:
      "Business logic, architecture, and schema design across relational and non-relational stores.",
    stack: ["Python", "PHP", "Laravel", "MySQL"],
  },
  {
    no: "03",
    category: "AI & Machine Learning",
    description:
      "Building intelligent models with machine learning techniques, applying AI to tasks like predictive analytics, NLP, and computer vision.",

    stack: ["Github CoPilot", "OpenAI", "Claude Code", "Microsoft Copilot"],
  },
  {
    no: "04",
    category: "Developer Tools",
    description:
      "Version control, development environments, design tools, and deployment workflows.",
    stack: ["Git", "Github", "VS Code", "Vercel"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden py-32">
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
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-24 top-20 h-44 w-44 rounded-full bg-highlight/10 blur-3xl" />
        <div className="absolute left-0 top-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-3xl ">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground animate-fade-in">
              What I Work With
            </span>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="mt-4 text-5xl font-bold text-primary md:text-6xl animate-fade-in animation-delay-100">
              Tech{" "}
              <span className="font-serif italic font-normal text-white">
                {" "}
                Stack
              </span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="space-y-10">
          {skills.map((stack, i) => (
            <AnimatedSection key={i}>
              <div
                className="border-b border-muted-foreground/20 animate-fade-in"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                {/* Responsive grid: stack on mobile, 2 cols on md, 3 cols on lg */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5">
                  {/* Left column */}
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-[Consolas] text-muted-foreground">
                      {stack.no}
                    </span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                        {stack.category}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {stack.description}
                      </span>
                    </div>
                  </div>

                  {/* Right column: tech badges */}
                  <div className="md:col-span-1 lg:col-span-2">
                    <ul className="flex flex-wrap gap-3 md:gap-4">
                      {stack.stack.map((tech, j) => (
                        <li key={j} className="flex items-center group">
                          <span className="px-3 py-1 bg-primary/10 font-bold text-primary rounded-md hover:bg-primary/20 transition-colors">
                            {tech}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
