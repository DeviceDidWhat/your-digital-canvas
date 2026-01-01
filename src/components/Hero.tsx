import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const name = "Your Name";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large rotating ring */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/20 rounded-full animate-spin-slow"
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full animate-spin-slow-reverse"
        />
        
        {/* Floating orbs */}
        <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-primary rounded-full animate-float-1" />
        <div className="absolute top-[30%] right-[20%] w-2 h-2 bg-primary/60 rounded-full animate-float-2" />
        <div className="absolute bottom-[25%] left-[25%] w-4 h-4 bg-primary/40 rounded-full animate-float-3" />
        <div className="absolute bottom-[35%] right-[15%] w-2 h-2 bg-primary rounded-full animate-float-1" />
        <div className="absolute top-[60%] left-[10%] w-3 h-3 bg-primary/50 rounded-full animate-float-2" />
        
        {/* Diagonal lines */}
        <div className="absolute top-0 right-0 w-px h-[40vh] bg-gradient-to-b from-transparent via-primary/30 to-transparent rotate-45 translate-x-20" />
        <div className="absolute bottom-0 left-0 w-px h-[40vh] bg-gradient-to-t from-transparent via-primary/30 to-transparent -rotate-45 -translate-x-20" />
        
        {/* Corner accents */}
        <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-primary/30" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-primary/30" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Intro badge */}
          <div 
            className={`flex justify-center mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground tracking-widest uppercase">
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Animated name - letter by letter */}
          <div className="text-center mb-6 overflow-hidden">
            <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6">
              <span 
                className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                }`}
              >
                Hi, I'm
              </span>
            </div>
            <div className="flex justify-center mt-2 overflow-hidden">
              {name.split('').map((letter, index) => (
                <span
                  key={index}
                  className={`font-display text-6xl md:text-8xl lg:text-9xl font-bold text-gradient italic inline-block transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-full rotate-12'
                  }`}
                  style={{ 
                    transitionDelay: `${400 + index * 50}ms`,
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </div>
          </div>

          {/* Tagline with staggered words */}
          <div 
            className={`text-center mb-12 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate student crafting{" "}
              <span className="text-foreground font-medium relative inline-block group">
                digital experiences
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>{" "}
              through design and development
            </p>
          </div>

          {/* CTA Buttons with reveal */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button variant="hero" size="xl" className="group relative overflow-hidden" asChild>
              <a href="#projects">
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="group" asChild>
              <a href="#contact">
                <span className="group-hover:text-primary transition-colors duration-300">Get In Touch</span>
              </a>
            </Button>
          </div>

          {/* Social Links with staggered animation */}
          <div 
            className={`flex justify-center gap-8 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex flex-col items-center gap-2"
                style={{ animationDelay: `${1100 + index * 100}ms` }}
              >
                <div className="relative p-3 rounded-full border border-border bg-card/50 backdrop-blur-sm group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <social.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  <span className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-0 transition-all duration-500" />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent group-hover:h-16 transition-all duration-300" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
