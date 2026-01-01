import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 relative overflow-hidden min-h-screen"
    >
      {/* Magazine spread layout */}
      <div className="container mx-auto px-6">
        {/* Issue number / Header */}
        <motion.div
          className="flex items-center justify-between mb-16 border-b border-border pb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-6">
            <span className="font-display text-8xl font-bold text-primary/20">01</span>
            <div>
              <p className="text-xs tracking-[0.4em] text-muted-foreground uppercase">Feature Story</p>
              <h2 className="font-display text-2xl font-bold text-foreground">The Profile</h2>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-xs text-muted-foreground">Portfolio</p>
            <p className="text-xs text-muted-foreground">2024 Edition</p>
          </div>
        </motion.div>

        {/* Main spread */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-start">
          {/* Left column - Large Image */}
          <motion.div
            className="lg:col-span-5 relative"
            style={{ x: imageX }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main image frame */}
              <div className="aspect-[3/4] bg-card border border-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20" />
                <div className="h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center border-4 border-primary/20">
                      <span className="font-display text-5xl text-primary">Y</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">Your photo here</p>
                  </div>
                </div>
              </div>

              {/* Photo caption */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-primary px-4 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xs font-bold text-primary-foreground tracking-wider uppercase">
                  Creative Developer
                </p>
              </motion.div>

              {/* Decorative quote */}
              <motion.div
                className="absolute -top-6 -left-6 text-[120px] font-display text-primary/10 leading-none select-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                "
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            className="lg:col-span-7 lg:pl-12"
            style={{ y: textY }}
          >
            {/* Large headline */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6">
                Where <span className="italic text-primary">passion</span> meets{" "}
                <span className="border-b-4 border-primary">precision</span>
              </h3>
              <div className="w-24 h-1 bg-primary" />
            </motion.div>

            {/* Two column text */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-5xl font-display text-primary float-left mr-3 mt-1 leading-none">I</span>
                  am a student and developer with an insatiable curiosity for creating 
                  meaningful digital experiences. Every project is an opportunity to 
                  push boundaries and explore new possibilities.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-muted-foreground leading-relaxed">
                  My approach blends thoughtful design with clean, efficient code. 
                  I believe that the best digital products are those that feel 
                  intuitive, look beautiful, and solve real problems elegantly.
                </p>
              </motion.div>
            </div>

            {/* Pull quote */}
            <motion.blockquote
              className="border-l-4 border-primary pl-6 py-4 mb-12"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="font-display text-xl md:text-2xl text-foreground italic">
                "Design is not just what it looks like. Design is how it works."
              </p>
              <cite className="text-sm text-muted-foreground mt-2 block not-italic">
                — A philosophy I live by
              </cite>
            </motion.blockquote>

            {/* Stats as magazine infographic */}
            <motion.div
              className="grid grid-cols-3 gap-4 p-6 bg-muted/30 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {[
                { value: "3+", label: "Years of Experience", detail: "Coding & Designing" },
                { value: "20+", label: "Projects Completed", detail: "Web & Mobile" },
                { value: "∞", label: "Cups of Coffee", detail: "& Counting" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.detail}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tags / Keywords */}
            <motion.div
              className="mt-8 flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              {["React", "TypeScript", "Design", "UI/UX", "Animation", "Problem Solving"].map((tag, index) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 border border-border text-xs uppercase tracking-wider text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom pagination style */}
        <motion.div
          className="mt-20 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <div className="h-px w-16 bg-border" />
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Continue Reading</span>
          <div className="h-px w-16 bg-border" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
