import { motion } from "framer-motion";

const Skills = () => {
  const allSkills = [
    { name: "React", size: "large" },
    { name: "TypeScript", size: "large" },
    { name: "Tailwind CSS", size: "medium" },
    { name: "Next.js", size: "medium" },
    { name: "Node.js", size: "large" },
    { name: "Python", size: "medium" },
    { name: "PostgreSQL", size: "medium" },
    { name: "REST APIs", size: "small" },
    { name: "GraphQL", size: "small" },
    { name: "Git", size: "medium" },
    { name: "Figma", size: "small" },
    { name: "VS Code", size: "small" },
    { name: "Docker", size: "medium" },
    { name: "Linux", size: "small" },
    { name: "HTML/CSS", size: "medium" },
    { name: "Problem Solving", size: "large" },
    { name: "Communication", size: "medium" },
    { name: "Teamwork", size: "medium" },
    { name: "Creativity", size: "small" },
    { name: "Time Management", size: "small" },
  ];

  const sizeClasses = {
    large: "text-2xl md:text-3xl px-8 py-4 font-semibold",
    medium: "text-lg md:text-xl px-6 py-3 font-medium",
    small: "text-sm md:text-base px-4 py-2",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        delay: i * 0.05,
      },
    }),
  };

  const floatAnimation = (index: number) => ({
    y: [0, -8, 0],
    transition: {
      duration: 3 + (index % 3),
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: index * 0.2,
    },
  });

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Decorative lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Expertise
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Skills & <span className="text-gradient italic">Technologies</span>
          </h2>
        </div>

        {/* Flowing skills cloud */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {allSkills.map((skill, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={skillVariants}
              animate={floatAnimation(index)}
              whileHover={{ 
                scale: 1.15, 
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className={`
                ${sizeClasses[skill.size as keyof typeof sizeClasses]}
                relative group cursor-default
                text-foreground/70 hover:text-primary
                transition-colors duration-300
              `}
            >
              {/* Hover glow effect */}
              <motion.span 
                className="absolute inset-0 bg-primary/0 rounded-full blur-xl"
                whileHover={{ backgroundColor: "hsl(var(--primary) / 0.15)" }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Skill text with underline animation */}
              <span className="relative inline-block">
                {skill.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/50"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              
              {/* Decorative dot for large skills */}
              {skill.size === "large" && (
                <motion.span 
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary/50"
                  whileHover={{ 
                    scale: 1.5, 
                    backgroundColor: "hsl(var(--primary))",
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.span>
          ))}
        </motion.div>

        {/* Animated divider */}
        <motion.div 
          className="mt-20 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {[0.3, 0.5, 0.7, 0.5, 0.3].map((opacity, i) => (
            <motion.div 
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-primary"
              style={{ opacity }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [opacity, 1, opacity],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
