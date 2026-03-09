'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export default function Formulario({ onResultado }: { onResultado: (res: any) => void }) {
  const [clientCode, setClientCode] = useState("")
  const [description, setDescription] = useState("")
  const [custoMaterial, setCustoMaterial] = useState(176.5);
  const [frete, setFrete] = useState(20);
  const [impostoPercent, setImpostoPercent] = useState(0.05); // 5%
  const [margemDesejada, setMargemDesejada] = useState(0.2); // 20%

  // cálculos locais
  const precoVenda = (custoMaterial + frete) / ((1 - impostoPercent) * (1 - margemDesejada));
  const impostoReais = precoVenda * impostoPercent;
  const custosDireto = custoMaterial + frete + impostoReais;
  const margemContribuicao = precoVenda - custosDireto;
  const markup = precoVenda / (custoMaterial + frete);
  const margemOperacionalEfetiva = margemContribuicao / precoVenda;


  async function calcular() {
    const res = await fetch('/api/calcular', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ custoMaterial, frete, impostoPercent, margemDesejada }),
    });
    const data = await res.json();
    onResultado(data);
  }

  return (
    <Card className="w-full p-4 space-y-4 m-8">
      <div className="grid grid-cols-4 gap-4">
        <div className="flex gap-4 space-y-2 col-span-4">
          <div className="space-y-2 ">
            <Label>Código</Label>
            <Input value={clientCode} onChange={e => setDescription(e.target.value)} />
          </div>
          <div className="space-y-2 ">
            <Label>Nome</Label>
            <Input value={clientCode} onChange={e => setDescription(e.target.value)} />
          </div>
        </div>
        <div className="space-y-2 col-span-4">
          <Label>Descrição</Label>
          <Input value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>Custo Material</Label>
          <Input type="number" value={custoMaterial} onChange={e => setCustoMaterial(+e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>Frete</Label>
          <Input type="number" value={frete} onChange={e => setFrete(+e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>Imposto (%)</Label>
          <Input
            type="number"
            step="0.01"
            value={(impostoPercent * 100).toFixed(2)} // exibe como %
            onChange={e => setImpostoPercent(+e.target.value / 100)} // converte de volta para decimal
          />
        </div>
        <div className="space-y-2">
          <Label>Margem desejada (%)</Label>
          <Input
            type="number"
            step="0.01"
            value={(margemDesejada * 100).toFixed(2)} // exibe como %
            onChange={e => setMargemDesejada(+e.target.value / 100)} // converte de volta para decimal
          />
        </div>
      </div>

      {/* Resultados calculados localmente */}
      <Card className="grid grid-cols-5 text-sm bg-muted/50 p-6">
        <div className="space-y-2">
          <Label>Custos Direto</Label>
          <Input type="text" value={`R$ ${custosDireto.toFixed(2)}`} disabled />
        </div>
        <div className="space-y-2">
          <Label>Preço de venda</Label>
          <Input type="text" value={`R$ ${precoVenda.toFixed(2)}`} disabled />
        </div>
        <div className="space-y-2">
          <Label>Margem Contribuição</Label>
          <Input type="text" value={`R$ ${margemContribuicao.toFixed(2)}`} disabled />
        </div>
        <div className="space-y-2">
          <Label>Markup</Label>
          <Input type="text" value={markup.toFixed(10)} disabled />
        </div>
        <div className="space-y-2">
          <Label>Margem Operacional</Label>
          <Input type="text" value={`${(margemOperacionalEfetiva * 100).toFixed(2)}%`} disabled />
        </div>
      </Card>

      <Button onClick={calcular}>Enviar para API</Button>
    </Card>
  );
}