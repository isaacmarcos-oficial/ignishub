'use client'
import { motion } from "framer-motion";
import { ClipboardList, Plus, Search, Filter, Calendar, User } from "lucide-react";
import { useState } from "react";

const ordensData = [
  { id: "OS-2026-041", cliente: "TechCorp LTDA", servico: "Landing Page Premium", responsavel: "Isaac Marcos", prioridade: "Alta", status: "Em Progresso", inicio: "01/03/2026", previsao: "15/03/2026", valor: "R$ 2.800" },
  { id: "OS-2026-040", cliente: "StartUp XYZ", servico: "Sistema Web Completo", responsavel: "Isaac Marcos", prioridade: "Alta", status: "Aguardando", inicio: "28/02/2026", previsao: "30/04/2026", valor: "R$ 12.000" },
  { id: "OS-2026-039", cliente: "APARBS", servico: "Manutenção Mensal", responsavel: "Equipe Dev", prioridade: "Média", status: "Em Progresso", inicio: "01/03/2026", previsao: "31/03/2026", valor: "R$ 350" },
  { id: "OS-2026-038", cliente: "Clínica Saúde+", servico: "Integração API Pagamentos", responsavel: "Equipe Dev", prioridade: "Média", status: "Em Progresso", inicio: "25/02/2026", previsao: "20/03/2026", valor: "R$ 3.200" },
  { id: "OS-2026-037", cliente: "EducaPlus", servico: "App Mobile React Native", responsavel: "Isaac Marcos", prioridade: "Baixa", status: "Concluída", inicio: "10/01/2026", previsao: "28/02/2026", valor: "R$ 15.000" },
  { id: "OS-2026-036", cliente: "LogiTrack", servico: "Landing Page", responsavel: "Equipe Dev", prioridade: "Baixa", status: "Concluída", inicio: "05/02/2026", previsao: "20/02/2026", valor: "R$ 1.500" },
  { id: "OS-2026-035", cliente: "TechCorp LTDA", servico: "Consultoria Arquitetura", responsavel: "Isaac Marcos", prioridade: "Alta", status: "Concluída", inicio: "15/01/2026", previsao: "15/02/2026", valor: "R$ 4.000" },
];

const statusColor: Record<string, string> = {
  "Em Progresso": "bg-primary/10 text-primary border-primary/20",
  "Aguardando": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "Concluída": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

const prioridadeColor: Record<string, string> = {
  Alta: "text-red-400",
  Média: "text-yellow-400",
  Baixa: "text-muted-foreground",
};

export default function OrdensServico() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("Todos");

  const filtered = ordensData.filter((o) => {
    const matchSearch = o.id.toLowerCase().includes(search.toLowerCase()) || o.cliente.toLowerCase().includes(search.toLowerCase()) || o.servico.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "Todos" || o.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const statuses = ["Todos", "Em Progresso", "Aguardando", "Concluída"];

  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Ordens de Serviço</h1>
          <p className="text-sm text-muted-foreground">{ordensData.length} ordens registradas</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
          <Plus className="h-4 w-4" /> Nova OS
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar por ID, cliente ou serviço..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-border/50 bg-card/50 pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors"
          />
        </div>
        <div className="flex gap-1 rounded-lg border border-border/50 bg-card/50 p-1">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${filterStatus === s ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((os, i) => (
          <motion.div
            key={os.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm hover:border-primary/20 transition-colors"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-primary">{os.id}</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${statusColor[os.status]}`}>
                    {os.status}
                  </span>
                  <span className={`text-xs font-medium ${prioridadeColor[os.prioridade]}`}>● {os.prioridade}</span>
                </div>
                <h3 className="font-medium text-foreground">{os.servico}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><User className="h-3 w-3" />{os.cliente}</span>
                  <span className="inline-flex items-center gap-1"><ClipboardList className="h-3 w-3" />{os.responsavel}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{os.inicio} → {os.previsao}</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-lg font-bold font-heading text-primary">{os.valor}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
