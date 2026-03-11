'use client'
import { motion } from "framer-motion";
import { Globe, Layout, Monitor, Smartphone, Database, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Páginas de alta conversão projetadas para captar leads e impulsionar suas campanhas de marketing digital.",
    features: ["Design responsivo", "Otimização SEO", "Integração com analytics", "Carregamento rápido"],
  },
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Websites profissionais que transmitem credibilidade e posicionam sua marca no mercado digital.",
    features: ["Design personalizado", "CMS integrado", "Multi-idioma", "Blog integrado"],
  },
  {
    icon: Monitor,
    title: "Sistemas Web",
    description: "Plataformas web robustas e escaláveis para automatizar processos e aumentar a produtividade.",
    features: ["Arquitetura escalável", "Dashboard customizado", "API RESTful", "Relatórios avançados"],
  },
  {
    icon: Smartphone,
    title: "Aplicações Mobile-First",
    description: "Interfaces otimizadas para dispositivos móveis com experiência nativa usando tecnologias web modernas.",
    features: ["PWA ready", "UI/UX otimizado", "Push notifications", "Modo offline"],
  },
  {
    icon: Database,
    title: "Integração de APIs",
    description: "Conectamos sistemas e plataformas para automatizar fluxos de trabalho e centralizar dados.",
    features: ["REST & GraphQL", "Webhooks", "Sync em tempo real", "Documentação completa"],
  },
  {
    icon: Shield,
    title: "Manutenção & Suporte",
    description: "Acompanhamento contínuo para garantir performance, segurança e evolução do seu produto digital.",
    features: ["Monitoramento 24/7", "Backups automáticos", "Atualizações de segurança", "SLA garantido"],
  },
];

const Servicos = () => {
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
            Serviços
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6"
          >
            O que <span className="gradient-text">fazemos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Soluções completas de desenvolvimento web para transformar seu negócio no mundo digital.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-xl border border-border bg-card p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="/contato"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity glow-sm"
            >
              Solicitar orçamento
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Servicos;
