'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';
import { Badge } from '@/components/ui/badge';

type OS = {
  numero: string;
  cliente: string;
  valor: number;
  status: 'budget' | 'open' | 'progress' | 'finished';
  data: string;
};

const dadosMock: OS[] = [
  { numero: '001', cliente: 'Paróquia Sagrado Coração de Jesus', valor: 256, status: 'finished', data: '2026-02-18' },
  { numero: '002', cliente: 'Paróquia Sagrado Coração de Jesus', valor: 1140, status: 'finished', data: '2026-03-02' },
  { numero: '003', cliente: 'Paróquia Sagrado Coração de Jesus', valor: 200, status: 'progress', data: '2026-03-06' },
  // ... mais registros
];

// statusStyle.ts
export const statusStyle: Record<string, { title: string; color: string }> = {
  budget: {
    title: "Em Orçamento",
    color: "bg-blue-600", // Tailwind class
  },
  open: {
    title: "Aberta",
    color: "bg-green-600",
  },
  progress: {
    title: "Em andamento",
    color: "bg-yellow-600",
  },
  finished: {
    title: "Concluída",
    color: "bg-green-600",
  },
  canceled: {
    title: "Cancelada",
    color: "bg-red-600",
  },
};

export default function TabelaOS() {
  const [filtroCliente, setFiltroCliente] = useState('');
  const [filtroStatus, setFiltroStatus] = useState<string>("Todos");
  const [pagina, setPagina] = useState(1);
  const itensPorPagina = 10;

  const filtrados = dadosMock.filter((os) =>
    os.cliente.toLowerCase().includes(filtroCliente.toLowerCase()) &&
    (filtroStatus === 'Todos' ? true : os.status === filtroStatus)
  );

  const totalPaginas = Math.ceil(filtrados.length / itensPorPagina);
  const exibidos = filtrados.slice((pagina - 1) * itensPorPagina, pagina * itensPorPagina);

  return (
    <Card className="p-6 space-y-4 w-full">
      <h2 className="text-xl font-bold">Ordens de Serviço</h2>

      {/* Filtros */}
      <div className="flex gap-4">
        <Input
          placeholder="Filtrar por cliente"
          value={filtroCliente}
          onChange={(e) => setFiltroCliente(e.target.value)}
        />
        <Select onValueChange={(v) => setFiltroStatus(v)} value={filtroStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Todos">Todos</SelectItem>
            <SelectItem value="Aberta">Aberta</SelectItem>
            <SelectItem value="Em andamento">Em andamento</SelectItem>
            <SelectItem value="Concluída">Concluída</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {exibidos.length === 0 ? (
        <div className="w-full text-center items-center justify-center py-16 text-base">
          Nao há nenhum dado disponível no momento
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className='uppercase font-extrabold'>
              <TableHead>Nº OS</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {exibidos.map((os) => (
              <TableRow key={os.numero}>
                <TableCell>{os.numero}</TableCell>
                <TableCell>{os.cliente}</TableCell>
                <TableCell>R$ {os.valor.toFixed(2)}</TableCell>
                <TableCell >
                  <Badge className={`${statusStyle[os.status]?.color} rounded`}>
                    {statusStyle[os.status]?.title || os.status}
                  </Badge>
                </TableCell>
                <TableCell>{os.data}</TableCell>
                <TableCell className="flex gap-2">
                  <Button variant="outline" size="sm">Editar</Button>
                  <Button variant="destructive" size="sm">Excluir</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {/* Paginação */}
      <Pagination className='justify-end'>
        <PaginationContent>
          {Array.from({ length: totalPaginas }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                isActive={pagina === i + 1}
                onClick={() => setPagina(i + 1)}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </Card>
  );
}