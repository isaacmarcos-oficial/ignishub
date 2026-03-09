"use client"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const techStack = [
  "React", "Next.js", "Node.js", "TypeScript", "Tailwind", "Prisma",
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden justify-center">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] bg-primary blur-[120px]" />

      <div className="flex  mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6"
          >
            Soluções digitais inovadoras
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold leading-tight mb-6"
          >
            Transformando ideias em{" "}
            <span className="gradient-text">realidade.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto mb-10"
          >
            Desenvolvemos sistemas e sites web personalizados com as mais
            atualizadas tecnologias para impulsionar seu negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="https://wa.me/553898377158"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity glow-sm"
            >
              Entre em contato
              <ArrowRight size={18} />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium border border-border text-foreground hover:bg-secondary transition-colors"
            >
              Nossos serviços
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full text-xs font-medium border border-border text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
