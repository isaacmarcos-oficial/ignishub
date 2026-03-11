'use client'
import { motion } from "framer-motion";
import { Package, Plus, Search, Tag, BarChart3 } from "lucide-react";
import { useState } from "react";

const produtosData = [
  { id: 1, nome: "Landing Page", desc: "Página de conversão otimizada", preco: "R$ 1.500", vendas: 24, categoria: "Web", ativo: true },
  { id: 2, nome: "Site Institucional", desc: "Presença digital completa", preco: "R$ 3.500", vendas: 18, categoria: "Web", ativo: true },
  { id: 3, nome: "Sistema Web", desc: "Aplicação web sob medida", preco: "R$ 8.000", vendas: 9, categoria: "Sistema", ativo: true },
  { id: 4, nome: "ItsZap", desc: "Multi-atendimento WhatsApp", preco: "R$ 199/mês", vendas: 35, categoria: "SaaS", ativo: true },
  { id: 5, nome: "Integração API", desc: "Conectividade entre sistemas", preco: "R$ 2.500", vendas: 12, categoria: "Serviço", ativo: true },
  { id: 6, nome: "Consultoria Tech", desc: "Estratégia e arquitetura", preco: "R$ 500/h", vendas: 42, categoria: "Serviço", ativo: true },
  { id: 7, nome: "Manutenção Mensal", desc: "Suporte e atualizações", preco: "R$ 350/mês", vendas: 28, categoria: "Recorrente", ativo: true },
  { id: 8, nome: "E-commerce Básico", desc: "Loja virtual simples", preco: "R$ 5.000", vendas: 6, categoria: "Web", ativo: false },
];

const catColor: Record<string, string> = {
  Web: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Sistema: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  SaaS: "bg-primary/10 text-primary border-primary/20",
  Serviço: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Recorrente: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

export default function Produtos() {
  const [search, setSearch] = useState("");
  const filtered = produtosData.filter((p) =>
    p.nome.toLowerCase().includes(search.toLowerCase()) || p.categoria.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Produtos</h1>
          <p className="text-sm text-muted-foreground">{produtosData.length} produtos cadastrados</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
          <Plus className="h-4 w-4" /> Novo Produto
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-border/50 bg-card/50 pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((produto, i) => (
          <motion.div
            key={produto.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`rounded-xl border bg-card/50 p-5 backdrop-blur-sm transition-colors ${produto.ativo ? "border-border/50 hover:border-primary/20" : "border-border/30 opacity-60"}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Package className="h-5 w-5 text-primary" />
              </div>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border ${catColor[produto.categoria] || "bg-muted text-muted-foreground border-border"}`}>
                <Tag className="h-2.5 w-2.5 mr-1" />{produto.categoria}
              </span>
            </div>
            <h3 className="font-heading font-semibold text-foreground">{produto.nome}</h3>
            <p className="text-xs text-muted-foreground mt-1 mb-4">{produto.desc}</p>
            <div className="flex items-center justify-between pt-3 border-t border-border/30">
              <span className="text-sm font-bold text-primary">{produto.preco}</span>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <BarChart3 className="h-3 w-3" /> {produto.vendas} vendas
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
