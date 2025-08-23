export function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "MongoDB", level: 70 },
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
            <div className="grid md:grid-cols-2 gap-12">
              {skills.map((skillGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className="bg-gradient-card rounded-2xl p-8 shadow-soft"
                >
                  <h3 className="text-2xl font-bold mb-8 text-primary">
                    {skillGroup.category}
                  </h3>

                  <div className="space-y-6">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-border rounded-full h-2">
                          <div
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
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
