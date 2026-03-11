"use client"
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Por que ter um site?",
    answer: "Um site profissional é essencial para estabelecer sua presença online, alcançar novos clientes e transmitir credibilidade. É a vitrine digital do seu negócio, disponível 24 horas por dia.",
  },
  {
    question: "Quem vai criar o meu site?",
    answer: "Nossa equipe de desenvolvedores especializados da IGNIS HUB cuidará de todo o processo, desde o design até a implementação, garantindo um resultado profissional e personalizado.",
  },
  {
    question: "Meu site vai aparecer no Google?",
    answer: "Sim! Todos os nossos sites são desenvolvidos com técnicas de SEO para melhor posicionamento nos mecanismos de busca, aumentando sua visibilidade online.",
  },
  {
    question: "A hospedagem está inclusa no valor?",
    answer: "Oferecemos planos que incluem hospedagem. Consulte-nos para conhecer as opções disponíveis e encontrar a melhor solução para o seu projeto.",
  },
  {
    question: "Posso solicitar alterações após o desenvolvimento?",
    answer: "Claro! Oferecemos suporte contínuo e pacotes de manutenção para que você possa atualizar e aprimorar seu site sempre que necessário.",
  },
  {
    question: "Meu site será responsivo?",
    answer: "Sim, todos os nossos sites são desenvolvidos com design responsivo, garantindo uma experiência perfeita em dispositivos móveis, tablets e computadores.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24">
      <div className="flex flex-col mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Dúvidas</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl w-full mx-auto"
        >
          <Accordion type="single" collapsible className=" space-y-3 w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl px-6 data-[state=open]:border-primary/30 w-full"
              >
                <AccordionTrigger className="text-left font-heading font-medium text-sm hover:no-underline w-full">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed w-full">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/553898377158"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            Ainda restou dúvidas? Fale conosco →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
