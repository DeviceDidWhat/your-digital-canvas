import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

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
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Selected Work
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Featured<br />
              <span className="text-gradient italic">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md mt-6 md:mt-0 md:text-right">
            A curated selection of projects that showcase my passion for crafting beautiful digital experiences.
          </p>
        </div>

        {/* Projects List - Editorial Style */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Divider Line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-border" />
              
              <div className="py-12 md:py-16 grid grid-cols-12 gap-4 md:gap-8 items-start cursor-pointer">
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <span className="font-display text-4xl md:text-5xl font-bold text-muted-foreground/30 group-hover:text-primary/50 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title & Category */}
                <div className="col-span-10 md:col-span-5 lg:col-span-4">
                  <span className="text-xs uppercase tracking-widest text-primary mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-muted-foreground text-sm mt-2 block">
                    {project.year}
                  </span>
                </div>

                {/* Description - Hidden on mobile */}
                <div className="col-span-12 md:col-span-4 lg:col-span-5 md:pl-4">
                  <p className="text-muted-foreground leading-relaxed mt-4 md:mt-0">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs text-muted-foreground/70 italic"
                      >
                        {tag}{tagIndex < project.tags.length - 1 && " ·"}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action */}
                <div className="col-span-12 md:col-span-2 flex items-center justify-start md:justify-end gap-4 mt-6 md:mt-0">
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300"
                  >
                    <ArrowUpRight 
                      size={20} 
                      className="text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" 
                    />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-all duration-300"
                  >
                    <Github size={18} className="text-muted-foreground" />
                  </a>
                </div>
              </div>

              {/* Bottom Divider for last item */}
              {index === projects.length - 1 && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
              )}

              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 flex justify-center">
          <a 
            href="#" 
            className="group inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="font-display text-lg">View all projects</span>
            <span className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300">
              <ArrowUpRight size={18} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
