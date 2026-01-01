import { Code2, Server, Wrench, Sparkles } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "group-hover:border-amber-500/50",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS"],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "group-hover:border-emerald-500/50",
      skills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "GraphQL"],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "from-violet-500/20 to-purple-500/20",
      borderColor: "group-hover:border-violet-500/50",
      skills: ["Git", "Figma", "VS Code", "Docker", "Linux"],
    },
    {
      title: "Soft Skills",
      icon: Sparkles,
      color: "from-rose-500/20 to-pink-500/20",
      borderColor: "group-hover:border-rose-500/50",
      skills: ["Problem Solving", "Communication", "Teamwork", "Time Management", "Creativity"],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in">
            Expertise
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Skills & <span className="text-gradient italic">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated collection of technologies and skills I've developed through coursework, 
            projects, and self-directed learning.
          </p>
        </div>

        {/* Bento-style grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${category.color} backdrop-blur-sm border border-border/50 ${category.borderColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`} />
                
                {/* Icon container */}
                <div className="mb-6 relative">
                  <div className="w-14 h-14 rounded-2xl bg-background/50 border border-border/50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary/50 group-hover:bg-primary group-hover:animate-pulse transition-colors" />
                </div>

                <h3 className="font-display text-2xl font-semibold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 text-sm rounded-full bg-background/60 text-foreground/80 border border-border/30 hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-default backdrop-blur-sm"
                      style={{ animationDelay: `${(index * 5 + skillIndex) * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/20 rounded-br-2xl group-hover:border-primary/40 transition-colors duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/50" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
