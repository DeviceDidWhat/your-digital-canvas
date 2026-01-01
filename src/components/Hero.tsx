import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background p-6 md:p-12">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      {/* Scattered decorative text */}
      <div 
        className={`absolute top-[15%] left-[5%] transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      >
        <span className="text-[12vw] font-display font-bold text-primary/[0.07] leading-none select-none">DEV</span>
      </div>
      
      <div 
        className={`absolute bottom-[10%] right-[5%] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` }}
      >
        <span className="text-[10vw] font-display font-bold text-primary/[0.07] leading-none select-none">2024</span>
      </div>

      {/* Main scattered layout */}
      <div className="relative w-full max-w-7xl mx-auto min-h-[80vh]">
        
        {/* Top left - small intro */}
        <div 
          className={`absolute top-0 left-0 md:left-[5%] transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Available for work</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-[200px]">
            Crafting digital experiences since 2020
          </p>
        </div>

        {/* Center - Main name (scattered letters effect) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <div className="relative">
            {/* First name - large and offset */}
            <div 
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              <h1 
                className="font-display text-[18vw] md:text-[15vw] font-bold leading-[0.8] text-foreground tracking-tighter"
                style={{ transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)` }}
              >
                YOUR
              </h1>
            </div>
            
            {/* Last name - italic, offset opposite direction */}
            <div 
              className={`-mt-[2vw] md:-mt-[4vw] transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              <h1 
                className="font-display text-[20vw] md:text-[17vw] font-bold leading-[0.8] text-gradient italic tracking-tight ml-[10vw]"
                style={{ transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)` }}
              >
                NAME
              </h1>
            </div>

            {/* Floating role badge */}
            <div 
              className={`absolute -right-4 md:right-[10%] top-0 md:top-[20%] transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100 rotate-12' : 'opacity-0 rotate-0'
              }`}
              style={{ transform: `rotate(12deg) translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}
            >
              <div className="px-4 py-2 border border-primary bg-background text-sm tracking-widest uppercase">
                Developer
              </div>
            </div>

            {/* Another floating badge */}
            <div 
              className={`absolute left-[5%] bottom-[20%] transition-all duration-700 delay-800 ${
                isVisible ? 'opacity-100 -rotate-6' : 'opacity-0 rotate-0'
              }`}
              style={{ transform: `rotate(-6deg) translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` }}
            >
              <div className="px-4 py-2 border border-primary/50 bg-primary/10 text-sm tracking-widest uppercase text-primary">
                Designer
              </div>
            </div>
          </div>
        </div>

        {/* Bottom left - CTA */}
        <div 
          className={`absolute bottom-0 left-0 md:left-[5%] transition-all duration-700 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a 
            href="#projects" 
            className="group inline-flex items-center gap-4 text-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm tracking-widest uppercase">View Work</span>
            <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
              <span className="text-xl group-hover:text-primary-foreground transition-colors">→</span>
            </div>
          </a>
        </div>

        {/* Bottom right - Social */}
        <div 
          className={`absolute bottom-0 right-0 md:right-[5%] transition-all duration-700 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex gap-6">
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:hello@example.com" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Top right - scroll hint */}
        <div 
          className={`absolute top-0 right-0 md:right-[5%] transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-end gap-2">
            <span className="text-xs tracking-widest text-muted-foreground uppercase writing-vertical hidden md:block" 
              style={{ writingMode: 'vertical-rl' }}>
              Scroll Down
            </span>
            <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent animate-pulse" />
          </div>
        </div>

        {/* Floating year */}
        <div 
          className={`absolute top-[30%] right-[15%] hidden lg:block transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)` }}
        >
          <div className="text-right">
            <span className="block text-6xl font-display font-bold text-foreground">©</span>
            <span className="text-xs tracking-widest text-muted-foreground">2024</span>
          </div>
        </div>

        {/* Decorative line */}
        <div 
          className={`absolute top-1/2 left-0 w-full h-px transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.2), transparent)' }}
        />
      </div>
    </section>
  );
};

export default Hero;
