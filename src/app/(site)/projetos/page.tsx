'use client'
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Website Comunidade Ignis",
    category: "Site Institucional",
    description: "Plataforma digital para a comunidade Ignis com design moderno e conteúdo dinâmico.",
    url: "https://www.comunidadeignis.com.br/",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    tech: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Website APARBS",
    category: "Site Institucional",
    description: "Website institucional com foco em apresentação profissional e captação de clientes.",
    url: "https://www.aparbs.com.br/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tech: ["React", "Node.js", "Prisma"],
  },
  {
    title: "ItsZap",
    category: "Sistema Web",
    description: "Sistema completo de multi atendimento WhatsApp com chatbot e relatórios integrados.",
    url: "https://itszap.ignishub.com.br/",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tech: ["React", "Node.js", "WebSocket"],
  },
];

const Projetos = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.3em] text-primary mb-4"
          >
            Portfólio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6"
          >
            Nossos <span className="gradient-text">Projetos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Confira alguns dos projetos que desenvolvemos com dedicação e excelência técnica.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 bg-card"
              >
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <p className="text-xs text-primary mb-2">{project.category}</p>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-heading font-bold">{project.title}</h3>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs border border-border text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
