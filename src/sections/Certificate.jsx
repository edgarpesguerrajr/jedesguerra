import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const certificates = [
  {
    title: "IT Customer Support Basics",
    description:
      "Validated foundational knowledge in troubleshooting, ticket handling, and user assistance, emphasizing clear communication and efficient resolution of technical issues.",
    image: "/projects/ITCustomerSupportBasics.jpg",
    link: "https://www.credly.com/badges/1c1b8d3d-2381-4b87-9367-a920914474a2/public_url",
  },
  {
    title: "Civil Service Eligibility - Professional",
    description:
      "Granted professional eligibility under the Philippine Civil Service Commission, demonstrating competence for government service roles and adherence to public sector standards.",
    image: "/projects/csc.jpg",
    link: "/projects/csc.jpg",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    description:
      "Certified skills in configuring, managing, and troubleshooting enterprise networks, with focus on routing protocols, switching technologies, and wireless connectivity solutions.",
    image: "/projects/CCNASRWE.jpg",
    link: "https://www.credly.com/badges/ca070ac4-cea2-455e-814b-87426ec74649/public_url",
  },
];

export const Certificate = () => {
  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
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
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <AnimatedSection>
            <span className=" text-xs uppercase tracking-[0.35em] text-muted-foreground animate-fade-in">
              Credentials
            </span>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Certificates
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              A selection of my recent certifications, from technical
              achievements to professional development.
            </p>
          </AnimatedSection>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((certificate, idx) => (
            <AnimatedSection key={certificate.title}>
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 block"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {certificate.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {certificate.description}
                  </p>
                  <span className="inline-flex text-sm font-medium text-primary">
                    View credential
                  </span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
