import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const highlights = [
  {
    icon: Code2,
    title: "Internal systems",
    description:
      "PHP and MySQL tools that track requests, approvals, and how resources are used.",
  },
  {
    icon: Rocket,
    title: "Interfaces",
    description:
      "React and Tailwind UI, including screens for a SaaS product at 8Box Solution Inc.",
  },
  {
    icon: Users,
    title: "IT support",
    description:
      "Hardware and software troubleshooting, with records that keep office equipment reliable.",
  },
  {
    icon: Lightbulb,
    title: "Engineering base",
    description:
      "Computer Engineering at PUP, focused on software, web development, and networking.",
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
                Building systems
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  people rely on
                </span>
              </h2>
            </AnimatedSection>
            <AnimatedSection>
              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                  I'm Edgar P. Esguerra Jr., a software engineer based in
                  Tanay, Rizal. I build web applications with PHP, MySQL, and
                  JavaScript, and I also work with React.
                </p>
                <p>
                  As an Information Systems Analyst I at the Local Government
                  Unit of Tanay, I design in-house systems that track requests,
                  approvals, and resource use across departments. Before that, I interned as a front-end
                  developer at 8Box Solution Inc. and in IT technical support
                  at PSALM Corporation.
                </p>
                <p>
                  I earned a Bachelor of Science in Computer Engineering from
                  the Polytechnic University of the Philippines, with a focus
                  on software, web development, and networking.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                  "I want the systems I build to be clear for the people who use
                  them, and straightforward for the next developer who maintains
                  them."
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
