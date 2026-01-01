import { motion } from "framer-motion";
import { Terminal, Folder, FileCode, Circle } from "lucide-react";

const About = () => {
  const codeLines = [
    { type: "comment", content: "// About Me - Let me introduce myself" },
    { type: "empty", content: "" },
    { type: "keyword", content: "const ", variable: "developer", operator: " = ", bracket: "{" },
    { type: "property", indent: true, key: "name", value: '"Your Name"', comma: true },
    { type: "property", indent: true, key: "role", value: '"Student & Developer"', comma: true },
    { type: "property", indent: true, key: "location", value: '"Your City"', comma: true },
    { type: "property", indent: true, key: "available", value: "true", comma: true, isBoolean: true },
    { type: "bracket", content: "};" },
    { type: "empty", content: "" },
    { type: "comment", content: "// My tech stack" },
    { type: "keyword", content: "const ", variable: "skills", operator: " = ", array: '["React", "TypeScript", "Node.js", "Tailwind", "Figma"]' },
    { type: "empty", content: "" },
    { type: "comment", content: "// A bit about my journey" },
    { type: "keyword", content: "const ", variable: "bio", operator: " = ", string: "`" },
    { type: "string", content: "  I'm a passionate student with a deep love for" },
    { type: "string", content: "  technology and design. Started with curiosity," },
    { type: "string", content: "  now building meaningful digital experiences." },
    { type: "stringEnd", content: "`;" },
    { type: "empty", content: "" },
    { type: "comment", content: "// Let's connect!" },
    { type: "function", content: "export default ", variable: "developer", semicolon: ";" },
  ];

  const stats = [
    { label: "years_coding", value: "3+" },
    { label: "projects", value: "20+" },
    { label: "coffee_cups", value: "∞" },
  ];

  return (
    <section id="about" className="py-32 md:py-40 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            ./about-me
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground">
            About <span className="text-gradient italic">Me</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Code Editor Window */}
          <motion.div
            className="rounded-xl overflow-hidden border border-border bg-card shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Window header */}
            <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <Circle className="w-3 h-3 fill-red-500 text-red-500" />
                  <Circle className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  <Circle className="w-3 h-3 fill-green-500 text-green-500" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <FileCode className="w-4 h-4" />
                <span className="text-sm font-mono">about.tsx</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Folder className="w-4 h-4" />
                <span className="text-sm font-mono">~/portfolio</span>
              </div>
            </div>

            {/* Code content */}
            <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {/* Line number */}
                  <span className="w-8 md:w-12 text-muted-foreground/50 select-none text-right pr-4">
                    {index + 1}
                  </span>
                  
                  {/* Code */}
                  <div className="flex-1">
                    {line.type === "comment" && (
                      <span className="text-muted-foreground">{line.content}</span>
                    )}
                    {line.type === "empty" && <span>&nbsp;</span>}
                    {line.type === "keyword" && (
                      <span>
                        <span className="text-purple-400">{line.content}</span>
                        <span className="text-foreground">{line.variable}</span>
                        <span className="text-muted-foreground">{line.operator}</span>
                        {line.bracket && <span className="text-foreground">{line.bracket}</span>}
                        {line.array && <span className="text-green-400">{line.array}</span>}
                        {line.string && <span className="text-green-400">{line.string}</span>}
                      </span>
                    )}
                    {line.type === "property" && (
                      <span>
                        <span className="text-muted-foreground">{line.indent && "  "}</span>
                        <span className="text-primary">{line.key}</span>
                        <span className="text-muted-foreground">: </span>
                        <span className={line.isBoolean ? "text-orange-400" : "text-green-400"}>
                          {line.value}
                        </span>
                        {line.comma && <span className="text-muted-foreground">,</span>}
                      </span>
                    )}
                    {line.type === "bracket" && (
                      <span className="text-foreground">{line.content}</span>
                    )}
                    {line.type === "string" && (
                      <span className="text-green-400">{line.content}</span>
                    )}
                    {line.type === "stringEnd" && (
                      <span className="text-green-400">{line.content}</span>
                    )}
                    {line.type === "function" && (
                      <span>
                        <span className="text-purple-400">{line.content}</span>
                        <span className="text-foreground">{line.variable}</span>
                        <span className="text-muted-foreground">{line.semicolon}</span>
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {/* Blinking cursor */}
              <div className="flex mt-1">
                <span className="w-8 md:w-12 text-muted-foreground/50 select-none text-right pr-4">
                  {codeLines.length + 1}
                </span>
                <motion.span
                  className="w-2 h-5 bg-primary"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>

          {/* Terminal output */}
          <motion.div
            className="mt-6 rounded-xl overflow-hidden border border-border bg-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-border">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-muted-foreground">terminal</span>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-sm">
              <motion.div
                className="text-muted-foreground mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-green-400">➜</span>{" "}
                <span className="text-primary">~</span> npm run stats
              </motion.div>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="p-4 bg-muted/30 rounded-lg border border-border/50 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "hsl(var(--primary) / 0.5)"
                    }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6 text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                <span className="text-green-400">✓</span>{" "}
                <span className="text-foreground">Ready to collaborate!</span>{" "}
                <span className="text-muted-foreground/50">Run `npm run contact` to connect</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
