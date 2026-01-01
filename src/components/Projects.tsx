import { ArrowUpRight, Github, ArrowRight } from "lucide-react";
import { useRef } from "react";

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      year: "2024",
      category: "Full Stack",
      accent: "from-primary/20 to-primary/5",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative project management tool with drag-and-drop functionality, real-time updates, and team workspaces.",
      tags: ["TypeScript", "Next.js", "Prisma", "Socket.io"],
      year: "2024",
      category: "Web App",
      accent: "from-accent/20 to-accent/5",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio showcasing projects and skills with smooth animations and elegant design.",
      tags: ["React", "Tailwind", "Framer Motion"],
      year: "2023",
      category: "Design",
      accent: "from-muted/40 to-muted/10",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and severe weather alerts.",
      tags: ["React", "APIs", "Chart.js"],
      year: "2023",
      category: "Frontend",
      accent: "from-primary/15 to-transparent",
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Header */}
      <div className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-6">
              Featured Work
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.9]">
              Projects
            </h2>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary rotate-180 transition-colors" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide px-6 pb-8 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Spacer */}
        <div className="shrink-0 w-[calc(50vw-300px)] hidden lg:block" />

        {projects.map((project, index) => (
          <div
            key={index}
            className="group shrink-0 w-[85vw] md:w-[70vw] lg:w-[50vw] xl:w-[40vw] snap-center"
          >
            <div className={`relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br ${project.accent} border border-border/30 hover:border-primary/30 transition-all duration-700`}>
              {/* Large background number */}
              <span className="absolute -bottom-20 -right-10 font-display text-[20rem] font-bold text-foreground/[0.02] leading-none pointer-events-none select-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Content */}
              <div className="relative h-full p-8 md:p-12 flex flex-col justify-between">
                {/* Top */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs tracking-widest uppercase mb-6">
                      {project.category}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-500">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-muted-foreground/50 font-display text-lg">{project.year}</span>
                </div>

                {/* Middle - Description */}
                <div className="my-8">
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-sm text-muted-foreground/70 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center group-hover:bg-primary transition-all duration-300 hover:scale-110"
                    >
                      <ArrowUpRight size={22} className="text-background" />
                    </a>
                    <a 
                      href="#" 
                      className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:border-foreground transition-all duration-300"
                    >
                      <Github size={20} className="text-muted-foreground" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent" />
            </div>
          </div>
        ))}

        {/* View All Card */}
        <div className="shrink-0 w-[85vw] md:w-[50vw] lg:w-[30vw] snap-center flex items-center justify-center">
          <a href="#" className="group flex flex-col items-center justify-center text-center p-12">
            <div className="w-24 h-24 rounded-full border-2 border-border flex items-center justify-center mb-8 group-hover:border-primary group-hover:bg-primary transition-all duration-500 group-hover:scale-110">
              <ArrowUpRight size={32} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </div>
            <span className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
              View All<br />Projects
            </span>
          </a>
        </div>

        {/* Spacer */}
        <div className="shrink-0 w-[calc(50vw-300px)] hidden lg:block" />
      </div>

      {/* Scroll indicator */}
      <div className="container mx-auto px-6 mt-8">
        <div className="flex items-center gap-3">
          {projects.map((_, index) => (
            <div 
              key={index}
              className="h-0.5 flex-1 max-w-16 bg-border rounded-full overflow-hidden"
            >
              <div className="h-full w-0 bg-primary group-hover:w-full transition-all duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
