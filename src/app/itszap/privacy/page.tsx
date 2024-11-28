export default function Privacy() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">Política de Privacidade - ItsZap</h1>
            <div className="prose prose-invert">
                <p className="text-gray-300 mb-6">
                    Última atualização: {new Date().toLocaleDateString()}
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. Coleta de Informações</h2>
                    <p className="text-gray-300">
                        O ItsZap coleta informações necessárias para fornecer e melhorar nossos serviços.
                        Isso inclui dados de conta, mensagens e informações de uso do sistema.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">2. Uso das Informações</h2>
                    <p className="text-gray-300">
                        Utilizamos suas informações para fornecer, manter e melhorar nossos serviços,
                        além de desenvolver novos recursos e proteger nossos usuários.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. Proteção de Dados</h2>
                    <p className="text-gray-300">
                        Implementamos medidas de segurança para proteger suas informações contra
                        acesso não autorizado, alteração, divulgação ou destruição.
                    </p>
                </section>
            </div>
        </div>
    )
}