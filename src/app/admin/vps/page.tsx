'use client'
import { motion } from "framer-motion";
import { Cpu, MemoryStick, HardDrive, Network, Activity, ArrowDown, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

function randomBetween(min: number, max: number) {
  return Math.round((Math.random() * (max - min) + min) * 10) / 10;
}

const initialServices = [
  { name: "ignishub.com.br", cpu: 12.4, mem: 512, memPercent: 25.0, netIn: 1.2, netOut: 0.8 },
  { name: "isaacmarcos.com.br", cpu: 4.2, mem: 256, memPercent: 12.5, netIn: 0.5, netOut: 0.3 },
  { name: "ItsZap API", cpu: 28.7, mem: 1024, memPercent: 50.0, netIn: 15.4, netOut: 12.1 },
  { name: "Comunidade Ignis", cpu: 8.1, mem: 384, memPercent: 18.8, netIn: 2.1, netOut: 1.5 },
  { name: "PostgreSQL", cpu: 15.3, mem: 768, memPercent: 37.5, netIn: 8.3, netOut: 4.2 },
  { name: "Redis Cache", cpu: 3.1, mem: 128, memPercent: 6.3, netIn: 5.7, netOut: 5.5 },
  { name: "Nginx Proxy", cpu: 1.8, mem: 64, memPercent: 3.1, netIn: 22.4, netOut: 21.8 },
];

export default function VpsRealtime() {
  const [services, setServices] = useState(initialServices);
  const [totals, setTotals] = useState({ cpu: 0, mem: 0, disk: 68.4, netIn: 0, netOut: 0 });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setServices((prev) =>
  //       prev.map((s) => ({
  //         ...s,
  //         cpu: Math.max(0.1, s.cpu + randomBetween(-3, 3)),
  //         mem: Math.max(32, Math.round(s.mem + randomBetween(-20, 20))),
  //         memPercent: Math.max(1, s.memPercent + randomBetween(-2, 2)),
  //         netIn: Math.max(0, s.netIn + randomBetween(-1, 1)),
  //         netOut: Math.max(0, s.netOut + randomBetween(-1, 1)),
  //       }))
  //     );
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {

    async function load() {
      const res = await fetch("/api/vps/metrics");
      const data = await res.json();

      setTotals({
        cpu: data.cpu,
        mem: data.mem,
        disk: data.disk,
        netIn: data.netIn,
        netOut: data.netOut
      });
    }

    load();

    const interval = setInterval(load, 2000);

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {
    const cpu = services.reduce((a, s) => a + s.cpu, 0);
    const mem = services.reduce((a, s) => a + s.mem, 0);
    const netIn = services.reduce((a, s) => a + s.netIn, 0);
    const netOut = services.reduce((a, s) => a + s.netOut, 0);
    setTotals((prev) => ({ ...prev, cpu: Math.round(cpu * 10) / 10, mem, netIn: Math.round(netIn * 10) / 10, netOut: Math.round(netOut * 10) / 10 }));
  }, [services]);

  const cards = [
    { label: "CPU Total", value: `${totals.cpu}%`, icon: Cpu, color: totals.cpu > 70 ? "text-red-400" : "text-primary" },
    { label: "Memória", value: `${(totals.mem / 1024).toFixed(1)} / 4 GB`, icon: MemoryStick, color: totals.mem > 3072 ? "text-red-400" : "text-primary" },
    { label: "Disco", value: `${totals.disk}%`, icon: HardDrive, color: "text-primary" },
    { label: "Rede", value: `↓${totals.netIn} ↑${totals.netOut} MB/s`, icon: Network, color: "text-primary" },
  ];

  return (
    <div className="space-y-6 w-full">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Activity className="h-5 w-5 text-primary" />
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary animate-pulse" />
        </div>
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">VPS Realtime</h1>
          <p className="text-sm text-muted-foreground">Monitoramento em tempo real do servidor</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <card.icon className={`h-4 w-4 ${card.color}`} />
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{card.label}</span>
            </div>
            <p className={`text-xl font-bold font-heading ${card.color} transition-colors`}>{card.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="p-5 border-b border-border/50 flex items-center justify-between">
          <h2 className="font-heading text-lg font-semibold text-foreground">Serviços Ativos</h2>
          <span className="text-xs text-muted-foreground">Atualiza a cada 2s</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/30">
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Projeto / Serviço</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">CPU %</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Memória</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Mem %</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  <span className="inline-flex items-center gap-1"><ArrowDown className="h-3 w-3" /> Entrada</span>
                </th>
                <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  <span className="inline-flex items-center gap-1"><ArrowUp className="h-3 w-3" /> Saída</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.name} className="border-b border-border/20 hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-3 font-medium text-foreground">{s.name}</td>
                  <td className="px-5 py-3 text-right font-mono text-xs">
                    <span className={s.cpu > 50 ? "text-yellow-400" : s.cpu > 80 ? "text-red-400" : "text-muted-foreground"}>
                      {s.cpu.toFixed(1)}%
                    </span>
                  </td>
                  <td className="px-5 py-3 text-right font-mono text-xs text-muted-foreground">{s.mem} MB</td>
                  <td className="px-5 py-3 text-right font-mono text-xs">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-1000"
                          style={{ width: `${Math.min(s.memPercent, 100)}%` }}
                        />
                      </div>
                      <span className="text-muted-foreground w-12 text-right">{s.memPercent.toFixed(1)}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-right font-mono text-xs text-emerald-400">{s.netIn.toFixed(1)} MB/s</td>
                  <td className="px-5 py-3 text-right font-mono text-xs text-blue-400">{s.netOut.toFixed(1)} MB/s</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
