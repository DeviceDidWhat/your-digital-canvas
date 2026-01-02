import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Phone, Download } from "lucide-react";
import { Button } from "./ui/button";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.4em] text-primary uppercase mb-2">Get to know me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mt-4" />
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left column - Image */}
          <motion.div
            className="lg:col-span-5 relative"
            style={{ x: imageX }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Main image frame */}
              <div className="aspect-[3/4] bg-card border border-border overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20" />
                <div className="h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center border-4 border-primary/30">
                      <span className="font-display text-5xl text-primary">Y</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">Your photo here</p>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <motion.div
                className="absolute -bottom-3 -right-3 bg-primary px-4 py-2 rounded-md shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-xs font-bold text-primary-foreground tracking-wider uppercase">
                  Developer
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            className="lg:col-span-7"
            style={{ y: textY }}
          >
            {/* Headline */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                Crafting <span className="text-primary">digital experiences</span> with code
              </h3>
            </motion.div>

            {/* Bio text */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                I am a passionate developer with a keen interest in creating meaningful 
                digital experiences. My approach combines thoughtful design with clean, 
                efficient code to build products that are both beautiful and functional.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and pushing boundaries to explore 
                new possibilities in technology and design.
              </p>
            </motion.div>

            {/* Info Cards */}
            <div className="space-y-4 mb-8">
              {/* Education Card */}
              <motion.div
                className="flex items-start gap-4 p-5 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                    Education
                  </h4>
                  <p className="text-foreground font-medium">IIT Jodhpur</p>
                  <p className="text-muted-foreground text-sm">B.Tech in Computer Science & Engineering</p>
                  <p className="text-primary text-sm font-medium mt-1">Graduating in 2028</p>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                className="flex items-start gap-4 p-5 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                    Phone
                  </h4>
                  <p className="text-foreground font-medium">+91 XXXXX XXXXX</p>
                  <p className="text-muted-foreground text-sm">Available for opportunities</p>
                </div>
              </motion.div>
            </div>

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                variant="hero" 
                size="lg" 
                className="gap-3"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
