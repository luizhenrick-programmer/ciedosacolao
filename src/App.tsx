import {
  HardHat,
  BookOpen,
  FileText,
  Users,
  Gavel,
  PlusCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import "./App.css";
import logoVereador from "./assets/logo.svg";
import logoSlogan from "./assets/slogan.png";
import backgroundImage from "./assets/background-hero.png";
import logoVereadorBio from "./assets/vereador-cie.webp";

const AchievementCard = ({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) => (
  <div className="group relative flex items-center gap-5 p-6 rounded-xl shadow-md border border-gray-100 bg-white overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
    {/* O Círculo - Aumentamos para 800px para garantir cobertura total */}
    <span className="absolute inset-0 m-auto h-0 w-0 rounded-full bg-blue-900 transition-all duration-700 ease-out group-hover:h-[800px] group-hover:w-[800px]"></span>

    {/* Conteúdo com z-index para ficar acima do círculo */}
    <div className="relative z-10 flex items-center gap-5 w-full">
      <div className="bg-gray-50 p-4 rounded-full transition-all duration-300 group-hover:bg-white/10">
        <Icon
          size={32}
          className="text-blue-900 transition-colors duration-300 group-hover:text-white"
        />
      </div>

      <div className="flex-1">
        <h4 className="font-bold text-blue-900 text-lg leading-tight transition-colors duration-300 group-hover:text-white">
          {title}
        </h4>
        <p className="text-sm text-gray-500 mt-1 transition-colors duration-300 group-hover:text-white/90">
          {text}
        </p>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
      <div className="bg-[#1B3679] w-full h-8 md:h-10 shadow-inner"></div>
      {/* --- NAVBAR --- */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src={logoVereador}
              alt="Logotipo oficial da Prefeitura Municipal"
              className="h-20 w-auto object-contain drop-shadow-2xl transition-transform hover:scale-105"
            />
          </div>
          <div className="hidden md:flex gap-6 text-blue-900 font-semibold text-sm">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <a href="#" className="hover:text-blue-600">
              Sobre Mim
            </a>
            <a href="#" className="hover:text-blue-600">
              Atuação
            </a>
            <a href="#" className="hover:text-blue-600">
              Notícias
            </a>
            <a href="#" className="hover:text-blue-600">
              Transparência
            </a>
            <a href="#" className="hover:text-blue-600">
              Contato
            </a>
          </div>
          <button className="bg-[#00a884] text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-600 transition shadow-md cursor-pointer">
            Falar com Gabinete
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="min-h-[80vh] relative bg-[#1e3a8a] text-white overflow-hidden">
        {/* Ajuste 1: Gradiente mais denso e escuro na esquerda */}
        <div className="w-1/2 absolute inset-0 bg-gradient-to-r from-[#2E71B5]/90 via-[#2E71B5]/60 to-transparent z-10" />

        <div
          className="absolute inset-0 bg-size-[auto_700px] bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-modal="true"
        />

        <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center relative z-20">
          {" "}
          {/* Ajuste 2: z-index maior aqui */}
          <div className="md:w-1/2">
            {/* Ajuste 3: Drop-shadow no título */}
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1] drop-shadow-lg">
              COMO PODEMOS AJUDAR VOCÊ HOJE?
            </h1>

            {/* Ajuste 4: Removi a opacidade do parágrafo para legibilidade máxima */}
            <p className="max-w-md text-lg text-justify mb-8 drop-shadow-md">
              <strong>Transparência e Ação:</strong> Acompanhe o trabalho
              legislativo e ajude a fiscalizar nossa cidade. Este é o seu canal
              direto com o Vereador Ciê do Sacolão.
            </p>

            <div className="max-w-md flex flex-wrap gap-3">
              <div className="w-full flex gap-2">
                {/* Ajuste 5: Backdrop-blur e bordas mais visíveis nos botões */}
                <button className="w-1/2 bg-[#173478] backdrop-blur-md border border-white/30 px-6 py-2 rounded-full text-sm font-bold hover:bg-[#173478]/70 transition cursor-pointer shadow-lg">
                  Conheça nossa Trajetória
                </button>
                <button className="w-1/2 bg-[#173478] backdrop-blur-md border border-white/30 px-6 py-2 rounded-full text-sm font-bold hover:bg-[#173478]/70 transition cursor-pointer shadow-lg">
                  Fazer uma Denúncia
                </button>
              </div>
              <button className="w-full bg-[#173478] backdrop-blur-md border border-white/30 px-6 py-2 rounded-full text-sm font-bold hover:bg-[#173478]/70 transition cursor-pointer shadow-lg">
                Ouvidoria
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-end">
            <div className="right-16 bg-white p-5 rounded-xl shadow-2xl z-20 text-blue-900 border border-gray-100">
              <img
                src={logoSlogan}
                alt="Logotipo oficial"
                className="h-64 w-auto object-contain drop-shadow-2xl transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </header>

      {/* --- SEÇÃO BIOGRAFIA --- */}
      <section className="flex flex-col md:flex-row items-center gap-12 pt-20 max-w-7xl mx-auto px-4">
        {/* Container da Imagem */}
        <div className="w-full md:w-1/3">
          <img
            src={logoVereadorBio}
            alt="Vereador Ciê em seu gabinete"
            className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02] object-cover"
          />
        </div>

        {/* Conteúdo Textual */}
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-2">
            Quem Sou Eu
          </h2>

          <h3 className="text-xl font-semibold text-blue-700 mb-6 uppercase tracking-wide">
            Formosa-GO / Vereador
          </h3>

          <div className="space-y-4 text-gray-700 leading-relaxed text-lg text-justify">
            <p>
              O <strong>Vereador Ciê</strong> é uma figura atuante no legislativo municipal
              de Formosa. Eleito com <strong>1.420 votos</strong> na última eleição,
              consolidou-se como o vereador mais <strong>votado da cidade e de toda a
              região.</strong>
            </p>

            <p>
              Sua trajetória é marcada pelo compromisso com projetos como o{" "}
              <strong>Sementes do Bem</strong>, focado no bem-estar da mente,
              corpo e comunidade, além de sua atuação constante na modernização
              das leis municipais para beneficiar os cidadãos.
            </p>
          </div>

          {/* Link de Chamada */}
          <a
            href="#perfil-completo"
            className="mt-8 flex items-center gap-2 text-blue-900 font-bold hover:text-blue-700 transition-colors group"
          >
            Leia seu perfil completo
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </section>

      {/* --- MINHAS CONQUISTAS --- */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-black text-blue-900 mb-10">
          Minhas Conquistas
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <AchievementCard
            icon={HardHat}
            title="Fiscalização de Obras"
            text="Acompanhamento rigoroso e presencial da execução de obras públicas no município. O objetivo é garantir a qualidade dos materiais e serviços, o cumprimento dos prazos estabelecidos e a transparência na aplicação do dinheiro do contribuinte."
          />
          <AchievementCard
            icon={BookOpen}
            title="Apoio à Educação"
            text="Dedicação contínua à melhoria do ensino municipal através de emendas, projetos e fiscalização. Foco na valorização dos profissionais da educação, na modernização da infraestrutura das escolas e na garantia de um aprendizado de qualidade para crianças e jovens."
          />
          <AchievementCard
            icon={FileText}
            title="Projetos de Lei Aprovados"
            text="Registro das propostas legislativas apresentadas e convertidas em lei. São iniciativas focadas em gerar benefícios reais e duradouros para a população de Formosa, organizando a cidade e garantindo direitos aos cidadãos."
          />
          <AchievementCard
            icon={Users}
            title="Atendimento Comunitário"
            text="Um gabinete de portas abertas para ouvir você. Espaço dedicado ao diálogo direto com o cidadão, recebendo demandas, sugestões e reclamações dos bairros para transformá-las em ações concretas na Câmara Municipal."
          />
          <AchievementCard
            icon={Gavel}
            title="Agricultura, Cultura e Esporte"
            text="Atuação focada no fortalecimento da agricultura familiar e na garantia de estradas vicinais de qualidade para o escoamento da produção. Simultaneamente, promovemos a qualidade de vida através do incentivo ativo ao esporte local e à valorização das manifestações culturais de Formosa, cuidando da economia e da nossa gente."
          />
          <AchievementCard
            icon={PlusCircle}
            title="Saúde Pública"
            text="Atuação firme para fortalecer o sistema municipal de saúde. O trabalho foca na fiscalização do atendimento nos postos e hospitais, na cobrança por agilidade em exames e consultas, e na destinação de recursos para prevenção e cuidados básicos."
          />
        </div>
      </section>

      {/* --- CONTATO --- */}
      <footer className="bg-white border-t pt-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 pb-16">
          <div>
            <h2 className="text-3xl font-black text-blue-900 mb-8">
              Fale Conosco
            </h2>
            <div className="space-y-5 text-gray-600 font-medium">
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-900 mt-1" />
                <address className="not-italic text-gray-700">
                  <p className="font-bold text-blue-900">
                    Câmara Municipal de Formosa
                  </p>
                  <p>2º Andar, Gabinete Ciê do Sacolão</p>
                  <p>Praça Rui Barbosa, nº 70, Centro</p>
                  <p>Formosa - GO | CEP: 73801-220</p>
                </address>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-900" />
                <p>(61) 99809-6873</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-blue-900" />
                <p>ciedosacolao@camaraformosa.go.gov.br</p>
              </div>
            </div>
          </div>
          <form className="space-y-4 bg-gray-200 p-8 rounded-2xl border border-gray-100">
            <input
              type="text"
              placeholder="Nome"
              className="w-full p-4 bg-white border rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-4 bg-white border rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition"
            />
            <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg">
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div className="bg-blue-950 text-white py-10">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black italic">Ciê</span>
              <span className="text-xs text-yellow-500 font-bold">
                #PORGOIÁS
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
