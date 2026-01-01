import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const words = ["Creative", "Passionate", "Curious", "Dedicated"];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 md:py-48 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
            y: y1,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
            y: y2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.05) 0%, transparent 50%)",
          }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <motion.div className="container mx-auto px-6 relative z-10" style={{ opacity }}>
        <div className="max-w-6xl mx-auto">
          {/* Top label */}
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium tracking-[0.3em] uppercase text-sm">
              About Me
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="mb-16">
            <motion.h2
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              I craft digital
              <br />
              <span className="relative inline-block">
                <span className="text-gradient">experiences</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-primary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span>{" "}
              that
              <br />
              <span className="text-muted-foreground">inspire & delight</span>
            </motion.h2>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left - Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                I am a <span className="text-foreground font-medium">student and developer</span> with 
                a deep passion for creating meaningful digital solutions. My journey began with 
                curiosity and evolved into a love for blending{" "}
                <span className="text-primary">aesthetics</span> with{" "}
                <span className="text-primary">functionality</span>.
              </p>

              {/* Animated words */}
              <div className="flex flex-wrap gap-3 mb-10">
                {words.map((word, index) => (
                  <motion.span
                    key={word}
                    className="px-5 py-2.5 border border-border rounded-full text-sm font-medium text-foreground bg-card/50 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      borderColor: "hsl(var(--primary))",
                      backgroundColor: "hsl(var(--primary) / 0.1)",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              {/* Status */}
              <motion.div
                className="inline-flex items-center gap-3 px-5 py-3 bg-card/80 backdrop-blur-sm border border-border rounded-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="text-sm text-foreground">Available for opportunities</span>
              </motion.div>
            </motion.div>

            {/* Right - Stats & Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Photo area */}
              <div className="relative mb-10">
                <motion.div
                  className="aspect-[4/3] bg-card border border-border rounded-2xl overflow-hidden relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-muted flex items-center justify-center border border-border"
                        animate={{
                          boxShadow: [
                            "0 0 0 0 hsl(var(--primary) / 0)",
                            "0 0 0 20px hsl(var(--primary) / 0.1)",
                            "0 0 0 0 hsl(var(--primary) / 0)",
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <span className="font-display text-4xl text-primary">Y</span>
                      </motion.div>
                      <p className="text-sm text-muted-foreground">Your photo here</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-24 h-24 border border-primary/20 rounded-2xl -z-10" />
                <div className="absolute -bottom-3 -left-3 w-32 h-32 border border-primary/10 rounded-2xl -z-10" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "3+", label: "Years" },
                  { value: "20+", label: "Projects" },
                  { value: "100%", label: "Passion" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{
                      y: -5,
                      borderColor: "hsl(var(--primary) / 0.3)",
                    }}
                  >
                    <div className="text-3xl md:text-4xl font-display font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom line */}
          <motion.div
            className="mt-24 flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-border" />
            <span className="text-muted-foreground/50 text-sm tracking-widest uppercase">
              Scroll to explore
            </span>
            <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-border" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
