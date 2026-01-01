import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

const About = () => {
  const skills = ["React", "TypeScript", "Design", "UI/UX", "Node.js", "Figma"];

  return (
    <section id="about" className="py-32 md:py-40 relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute top-20 left-0 right-0 pointer-events-none select-none overflow-hidden">
        <motion.div
          className="text-[20vw] font-display font-bold text-foreground/[0.02] whitespace-nowrap"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          ABOUT ME • CREATIVE • DEVELOPER • DESIGNER • ABOUT ME • CREATIVE • DEVELOPER • DESIGNER •
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Editorial header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
              Chapter 01
            </p>
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-[0.85]">
              About
              <br />
              <span className="text-gradient italic">Me</span>
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex items-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-6">
              A passionate student on a journey to create meaningful digital experiences 
              that blend aesthetics with functionality.
            </p>
          </motion.div>
        </div>

        {/* Main content - Magazine layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left column - Image & Quote */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main image container */}
            <div className="relative aspect-[3/4] mb-8">
              <div className="absolute inset-0 bg-card border border-border rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-sm bg-muted flex items-center justify-center">
                      <span className="font-display text-5xl text-primary">Y</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Your photo here</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative frame offset */}
              <div className="absolute -inset-3 border border-primary/20 rounded-sm -z-10" />
              
              {/* Corner accent */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />
            </div>

            {/* Pull quote */}
            <motion.div
              className="relative bg-card/50 backdrop-blur-sm border border-border p-8 rounded-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Quote className="absolute -top-4 left-6 w-8 h-8 text-primary fill-primary/20" />
              <p className="text-xl md:text-2xl font-display italic text-foreground leading-relaxed">
                "Design is not just what it looks like, it's how it works."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-border" />
                <span className="text-sm text-muted-foreground">— My Philosophy</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Content */}
          <div className="lg:col-span-7 space-y-12">
            {/* Bio paragraphs */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex gap-6">
                <span className="text-7xl font-display font-bold text-primary/20">01</span>
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">The Beginning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    My journey into the world of technology began with a simple curiosity — 
                    how do websites work? That question sparked a passion that has only grown 
                    stronger with each line of code written.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="text-7xl font-display font-bold text-primary/20">02</span>
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">The Craft</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, I specialize in creating digital experiences that are both beautiful 
                    and functional. I believe in the power of clean code and thoughtful design 
                    to solve real problems.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skills marquee */}
            <motion.div
              className="overflow-hidden py-6 border-y border-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="flex gap-8 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                {[...skills, ...skills].map((skill, index) => (
                  <span
                    key={index}
                    className="text-3xl md:text-4xl font-display font-bold text-foreground/10 hover:text-primary/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {[
                { value: "3+", label: "Years of Experience" },
                { value: "20+", label: "Projects Completed" },
                { value: "100%", label: "Passion" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-card/30 border border-border/50 rounded-sm group cursor-pointer"
                  whileHover={{ 
                    backgroundColor: "hsl(var(--primary) / 0.05)",
                    borderColor: "hsl(var(--primary) / 0.3)"
                  }}
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 text-lg font-medium text-foreground group"
                whileHover={{ x: 10 }}
              >
                <span className="border-b-2 border-primary pb-1">Let's work together</span>
                <ArrowUpRight className="w-5 h-5 text-primary group-hover:rotate-45 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-20 flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Scroll to explore</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
