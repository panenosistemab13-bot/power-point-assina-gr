import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, ArrowLeft, FileWarning, ShieldAlert, 
  Clock, Fingerprint, Zap, Layers, 
  Activity, CheckCircle, User, Quote,
  SmartphoneNfc, Database
} from 'lucide-react';

// Glowing 3 Corações Logo
const Logo3Coracoes = ({ className = "w-24 h-24" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
      <path d="M50 35 C 50 15, 25 15, 25 35 C 25 55, 50 75, 50 75 C 50 75, 75 55, 75 35 C 75 15, 50 15, 50 35 Z" stroke="#f43f5e" strokeWidth="4" fill="transparent" transform="rotate(-30 50 50) translate(-10, -15)"/>
      <path d="M50 35 C 50 15, 25 15, 25 35 C 25 55, 50 75, 50 75 C 50 75, 75 55, 75 35 C 75 15, 50 15, 50 35 Z" stroke="#10b981" strokeWidth="4" fill="transparent" transform="rotate(30 50 50) translate(10, -15)"/>
      <path d="M50 35 C 50 15, 25 15, 25 35 C 25 55, 50 75, 50 75 C 50 75, 75 55, 75 35 C 75 15, 50 15, 50 35 Z" stroke="#eab308" strokeWidth="4" fill="transparent" transform="translate(0, 10)"/>
    </svg>
  </div>
);

const SlideCover = () => (
  <div className="h-full w-full flex flex-col justify-center px-12 md:px-32 relative z-10">
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Logo3Coracoes className="w-32 h-32 mb-12" />
      <h1 className="text-[8vw] md:text-[6rem] font-black text-white leading-[0.85] tracking-tighter mb-6">
        ASSINA<br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500">
          DIGITAL.
        </span>
      </h1>
      <p className="text-xl md:text-3xl text-neutral-400 font-light tracking-[0.2em] uppercase max-w-3xl border-l-2 border-emerald-500 pl-6">
        A evolução definitiva da gestão de riscos logísticos.
      </p>
    </motion.div>
  </div>
);

const SlideProblem = () => (
  <div className="h-full w-full flex flex-col justify-center px-12 md:px-32 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full mb-8">
          <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-xs font-bold text-rose-400 tracking-widest uppercase">O Problema</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
          O peso do <span className="text-rose-500 italic">papel</span> na operação.
        </h2>
        <p className="text-xl text-neutral-400 leading-relaxed font-light">
          Processos analógicos criam gargalos, reduzem a segurança e impedem a visibilidade em tempo real da frota.
        </p>
      </motion.div>
      
      <div className="space-y-6">
        {[
          { icon: FileWarning, title: "Burocracia Física", desc: "Impressão, coleta manual e armazenamento físico de milhares de vias.", color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20" },
          { icon: ShieldAlert, title: "Risco de Extravio", desc: "Documentos críticos perdidos ou danificados durante a viagem.", color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
          { icon: Clock, title: "Atraso Operacional", desc: "Falta de rastreabilidade e lentidão na liberação de veículos.", color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
            className={`flex items-start p-6 rounded-2xl border ${item.border} ${item.bg} backdrop-blur-sm`}
          >
            <item.icon className={`w-8 h-8 ${item.color} mr-6 shrink-0`} />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-neutral-400">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const SlideSolution = () => (
  <div className="h-full w-full flex flex-col justify-center px-12 md:px-32 relative z-10">
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
        A Nova <span className="text-emerald-400">Realidade</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { icon: SmartphoneNfc, title: "100% Digital", desc: "Acesso imediato via smartphone. Zero papel, zero impressão.", delay: 0.1 },
        { icon: Fingerprint, title: "Assinatura Segura", desc: "Criptografia de ponta a ponta garantindo validade jurídica e antifraude.", delay: 0.2 },
        { icon: Zap, title: "Liberação Expressa", desc: "Fluxo automatizado que reduz o tempo de pátio em até 80%.", delay: 0.3 }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: item.delay }}
          className="group relative p-1 rounded-3xl bg-gradient-to-b from-neutral-800 to-neutral-950 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative h-full bg-neutral-950 p-10 rounded-[1.4rem] border border-neutral-800/50 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <item.icon className="w-10 h-10 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const SlideFlow = () => (
  <div className="h-full w-full flex flex-col justify-center px-12 md:px-32 relative z-10">
    <h2 className="text-4xl font-bold text-white mb-24 tracking-tight">Pipeline de Operação</h2>
    
    <div className="relative">
      {/* Connecting Line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-neutral-800 -translate-y-1/2 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 via-emerald-400 to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      <div className="grid grid-cols-3 gap-12 relative z-10">
        {[
          { step: "01", title: "Processamento", desc: "Importação de dados da viagem e validação sistêmica.", icon: Database },
          { step: "02", title: "Geração", desc: "Criação de Link único e QR Code criptografado.", icon: Layers },
          { step: "03", title: "Validação", desc: "Motorista acessa, revisa regras e assina digitalmente.", icon: CheckCircle }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + (i * 0.2) }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-2xl bg-neutral-900 border-2 border-neutral-700 flex items-center justify-center mb-8 relative group">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <item.icon className="w-10 h-10 text-white relative z-10" />
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-blue-600 text-white text-sm font-bold flex items-center justify-center rounded-full border-4 border-neutral-950">
                {item.step}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-neutral-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const SlideDashboard = () => (
  <div className="h-full w-full flex flex-col justify-center px-12 md:px-32 relative z-10">
    <div className="flex items-center justify-between mb-12">
      <h2 className="text-4xl font-bold text-white tracking-tight">Telemetry & Data</h2>
      <div className="flex items-center space-x-2 text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/20">
        <Activity size={16} className="animate-pulse" />
        <span className="text-xs font-bold tracking-widest uppercase">Live System</span>
      </div>
    </div>

    <div className="grid grid-cols-4 gap-6 mb-6">
      {[
        { label: "Total Termos", value: "1,248", color: "text-white" },
        { label: "Assinados", value: "1,240", color: "text-emerald-400" },
        { label: "Pendentes", value: "08", color: "text-amber-400" },
        { label: "Taxa Sucesso", value: "99.3%", color: "text-blue-400" }
      ].map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-3xl backdrop-blur-md"
        >
          <p className="text-neutral-500 text-xs font-bold tracking-widest uppercase mb-4">{stat.label}</p>
          <p className={`text-5xl font-mono font-light tracking-tighter ${stat.color}`}>{stat.value}</p>
        </motion.div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-6 h-64">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="col-span-2 bg-neutral-900/50 border border-neutral-800 p-8 rounded-3xl backdrop-blur-md flex flex-col"
      >
        <h4 className="text-neutral-400 text-sm font-bold tracking-widest uppercase mb-8">Volume (7 Dias)</h4>
        <div className="flex-1 flex items-end space-x-4">
          {[40, 65, 45, 80, 55, 90, 110].map((h, i) => (
            <div key={i} className="flex-1 bg-neutral-800 rounded-t-md relative group h-full overflow-hidden">
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: `${(h/110)*100}%` }}
                transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md" 
              />
            </div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-3xl backdrop-blur-md flex flex-col items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-emerald-500/5 blur-[100px]" />
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#333" strokeWidth="8" />
            <motion.circle 
              cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="8" 
              strokeDasharray="251.2" 
              initial={{ strokeDashoffset: 251.2 }}
              animate={{ strokeDashoffset: 2.512 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-3xl font-mono text-white">99%</span>
            <span className="text-[10px] text-emerald-500 uppercase tracking-widest font-bold">Concluído</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const SlideMission = () => (
  <div className="h-full w-full flex flex-col justify-center px-12 md:px-32 relative z-10">
    <div className="grid grid-cols-2 gap-24 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Quote className="w-16 h-16 text-neutral-700 mb-8" />
        <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-10">
          "Isso não é apenas uma melhoria de processo; é uma <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">mudança de paradigma</span>. Estamos protegendo nossos colaboradores e garantindo a excelência da marca."
        </h2>
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
            <User className="w-8 h-8 text-neutral-400" />
          </div>
          <div>
            <p className="text-xl font-bold text-white">Jefferson Augusto</p>
            <p className="text-sm text-neutral-500 uppercase tracking-widest font-bold mt-1">Agente de Risco • Santa Luzia</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-3xl rounded-full" />
        <div className="relative bg-neutral-900/80 border border-neutral-800 p-12 rounded-[3rem] backdrop-blur-xl">
          <div className="flex justify-between items-start mb-16">
            <Logo3Coracoes className="w-16 h-16" />
            <div className="text-right">
              <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mb-1">Lançamento</p>
              <p className="text-white font-mono">26 MAR 2026</p>
            </div>
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-6">Nossa Missão</h3>
          <p className="text-lg text-neutral-400 leading-relaxed">
            O AssinaGR nasceu da necessidade de transformar a maneira como lidamos com a segurança e a conformidade. Em um cenário logístico cada vez mais dinâmico, eliminamos a margem para falhas.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

const slides = [
  { id: 'cover', component: SlideCover },
  { id: 'problem', component: SlideProblem },
  { id: 'solution', component: SlideSolution },
  { id: 'flow', component: SlideFlow },
  { id: 'dashboard', component: SlideDashboard },
  { id: 'mission', component: SlideMission }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentComponent = slides[currentSlide].component;

  return (
    <div className="w-screen h-screen bg-[#050505] text-neutral-100 overflow-hidden font-sans selection:bg-emerald-500/30">
      
      {/* Global Background Effects */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[120px] transform -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] bg-emerald-900/10 rounded-full mix-blend-screen filter blur-[100px] transform translate-y-1/2" />
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Top Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-neutral-900 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-emerald-500 to-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative w-full h-full flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.98 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <CurrentComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation & Controls */}
      <div className="absolute bottom-8 left-12 right-12 flex justify-between items-end z-50 pointer-events-none">
        
        {/* Slide Counter */}
        <div className="flex flex-col">
          <span className="text-xs text-neutral-500 font-bold tracking-[0.3em] uppercase mb-1">Slide</span>
          <div className="text-2xl font-mono font-light text-neutral-300">
            {String(currentSlide + 1).padStart(2, '0')}
            <span className="text-neutral-700 mx-2">/</span>
            <span className="text-neutral-600">{String(slides.length).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-4 pointer-events-auto">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="w-14 h-14 rounded-full bg-neutral-900/80 border border-neutral-800 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-neutral-600 disabled:opacity-30 disabled:hover:bg-neutral-900 disabled:hover:border-neutral-800 transition-all duration-300"
          >
            <ArrowLeft size={24} strokeWidth={1.5} />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="w-14 h-14 rounded-full bg-neutral-900/80 border border-neutral-800 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-neutral-600 disabled:opacity-30 disabled:hover:bg-neutral-900 disabled:hover:border-neutral-800 transition-all duration-300"
          >
            <ArrowRight size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
