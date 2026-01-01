import { ArrowUpRight, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=80",
      github: "#",
      live: "#",
      size: "large"
    },
    {
      id: 2,
      title: "AI Dashboard",
      description: "Analytics platform with machine learning insights.",
      tags: ["Python", "TensorFlow", "React"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      github: "#",
      live: "#",
      size: "medium"
    },
    {
      id: 3,
      title: "Mobile Banking",
      description: "Secure fintech application.",
      tags: ["React Native", "Firebase"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
      github: "#",
      live: "#",
      size: "small"
    },
    {
      id: 4,
      title: "Design System",
      description: "Component library with 50+ reusable elements.",
      tags: ["TypeScript", "Storybook"],
      image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=800&auto=format&fit=crop&q=80",
      github: "#",
      live: "#",
      size: "small"
    },
    {
      id: 5,
      title: "Social Platform",
      description: "Real-time messaging and content sharing with millions of active users.",
      tags: ["Next.js", "GraphQL", "Redis"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
      github: "#",
      live: "#",
      size: "wide"
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground">
              Featured
              <br />
              <span className="text-primary">Projects</span>
            </h2>
          </div>
          <p className="hidden md:block text-muted-foreground max-w-xs text-right text-sm leading-relaxed">
            A curated collection of work that showcases creativity, technical excellence, and attention to detail.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {projects.map((project, index) => {
            const sizeClasses = {
              large: "md:col-span-2 md:row-span-2",
              wide: "md:col-span-2 md:row-span-1",
              medium: "md:col-span-1 md:row-span-2",
              small: "md:col-span-1 md:row-span-1"
            };

            return (
              <div
                key={project.id}
                className={`
                  group relative rounded-2xl overflow-hidden cursor-pointer
                  ${sizeClasses[project.size as keyof typeof sizeClasses]}
                  animate-fade-up
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Tags */}
                  <div className={`flex flex-wrap gap-2 mb-3 ${project.size === 'small' ? 'opacity-0 group-hover:opacity-100' : ''} transition-opacity duration-300`}>
                    {project.tags.slice(0, project.size === 'large' ? 4 : 2).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className={`font-display font-bold text-foreground mb-2 ${
                    project.size === 'large' ? 'text-3xl md:text-4xl' : 
                    project.size === 'wide' ? 'text-2xl' : 'text-xl'
                  }`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  {(project.size === 'large' || project.size === 'wide' || project.size === 'medium') && (
                    <p className={`text-muted-foreground text-sm leading-relaxed mb-4 ${
                      project.size === 'medium' ? 'line-clamp-2' : 'line-clamp-3'
                    }`}>
                      {project.description}
                    </p>
                  )}

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-auto">
                    <a
                      href={project.live}
                      className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors group/link"
                    >
                      <span>View</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                    <a
                      href={project.github}
                      className="p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors backdrop-blur-sm"
                    >
                      <Github className="w-4 h-4 text-foreground" />
                    </a>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />
                
                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-500 rounded-tr-xl" />
              </div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-sm tracking-widest uppercase">View All Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
