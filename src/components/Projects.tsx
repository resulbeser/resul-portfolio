import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "E-Ticaret Platformu",
      description:
        "Modern ve kullanıcı dostu bir e-ticaret platformu. React, TypeScript ve Node.js kullanılarak geliştirildi.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      image: "/placeholder.svg",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Takım çalışması için geliştirilmiş görev yönetim uygulaması. Real-time güncellemeler ve kullanıcı dostu arayüz.",
      tech: ["Next.js", "Tailwind CSS", "Supabase"],
      image: "/placeholder.svg",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Kişisel portfolio website'i. Modern tasarım ve performans odaklı geliştirme.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image: "/placeholder.svg",
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-primary">Projeler</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-card rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 group"
              >
                <div className="aspect-video bg-muted rounded-xl mb-6 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:shadow-hover transition-all duration-300"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
