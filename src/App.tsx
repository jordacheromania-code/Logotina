import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Check, 
  HelpCircle, 
  Activity, 
  User, 
  Brain, 
  MessageSquare, 
  GraduationCap, 
  Users, 
  Heart, 
  Zap, 
  ClipboardCheck, 
  Timer, 
  HandHeart, 
  ExternalLink,
  Send,
  Mail,
  MessageCircle
} from 'lucide-react';
import { motion } from 'motion/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('mgorlrvd');

  if (state.succeeded) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-[32px] bg-emerald-50 border border-emerald-100 p-8 text-center"
      >
        <div className="mx-auto w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
          <Check className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-emerald-900">Mesaj trimis cu succes!</h3>
        <p className="mt-2 text-emerald-700">Iti multumim pentru interes. Te vom contacta in cel mai scurt timp posibil pentru a discuta detaliile.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-6 text-sm font-bold text-emerald-800 underline active:opacity-70"
        >
          Trimite un alt mesaj
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Nume complet</label>
          <input
            id="name"
            type="text" 
            name="name"
            required
            placeholder="Ex: Maria Popescu"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none transition-all"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-rose-500 mt-1 ml-1" />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-bold text-slate-700 ml-1">Telefon</label>
          <input
            id="phone"
            type="tel" 
            name="phone"
            required
            placeholder="07xx xxx xxx"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none transition-all"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-xs text-rose-500 mt-1 ml-1" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email</label>
        <input
          id="email"
          type="email" 
          name="email"
          required
          placeholder="nume@exemplu.com"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none transition-all"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-rose-500 mt-1 ml-1" />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Mesajul tau</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Spune-ne pe scurt cu ce te putem ajuta..."
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none transition-all resize-none"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-rose-500 mt-1 ml-1" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 py-4 text-base font-bold text-white transition hover:bg-slate-800 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-slate-200"
      >
        {state.submitting ? (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          <>
            Trimite mesajul
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>
      
      <p className="text-[10px] text-center text-slate-400 mt-4 leading-tight uppercase tracking-widest font-semibold">
        Răspundem de obicei în mai puțin de 24 de ore
      </p>
    </form>
  );
}

const concerns = [
  {
    title: "Tulburari de pronuntie (Dislalie)",
    text: "Corectam articularea, emiterea corecta a sunetelor si consolidam vorbirea clara in viata de zi cu zi pentru copii si adulti.",
    icon: <MessageSquare className="w-6 h-6 text-sky-600" />
  },
  {
    title: "Intarziere in dezvoltarea limbajului",
    text: "Stimulam aparitia si dezvoltarea vocabularului prin metode adaptate, evaluand corect nivelul actual de comunicare.",
    icon: <Brain className="w-6 h-6 text-emerald-600" />
  },
  {
    title: "Balbaiala si dificultati de fluenta",
    text: "Intervenim cu tehnici specializate de logopedie pentru ritm si fluenta, redand increderea in fortele proprii.",
    icon: <Zap className="w-6 h-6 text-amber-600" />
  },
  {
    title: "Suport cognitiv si emotional",
    text: "Sustinem dezvoltarea prin psihoterapie cognitiv-comportamentala si consiliere psihologica pentru rezultate sustenabile.",
    icon: <Heart className="w-6 h-6 text-rose-600" />
  },
];

const services = [
  {
    title: "Evaluare logopedica",
    price: "240 lei",
    description: "Primul pas pentru a intelege clar dificultatile de vorbire, limbaj, pronuntie, ritm si comunicare.",
    icon: <ClipboardCheck className="w-5 h-5" />
  },
  {
    title: "Sedinta logopedie (30 min)",
    price: "120 lei",
    description: "Sedinta scurta, dinamica si bine structurata, potrivita pentru copiii care lucreaza mai bine in reprize concentrate.",
    icon: <Clock className="w-5 h-5" />
  },
  {
    title: "Sedinta logopedie (50 min)",
    price: "180 lei",
    description: "Sedinta extinsa pentru lucru mai aprofundat, consolidare mai buna si progres sustinut.",
    icon: <Timer className="w-5 h-5" />
  },
  {
    title: "Sedinta stimulare cognitiva",
    price: "180 lei",
    description: "Activitati ghidate pentru atentie, memorie, organizare, intelegere si dezvoltare cognitiva.",
    icon: <Brain className="w-5 h-5" />
  },
  {
    title: "Consiliere psihologica",
    price: "250 lei",
    description: "Sprijin emotional si orientare practica pentru copii, adolescenti sau parinti.",
    icon: <HandHeart className="w-5 h-5" />
  },
  {
    title: "Psihoterapie cognitiv-comportamentala",
    price: "300 lei",
    description: "Interventie structurata, cu obiective clare si tehnici validate pentru schimbari reale si sustenabile.",
    icon: <Activity className="w-5 h-5" />
  },
  {
    title: "Dezvoltare personala (grup)",
    price: "120 lei",
    description: "Activitati de grup pentru relationare, exprimare, incredere si dezvoltare emotionala.",
    icon: <Users className="w-5 h-5" />
  },
  {
    title: "Cursuri / Traininguri",
    price: "150 lei",
    description: "Programe aplicate pentru dezvoltarea abilitatilor de comunicare si relationare.",
    icon: <GraduationCap className="w-5 h-5" />
  },
];

const trustPoints = [
  "Evaluare clara si explicatii pe intelesul parintilor",
  "Plan personalizat in functie de dificultatea reala a copilului",
  "Obiective concrete si directie clara de lucru",
  "Comunicare deschisa cu familia pe tot parcursul procesului",
  "Servicii integrate: logopedie, stimulare cognitiva, consiliere si psihoterapie",
  "Programare rapida si cabinet usor de gasit in Bucuresti",
];

const steps = [
  {
    step: "01",
    title: "Discutie si programare",
    text: "Ne suni, ne spui pe scurt ce observi, iar noi te orientam catre serviciul potrivit.",
  },
  {
    step: "02",
    title: "Evaluare initiala",
    text: "Analizam dificultatile, istoricul si nivelul actual de dezvoltare pentru a intelege clar punctul de plecare.",
  },
  {
    step: "03",
    title: "Plan personalizat",
    text: "Stabilim obiective concrete, frecventa recomandata si directia de lucru potrivita copilului sau adultului.",
  },
  {
    step: "04",
    title: "Sedinte si monitorizare",
    text: "Lucram consecvent, urmarim progresul si ajustam interventia pe parcurs, in functie de evolutie.",
  },
];

const pricingRows = [
  ["Evaluare logopedica", "240 lei"],
  ["Sedinta logopedie (30 min)", "120 lei"],
  ["Sedinta logopedie (50 min)", "180 lei"],
  ["Sedinta stimulare cognitiva", "180 lei"],
  ["Consiliere psihologica", "250 lei"],
  ["Psihoterapie cognitiv-comportamentala", "300 lei"],
  ["Dezvoltare personala (grup)", "120 lei"],
  ["Cursuri/Traininguri", "150 lei"],
];

const subscriptions = [
  {
    title: "Abonament 1",
    subtitle: "4 sedinte logopedie",
    price: "680 lei",
    validity: "Valabilitate 40 zile",
    featured: false,
    features: [
      "4 sedinte de logopedie",
      "Ritm constant de lucru",
      "Potrivit pentru continuitate lunara",
      "Urmarire consecventa a progresului",
    ],
  },
  {
    title: "Abonament 2",
    subtitle: "8 sedinte logopedie",
    price: "1360 lei",
    validity: "Valabilitate 40 zile",
    featured: true,
    features: [
      "8 sedinte de logopedie",
      "Ritm intensiv pentru progres accelerat",
      "Mai multa consecventa in interventie",
      "Ideal pentru obiective clare pe termen scurt",
    ],
  },
];

const faqs = [
  {
    question: "Cand este bine sa fac o evaluare logopedica?",
    answer:
      "Cand observi dificultati de pronuntie, intarziere in limbaj, exprimare slaba, probleme de fluenta sau orice semn ca dezvoltarea comunicarii nu evolueaza asa cum te asteptai. Evaluarea este primul pas corect pentru claritate.",
  },
  {
    question: "Ce se intampla la prima evaluare?",
    answer:
      "Discutam cu parintele sau pacientul, urmarim dificultatile observate, evaluam comunicarea si explicam clar ce am observat, ce recomandam si care sunt urmatorii pasi.",
  },
  {
    question: "Care sedinta este mai potrivita: 30 sau 50 de minute?",
    answer:
      "Sedinta de 30 de minute este potrivita pentru copii care lucreaza mai bine in reprize scurte si dinamice. Sedinta de 50 de minute permite lucru mai aprofundat, mai multa consolidare si progres mai accelerat in anumite situatii.",
  },
  {
    question: "Cat de importanta este implicarea familiei?",
    answer:
      "Este foarte importanta. Progresul apare mai usor atunci cand exista consecventa, colaborare si continuitate intre sedinte si mediul de acasa.",
  },
  {
    question: "Cat timp sunt valabile abonamentele?",
    answer: "Abonamentele de logopedie au valabilitate 40 zile.",
  },
  {
    question: "Unde este LogoTina si cum fac programare?",
    answer:
      "Cabinetul este pe Strada Nerva Traian 23-25, 063896 Bucuresti, iar programarile se fac telefonic la 0744 184 423.",
  },
];

function SectionHeader({ badge, title, text }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl"
    >
      <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-medium text-sky-800 shadow-sm">
        {badge}
      </div>
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base md:text-lg">{text}</p>
    </motion.div>
  );
}

function Pill({ children }) {
  return (
    <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:shadow-md transition-shadow cursor-default whitespace-nowrap">
      {children}
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <a 
      href={href} 
      className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sky-600 after:transition-all hover:after:w-full"
    >
      {children}
    </a>
  );
}

export default function LogoTinaWebsite() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      {/* Navigation / Header */}
      <section id="acasa" className="border-b border-slate-200 bg-[linear-gradient(to_bottom,_#ffffff,_#f8fbff)] sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-8">
          <header className="flex flex-col gap-6 rounded-[28px] border border-slate-200 bg-white/80 backdrop-blur-md px-6 py-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3 shrink-0">
              <div className="bg-slate-900 text-white p-2 rounded-xl">
                <Brain className="w-6 h-6" />
              </div>
              <a href="#acasa">
                <div className="text-xl font-bold tracking-tight text-slate-900 leading-none">LogoTina</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                  Logopedie & Dezvoltare
                </div>
              </a>
            </div>

            <nav className="hidden xl:flex items-center justify-center gap-x-6">
              <NavLink href="#acasa">Acasă</NavLink>
              <NavLink href="#dificultati">Dificultăți</NavLink>
              <NavLink href="#servicii">Servicii</NavLink>
              <NavLink href="#despre-noi">De ce noi</NavLink>
              <NavLink href="#cum-lucram">Cum lucrăm</NavLink>
              <NavLink href="#preturi">Prețuri</NavLink>
              <NavLink href="#faq">Întrebări</NavLink>
            </nav>

            <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap">
              <a
                href="https://wa.me/40744184423"
                target="_blank"
                rel="noreferrer"
                className="flex-1 lg:flex-none inline-flex items-center gap-2 justify-center rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100 active:scale-95 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="#contact"
                className="flex-1 lg:flex-none inline-flex items-center gap-2 justify-center rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-95"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </div>
          </header>

          {/* Quick Sub-Navigation Buttons */}
          <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
            <a href="#contact-rapid" className="shrink-0 rounded-xl bg-sky-50 border border-sky-100 px-4 py-2 text-xs font-bold text-sky-700 hover:bg-sky-100 transition-colors whitespace-nowrap">Contact Rapid</a>
            <a href="#informatii-esentiale" className="shrink-0 rounded-xl bg-slate-100 border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors whitespace-nowrap">Informații esențiale</a>
            <a href="#dificultati" className="shrink-0 rounded-xl bg-white border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:border-sky-300 hover:text-sky-600 transition-all whitespace-nowrap">Cu ce vă putem ajuta</a>
            <a href="#servicii" className="shrink-0 rounded-xl bg-white border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:border-sky-300 hover:text-sky-600 transition-all whitespace-nowrap">Servicii specializate</a>
            <a href="#despre-noi" className="shrink-0 rounded-xl bg-white border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:border-sky-300 hover:text-sky-600 transition-all whitespace-nowrap">De ce noi</a>
            <a href="#cum-lucram" className="shrink-0 rounded-xl bg-white border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:border-sky-300 hover:text-sky-600 transition-all whitespace-nowrap">Cum lucrăm</a>
            <a href="#preturi" className="shrink-0 rounded-xl bg-white border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:border-sky-300 hover:text-sky-600 transition-all whitespace-nowrap">Prețuri</a>
            <a href="#faq" className="shrink-0 rounded-xl bg-sky-600 text-white px-4 py-2 text-xs font-bold hover:bg-sky-700 transition-colors whitespace-nowrap">FAQ / Întrebări</a>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,_#f8fbff,_#ffffff)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,_var(--color-sky-100),_transparent)] opacity-40"></div>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-medium text-emerald-800 shadow-sm">
                Cabinet de logopedie in Bucuresti
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                Logopedie <span className="text-sky-600">București</span> – Evaluare și sprijin real.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-xl">
                La LogoTina gasesti explicatii pe intelesul tau, pasi concreti si un plan de interventie adaptat nevoilor reale ale copilului sau adultului.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/40744184423?text=Buna%20ziua,%20doresc%20o%20programare%20pentru%20evaluare%20logopedica."
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-base sm:text-lg font-semibold text-white transition hover:bg-slate-800 active:scale-95 shadow-lg shadow-slate-200"
                >
                  Programeaza evaluarea
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://wa.me/40744184423"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-300 bg-emerald-50 px-8 py-4 text-base sm:text-lg font-semibold text-emerald-800 transition hover:bg-emerald-100 active:scale-95 shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Scrie pe WhatsApp
                </a>
              </div>

              <div className="mt-10 sm:mt-12 flex flex-wrap gap-2 sm:gap-3">
                <Pill>Evaluare clara</Pill>
                <Pill>Plan personalizat</Pill>
                <Pill>Programare rapida</Pill>
                <Pill>Nerva Traian</Pill>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid gap-6"
            >
              <div id="contact-rapid" className="rounded-[32px] sm:rounded-[40px] border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-slate-100 scroll-mt-32">
                <div className="flex items-center gap-4 text-sky-600">
                  <div className="bg-sky-50 p-2 rounded-2xl shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400">Contact rapid</div>
                </div>
                <a href="tel:0744184423" className="mt-4 block text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 hover:text-sky-600 transition-colors">
                  0744 184 423
                </a>
                <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-sm sm:text-base leading-relaxed text-slate-600 border-t border-slate-100 pt-6 sm:pt-8">
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 shrink-0" />
                    <span>Strada Nerva Traian 23-25, Bucuresti</span>
                  </div>
                  <div className="flex gap-4">
                    <ClipboardCheck className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 shrink-0" />
                    <span>Evaluare logopedica pentru claritate si directie corecta</span>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 shrink-0" />
                    <span>Program flexibil adaptat nevoilor tale</span>
                  </div>
                </div>
              </div>

              <div id="informatii-esentiale" className="rounded-[32px] sm:rounded-[40px] border border-slate-900 bg-slate-900 p-6 sm:p-8 text-white shadow-2xl shadow-slate-200 relative overflow-hidden group scroll-mt-32">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="text-lg sm:text-xl font-bold">Informații esențiale</div>
                <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
                  <div className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                    Cum imi dau seama daca e nevoie?
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                    Ce se intampla la evaluare?
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                    Cat dureaza o sedinta?
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                    Urmatorii pasi dupa evaluare?
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Concerns Section */}
      <section id="dificultati" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8 scroll-mt-32">
        <SectionHeader
          badge="Cu ce va putem ajuta"
          title="Situatii pentru care suntem cautati frecvent"
          text="Am structurat clar principalele tipuri de dificultati pentru care familiile cauta sprijin, astfel incat sa va fie usor sa va regasiti si sa faceti primul pas."
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {concerns.map((item) => (
            <motion.div 
              key={item.title} 
              variants={itemVariants}
              className="group rounded-[32px] border border-slate-100 bg-white p-8 shadow-sm transition hover:shadow-xl hover:border-sky-100 hover:-translate-y-2 duration-300"
            >
              <div className="inline-flex rounded-2xl bg-slate-50 p-3 group-hover:bg-sky-50 transition-colors">
                {item.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900 leading-tight">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-500">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="servicii" className="border-y border-slate-200 bg-slate-50/50 scroll-mt-32">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeader
            badge="Lista Servicii"
            title="Servicii specializate"
            text="Fiecare serviciu este gandit pentru a oferi progres maxim prin abordari validate stiintific si experienta clinica."
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="flex flex-col rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg hover:border-slate-300 duration-300 h-full"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="bg-slate-900 text-white p-2.5 rounded-2xl">
                    {service.icon}
                  </div>
                  <div className="whitespace-nowrap rounded-full bg-emerald-50 px-4 py-1 text-sm font-bold text-emerald-700">
                    {service.price}
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-bold leading-7 text-slate-900">{service.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-500 flex-grow">{service.description}</p>
                <div className="mt-8">
                  <a 
                    href={`https://wa.me/40744184423?text=Buna%20ziua,%20doresc%20o%20programare%20pentru:%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-slate-900 inline-flex items-center gap-2 group"
                  >
                    Programeaza
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Points */}
      <section id="despre-noi" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8 scroll-mt-32">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div>
            <SectionHeader
              badge="Standard de lucru"
              title="De ce aleg parintii LogoTina"
              text="Punem pret pe claritate, onestitate si obiective realizabile intr-un timp cat mai scurt dar sustenabil."
            />
            {/* Added a call to action here */}
            <div className="mt-8 sm:mt-10 p-6 sm:p-8 rounded-[32px] bg-sky-50 border border-sky-100">
              <div className="text-sky-900 font-bold text-lg sm:text-xl">Ai intrebari specifice?</div>
              <p className="mt-2 text-sm sm:text-base text-sky-700">Suna-ne pentru o scurta consultatie telefonica gratuita inainte de programare.</p>
              <a href="tel:0744184423" className="mt-4 sm:mt-6 inline-flex items-center gap-2 text-sky-900 font-bold hover:underline py-2">
                Suna la 0744 184 423 <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {trustPoints.map((item) => (
              <motion.div 
                key={item} 
                variants={itemVariants}
                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mt-1 bg-emerald-50 text-emerald-600 p-1 rounded-lg">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-base font-medium leading-7 text-slate-700">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="cum-lucram" className="border-y border-slate-200 bg-slate-900 py-16 sm:py-24 text-white relative overflow-hidden scroll-mt-32">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_rgba(56,189,248,0.1)_0%,_transparent_50%)]"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <div className="inline-flex rounded-full bg-white/10 border border-white/20 px-4 py-1 text-xs font-medium text-white backdrop-blur-sm">
              Drumul spre progres
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-5xl">Cum lucram la LogoTina</h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-slate-400">
              Un proces structurat si predictibil ajuta la reducerea anxietatii si la stabilirea unui ritm de succes.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, idx) => (
              <div key={item.step} className="relative">
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px border-t border-dashed border-white/20 z-0 -ml-4"></div>
                )}
                <div className="relative z-10 flex flex-col items-center lg:items-start">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 border border-white/10 text-3xl font-black text-sky-400 backdrop-blur-sm">
                    {item.step}
                  </div>
                  <h3 className="mt-8 text-xl font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-center lg:text-left text-base leading-7 text-slate-400">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="preturi" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8 scroll-mt-32">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            badge="Lista tarife"
            title="Preturi clare si transparente"
            text="Fara costuri ascunse. Preturile sunt structurate pentru a oferi flexibilitate intre sedinte scurte si lungi, in functie de nevoia reala."
          />
          <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 sm:px-5 sm:py-4 text-xs sm:text-sm font-semibold text-amber-800 shadow-sm">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            Abonamentele au valabilitate 40 zile.
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[40px] border border-slate-200 bg-white shadow-xl shadow-slate-100 overflow-hidden">
            <div className="divide-y divide-slate-100">
              {pricingRows.map(([name, price]) => (
                <div key={name} className="flex items-center justify-between gap-4 px-6 sm:px-8 py-5 sm:py-6 transition hover:bg-slate-50">
                  <span className="text-sm sm:text-base font-semibold text-slate-700 leading-tight">{name}</span>
                  <span className="rounded-2xl bg-slate-900 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-sm whitespace-nowrap">{price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:mt-0">
            {subscriptions.map((plan) => (
              <div
                key={plan.title}
                className={`flex flex-col rounded-[40px] border p-8 sm:p-10 transition-all duration-500 relative overflow-hidden group ${
                  plan.featured
                    ? "border-slate-900 bg-slate-900 text-white shadow-2xl lg:scale-105"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 py-2 px-10 bg-emerald-500 text-white text-[10px] uppercase font-black tracking-[0.2em] transform rotate-45 translate-x-[35%] translate-y-[80%]">
                    Recomandat
                  </div>
                )}
                
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className={`text-2xl font-black tracking-tight ${plan.featured ? "text-white" : "text-slate-900"}`}>
                      {plan.title}
                    </h3>
                    <p className={`mt-2 font-medium ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>
                      {plan.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className={`text-5xl font-black tracking-tighter ${plan.featured ? "text-white" : "text-slate-950"}`}>
                    {plan.price}
                  </span>
                </div>
                <div className={`mt-2 text-sm font-bold uppercase tracking-wider ${plan.featured ? "text-sky-400" : "text-slate-400"}`}>
                  {plan.validity}
                </div>

                <div className="mt-10 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex gap-3">
                      <Check className={`w-5 h-5 shrink-0 ${plan.featured ? "text-emerald-400" : "text-emerald-600"}`} />
                      <span className={`text-base font-medium ${plan.featured ? "text-slate-300" : "text-slate-700"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/40744184423?text=Buna%20ziua,%20doresc%20detalii%20despre%20${encodeURIComponent(plan.title)}%20(${encodeURIComponent(plan.subtitle)})`}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-10 inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 text-base font-bold transition active:scale-95 shadow-lg ${
                    plan.featured
                      ? "bg-white text-slate-900 hover:bg-slate-100 shadow-white/5"
                      : "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200"
                  }`}
                >
                  Solicita abonament
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8 border-t border-slate-200 scroll-mt-32">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              badge="FAQ"
              title="Intrebari frecvente"
              text="Majoritatea deciziilor de a programeaza o evaluare vin dupa raspunsurile de aici. Daca mai ai alte nelamuriri, nu ezita sa ne suni."
            />
            <div className="mt-8 sm:mt-10 bg-slate-50 p-6 sm:p-8 rounded-[32px] border border-slate-100 flex items-start gap-4">
              <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-sky-500 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">Nu ai gasit raspunsul?</h4>
                <p className="mt-1 text-slate-500 text-xs sm:text-sm">Suntem la un apel distanta pentru orice clarificare tehnica sau referitoare la programari.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-[32px] border border-slate-200 bg-white p-5 sm:p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-open:text-sky-600 transition-colors leading-tight">{faq.question}</h3>
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180 bg-slate-50 p-2 rounded-xl group-hover:bg-sky-50">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500 group-open:text-sky-600" />
                  </span>
                </summary>
                <div className="mt-4 border-t border-slate-100 pt-4 leading-relaxed text-sm sm:text-base text-slate-600 font-medium">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA / Contact Overlay */}
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-12 sm:pb-24 lg:px-8 scroll-mt-32">
        <div className="relative rounded-[40px] sm:rounded-[48px] overflow-hidden bg-slate-900 p-8 sm:p-16 lg:p-20 text-white shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(15,23,42,1)_0%,_rgba(30,41,59,1)_100%)]"></div>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-sky-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10 grid gap-12 sm:gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full bg-white/10 px-4 sm:px-6 py-1.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md border border-white/20 uppercase tracking-widest leading-none">
                Trimite un mesaj
              </div>
              <h2 className="mt-6 sm:mt-8 text-3xl font-extrabold tracking-tight sm:text-6xl sm:leading-[1.1]">
                Hai sa vorbim despre <span className="text-sky-400">progres</span>.
              </h2>
              <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-400 font-medium sm:text-xl">
                Daca ai observat dificultati de pronuntie, limbaj sau comunicare la tine sau copilul tau, primul pas este o discutie sincera. Scrie-ne sau suna-ne pentru a programa o evaluare initiala.
              </p>

              <div className="mt-10 sm:mt-12 space-y-6">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="bg-white/5 p-3 sm:p-4 rounded-2xl border border-white/10 shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <div>
                      <div className="text-[10px] sm:text-sm font-bold uppercase tracking-wider text-slate-500">Telefon</div>
                      <a href="tel:0744184423" className="text-base sm:text-xl font-bold hover:text-sky-400 transition-colors">0744 184 423</a>
                    </div>
                    <div className="h-8 w-px bg-white/10 hidden sm:block"></div>
                    <a 
                      href="https://wa.me/40744184423"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-emerald-400 hover:bg-emerald-500/20 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="bg-white/5 p-3 sm:p-4 rounded-2xl border border-white/10 shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-sm font-bold uppercase tracking-wider text-slate-500">Locatie</div>
                    <div className="text-base sm:text-lg font-bold">Strada Nerva Traian 23-25, Bucuresti</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] sm:rounded-[40px] bg-white p-6 sm:p-10 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <Brain className="w-8 h-8 text-slate-900" />
                <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">LogoTina</span>
              </div>
              <p className="mt-6 text-base text-slate-500 font-medium">
                Cabinet specializat in logopedie, stimulare cognitiva si psihoterapie. Dezvoltam potentialul fiecarui copil intr-un mediu cald si profesionist.
              </p>
            </div>
            
            <div className="flex flex-col gap-2 md:text-right">
              <div className="text-sm font-black uppercase tracking-widest text-slate-400">Contact legal</div>
              <a href="tel:0744184423" className="text-xl font-black text-slate-900 hover:text-sky-600 transition-colors">
                0744 184 423
              </a>
              <div className="text-base text-slate-500 font-medium">Bucuresti, Romania</div>
            </div>
          </div>
          
          <div className="mt-16 border-t border-slate-100 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm font-bold text-slate-400">
            <div>© {new Date().getFullYear()} LogoTina Bucuresti. Toate drepturile rezervate.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-900 transition-colors">GDPR</a>
              <a href="#" className="hover:text-slate-900 transition-colors">ANPC</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

