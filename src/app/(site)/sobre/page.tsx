'use client'
import { motion } from "framer-motion";
import { Code2, Users, Rocket, Award } from "lucide-react";

const values = [
  { icon: Code2, title: "Excelência Técnica", desc: "Dominamos as tecnologias mais modernas do mercado para entregar soluções de alto desempenho." },
  { icon: Users, title: "Parceria Real", desc: "Trabalhamos lado a lado com nossos clientes, entendendo suas necessidades e superando expectativas." },
  { icon: Rocket, title: "Inovação Constante", desc: "Estamos sempre à frente das tendências, trazendo o que há de mais novo em tecnologia." },
  { icon: Award, title: "Compromisso", desc: "Cada projeto é tratado com dedicação total, do planejamento à entrega final." },
];

const team = [
  {
    name: "Isaac Marcos",
    role: "CEO & Fundador",
    bio: "Desenvolvedor full-stack com experiência em React, Node.js e arquitetura de sistemas. Apaixonado por transformar ideias em produtos digitais de alto impacto.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
];

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.3em] text-primary mb-4"
          >
            Sobre nós
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6"
          >
            Quem é a <span className="gradient-text">IGNIS HUB</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Somos uma empresa de tecnologia focada em criar soluções digitais que
            impulsionam negócios. Do conceito à execução, unimos design e código
            para entregar resultados reais.
          </motion.p>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-bold text-center mb-16"
          >
            Nossos <span className="gradient-text">Valores</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-bold text-center mb-16"
          >
            Nossa <span className="gradient-text">Equipe</span>
          </motion.h2>

          <div className="max-w-md mx-auto">
            {team.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-heading font-bold">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Sobre;
