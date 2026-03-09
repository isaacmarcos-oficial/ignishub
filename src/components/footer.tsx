import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 w-full items-center justify-center">
      <div className="flex flex-col mx-auto px-6 justify-center max-w-7xl">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="text-lg">
              <Image
                src="/ignishub1.png"
                alt="IGNIS HUB"
                width={125}
                height={125}
              />
            </Link>
            <p className="text-sm text-muted-foreground mt-3">
              Criando soluções digitais inovadoras para seu negócio.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-3">ItsZap</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://ignishub.com.br/itszap/privacy" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="https://ignishub.com.br/itszap/terms" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Termos de Serviço
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-3">Contato</h4>
            <a href="mailto:contato@ignishub.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              contato@ignishub.com
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} IGNIS HUB. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
