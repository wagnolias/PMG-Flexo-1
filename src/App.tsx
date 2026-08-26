/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Cpu, 
  Layers, 
  Settings, 
  ShieldCheck, 
  Zap, 
  Globe, 
  GraduationCap, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Linkedin,
  Target,
  Menu, 
  X,
  ArrowRight,
  CheckCircle2,
  Database,
  BarChart3,
  Building2,
  Eye
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Everest', href: '#everest' },
    { name: 'Kaiaki', href: '#kaiaki' },
    { name: 'Aplicações', href: '#aplicacoes' },
    { name: 'Academy', href: '#academy' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-pmg-navy/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center transition-transform hover:scale-105">
          <img 
            src="https://i.ibb.co/NgZcFb4B/Logo-PMG-FLEXO-BRANCO-E-VERMELHO.png" 
            alt="PMG Flexo Logo" 
            className="h-8 md:h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/80 hover:text-pmg-magenta transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-pmg-magenta hover:bg-pmg-magenta/90 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95">
            FALAR COM ESPECIALISTA
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-pmg-navy border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white hover:text-pmg-magenta transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-pmg-magenta text-white px-6 py-3 rounded-lg font-bold mt-4">
                SOLICITAR ORÇAMENTO
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-pmg-navy">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
          alt="Industrial Background" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pmg-navy via-pmg-navy/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            A precisão que sua <span className="text-pmg-magenta">impressão</span> exige.
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-lg leading-relaxed">
            Líder nacional em clicheria de alta performance. Com a <span className="text-white font-bold">tecnologia everest</span>, garantimos repetibilidade, redução de setups e qualidade superior em cada metro impresso.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-pmg-magenta hover:bg-pmg-magenta/90 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all group">
              Solicitar Consultoria Técnica <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded-full font-bold transition-all">
              Conhecer Soluções
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 magenta-glow">
            <img 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000" 
              alt="High Precision Printing" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-pmg-magenta/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
  >
    <div className="w-14 h-14 bg-pmg-navy rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-pmg-magenta transition-colors">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-4 text-pmg-navy">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const QuemSomosOQueFazemos = () => {
  const [activeTab, setActiveTab] = useState<'quem-somos' | 'o-que-fazemos'>('quem-somos');

  const pilares = [
    { icon: <Cpu className="text-pmg-magenta" size={22} />, title: "Tecnologia de Gravação de Ponta", desc: "Gravadoras digitais de última geração operando com as retículas mais avançadas do mercado." },
    { icon: <ShieldCheck className="text-blue-400" size={22} />, title: "Padronização & Tolerância Zero", desc: "Laboratórios climatizados com controle rigoroso de temperatura, umidade e parâmetros ópticos." },
    { icon: <Zap className="text-emerald-400" size={22} />, title: "Operação 24 Horas", desc: "Prontidão operacional ininterrupta para prazos ultra-ágeis e urgências da indústria gráfica." },
    { icon: <Target className="text-purple-400" size={22} />, title: "Engenharia Focada no Convertedor", desc: "Ajustamos curvas, anilox e perfis de cor para zerar o desperdício em máquina." }
  ];

  const servicos = [
    { icon: <Layers className="text-pmg-magenta" size={24} />, title: "Gravação de Matrizes Flexográficas (Clichês)", desc: "Matrizes fotopolímeras digitais em alta resolução com a Tecnologia Everest, para banda larga e banda estreita." },
    { icon: <Eye className="text-blue-400" size={24} />, title: "Provas Contratuais & Mockups 3D", desc: "Simulação de cor precisa antes de gravar o fotopolímero, com provas calibradas e mockups em substratos reais." },
    { icon: <Settings className="text-purple-400" size={24} />, title: "Engenharia de Pré-Impressão & Colorimetria", desc: "Preflight avançado, trapping e separação técnica de cores, com padronização Color Standard PMG." },
    { icon: <GraduationCap className="text-emerald-400" size={24} />, title: "Consultoria Técnica & PMG Academy", desc: "Acompanhamento em máquina, auditoria de anilox e treinamentos técnicos para sua equipe." }
  ];

  return (
    <section id="quem-somos" className="py-24 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Quem somos e o que fazemos
          </h2>
          <p className="text-white/70 max-w-xl mb-8 leading-relaxed">
            A <strong className="text-white">PMG Flexo</strong> é uma clicheria de alta tecnologia especializada em matrizes fotopolímeras digitais, pré-impressão e gerenciamento de cores para embalagens flexíveis, rótulos e etiquetas.
          </p>

          <div className="inline-flex p-1.5 rounded-full bg-white/[0.06] border border-white/15" role="tablist">
            <button
              onClick={() => setActiveTab('quem-somos')}
              role="tab"
              aria-selected={activeTab === 'quem-somos'}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'quem-somos' ? 'bg-pmg-magenta text-white shadow-md' : 'text-slate-300 hover:text-white'}`}
            >
              <Building2 size={16} /> Quem Somos
            </button>
            <button
              onClick={() => setActiveTab('o-que-fazemos')}
              role="tab"
              aria-selected={activeTab === 'o-que-fazemos'}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'o-que-fazemos' ? 'bg-pmg-magenta text-white shadow-md' : 'text-slate-300 hover:text-white'}`}
            >
              <Layers size={16} /> O Que Fazemos
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'quem-somos' ? (
            <motion.div
              key="quem-somos"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {pilares.map((p, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">{p.icon}</div>
                  <h4 className="text-base font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{p.desc}</p>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="o-que-fazemos"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {servicos.map((s, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 flex items-center justify-center">{s.icon}</div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{s.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">{s.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Diferenciais = () => {
  const features = [
    {
      icon: Layers,
      title: "Precisão em retículas de topo plano",
      description: "Retículas de alta definição que garantem estabilidade de impressão, fidelidade cromática e melhor transferência de tinta."
    },
    {
      icon: ShieldCheck,
      title: "Ambientes controlados",
      description: "Unidades climatizadas que preservam o fotopolímero e garantem chapas com máxima uniformidade."
    },
    {
      icon: Settings,
      title: "Otimização de ganho de ponto",
      description: "Ajustes técnicos que reduzem distorções e garantem maior definição nos detalhes finos da arte."
    },
    {
      icon: Cpu,
      title: "Engenharia aplicada ao clichê",
      description: "Cada projeto passa por análise técnica para garantir eficiência no processo de impressão."
    },
    {
      icon: BarChart3,
      title: "Controle de qualidade contínuo",
      description: "Monitoramento técnico para garantir repetibilidade e consistência em todas as produções."
    },
    {
      icon: ShieldCheck,
      title: "Sustentabilidade Ambiental",
      description: "Menos desperdício de plástico e tinta em cada produção, seguindo as novas regras ambientais para embalagens."
    },
    {
      icon: Zap,
      title: "Alta Performance",
      description: "Soluções completas para impressão de embalagens com máxima repetibilidade e fidelidade de cor."
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-pmg-magenta uppercase tracking-[0.3em] mb-4">Diferenciais Técnicos</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-pmg-navy mb-6">Por que escolher a PMG Flexo?</p>
          <p className="text-xl text-pmg-magenta font-bold italic">"Sabe por que 70% do sucesso da sua embalagem nasce na clicheria?"</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard 
              key={i} 
              icon={f.icon} 
              title={f.title} 
              description={f.description} 
              delay={i * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const EverestSection = () => {
  return (
    <section id="everest" className="py-24 bg-pmg-navy text-white overflow-hidden relative">
      {/* Background Everest Image with Overlay */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-20 pointer-events-none">
        <img 
          src="https://i.ibb.co/mVkGppLh/lucid-origin-A-hyper-realistic-cinematic-interpretation-of-Mount-Everest-where-the-mountain-i-0.jpg" 
          alt="Mount Everest Peak" 
          className="w-full h-full object-cover grayscale brightness-150"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-pmg-navy"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-pmg-magenta text-white text-xs font-bold uppercase tracking-widest mb-6">
              TECNOLOGIA EXCLUSIVA
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8">Tecnologia <span className="text-pmg-magenta">everest</span></h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              A <span className="text-white font-bold">tecnologia everest</span> representa o mais alto padrão técnico da PMG Flexo no desenvolvimento de clichês flexográficos.
            </p>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              Combinando controle rigoroso de processos, engenharia de pré-impressão e tecnologia avançada de gravação, a Everest garante:
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Maior estabilidade de impressão",
                "Fidelidade de cores absoluta",
                "Redução drástica de desperdícios",
                "Repetibilidade entre tiragens"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="text-pmg-magenta" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-pmg-silver/50 italic border-l-2 border-pmg-magenta pl-6 py-2">
              A Everest foi desenvolvida para atender gráficas que buscam máxima performance e consistência industrial.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
              <img 
                src="https://i.ibb.co/mVkGppLh/lucid-origin-A-hyper-realistic-cinematic-interpretation-of-Mount-Everest-where-the-mountain-i-0.jpg"
                alt="Mount Everest" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pmg-navy via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="text-4xl font-black text-white mb-2">EVEREST</div>
                <div className="text-pmg-magenta font-bold tracking-[0.2em] uppercase text-sm">O Topo da Flexografia</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const KaiakiSection = () => {
  return (
    <section id="kaiaki" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, order: 2 }}
            whileInView={{ opacity: 1, order: 1 }}
            viewport={{ once: true }}
            className="md:order-2"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-widest mb-6">
              SOFTWARE & GESTÃO
            </div>
            <h2 className="text-5xl font-extrabold text-pmg-navy mb-4">Sistema <span className="text-blue-600">kaiaki</span></h2>
            <p className="text-xl text-slate-500 font-medium mb-8">Gestão digital inteligente para clientes PMG Flexo.</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              O <span className="font-bold text-pmg-navy">sistema kaiaki</span> é a plataforma digital da PMG Flexo criada para otimizar o fluxo de trabalho entre pré-impressão e produção gráfica.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { icon: Database, text: "Cálculo de consumo de tinta" },
                { icon: Zap, text: "Processamento remoto (RIP)" },
                { icon: Layers, text: "Arquivos técnicos organizados" },
                { icon: Globe, text: "Acompanhamento em tempo real" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <item.icon className="text-blue-600" size={20} />
                  <span className="text-sm font-bold text-pmg-navy">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-500 leading-relaxed">
              O Kaiaki conecta tecnologia, dados e produção para garantir mais previsibilidade e eficiência na impressão flexográfica.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50, order: 1 }}
            whileInView={{ opacity: 1, x: 0, order: 2 }}
            viewport={{ once: true }}
            className="md:order-1"
          >
            <div className="relative group">
              {/* Laptop Mockup */}
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                  <img 
                    src="https://i.ibb.co/RkSG3WGX/kaiaki1.png" 
                    className="h-[156px] md:h-[278px] w-full object-contain bg-slate-50" 
                    alt="Kaiaki Interface 1" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
              </div>

              {/* Secondary Image Overlay */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-10 -right-4 md:-right-10 w-32 md:w-64 rounded-xl overflow-hidden shadow-2xl border-4 border-white z-30 hidden sm:block"
              >
                <img 
                  src="https://i.ibb.co/wZtcZnWf/kaiaki2.png" 
                  alt="Kaiaki Interface 2" 
                  className="w-full h-auto shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Stats Overlay */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Eficiência</div>
                    <div className="text-lg font-bold text-pmg-navy">+70% Produtividade</div>
                    <div className="text-xs font-bold text-blue-600">0,5% Índice de Erro</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Aplicacoes = () => {
  const segments = [
    "Embalagens flexíveis", "Alimentos", "Cosméticos", "Pet food", "Higiene e limpeza", "Produtos industriais"
  ];

  return (
    <section id="aplicacoes" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-pmg-magenta uppercase tracking-[0.3em] mb-4">Aplicações</h2>
          <p className="text-4xl md:text-5xl font-extrabold mb-6">Versatilidade Industrial</p>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            A PMG Flexo desenvolve clichês para diferentes tipos de substratos e aplicações industriais, garantindo qualidade e estabilidade em qualquer desafio de impressão.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {segments.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-pmg-magenta/20 hover:border-pmg-magenta/50 transition-all cursor-default"
            >
              <div className="text-sm font-bold uppercase tracking-wider">{s}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AcademySection = () => {
  const academyImages = [
    "https://i.ibb.co/QFVtbHz1/IMG-20250507-090246.jpg",
    "https://i.ibb.co/Fkg2p09z/IMG-20250507-091302.jpg",
    "https://i.ibb.co/Kj43pFJz/IMG-20250507-164317.jpg",
    "https://i.ibb.co/zTVFxf6z/IMG-20250508-171925.jpg"
  ];

  return (
    <section id="academy" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-pmg-navy/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Academy */}
        <div className="relative bg-pmg-navy rounded-[3rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center gap-12 shadow-2xl mb-20 overflow-hidden">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200"
              alt="Futuristic Training Background"
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pmg-navy via-pmg-navy/80 to-transparent"></div>
          </div>

          <div className="lg:w-3/5 relative z-10">
            <div className="mb-8">
              <img 
                src="https://i.postimg.cc/7PJBLYRw/PMG_Academy_black.png" 
                alt="PMG Academy Logo" 
                className="h-16 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
              Capacitação técnica para que sua equipe alcance o topo da performance.
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
              Na PMG Flexo, acreditamos que clicheria não é apenas entrega de matrizes; é a construção de resultados previsíveis. A <span className="text-white font-bold">PMG Academy</span> integra o conhecimento especializado à rotina da sua gráfica.
            </p>
            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
              Entendemos que, para alcançar o <span className="text-pmg-magenta font-bold text-2xl">Padrão Máximo de Qualidade</span>, o colaborador do convertedor e o time da PMG Flexo precisam andar como um só corpo, dominando os mesmos processos e visando os mesmos resultados.
            </p>
            <a 
              href="#contato"
              className="inline-block bg-white text-pmg-navy hover:bg-pmg-silver px-8 py-4 rounded-full font-bold transition-all"
            >
              Agendar Treinamento
            </a>
          </div>
          
          <div className="lg:w-2/5 grid grid-cols-1 gap-6 relative z-10">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-pmg-magenta font-bold text-xl mb-4 flex items-center gap-2">
                <Zap size={20} /> O que é a PMG Academy?
              </h3>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                É o nosso programa de capacitação e desenvolvimento contínuo, criado para compartilhar conhecimento especializado e fortalecer a operação técnica em todas as frentes. Oferecemos treinamentos mensais com certificação, focados nas demandas reais e nos desafios diários da indústria gráfica.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-pmg-magenta p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-[10px] text-white/80 uppercase font-bold tracking-tighter leading-tight">Alinhamento Técnico</div>
              </div>
              <div className="bg-blue-600 p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold mb-1">ISO</div>
                <div className="text-[10px] text-white/80 uppercase font-bold tracking-tighter leading-tight">Padronização</div>
              </div>
            </div>
          </div>
        </div>

        {/* Objectives & Pillars */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-3xl font-bold text-pmg-navy mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-pmg-navy text-white rounded-xl flex items-center justify-center">
                <Target size={24} />
              </div>
              Nosso objetivo com você
            </h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-pmg-magenta/10 text-pmg-magenta flex items-center justify-center shrink-0 font-bold">01</div>
                <div>
                  <h4 className="font-bold text-pmg-navy text-xl mb-2">Alinhamento Total</h4>
                  <p className="text-slate-600">Garantir que sua equipe utilize 100% do potencial da Tecnologia Everest, reduzindo setups e eliminando o improviso em máquina.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-pmg-magenta/10 text-pmg-magenta flex items-center justify-center shrink-0 font-bold">02</div>
                <div>
                  <h4 className="font-bold text-pmg-navy text-xl mb-2">Unificação de Processos</h4>
                  <p className="text-slate-600">Quando o seu colaborador e a nossa equipe técnica dominam as mesmas Curvas de Compensação ISO, a cor deixa de ser sorte e passa a ser matemática.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-pmg-magenta/10 text-pmg-magenta flex items-center justify-center shrink-0 font-bold">03</div>
                <div>
                  <h4 className="font-bold text-pmg-navy text-xl mb-2">Crescimento Mútuo</h4>
                  <p className="text-slate-600">Impulsionar pessoas e negócios através da educação aplicada, transformando a clicheria técnica em uma vantagem competitiva real para sua marca.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-pmg-navy mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-pmg-navy text-white rounded-xl flex items-center justify-center">
                <Settings size={24} />
              </div>
              Nossos Pilares de Treinamento
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Pré-Impressão Avançada", desc: "Como preparar arquivos para garantir que 70% do sucesso nasça antes da máquina." },
                { title: "Tecnologia Everest & Reticulagem", desc: "Domínio das retículas de topo plano para degradês perfeitos e estabilidade em alta velocidade." },
                { title: "Gestão Digital com o Sistema Kaiaki", desc: "Autonomia total para sua equipe gerenciar pedidos, RIP remoto e quantitativo de tintas." },
                { title: "Manutenção de Ativos", desc: "Técnicas de limpeza e conservação de clichês para maximizar a durabilidade e o lucro." }
              ].map((pilar, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-pmg-magenta/30 transition-colors">
                  <h4 className="font-bold text-pmg-navy mb-1">{pilar.title}</h4>
                  <p className="text-sm text-slate-500">{pilar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Participate & Quote */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white text-center relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pmg-magenta/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8">Por que participar?</h3>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              A PMG Academy não é apenas uma aula; é um compromisso de parceria. Quando treinamos o seu time, estamos garantindo que a repetibilidade e a previsibilidade sejam a base de cada metro impresso. No final do dia, somos uma única força focada em um único objetivo: a embalagem perfeita na gôndola.
            </p>
            <div className="inline-block px-8 py-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 italic text-2xl md:text-3xl font-serif text-pmg-magenta">
              "Conhecimento compartilhado é o motor da indústria. Vamos evoluir juntos."
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-pmg-navy mb-2">Vivência Prática</h3>
            <p className="text-slate-500">Registros de nossos treinamentos e workshops técnicos.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academyImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Academy Training ${i + 1}`} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const units = [
    { city: "Vinhedo - SP", phone: "(19) 3030-3411" },
    { city: "Valinhos - SP", phone: "(19) 3327-6473" },
    { city: "Blumenau - SC", phone: "(47) 3308-6836" },
    { city: "Goiânia - GO", phone: "(62) 3586-6690" }
  ];

  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-pmg-navy mb-8 leading-tight">
              Sempre perto de você. Prontos para transformar sua impressão.
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Na <span className="font-bold text-pmg-navy">PMG Flexo</span>, acreditamos que parcerias de sucesso começam com uma comunicação clara e eficiente.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {units.map((u, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-pmg-navy/10 text-pmg-navy rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-pmg-navy">{u.city}</div>
                    <div className="text-sm font-bold text-pmg-magenta">{u.phone}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pmg-magenta/10 text-pmg-magenta rounded-full flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Email Comercial</div>
                  <div className="text-lg font-bold text-pmg-navy">diego@pmgflexo.com.br</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">WhatsApp</div>
                  <div className="text-lg font-bold text-pmg-navy">(47) 9 9147-9234</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-pmg-navy rounded-[2rem] p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pmg-magenta/20 rounded-full blur-3xl"></div>
            <h3 className="text-3xl font-bold mb-8">Solicite uma Consultoria Técnica</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50">Nome</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-pmg-magenta outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50">Empresa</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-pmg-magenta outline-none transition-all" placeholder="Nome da gráfica" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">E-mail</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-pmg-magenta outline-none transition-all" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Mensagem</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-pmg-magenta outline-none transition-all h-32" placeholder="Como podemos ajudar sua produção?"></textarea>
              </div>
              <button className="w-full bg-pmg-magenta hover:bg-pmg-magenta/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-pmg-magenta/20">
                ENVIAR SOLICITAÇÃO
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-pmg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center mb-8">
              <img 
                src="https://i.ibb.co/NgZcFb4B/Logo-PMG-FLEXO-BRANCO-E-VERMELHO.png" 
                alt="PMG Flexo Logo" 
                className="h-8 md:h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-white/50 max-w-md leading-relaxed mb-8">
              A PMG Flexo é referência nacional em clichês flexográficos de alta precisão, unindo engenharia de ponta, processos controlados e tecnologia digital para elevar o padrão da impressão brasileira.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/pmgflexo/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-pmg-magenta transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/pmgflexo/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-pmg-magenta transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-sm text-pmg-magenta">Links Rápidos</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#everest" className="hover:text-white transition-colors">Tecnologia Everest</a></li>
              <li><a href="#kaiaki" className="hover:text-white transition-colors">Sistema Kaiaki</a></li>
              <li><a href="#academy" className="hover:text-white transition-colors">PMG Academy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-sm text-pmg-magenta">Legal</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 pb-8 flex flex-col items-center justify-center text-center">
          <img 
            src="https://i.ibb.co/NgZcFb4B/Logo-PMG-FLEXO-BRANCO-E-VERMELHO.png" 
            alt="PMG Flexo Logo" 
            className="h-10 md:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500 mb-3"
            referrerPolicy="no-referrer"
          />
          <div className="text-xs uppercase tracking-[0.3em] font-bold text-pmg-magenta">
            PMG Flexo • Tecnologia em Clichês Flexográficos
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/30 text-sm">
            © 2026 PMG Group. Todos os direitos reservados.
          </div>
          <div className="text-xl font-display font-black tracking-widest text-white/10 uppercase italic">
            Repetibilidade não é sorte. É processo.
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/5547991479234" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
  >
    <MessageSquare size={28} />
    <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-pmg-navy px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Fale conosco no WhatsApp
    </span>
  </a>
);

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <QuemSomosOQueFazemos />
      <Diferenciais />
      <EverestSection />
      <KaiakiSection />
      <Aplicacoes />
      <AcademySection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
