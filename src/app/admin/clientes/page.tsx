'use client'
import { motion } from "framer-motion";
import { Users, Search, Plus, Mail, Phone, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const clientesData = [
  { id: 1, nome: "TechCorp LTDA", email: "contato@techcorp.com", telefone: "(11) 99999-0001", plano: "Enterprise", status: "Ativo", projetos: 3 },
  { id: 2, nome: "StartUp XYZ", email: "hello@startupxyz.io", telefone: "(21) 98888-0002", plano: "Pro", status: "Ativo", projetos: 1 },
  { id: 3, nome: "APARBS", email: "admin@aparbs.org.br", telefone: "(16) 97777-0003", plano: "Pro", status: "Ativo", projetos: 2 },
  { id: 4, nome: "Clínica Saúde+", email: "contato@saudemais.com", telefone: "(11) 96666-0004", plano: "Starter", status: "Ativo", projetos: 1 },
  { id: 5, nome: "EducaPlus", email: "info@educaplus.com.br", telefone: "(31) 95555-0005", plano: "Enterprise", status: "Inativo", projetos: 2 },
  { id: 6, nome: "LogiTrack", email: "ops@logitrack.com", telefone: "(41) 94444-0006", plano: "Starter", status: "Ativo", projetos: 1 },
];

const planoColor: Record<string, string> = {
  Enterprise: "bg-primary/10 text-primary border-primary/20",
  Pro: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Starter: "bg-muted text-muted-foreground border-border/50",
};

export default function Clientes() {
  const [search, setSearch] = useState("");
  const filtered = clientesData.filter((c) =>
    c.nome.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Clientes</h1>
          <p className="text-sm text-muted-foreground">{clientesData.length} clientes cadastrados</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
          <Plus className="h-4 w-4" /> Novo Cliente
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar clientes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-border/50 bg-card/50 pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors"
        />
      </div>

      <div className="grid gap-4">
        {filtered.map((cliente, i) => (
          <motion.div
            key={cliente.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm hover:border-primary/20 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-primary">
                    {cliente.nome.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{cliente.nome}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                    <span className="inline-flex items-center gap-1"><Mail className="h-3 w-3" />{cliente.email}</span>
                    <span className="inline-flex items-center gap-1"><Phone className="h-3 w-3" />{cliente.telefone}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${planoColor[cliente.plano]}`}>
                  {cliente.plano}
                </span>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${cliente.status === "Ativo" ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`}>
                  {cliente.status}
                </span>
                <span className="text-xs text-muted-foreground">{cliente.projetos} projeto(s)</span>
                <button className="h-8 w-8 rounded-md hover:bg-muted flex items-center justify-center transition-colors">
                  <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
