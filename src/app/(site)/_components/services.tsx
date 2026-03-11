"use client"
import { motion } from "framer-motion";
import { Globe, Layout, Monitor } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Landing Page",
    description: "Conquiste seu público com uma landing page que reflete a essência e valores da sua marca.",
    cta: "Quero construir minha presença online",
  },
  {
    icon: Globe,
    title: "Site Institucional",
    description: "Apresente sua empresa de forma profissional e impactante. Transmita seus valores e conquiste novos clientes.",
    cta: "Quero transformar meu negócio",
  },
  {
    icon: Monitor,
    title: "Sistema Web",
    description: "Alcance novos patamares com um sistema web envolvente e de alta qualidade.",
    cta: "Quero impulsionar minha presença digital",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
      <div className="flex flex-col items-center justify-center mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Especialidades</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl border border-border bg-zinc-950 p-8 hover:border-green-500/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <a
                href="https://wa.me/553898377158"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                {service.cta} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
