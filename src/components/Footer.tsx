import { Github, Linkedin, Mail, Twitter, ArrowUpRight, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter size={18} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Mail size={18} />, href: "mailto:hello@example.com", label: "Email" },
  ];

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Large decorative text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-display text-[20vw] font-bold text-muted/5 select-none whitespace-nowrap">
          PORTFOLIO
        </span>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left section - Brand */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#"
              className="inline-block font-display text-3xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Portfolio<span className="text-primary">.</span>
            </a>
            <p className="mt-4 text-muted-foreground max-w-sm leading-relaxed">
              Crafting digital experiences with passion and precision. Let's build something amazing together.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group relative w-10 h-10 rounded-full border border-border bg-muted/30 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {link.icon}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Middle section - Navigation */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right section - CTA */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-6">
              Let's Connect
            </h4>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Have a project in mind? I'd love to hear from you.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight 
                size={18} 
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
              />
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
          
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Made with 
            <Heart size={14} className="text-primary fill-primary animate-pulse" />
            and lots of coffee
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span>Back to top</span>
            <span className="w-6 h-6 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
              <ArrowUpRight size={12} className="rotate-[-45deg] group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-6 w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      <div className="absolute top-0 left-6 w-16 h-px bg-gradient-to-r from-primary/50 to-transparent" />
      <div className="absolute top-0 right-6 w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      <div className="absolute top-0 right-6 w-16 h-px bg-gradient-to-l from-primary/50 to-transparent" />
    </footer>
  );
};

export default Footer;
