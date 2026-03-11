'use client'
import { motion } from "framer-motion";
import { Users, Package, ClipboardList, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  { label: "Clientes Ativos", value: "48", change: "+12%", up: true, icon: Users },
  { label: "Produtos", value: "15", change: "+3", up: true, icon: Package },
  { label: "OS Abertas", value: "7", change: "-2", up: false, icon: ClipboardList },
  { label: "Receita Mensal", value: "R$ 32.4k", change: "+8.5%", up: true, icon: TrendingUp },
];

const recentOrders = [
  { id: "OS-2024-041", cliente: "TechCorp LTDA", servico: "Landing Page", status: "Em Progresso", data: "09/03/2026" },
  { id: "OS-2024-040", cliente: "StartUp XYZ", servico: "Sistema Web", status: "Aguardando", data: "08/03/2026" },
  { id: "OS-2024-039", cliente: "APARBS", servico: "Manutenção", status: "Concluída", data: "07/03/2026" },
  { id: "OS-2024-038", cliente: "Clínica Saúde+", servico: "Integração API", status: "Em Progresso", data: "06/03/2026" },
  { id: "OS-2024-037", cliente: "EducaPlus", servico: "App Mobile", status: "Concluída", data: "05/03/2026" },
];

const statusColor: Record<string, string> = {
  "Em Progresso": "bg-primary/10 text-primary border-primary/20",
  "Aguardando": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "Concluída": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Visão geral do seu negócio</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm hover:border-primary/20 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-4 w-4 text-primary" />
              </div>
              <span className={`flex items-center gap-1 text-xs font-medium ${stat.up ? "text-emerald-400" : "text-red-400"}`}>
                {stat.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold font-heading text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="p-5 border-b border-border/50">
          <h2 className="font-heading text-lg font-semibold text-foreground">Ordens de Serviço Recentes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/30">
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">ID</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Cliente</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Serviço</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Data</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-border/20 hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-3 font-mono text-xs text-primary">{order.id}</td>
                  <td className="px-5 py-3 text-foreground">{order.cliente}</td>
                  <td className="px-5 py-3 text-muted-foreground">{order.servico}</td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${statusColor[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{order.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
