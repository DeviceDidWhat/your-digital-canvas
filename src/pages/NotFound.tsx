import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'hsl(var(--primary))' }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{ background: 'hsl(var(--primary))' }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center px-6">
        {/* Glitch 404 */}
        <motion.div
          className="relative mb-8"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          <motion.h1
            className="text-[12rem] md:text-[16rem] font-display font-bold leading-none select-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="relative inline-block">
              {/* Main text */}
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/80 to-foreground/40">
                404
              </span>
              
              {/* Glitch layers */}
              <motion.span
                className="absolute inset-0 text-primary/60 z-0"
                animate={{
                  x: [-2, 2, -2, 0, 2],
                  opacity: [0.5, 0.8, 0.5, 0.7, 0.5],
                }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                style={{ clipPath: 'inset(0 0 50% 0)' }}
              >
                404
              </motion.span>
              <motion.span
                className="absolute inset-0 text-primary/40 z-0"
                animate={{
                  x: [2, -2, 2, 0, -2],
                  opacity: [0.3, 0.6, 0.3, 0.5, 0.3],
                }}
                transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
                style={{ clipPath: 'inset(50% 0 0 0)' }}
              >
                404
              </motion.span>
            </span>
          </motion.h1>

          {/* Decorative lines */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4 mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-lg">
            The page you're looking for seems to have wandered off into the digital void.
          </p>
          
          {/* Current path display */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Search className="w-4 h-4 text-muted-foreground" />
            <code className="text-sm text-primary font-mono">{location.pathname}</code>
          </motion.div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button asChild variant="hero" size="lg" className="group">
            <Link to="/">
              <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="heroOutline" size="lg" className="group">
            <a href="#" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </a>
          </Button>
        </motion.div>

        {/* ASCII art decoration */}
        <motion.pre
          className="mt-16 text-xs text-muted-foreground/30 font-mono hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
{`
    ╭──────────────────────╮
    │  ERROR 404          │
    │  ┌────────────────┐ │
    │  │  ¯\\_(ツ)_/¯   │ │
    │  └────────────────┘ │
    ╰──────────────────────╯
`}
        </motion.pre>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 text-muted-foreground/20 font-mono text-sm">
        <div>ERR_NOT_FOUND</div>
        <div className="text-primary/40">STATUS: 404</div>
      </div>
      <div className="absolute bottom-8 right-8 text-muted-foreground/20 font-mono text-sm text-right">
        <div>ROUTE: {location.pathname}</div>
        <div className="text-primary/40">TIMESTAMP: {new Date().toISOString()}</div>
      </div>
    </div>
  );
};

export default NotFound;
