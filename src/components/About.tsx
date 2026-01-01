import { motion } from "framer-motion";
import { MapPin, Coffee, Music, Code2, Sparkles, Heart } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-32 md:py-40 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Get to know me
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground">
            About <span className="text-gradient italic">Me</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Large photo card */}
          <motion.div
            className="col-span-2 row-span-2 relative group"
            variants={itemVariants}
          >
            <div className="h-full min-h-[300px] bg-card border border-border rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <motion.div
                    className="w-28 h-28 mx-auto mb-4 rounded-2xl bg-muted flex items-center justify-center border border-border"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="font-display text-5xl text-primary">Y</span>
                  </motion.div>
                  <p className="text-muted-foreground text-sm">Your photo here</p>
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl" />
            </div>
          </motion.div>

          {/* Name card */}
          <motion.div
            className="col-span-2 relative group cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-full min-h-[140px] bg-primary/10 border border-primary/20 rounded-3xl p-6 flex flex-col justify-center">
              <p className="text-primary text-sm mb-1">Hello, I'm</p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Your Name
              </h3>
              <p className="text-muted-foreground mt-2">Student & Developer</p>
            </div>
          </motion.div>

          {/* Location card */}
          <motion.div
            className="col-span-1 relative group cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-full min-h-[140px] bg-card border border-border rounded-3xl p-5 flex flex-col justify-between">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Based in</p>
                <p className="font-semibold text-foreground">Your City</p>
              </div>
            </div>
          </motion.div>

          {/* Status card */}
          <motion.div
            className="col-span-1 relative group cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-full min-h-[140px] bg-green-500/10 border border-green-500/20 rounded-3xl p-5 flex flex-col justify-between">
              <motion.div
                className="w-3 h-3 bg-green-500 rounded-full"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div>
                <p className="text-xs text-muted-foreground">Status</p>
                <p className="font-semibold text-green-500">Available</p>
              </div>
            </div>
          </motion.div>

          {/* Bio card */}
          <motion.div
            className="col-span-2 md:col-span-4 relative group"
            variants={itemVariants}
          >
            <div className="h-full bg-card border border-border rounded-3xl p-6 md:p-8">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I'm a passionate <span className="text-foreground font-medium">student</span> with 
                a deep love for <span className="text-primary">technology</span> and{" "}
                <span className="text-primary">design</span>. My journey started with curiosity 
                about how things work, which evolved into creating meaningful digital solutions.
              </p>
            </div>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            className="col-span-1 relative group cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-full min-h-[140px] bg-card border border-border rounded-3xl p-5 flex flex-col justify-center items-center text-center">
              <span className="text-4xl font-display font-bold text-foreground">3+</span>
              <p className="text-xs text-muted-foreground mt-1">Years Coding</p>
            </div>
          </motion.div>

          <motion.div
            className="col-span-1 relative group cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-full min-h-[140px] bg-card border border-border rounded-3xl p-5 flex flex-col justify-center items-center text-center">
              <span className="text-4xl font-display font-bold text-foreground">20+</span>
              <p className="text-xs text-muted-foreground mt-1">Projects</p>
            </div>
          </motion.div>

          {/* Interests card */}
          <motion.div
            className="col-span-2 relative group"
            variants={itemVariants}
          >
            <div className="h-full min-h-[140px] bg-card border border-border rounded-3xl p-6">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">When I'm not coding</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <Coffee className="w-4 h-4" />, label: "Coffee" },
                  { icon: <Music className="w-4 h-4" />, label: "Music" },
                  { icon: <Sparkles className="w-4 h-4" />, label: "Design" },
                  { icon: <Heart className="w-4 h-4" />, label: "Open Source" },
                ].map((item) => (
                  <motion.span
                    key={item.label}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full text-sm text-foreground"
                    whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                  >
                    <span className="text-primary">{item.icon}</span>
                    {item.label}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills card */}
          <motion.div
            className="col-span-2 relative group"
            variants={itemVariants}
          >
            <div className="h-full min-h-[140px] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5 text-primary" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Tech Stack</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "Tailwind", "Figma"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-background/50 border border-border rounded-lg text-sm text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quote card */}
          <motion.div
            className="col-span-2 relative group cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-full min-h-[140px] bg-card border border-border rounded-3xl p-6 flex items-center">
              <div>
                <p className="font-display text-xl italic text-foreground leading-relaxed">
                  "Building the future, one pixel at a time."
                </p>
                <p className="text-sm text-muted-foreground mt-3">— My Motto</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
