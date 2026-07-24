import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const education = [
  {
    no: "01",
    logo: "pup.png",
    alt: "PUP Logo",
    status: "COMPLETED",
    link: "https://www.pup.edu.ph",
    course: "Bachelor of Science in Computer Engineering",
    school: "Polytechnic University of the Philippines",
    description:
      "Built a strong foundation in computer engineering principles, software development, and problem-solving skills.",
    year: "2021-2025",
    gpa: "1.56",
    focus:
      "Software Development, Game Development, Web Development, and Networking",
  },
  // {
  //   no: "02",
  //   logo: "urs.png",
  //   alt: "URS Logo",
  //   status: "COMPLETED",
  //   link: "https://www.urs.edu.ph",
  //   course: "Science, Technology, Engineering, and Mathematics Strand (STEM)",
  //   school: "University of Rizal System - Morong Campus",
  //   description:
  //     "Developed a solid grounding in science, mathematics, and technology through the STEM strand, with emphasis on analytical thinking, research, and practical applications in engineering and computing.",
  //   year: "2019-2021",
  //   gpa: "1.56",
  //   focus:
  //     "Software Development, Game Development, Web Development, and Networking",
  // },
];

export const Education = () => {
  return (
    <section id="education" className="relative overflow-hidden py-32">
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
        <div className="absolute right-24 top-20 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/4 left-1/8 h-44 w-44 -translate-x-1/2 rounded-full bg-highlight/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-3xl">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground animate-fade-in">
              Academic background
            </span>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="mt-4 text-5xl font-bold text-primary md:text-6xl animate-fade-in animation-delay-100">
              Education
            </h2>
          </AnimatedSection>
        </div>

        <div className="space-y-5">
          {education.map((item, i) => (
            <AnimatedSection key={i}>
              <div
                className="border-b border-muted-foreground/20 animate-fade-in"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                {/* Responsive grid: stack on mobile, 2 cols on md, 4 cols on lg */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-5">
                  {/* Left column */}
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-[Consolas] text-muted-foreground">
                      {item.no}
                    </span>
                    <div className="relative">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={item.logo}
                          alt={item.alt}
                          className="w-20 aspect-square object-cover rounded-2xl"
                        />
                      </a>
                    </div>
                    <span className="text-xs text-muted-foreground px-2 py-1 rounded-bl-md">
                      {item.status}
                    </span>
                  </div>

                  {/* Right column */}
                  <div className="md:col-span-1 lg:col-span-3">
                    <div className="space-y-2">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.course}
                        </h3>
                        <span className="text-sm font-[Consolas] text-muted-foreground">
                          {item.year}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-primary block">
                        {item.school}
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="flex flex-col md:flex-row md:gap-10 pb-5">
                        {item.gpa && (
                          <p className="text-sm">
                            <span className="font-normal">GPA</span>
                            <span className="text-muted-foreground">
                              {" "}
                              · {item.gpa}
                            </span>
                          </p>
                        )}
                        {item.focus && (
                          <p className="text-sm">
                            <span className="font-normal">Focus</span>
                            <span className="text-muted-foreground">
                              {" "}
                              · {item.focus}
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
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
