import { Mail, MapPin, Send, ArrowUpRight, MessageCircle, Clock, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-muted/20">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Get in Touch
              </p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.9]">
                Say <span className="text-gradient italic">Hello</span>
                <span className="text-primary">.</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-sm">
              Let's create something amazing together. I'd love to hear about your project.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
          
          {/* Large Form Card - Spans 2 columns and 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 p-6 lg:p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">Send a Message</h3>
                <p className="text-sm text-muted-foreground">I'll get back to you soon</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full group/btn">
                Send Message
                <Send className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Email Card */}
          <motion.a
            href="mailto:hello@example.com"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Email Me</h3>
            <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              hello@example.com
            </p>
          </motion.a>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Location</h3>
            <p className="text-sm text-muted-foreground">
              Your City, Country
            </p>
          </motion.div>

          {/* Response Time Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
            <p className="text-sm text-muted-foreground">
              Within 24 hours
            </p>
          </motion.div>

          {/* Availability Card - Wide */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-6 rounded-3xl bg-gradient-to-r from-card via-card to-primary/5 border border-border hover:border-primary/30 transition-all duration-300 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-green-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <h3 className="font-semibold text-foreground">Available Now</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Open for freelance & internship opportunities
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Decoration */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-muted-foreground text-sm">
            Prefer other ways? Find me on{" "}
            <a href="#" className="text-primary hover:underline">LinkedIn</a>,{" "}
            <a href="#" className="text-primary hover:underline">GitHub</a>, or{" "}
            <a href="#" className="text-primary hover:underline">Twitter</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
