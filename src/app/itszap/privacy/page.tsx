export default function Privacy() {
  return (
    <article id="servicos" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
      <div className="flex flex-col items-center justify-center mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">Política de Privacidade - ItsZap</h1>
        <div className="prose prose-invert">
          <p className="text-zinc-300 mb-6">
            Última atualização: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Coleta de Informações</h2>
            <p className="text-zinc-300">
              O ItsZap coleta informações necessárias para fornecer e melhorar nossos serviços.
              Isso inclui dados de conta, mensagens e informações de uso do sistema.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Uso das Informações</h2>
            <p className="text-zinc-300">
              Utilizamos suas informações para fornecer, manter e melhorar nossos serviços,
              além de desenvolver novos recursos e proteger nossos usuários.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Proteção de Dados</h2>
            <p className="text-zinc-300">
              Implementamos medidas de segurança para proteger suas informações contra
              acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>
        </div>
      </div>
    </article>
  )
}