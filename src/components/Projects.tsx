import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [expandedDescriptions, setExpandedDescriptions] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleDescription = (index: number) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim();
  };
  const projects = [
    {
      title: "Air Command System",
      description:
        "Gerçek zamanlı hava aracı izleme web uygulaması. React, Vite ve CesiumJS kullanılarak geliştirildi. Özel bileşen kütüphanesi oluşturuldu, Redux Toolkit ile durum yönetimi, RESTful API ve WebSocket entegrasyonu sağlandı. Çoklu dil/tema desteği, filtreleme ve rol tabanlı erişim kontrolü eklendi.",
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "CesiumJS",
        "Redux Toolkit",
        "WebSocket",
        "Rollup",
        "Vitest",
      ],
      image: "/AirCommandSystemLogo.png",
      githubUrl: "https://github.com/resulbeser/air-command-system",
      liveUrl: "#",
    },
    {
      title: "CommitTracker",
      description:
        "Multi-platform Git commit takip uygulaması. GitHub, GitLab, Azure DevOps ve Bitbucket platformlarından commit verilerini güvenli şekilde çeker ve analiz eder. JavaFX ile modern GUI tasarımı.",
      tech: ["Java", "JavaFX", "Spring Boot", "REST API", "Security"],
      image: "/CommitTrackerLogo.png",
      githubUrl: "https://github.com/resulbeser/CommitTracker",
      liveUrl: "#", // Desktop uygulaması
    },
    {
      title: "Portfolio Website",
      description:
        "Kişisel portfolio website'i. Modern tasarım, responsive layout ve kullanıcı dostu arayüz ile geliştirildi. TypeScript, Tailwind CSS ve shadcn/ui bileşenleri kullanılarak oluşturuldu. Dark/Light tema desteği ve smooth animasyonlar içerir.",
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "shadcn/ui",
        "Lucide Icons",
      ],
      image: "/PortfolioWebSite.png",
      githubUrl: "https://github.com/resulbeser/resul-portfolio",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-primary">Projeler</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:-ml-20 lg:mr-0 px-4 md:px-0">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-gradient-card rounded-2xl p-4 md:p-6 shadow-soft hover:shadow-hover transition-all duration-300 group flex flex-col w-full min-w-0 transform lg:scale-x-110 border border-border/20 dark:border-border/10 ${
                  index === 0 ? "lg:ml-4" : ""
                } ${index === 1 ? "lg:ml-16" : ""} ${
                  index === 2 ? "lg:ml-24" : ""
                }`}
                style={{ height: "auto", minHeight: "480px" }}
              >
                <div className="aspect-[4/3] bg-muted rounded-xl mb-4 md:mb-6 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>

                <div className="flex-1 flex flex-col">
                  <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed text-justify">
                    {expandedDescriptions[index]
                      ? project.description
                      : truncateText(project.description)}
                    {project.description.length > 120 && (
                      <>
                        {!expandedDescriptions[index] && "..."}
                        <button
                          onClick={() => toggleDescription(index)}
                          className="ml-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-200"
                        >
                          {expandedDescriptions[index]
                            ? "Daha az"
                            : "Devamını oku"}
                        </button>
                      </>
                    )}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 items-start justify-start content-start">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
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
                      disabled={project.liveUrl === "#"}
                    >
                      <a
                        href={
                          project.liveUrl === "#" ? undefined : project.liveUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          project.liveUrl === "#"
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
