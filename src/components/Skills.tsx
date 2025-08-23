export function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "Vite",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "Bootstrap",
        "WebSocket",
        "Storybook",
        "CesiumJS",
      ],
    },
    {
      category: "Backend",
      items: [
        "Java",
        "Spring Boot",
        "RESTful API",
        "PostgreSQL",
        "MongoDB",
        "JWT",
        "Maven",
        "Docker",
        "Jenkins",
      ],
    },
    {
      category: "Testing & Automation",
      items: [
        "Selenium",
        "JUnit 5",
        "Gauge",
        "Vitest",
        "Postman",
        "Test Otomasyonu",
      ],
    },

    {
      category: "Tools & Others",
      items: [
        "Git",
        "GitHub",
        "Bitbucket",
        "Vercel",
        "CI/CD",
        "Maven",
        "Docker",
        "Jira",
        "Agile",
        "Scrum",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-primary">Yetenekler</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
              {skills.map((skillGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className={`bg-background rounded-2xl p-8 shadow-soft transition-all duration-300 h-80 w-full max-w-sm hover:shadow-hover hover:scale-105 cursor-pointer`}
                >
                  <h3 className="text-2xl font-bold mb-8 text-primary">
                    {skillGroup.category}
                  </h3>

                  <div className="space-y-6">
                    <div className="max-h-44 overflow-y-auto scrollbar-hide">
                      <div className="grid grid-cols-2 gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="flex items-center gap-2 p-2.5 bg-gradient-primary rounded-lg hover:bg-gradient-primary/90 hover:shadow-md transition-all duration-200 cursor-pointer"
                          >
                            <div className="w-2 h-2 bg-primary-foreground rounded-full flex-shrink-0"></div>
                            <span className="font-medium text-primary-foreground text-sm leading-tight">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
