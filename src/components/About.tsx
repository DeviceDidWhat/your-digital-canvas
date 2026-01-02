import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const skills = ["React", "TypeScript", "Node.js", "Python", "Figma", "AWS"];
  const interests = ["Design", "Music", "Photography", "Travel"];

  return (
    <section
      id="about"
      ref={containerRef}
      className="min-h-screen py-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-primary/3 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary/60 font-mono text-sm tracking-[0.3em] uppercase">
            Get to know me
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold mt-4 text-foreground">
            About<span className="text-primary">.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Large Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ rotate }}
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            <div className="relative h-full min-h-[400px] md:min-h-[500px] flex flex-col justify-end p-8">
              {/* Placeholder for photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center mx-auto group-hover:border-primary/50 transition-colors duration-500">
                    <span className="text-primary/40 font-mono text-sm">Your Photo</span>
                  </div>
                </div>
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              {/* Name overlay */}
              <div className="relative z-10">
                <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                  Your Name
                </h3>
                <p className="text-primary/80 mt-2 font-mono text-sm tracking-wide">
                  Creative Developer & Designer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1 lg:col-span-2 p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-colors duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary/60 font-mono text-xs uppercase tracking-wider">Bio</span>
            </div>
            <p className="text-foreground/80 leading-relaxed text-lg">
              I'm a passionate developer who loves crafting beautiful digital experiences. 
              With a keen eye for design and a love for clean code, I bridge the gap between 
              aesthetics and functionality.
            </p>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:border-primary/40 transition-colors duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary/60 font-mono text-xs uppercase tracking-wider">Skills</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-3 py-1.5 bg-background/50 border border-primary/20 rounded-full text-sm text-foreground/80 hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-colors duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary/60 font-mono text-xs uppercase tracking-wider">Experience</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-foreground/60 text-sm">Years</span>
                <span className="font-display text-3xl font-bold text-foreground">5+</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex justify-between items-center">
                <span className="text-foreground/60 text-sm">Projects</span>
                <span className="font-display text-3xl font-bold text-foreground">50+</span>
              </div>
            </div>
          </motion.div>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-2 p-6 md:p-8 rounded-3xl bg-primary/5 border border-primary/10 relative overflow-hidden"
          >
            <div className="absolute -top-4 -left-2 text-8xl text-primary/10 font-display">"</div>
            <blockquote className="relative z-10 text-xl md:text-2xl font-display italic text-foreground/90 leading-relaxed">
              Design is not just what it looks like — design is how it works.
            </blockquote>
            <p className="mt-4 text-primary/60 font-mono text-sm">— Steve Jobs</p>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-colors duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary/60 font-mono text-xs uppercase tracking-wider">Interests</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-foreground/70 text-sm"
                >
                  {interest}{index < interests.length - 1 && <span className="text-primary ml-2">•</span>}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-colors duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary/60 font-mono text-xs uppercase tracking-wider">Based in</span>
            </div>
            <p className="font-display text-2xl font-bold text-foreground">Your City</p>
            <p className="text-foreground/60 text-sm mt-1">Available Worldwide</p>
          </motion.div>

          {/* Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-colors duration-500 flex flex-col justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
              <span className="text-foreground font-medium">Available for work</span>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
            >
              <span className="font-mono text-sm">Let's talk</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
