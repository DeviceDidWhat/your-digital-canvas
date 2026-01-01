import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Marquee text background */}
      <div className="absolute inset-0 flex flex-col justify-center overflow-hidden opacity-[0.03] pointer-events-none select-none">
        <div className="animate-marquee whitespace-nowrap">
          <span className="font-display text-[20vw] font-bold uppercase tracking-tighter">
            DEVELOPER • DESIGNER • CREATOR • DEVELOPER • DESIGNER • CREATOR •&nbsp;
          </span>
        </div>
        <div className="animate-marquee-reverse whitespace-nowrap">
          <span className="font-display text-[20vw] font-bold uppercase tracking-tighter">
            CREATIVE • STUDENT • BUILDER • CREATIVE • STUDENT • BUILDER •&nbsp;
          </span>
        </div>
      </div>

      {/* Main content grid */}
      <div className="flex-1 grid lg:grid-cols-2 relative z-10">
        {/* Left side - Main info */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-0">
          {/* Status badge */}
          <div 
            className={`mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-3 text-sm text-muted-foreground">
              <span className="w-12 h-px bg-primary" />
              <span className="tracking-widest uppercase">Portfolio 2024</span>
            </div>
          </div>

          {/* Name with dramatic reveal */}
          <div className="mb-6 overflow-hidden">
            <h1 
              className={`font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.85] transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
              }`}
            >
              <span className="block text-foreground">Your</span>
              <span className="block text-gradient italic">Name</span>
            </h1>
          </div>

          {/* Role tags */}
          <div 
            className={`flex flex-wrap gap-3 mb-8 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {['Developer', 'Designer', 'Creator'].map((role, i) => (
              <span 
                key={role}
                className="px-4 py-2 text-sm border border-border rounded-full text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
                style={{ transitionDelay: `${600 + i * 100}ms` }}
              >
                {role}
              </span>
            ))}
          </div>

          {/* Description */}
          <p 
            className={`text-lg text-muted-foreground max-w-md mb-10 leading-relaxed transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            A passionate student crafting digital experiences through thoughtful design and clean code.
          </p>

          {/* CTA */}
          <div 
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>

        {/* Right side - Visual element */}
        <div className="relative hidden lg:flex items-center justify-center">
          {/* Large number */}
          <div 
            className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <span className="font-display text-[40vw] font-bold text-primary/5 leading-none select-none">
              24
            </span>
          </div>

          {/* Rotating border frame */}
          <div 
            className={`relative w-80 h-80 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 rotate-0' : 'opacity-0 rotate-12'
            }`}
          >
            <div className="absolute inset-0 border-2 border-primary/30 rotate-12 animate-pulse-slow" />
            <div className="absolute inset-4 border border-primary/20 -rotate-6" />
            <div className="absolute inset-8 border border-primary/10 rotate-3" />
            
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-primary-foreground">YN</span>
                </div>
                <p className="text-sm text-muted-foreground tracking-widest uppercase">Since 2020</p>
              </div>
            </div>
          </div>

          {/* Floating stats */}
          <div 
            className={`absolute top-20 right-20 text-right transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <span className="block font-display text-5xl font-bold text-foreground">15+</span>
            <span className="text-sm text-muted-foreground">Projects</span>
          </div>

          <div 
            className={`absolute bottom-20 left-20 transition-all duration-700 delay-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="block font-display text-5xl font-bold text-foreground">4+</span>
            <span className="text-sm text-muted-foreground">Years Learning</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div 
        className={`relative z-10 border-t border-border transition-all duration-700 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-8 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social links */}
          <div className="flex items-center gap-6">
            {[
              { icon: Github, href: "https://github.com", label: "GH" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LI" },
              { icon: Mail, href: "mailto:hello@example.com", label: "EM" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon size={18} />
                <span className="text-xs tracking-wider hidden sm:inline">{social.label}</span>
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <a 
            href="#about" 
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border border-current flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
            </div>
          </a>

          {/* Location */}
          <div className="text-xs text-muted-foreground tracking-wider">
            Based in <span className="text-foreground">Your City</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
