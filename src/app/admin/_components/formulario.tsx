'use client';
import { useState } from 'react';

export default function Formulario({ onResultado }: { onResultado: (res: any) => void }) {
  const [custoMaterial, setCustoMaterial] = useState(176.5);
  const [frete, setFrete] = useState(25);
  const [impostoPercent, setImpostoPercent] = useState(0.05);
  const [margemDesejada, setMargemDesejada] = useState(0.2);

  async function calcular() {
    const res = await fetch('/api/calcular', {
      method: 'POST',
      body: JSON.stringify({ custoMaterial, frete, impostoPercent, margemDesejada }),
    });
    const data = await res.json();
    onResultado(data);
  }

  return (
    <div>
      <input type="number" value={custoMaterial} onChange={e => setCustoMaterial(+e.target.value)} />
      <input type="number" value={frete} onChange={e => setFrete(+e.target.value)} />
      <input type="number" step="0.01" value={impostoPercent} onChange={e => setImpostoPercent(+e.target.value)} />
      <input type="number" step="0.01" value={margemDesejada} onChange={e => setMargemDesejada(+e.target.value)} />
      <button onClick={calcular}>Calcular</button>
    </div>
  );
}