import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { AnimatedSection } from "@/components/AnimatedSection";

const projects = [
  {
    title: "Department monitoring systems",
    description:
      "In-house tools for the Local Government Unit of Tanay that track requests, approvals, and how resources are used across departments.",
    image: "/projects/tanay-systems.png",
    tags: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    title: "Personal portfolio",
    description:
      "This site. A single-page portfolio with a contact form, so the work, credentials, and a way to reach me are in one place.",
    image: "/projects/portfolio-hero.png",
    tags: ["React", "Tailwind CSS", "Vite"],
    link: "https://jedesguerra.vercel.app",
    github: "https://github.com/edgarpesguerrajr/jedesguerra",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
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
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground animate-fade-in">
              Selected work
            </span>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Projects
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              Internal systems for the Local Government Unit of Tanay, and the
              portfolio you are reading now.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <AnimatedSection key={project.title}>
              <article
                className="group glass rounded-2xl overflow-hidden animate-fade-in h-full"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-end bg-primary/10 p-6">
                      <span className="text-xs uppercase tracking-[0.3em] text-primary">
                        {project.note}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {(project.link || project.github) && (
                    <div className="flex flex-wrap gap-4 pt-2">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-primary"
                        >
                          Live site
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-primary"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton
            as="a"
            href="https://github.com/edgarpesguerrajr"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
