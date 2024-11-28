import { ArrowRight, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transformando ideias em{' '}
            <span className="text-green-600">realidade digital</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Desenvolvemos sistemas e sites web personalizados para impulsionar seu negócio
          </p>
          <a
            href="https://zap.ignishub.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#367f48] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-600 transition-colors"
          >
            Conheça o ItsZap
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">ItsZap</h2>
              <p className="text-gray-400 mb-8">
                Sistema completo de multi atendimento WhatsApp para sua empresa.
                Gerencie todas as suas conversas em um único lugar, aumente sua
                produtividade e melhore o relacionamento com seus clientes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <MessageSquare className="h-5 w-5 mr-2 text-green-500" />
                  Multi atendimento
                </li>
                <li className="flex items-center text-gray-300">
                  <MessageSquare className="h-5 w-5 mr-2 text-green-500" />
                  Chatbot automático
                </li>
                <li className="flex items-center text-gray-300">
                  <MessageSquare className="h-5 w-5 mr-2 text-green-500" />
                  Relatórios detalhados
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Dashboard ItsZap"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
