import { motion } from "framer-motion";
import { Sparkles, Code2, Palette, Lightbulb, Heart, Zap } from "lucide-react";

const About = () => {
  const traits = [
    { icon: <Code2 className="w-5 h-5" />, label: "Developer", delay: 0 },
    { icon: <Palette className="w-5 h-5" />, label: "Designer", delay: 0.1 },
    { icon: <Lightbulb className="w-5 h-5" />, label: "Innovator", delay: 0.2 },
    { icon: <Heart className="w-5 h-5" />, label: "Passionate", delay: 0.3 },
    { icon: <Zap className="w-5 h-5" />, label: "Fast Learner", delay: 0.4 },
    { icon: <Sparkles className="w-5 h-5" />, label: "Creative", delay: 0.5 },
  ];

  const stats = [
    { value: "3+", label: "Years Coding" },
    { value: "20+", label: "Projects Built" },
    { value: "∞", label: "Ideas" },
  ];

  return (
    <section id="about" className="py-32 md:py-40 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.p>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The Story
            </motion.span>{" "}
            <motion.span
              className="inline-block text-gradient italic"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Behind
            </motion.span>
          </h2>
        </motion.div>

        {/* Main content - Orbital design */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central profile area */}
          <motion.div
            className="relative mx-auto w-72 h-72 md:w-96 md:h-96 mb-20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Orbital rings */}
            <motion.div
              className="absolute inset-0 rounded-full border border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-8 md:-inset-12 rounded-full border border-primary/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-16 md:-inset-24 rounded-full border border-primary/5"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />

            {/* Orbiting dots */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                }}
                animate={{
                  x: [
                    Math.cos((i * Math.PI) / 3) * (120 + i * 20),
                    Math.cos((i * Math.PI) / 3 + Math.PI) * (120 + i * 20),
                    Math.cos((i * Math.PI) / 3) * (120 + i * 20),
                  ],
                  y: [
                    Math.sin((i * Math.PI) / 3) * (120 + i * 20),
                    Math.sin((i * Math.PI) / 3 + Math.PI) * (120 + i * 20),
                    Math.sin((i * Math.PI) / 3) * (120 + i * 20),
                  ],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Glowing center */}
            <div className="absolute inset-4 md:inset-8 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
            
            {/* Profile container */}
            <motion.div
              className="absolute inset-8 md:inset-12 rounded-full bg-card border border-border overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20"
                    animate={{
                      boxShadow: [
                        "0 0 20px hsl(var(--primary) / 0.2)",
                        "0 0 40px hsl(var(--primary) / 0.4)",
                        "0 0 20px hsl(var(--primary) / 0.2)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="font-display text-4xl md:text-5xl text-primary">Y</span>
                  </motion.div>
                  <p className="text-muted-foreground text-xs md:text-sm">Your photo here</p>
                </div>
              </div>
            </motion.div>

            {/* Floating availability badge */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-sm border border-border rounded-full px-6 py-3 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-medium text-foreground">Available for work</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Trait pills - Floating around */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {traits.map((trait, index) => (
              <motion.div
                key={trait.label}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + trait.delay }}
              >
                <motion.div
                  className="flex items-center gap-2 px-5 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-full cursor-pointer"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "hsl(var(--primary) / 0.1)",
                    borderColor: "hsl(var(--primary) / 0.3)"
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <span className="text-primary">{trait.icon}</span>
                  <span className="text-sm font-medium text-foreground">{trait.label}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bio text with creative layout */}
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                I'm a passionate{" "}
                <span className="text-foreground font-semibold">student</span> with a deep love for
              </motion.span>{" "}
              <motion.span
                className="inline-block text-primary font-display italic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                technology
              </motion.span>{" "}
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                and{" "}
                <span className="text-primary font-display italic">design</span>.
              </motion.span>
            </p>
            <motion.p
              className="text-lg text-muted-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              My journey started with curiosity about how things work, 
              which evolved into creating meaningful digital solutions 
              that make a difference.
            </motion.p>
          </motion.div>

          {/* Stats section */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <motion.div
                  className="text-5xl md:text-6xl font-display font-bold text-foreground mb-2"
                  whileHover={{ color: "hsl(var(--primary))" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
                <motion.div
                  className="h-0.5 bg-primary mt-2 mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
