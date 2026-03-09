'use client';
import { useState } from 'react';
import Formulario from './_components/formulario';

export default function Page() {
  const [resultado, setResultado] = useState<any>(null);

  return (
    <main className='p-4'>
      <h1>Precificação</h1>
      <Formulario onResultado={setResultado} />
      {resultado && (
        <div>
          <p>Preço de Venda: R$ {resultado.precoVenda.toFixed(2)}</p>
          <p>Markup: {resultado.markup.toFixed(2)}</p>
          <p>Margem de Contribuição: {(resultado.margemContribuicao * 100).toFixed(2)}%</p>
        </div>
      )}
    </main>
  );
}