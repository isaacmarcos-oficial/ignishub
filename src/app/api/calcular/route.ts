import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { custoMaterial, frete, impostoPercent, margemDesejada } = await req.json();

  // Preço de venda
  const precoVenda = (custoMaterial + frete) / ((1 - impostoPercent) * (1 - margemDesejada));

  // Imposto em reais
  const impostoReais = precoVenda * impostoPercent;

  // Custos diretos
  const custosDireto = custoMaterial + frete + impostoReais;

  // Margem de contribuição
  const margemContribuicao = precoVenda - custosDireto;

  // Markup
  const markup = precoVenda / (custoMaterial + frete);

  // Margem operacional efetiva
  const margemOperacionalEfetiva = margemContribuicao / precoVenda;

  return NextResponse.json({
    precoVenda,
    impostoReais,
    custosDireto,
    margemContribuicao,
    markup,
    margemOperacionalEfetiva,
  });
}