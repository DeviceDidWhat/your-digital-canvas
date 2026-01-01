import { ArrowUpRight, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      year: "2024",
      category: "Full Stack",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative project management tool with drag-and-drop functionality, real-time updates, and team workspaces.",
      tags: ["TypeScript", "Next.js", "Prisma", "Socket.io"],
      year: "2024",
      category: "Web App",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio showcasing projects and skills with smooth animations and elegant design.",
      tags: ["React", "Tailwind", "Framer Motion"],
      year: "2023",
      category: "Design",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and severe weather alerts.",
      tags: ["React", "APIs", "Chart.js"],
      year: "2023",
      category: "Frontend",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-40 relative overflow-hidden bg-background">
      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-display text-[20vw] font-bold text-muted-foreground/[0.03] whitespace-nowrap">
          WORK
        </span>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-px h-40 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-40 left-20 w-px h-60 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/3 left-10 w-32 h-px bg-gradient-to-r from-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header - Asymmetric */}
        <div className="mb-32 md:mb-48">
          <div className="flex items-start gap-6">
            <span className="font-display text-8xl md:text-9xl font-bold text-primary/20">*</span>
            <div>
              <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">
                Selected Work
              </p>
              <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-[0.85]">
                Featured
              </h2>
            </div>
          </div>
          <div className="md:ml-auto md:max-w-md md:-mt-8 mt-8">
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-gradient italic leading-[0.85]">
              Projects
            </h2>
          </div>
        </div>

        {/* Projects - Staggered Asymmetric Layout */}
        <div className="relative">
          {/* Project 1 - Large, Left aligned */}
          <div className="group relative mb-16 md:mb-0 md:absolute md:top-0 md:left-0 md:w-[55%] z-10">
            <div className="relative">
              {/* Large number overlay */}
              <span className="absolute -top-20 -left-4 font-display text-[12rem] md:text-[16rem] font-bold text-muted-foreground/[0.04] leading-none pointer-events-none select-none">
                01
              </span>
              
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 p-8 md:p-12 rounded-sm hover:border-primary/30 transition-all duration-700 group-hover:bg-card/80">
                <span className="text-primary text-xs tracking-[0.3em] uppercase">{projects[0].category}</span>
                <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 group-hover:text-primary transition-colors duration-500">
                  {projects[0].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  {projects[0].description}
                </p>
                
                <div className="flex flex-wrap gap-3 mt-8">
                  {projects[0].tags.map((tag, i) => (
                    <span key={i} className="text-xs text-muted-foreground/60 border border-border/30 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-500">
                    <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-all duration-300">
                    <Github size={16} className="text-muted-foreground" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - Medium, Right aligned, overlapping */}
          <div className="group relative mb-16 md:mb-0 md:absolute md:top-40 md:right-0 md:w-[45%] z-20">
            <div className="relative">
              <span className="absolute -top-16 -right-4 font-display text-[10rem] md:text-[14rem] font-bold text-primary/[0.06] leading-none pointer-events-none select-none">
                02
              </span>
              
              <div className="relative bg-primary/5 backdrop-blur-sm border border-primary/10 p-8 md:p-10 rounded-sm hover:border-primary/40 transition-all duration-700 hover:bg-primary/10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-primary text-xs tracking-[0.3em] uppercase">{projects[1].category}</span>
                  <span className="text-muted-foreground/40 font-display text-sm">{projects[1].year}</span>
                </div>
                <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-500">
                  {projects[1].title}
                </h3>
                <p className="text-muted-foreground/80 text-sm leading-relaxed">
                  {projects[1].description}
                </p>
                
                <div className="flex items-center gap-4 mt-8">
                  <a href="#" className="text-sm text-foreground hover:text-primary transition-colors flex items-center gap-2 group/link">
                    View Project 
                    <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 - Horizontal strip */}
          <div className="group relative mb-16 md:mb-0 md:absolute md:top-[420px] md:left-[10%] md:w-[60%] z-30">
            <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12 bg-muted/30 backdrop-blur-sm border-l-2 border-primary/40 p-6 md:p-8 hover:bg-muted/50 transition-all duration-500">
              <span className="font-display text-6xl md:text-8xl font-bold text-muted-foreground/10">03</span>
              <div className="flex-1">
                <span className="text-primary text-xs tracking-[0.2em] uppercase">{projects[2].category}</span>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-2 group-hover:text-primary transition-colors duration-300">
                  {projects[2].title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs hidden lg:block">
                {projects[2].description}
              </p>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300 shrink-0">
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>

          {/* Project 4 - Minimal, floating */}
          <div className="group relative md:absolute md:top-[580px] md:right-[5%] md:w-[35%] z-40">
            <div className="relative p-6 md:p-8">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-primary/20" />
              
              <div className="relative">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-display text-5xl font-bold text-primary/30">04</span>
                  <span className="text-muted-foreground/40 text-xs tracking-widest uppercase">{projects[3].year}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {projects[3].title}
                </h3>
                <p className="text-muted-foreground/70 text-sm leading-relaxed mb-6">
                  {projects[3].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects[3].tags.map((tag, i) => (
                    <span key={i} className="text-xs text-muted-foreground/50 italic">
                      {tag}{i < projects[3].tags.length - 1 && " ·"}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Spacer for absolute positioning */}
          <div className="hidden md:block h-[750px]" />
        </div>

        {/* View All - Creative positioning */}
        <div className="mt-20 md:mt-32 flex justify-center md:justify-end">
          <a href="#" className="group flex items-center gap-6 text-foreground hover:text-primary transition-colors duration-300">
            <span className="relative">
              <span className="font-display text-lg md:text-xl">Explore all work</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
            </span>
            <span className="w-14 h-14 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-45">
              <ArrowUpRight size={20} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
