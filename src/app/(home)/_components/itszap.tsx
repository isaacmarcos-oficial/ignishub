"use client"
import { motion } from "framer-motion";
import { MessageSquare, Bot, BarChart3, ArrowRight } from "lucide-react";

const features = [
  { icon: MessageSquare, label: "Multi atendimento" },
  { icon: Bot, label: "Chatbot automático" },
  { icon: BarChart3, label: "Relatórios detalhados" },
];

const ItsZap = () => {
  return (
    <section id="itszap" className="py-24 relative">
      <div className="flex mx-auto px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Produto</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              <span className="gradient-text">ItsZap</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Sistema completo de multi atendimento WhatsApp para sua empresa.
              Gerencie todas as suas conversas em um único lugar, aumente sua
              produtividade e melhore o relacionamento com seus clientes.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <f.icon className="text-primary" size={18} />
                  </div>
                  <span className="text-sm font-medium">{f.label}</span>
                </div>
              ))}
            </div>

            <a
              href="https://zap.ignishub.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity glow-sm"
            >
              Conheça o ItsZap
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden border border-border glow-md">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
                alt="Dashboard ItsZap - Multi atendimento WhatsApp"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ItsZap;
