import { motion } from "framer-motion";
import { Heart, Star, Zap, Coffee, Code2, Palette } from "lucide-react";

const About = () => {
  const cards = [
    {
      type: "photo",
      rotation: -6,
      x: "5%",
      y: "0%",
      zIndex: 3,
    },
    {
      type: "trait",
      icon: <Code2 className="w-8 h-8" />,
      label: "Developer",
      rotation: 4,
      x: "60%",
      y: "5%",
      zIndex: 2,
    },
    {
      type: "trait",
      icon: <Palette className="w-8 h-8" />,
      label: "Designer",
      rotation: -3,
      x: "75%",
      y: "35%",
      zIndex: 4,
    },
    {
      type: "note",
      content: "Started coding at 15, never stopped since.",
      rotation: 5,
      x: "2%",
      y: "55%",
      zIndex: 2,
    },
    {
      type: "stat",
      value: "3+",
      label: "Years",
      rotation: -4,
      x: "35%",
      y: "65%",
      zIndex: 3,
    },
    {
      type: "trait",
      icon: <Coffee className="w-8 h-8" />,
      label: "Coffee Lover",
      rotation: 6,
      x: "65%",
      y: "70%",
      zIndex: 1,
    },
  ];

  const floatingIcons = [
    { icon: <Star className="w-4 h-4" />, x: "20%", y: "20%", delay: 0 },
    { icon: <Heart className="w-4 h-4" />, x: "80%", y: "15%", delay: 0.5 },
    { icon: <Zap className="w-4 h-4" />, x: "15%", y: "75%", delay: 1 },
    { icon: <Star className="w-4 h-4" />, x: "85%", y: "80%", delay: 1.5 },
  ];

  return (
    <section id="about" className="py-32 md:py-40 relative overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      
      {/* Floating decorative icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Get to know
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
            About <span className="text-gradient italic">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A collection of moments, passions, and things that make me who I am.
          </p>
        </motion.div>

        {/* Scattered cards area */}
        <div className="relative h-[600px] md:h-[700px] max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: card.x,
                top: card.y,
                zIndex: card.zIndex,
              }}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                rotate: card.rotation 
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 0, 
                zIndex: 10,
                transition: { duration: 0.2 }
              }}
            >
              {card.type === "photo" && (
                <div className="w-48 md:w-56 bg-card p-3 pb-12 rounded-sm shadow-xl border border-border cursor-pointer">
                  <div className="aspect-square bg-muted rounded-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-display text-3xl text-primary">Y</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Your photo</p>
                    </div>
                  </div>
                  <p className="absolute bottom-3 left-0 right-0 text-center font-handwriting text-sm text-muted-foreground">
                    That is me! ✨
                  </p>
                </div>
              )}

              {card.type === "trait" && (
                <div className="w-32 md:w-36 bg-card p-4 rounded-2xl shadow-xl border border-border cursor-pointer text-center">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {card.icon}
                  </div>
                  <p className="font-semibold text-foreground text-sm">{card.label}</p>
                </div>
              )}

              {card.type === "note" && (
                <div className="w-52 md:w-60 bg-amber-50 dark:bg-amber-900/20 p-5 rounded-sm shadow-xl border border-amber-200/50 dark:border-amber-800/30 cursor-pointer">
                  <p className="font-handwriting text-base text-amber-900 dark:text-amber-100 leading-relaxed">
                    "{card.content}"
                  </p>
                  <div className="mt-3 flex justify-end">
                    <span className="text-xs text-amber-600 dark:text-amber-400">- me</span>
                  </div>
                </div>
              )}

              {card.type === "stat" && (
                <div className="w-28 md:w-32 bg-primary text-primary-foreground p-5 rounded-2xl shadow-xl cursor-pointer text-center">
                  <p className="text-4xl font-display font-bold">{card.value}</p>
                  <p className="text-sm opacity-80">{card.label}</p>
                </div>
              )}
            </motion.div>
          ))}

          {/* Center bio card */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-80 z-5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-card/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Hello! I am
                <span className="text-primary"> Your Name</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A passionate student who loves creating beautiful digital experiences 
                that blend aesthetics with functionality.
              </p>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm text-muted-foreground">Available for projects</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills ticker */}
        <motion.div
          className="mt-8 overflow-hidden py-6 border-y border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-12">
                {["React", "TypeScript", "Tailwind", "Figma", "Node.js", "Design"].map((skill) => (
                  <span
                    key={`${setIndex}-${skill}`}
                    className="text-2xl md:text-3xl font-display text-foreground/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
