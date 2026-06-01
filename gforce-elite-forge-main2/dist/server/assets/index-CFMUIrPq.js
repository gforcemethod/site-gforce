import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { MessageCircle, Minus, Plus, ArrowRight, Target, Zap, Award, Trophy, Phone, MapPin, Instagram } from "lucide-react";
import { h as heroSled } from "./router-BLQo4Qsc.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
const logo = "/assets/gforce-logo-nQVgdsUu.png";
function Nav() {
  return /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/40 px-6 md:px-10 py-5 flex justify-between items-center", children: [
    /* @__PURE__ */ jsx("a", { href: "#top", className: "flex items-center", "aria-label": "G-Force Hybrid Training Method", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: logo,
        alt: "G-Force Hybrid Training Method",
        className: "h-6 md:h-7 w-auto object-contain"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-8 text-[10px] font-mono tracking-[0.2em] uppercase text-foreground", children: [
      /* @__PURE__ */ jsx("a", { href: "#method", className: "hover:text-chrome transition-colors", children: "Method" }),
      /* @__PURE__ */ jsx("a", { href: "#trainer", className: "hover:text-chrome transition-colors", children: "Trainer" }),
      /* @__PURE__ */ jsx("a", { href: "#mentor", className: "hover:text-chrome transition-colors", children: "Mentor" }),
      /* @__PURE__ */ jsx("a", { href: "#systems", className: "hover:text-chrome transition-colors", children: "Systems" }),
      /* @__PURE__ */ jsx("a", { href: "#events", className: "hover:text-chrome transition-colors", children: "Events" }),
      /* @__PURE__ */ jsx("a", { href: "#studio", className: "hover:text-chrome transition-colors", children: "Studio" }),
      /* @__PURE__ */ jsx("a", { href: "#blog", className: "hover:text-chrome transition-colors", children: "Blog" }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#cta",
          className: "ml-2 inline-flex items-center gap-2 border border-foreground/60 px-4 py-2.5 hover:bg-foreground hover:text-background transition-colors",
          children: [
            "Fazer Parte ",
            /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
          ]
        }
      )
    ] })
  ] });
}
function WhatsAppFab() {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: "https://wa.me/5586000000000",
      target: "_blank",
      rel: "noopener",
      "aria-label": "Fale conosco no WhatsApp",
      className: "fixed bottom-6 right-6 z-[100] size-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-black/50 hover:scale-110 transition-transform",
      children: /* @__PURE__ */ jsx(MessageCircle, { className: "size-6 text-white", strokeWidth: 2.5 })
    }
  );
}
const items = [
  {
    q: "O que é o G-Force Hybrid Training Method?",
    a: "Uma metodologia oficial de treinamento híbrido que integra endurance, força, condicionamento e resistência em um único sistema de alta performance, formando atletas e treinadores de elite."
  },
  {
    q: "Para quem é a certificação GF Trainer?",
    a: "Para personal trainers, preparadores físicos e profissionais de educação física que buscam dominar a metodologia híbrida e elevar o nível técnico, comercial e de autoridade no mercado."
  },
  {
    q: "Qual a diferença entre GF Trainer e GF Mentor?",
    a: "GF Trainer é a certificação técnica na metodologia. GF Mentor é a mentoria premium focada em posicionamento, marca pessoal e escala do negócio para treinadores que já operam no alto padrão."
  },
  {
    q: "Preciso ser atleta para treinar no Studio Fit?",
    a: "Não. Os sistemas são escaláveis para todos os níveis, do iniciante motivado ao competidor experiente. O método é progressivo e individualizado."
  },
  {
    q: "Como participo da Extreme Race?",
    a: "As inscrições abrem em janelas oficiais e são limitadas. Cadastre-se na lista de prioridade através do CTA da seção de eventos para receber o aviso na primeira janela."
  }
];
function Faq() {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsx("div", { className: "divide-y divide-white/10 border-y border-white/10", children: items.map((item, i) => {
    const isOpen = open === i;
    return /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen(isOpen ? null : i),
        className: "w-full text-left py-8 group flex gap-6 items-start hover:bg-white/[0.02] transition-colors px-2",
        children: [
          /* @__PURE__ */ jsxs("span", { className: "font-mono text-[10px] text-chrome/40 mt-2 shrink-0", children: [
            "[",
            String(i + 1).padStart(2, "0"),
            "]"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center gap-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl md:text-3xl uppercase tracking-tight", children: item.q }),
              isOpen ? /* @__PURE__ */ jsx(Minus, { className: "size-5 shrink-0 text-chrome" }) : /* @__PURE__ */ jsx(Plus, { className: "size-5 shrink-0 text-chrome" })
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                style: { gridTemplateRows: isOpen ? "1fr" : "0fr" },
                children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground pt-4 max-w-2xl leading-relaxed", children: item.a }) })
              }
            )
          ] })
        ]
      },
      i
    );
  }) });
}
const heroPortrait = "/assets/hero-portrait-BouBpaIg.png";
const sysEndurance = "/assets/system-endurance-ukz1WOha.jpg";
const sysHybrid = "/assets/system-hybrid-CDaXldCl.jpg";
const sysStrength = "/assets/system-strength-Dzu_8vZl.jpg";
const sysConditioning = "/assets/system-conditioning-0YsoDLuX.jpg";
const trainerBadge = "/assets/trainer-badge-7UUF4TXE.jpg";
const extreme1 = "/assets/extreme-1-DRFeVYSQ.png";
const extreme2 = "/assets/extreme-2-DRSziMiw.png";
const extreme3 = "/assets/extreme-3-QFiRoxcW.png";
const extreme4 = "/assets/extreme-4-23MGNjgy.png";
const extreme5 = "/assets/extreme-5-DRUnh5w-.png";
const url$5 = "/__l5e/assets-v1/cd6834d2-5770-4348-8d0b-3691ae6e1208/studio-experience-1.png";
const studioExperience1 = {
  url: url$5
};
const url$4 = "/__l5e/assets-v1/2d5c0594-f022-4728-939b-616d29fd2a7a/studio-experience-2.png";
const studioExperience2 = {
  url: url$4
};
const url$3 = "/__l5e/assets-v1/6758e3ba-7c1b-405c-bdea-2d55fd77060f/studio-experience-3.png";
const studioExperience3 = {
  url: url$3
};
const url$2 = "/__l5e/assets-v1/d17193ea-119f-4580-a274-382f7f47328c/studio-experience-4.png";
const studioExperience4 = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/dde1d1bc-d5e5-47d2-a0a6-015b1e818a6e/studio-experience-5.png";
const studioExperience5 = {
  url: url$1
};
const url = "/__l5e/assets-v1/003d49d0-507f-4501-baa3-c252f51f6b40/studio-experience-6.png";
const studioExperience6 = {
  url
};
const studioTeam = "/assets/studio-team-DqzUrh2j.jpg";
const method1 = "/assets/method-1-BeUlKgnL.jpg";
const mentorImg = "/assets/mentor-CpkccrA5.jpg";
const igFeed = "/assets/ig-feed-W3U_hU-V.jpg";
const pillars = [{
  icon: Target,
  title: "Metodologia",
  desc: "Periodização híbrida baseada em ciência do esporte. Cada bloco é mensurável, replicável e auditável."
}, {
  icon: Zap,
  title: "Performance",
  desc: "Sistemas energéticos integrados. Força, fôlego e potência treinados sem interferência mútua."
}, {
  icon: Award,
  title: "Autoridade",
  desc: "Selo oficial reconhecido pela comunidade híbrida nacional. Credencial técnica de mercado."
}, {
  icon: Trophy,
  title: "Comunidade",
  desc: "Rede global de treinadores e atletas G-Force. Mentoria contínua e eventos de elite."
}];
const systems = [{
  n: "01",
  t: "Endurance",
  d: "Resistência máxima para longas distâncias e intensidade prolongada.",
  img: sysEndurance
}, {
  n: "02",
  t: "Hybrid",
  d: "O equilíbrio entre força bruta e capacidade cardiovascular.",
  img: sysHybrid
}, {
  n: "03",
  t: "Strength",
  d: "Desenvolvimento de torque e potência absoluta sob carga.",
  img: sysStrength
}, {
  n: "04",
  t: "Conditioning",
  d: "Eficiência metabólica para dominar qualquer cenário competitivo.",
  img: sysConditioning
}];
const posts = [{
  tag: "Methodology",
  title: "Por que treinamento híbrido é o futuro do fitness de elite",
  read: "6 min"
}, {
  tag: "Performance",
  title: "Periodização: como organizar força e endurance sem interferência",
  read: "9 min"
}, {
  tag: "Lifestyle",
  title: "Nutrição do atleta híbrido: protocolo de competição",
  read: "5 min"
}];
const WHATSAPP_URL = "https://wa.me/5586999515009";
function ExtremeCarousel({
  images,
  className = "",
  alt
}) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 4500);
    return () => clearInterval(id);
  }, [images.length]);
  return /* @__PURE__ */ jsxs("div", { className: `relative overflow-hidden ${className}`, children: [
    images.map((src, i) => /* @__PURE__ */ jsx("img", { src, alt, loading: "lazy", className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${i === index ? "opacity-100" : "opacity-0"}` }, src)),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2", children: images.map((_, i) => /* @__PURE__ */ jsx("span", { className: `h-1 transition-all duration-500 ${i === index ? "w-8 bg-chrome" : "w-4 bg-chrome/30"}` }, i)) })
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxs("div", { id: "top", className: "bg-background text-foreground font-sans", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex flex-col justify-end px-6 md:px-10 pt-28 pb-10 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsx("img", { src: heroSled, alt: "Atleta híbrido em treino de alta performance sob iluminação de arena", width: 1920, height: 1080, className: "w-full h-full object-cover brightness-[0.45]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/30" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/40" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:hidden absolute z-[5] inset-x-0 top-0 h-[65vh] pointer-events-none", children: [
        /* @__PURE__ */ jsx("img", { src: heroPortrait, alt: "Atleta de elite levantando barra com anilhas pesadas", className: "w-full h-full object-cover object-top" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:block absolute z-[5] right-0 top-0 bottom-0 w-[55%] pointer-events-none", children: [
        /* @__PURE__ */ jsx("img", { src: heroPortrait, alt: "Atleta de elite levantando barra com anilhas pesadas", className: "w-full h-full object-cover object-center" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-7xl mx-auto w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "font-mono text-[10px] md:text-xs mb-6 text-chrome/70 tracking-[0.3em] uppercase animate-reveal flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block h-px w-10 bg-chrome/50" }),
          "High Performance Hybrid Ecosystem"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-[clamp(3rem,8.5vw,8rem)] leading-[0.85] uppercase italic text-balance mb-6 max-w-5xl animate-reveal [animation-delay:200ms] text-foreground", children: [
          "Um Método,",
          /* @__PURE__ */ jsx("br", {}),
          "Múltiplas",
          /* @__PURE__ */ jsx("br", {}),
          "Capacidades."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "max-w-md text-sm md:text-base text-muted-foreground mb-10 animate-reveal [animation-delay:350ms] border-l border-chrome/30 pl-4", children: "Performance, treinamento híbrido e formação de treinadores em um único ecossistema de elite." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 animate-reveal [animation-delay:500ms]", children: [
          /* @__PURE__ */ jsxs("a", { href: "#trainer", className: "px-8 md:px-10 py-4 bg-foreground text-background font-display uppercase tracking-widest hover:bg-chrome transition-colors flex items-center gap-3", children: [
            "Quero me Certificar ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "#method", className: "px-8 md:px-10 py-4 border border-white/20 font-display uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center gap-3", children: [
            "Conhecer a Metodologia ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 animate-reveal [animation-delay:700ms]", children: [{
          v: "2.000+",
          l: "Alunos"
        }, {
          v: "300+",
          l: "Treinadores Certificados"
        }, {
          v: "10+",
          l: "Eventos Realizados"
        }, {
          v: "1",
          l: "Método Proprietário"
        }].map((s) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "h-8 w-px bg-chrome/40 mt-1" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-display text-3xl md:text-4xl text-foreground leading-none", children: s.v }),
            /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-chrome/60 mt-2", children: s.l })
          ] })
        ] }, s.l)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60", children: [
        /* @__PURE__ */ jsx("span", { children: "Scroll" }),
        /* @__PURE__ */ jsx("span", { children: "Para Explorar" }),
        /* @__PURE__ */ jsx("span", { className: "h-8 w-px bg-chrome/40 animate-pulse" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-y border-white/10 py-6 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex whitespace-nowrap animate-[marquee_40s_linear_infinite]", children: [...Array(2)].map((_, k) => /* @__PURE__ */ jsx("div", { className: "flex items-center gap-12 px-6 shrink-0", children: ["Endurance", "Strength", "Conditioning", "Hybrid", "Durability", "Power", "Mindset"].map((w) => /* @__PURE__ */ jsxs("span", { className: "font-display text-5xl md:text-7xl uppercase italic text-white/10", children: [
      w,
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-chrome/30", children: "/" })
    ] }, w)) }, k)) }) }),
    /* @__PURE__ */ jsx("section", { id: "method", className: "py-32 px-6 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 mb-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6", children: "[01] — The Method" }),
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-7xl uppercase italic leading-[0.9]", children: [
            "A ciência por trás",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-chrome/50", children: "da alta performance." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6 lg:col-start-7", children: [
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed mb-8", children: "O G-Force Method não é exercício. É uma arquitetura de treinamento desenhada para construir atletas resilientes, capazes de dominar qualquer arena — da corrida de endurance ao levantamento olímpico, da prova híbrida ao trabalho metabólico de elite." }),
          /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground/70 leading-relaxed", children: "Cada pilar foi auditado e refinado através de milhares de horas de prática em campo. O resultado é um sistema reproduzível, mensurável e capaz de formar tanto atletas quanto a próxima geração de treinadores híbridos." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-12 gap-px bg-white/10 mb-20", children: pillars.map((p) => /* @__PURE__ */ jsxs("div", { className: "md:col-span-3 bg-background p-8 group hover:bg-graphite transition-colors", children: [
        /* @__PURE__ */ jsx(p.icon, { className: "size-6 text-chrome mb-8 group-hover:scale-110 transition-transform", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl uppercase mb-3 tracking-tight", children: p.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.desc })
      ] }, p.title)) }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
        /* @__PURE__ */ jsx("img", { src: method1, alt: "Mãos de atleta firmando uma barra olímpica", loading: "lazy", width: 800, height: 1024, className: "w-full aspect-[4/5] object-cover grayscale" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-4", children: "[02] — Founding Principle" }),
          /* @__PURE__ */ jsx("blockquote", { className: "font-display text-3xl md:text-5xl uppercase italic leading-[1] mb-8", children: '"A força sem fôlego é vaidade. O fôlego sem força é fragilidade. O atleta híbrido domina os dois."' }),
          /* @__PURE__ */ jsx("div", { className: "font-mono text-xs text-chrome/50 uppercase tracking-widest mb-10", children: "— G-Force Founding Doctrine" }),
          /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener", className: "inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-background font-display uppercase text-sm tracking-widest hover:bg-[#128C7E] transition-colors", children: [
            "Quero o G Force Method ",
            /* @__PURE__ */ jsx(Phone, { className: "size-4" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "trainer", className: "relative py-32 px-6 md:px-10 bg-graphite border-y border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "inline-block px-3 py-1 bg-white/10 border border-white/20 font-mono text-[10px] mb-8 uppercase tracking-widest", children: "Official Certification — Level 1 to 3" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-7xl uppercase italic leading-[0.9] mb-8", children: [
          "Torne-se um",
          /* @__PURE__ */ jsx("br", {}),
          "GF Trainer."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-md mb-12 text-lg leading-relaxed", children: "Domine a metodologia híbrida que está redefinindo o fitness de elite. Formação técnica, prática e estratégica para treinadores que buscam o topo do mercado." }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4 mb-12", children: ["08 Módulos de especialização técnica", "Selo oficial G-Force Trainer", "Acesso à plataforma e diretório global", "Workshops práticos no Studio Fit", "Comunidade fechada de treinadores certificados"].map((it, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-4 border-b border-white/10 pb-4", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-chrome font-mono text-sm", children: [
            "[",
            String(i + 1).padStart(2, "0"),
            "]"
          ] }),
          /* @__PURE__ */ jsx("span", { className: "uppercase font-bold tracking-tight text-sm md:text-base", children: it })
        ] }, it)) }),
        /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener", className: "inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-background font-display uppercase text-sm tracking-widest hover:bg-[#128C7E] transition-colors", children: [
          "Quero ser GF Trainer ",
          /* @__PURE__ */ jsx(Phone, { className: "size-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative aspect-square", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 border border-white/10" }),
        /* @__PURE__ */ jsx("img", { src: trainerBadge, alt: "Selo oficial de certificação G-Force Trainer", loading: "lazy", width: 1024, height: 1024, className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 right-6 bg-background/90 backdrop-blur-xl p-5 border border-white/10", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] uppercase text-chrome/60 mb-1", children: "Current Cohort" }),
          /* @__PURE__ */ jsx("div", { className: "font-display text-2xl", children: "92% OCUPADO" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-6 left-6 bg-background/90 backdrop-blur-xl px-4 py-2 border border-white/10 font-mono text-[10px] uppercase tracking-widest text-chrome", children: "Cohort 2026 · Q1" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "mentor", className: "py-32 px-6 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-5 order-2 lg:order-1", children: /* @__PURE__ */ jsx("img", { src: mentorImg, alt: "Mentoria executiva G-Force para treinadores", loading: "lazy", width: 1200, height: 1408, className: "w-full aspect-[4/5] object-cover grayscale" }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 order-1 lg:order-2", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6", children: "[03] — GF Mentor" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-7xl uppercase italic leading-[0.9] mb-8", children: [
          "Mentoria executiva",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-chrome/50", children: "para treinadores de elite." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl", children: "GF Mentor é o nível superior. Posicionamento de marca, autoridade técnica, estratégia comercial e escala de operação para treinadores que já operam no alto padrão e querem dominar o próprio mercado." }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-px bg-white/10 max-w-2xl mb-10", children: [{
          t: "Posicionamento",
          d: "Construção de marca pessoal e autoridade digital."
        }, {
          t: "Acompanhamento",
          d: "Calls 1:1, plano de execução e revisão mensal."
        }, {
          t: "Estratégia",
          d: "Modelo de negócio, ticket alto, retenção."
        }, {
          t: "Networking",
          d: "Acesso à mesa dos top performers do G-Force."
        }].map((b) => /* @__PURE__ */ jsxs("div", { className: "bg-background p-6", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display text-xl uppercase mb-2", children: b.t }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: b.d })
        ] }, b.t)) }),
        /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener", className: "inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-background font-display uppercase text-sm tracking-widest hover:bg-[#128C7E] transition-colors", children: [
          "Quero a Mentoria ",
          /* @__PURE__ */ jsx(Phone, { className: "size-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "systems", className: "py-32 border-y border-white/10", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6", children: "[04] — Training Systems" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-7xl uppercase italic leading-[0.9]", children: "Os quatro sistemas." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-sm", children: "Quatro pilares integrados que constroem o atleta híbrido completo." })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10", children: systems.map((s) => /* @__PURE__ */ jsxs("div", { className: "group relative bg-background aspect-[4/5] flex flex-col justify-end p-8 overflow-hidden", children: [
        /* @__PURE__ */ jsx("img", { src: s.img, alt: `Sistema de treino ${s.t}`, loading: "lazy", width: 800, height: 1024, className: "absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-mono text-[10px] text-chrome/50 mb-2 block", children: [
            s.n,
            " / 04"
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-4xl md:text-5xl uppercase mb-4", children: s.t }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-xs", children: s.d })
        ] })
      ] }, s.n)) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "events", className: "py-32 px-6 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-between items-end mb-16 flex-wrap gap-6", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6", children: "[05] — Live Events" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-7xl uppercase italic leading-[0.9]", children: "A arena chama." })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-6", children: [
        /* @__PURE__ */ jsxs("article", { className: "md:col-span-7 group relative overflow-hidden", children: [
          /* @__PURE__ */ jsx(ExtremeCarousel, { images: [extreme1, extreme2, extreme3, extreme4, extreme5], alt: "Extreme Race", className: "w-full h-[420px] md:h-[560px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-6 left-6 bg-background/90 backdrop-blur-xl px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-chrome", children: "Flagship Event" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-4xl md:text-6xl uppercase italic mb-3", children: "Extreme Race" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-md mb-6", children: "A corrida híbrida que testa cada fibra do corpo. Sleds, burpees, corrida e força em um percurso desenhado para a elite." }),
            /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener", className: "inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-background font-display uppercase text-sm tracking-widest hover:bg-[#128C7E] transition-colors", children: [
              "Inscrever-se ",
              /* @__PURE__ */ jsx(Phone, { className: "size-4" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "md:col-span-5 group relative overflow-hidden", children: [
          /* @__PURE__ */ jsx(ExtremeCarousel, { images: [studioExperience1.url, studioExperience2.url, studioExperience3.url, studioExperience4.url, studioExperience5.url, studioExperience6.url], alt: "Studio Fit Experience", className: "w-full h-[420px] md:h-[560px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-6 left-6 bg-background/90 backdrop-blur-xl px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-chrome", children: "Imersão · Teresina, PI" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl md:text-4xl uppercase italic mb-3", children: "Studio Fit Experience" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-md mb-6", children: "Imersão técnica na sede oficial. Workshops práticos, estratégias de pacing e comunidade G-Force." }),
            /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener", className: "inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-background font-display uppercase text-sm tracking-widest hover:bg-[#128C7E] transition-colors", children: [
              "Ver Detalhes ",
              /* @__PURE__ */ jsx(Phone, { className: "size-4" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "studio", className: "relative py-32 bg-graphite border-y border-white/10 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6", children: "[06] — HQ" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-7xl uppercase italic leading-[0.9] mb-8", children: [
          "Studio Fit.",
          /* @__PURE__ */ jsx("br", {}),
          "A sede."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-10 leading-relaxed", children: "Mais de 800m² dedicados ao treinamento híbrido. Rigs, sleds, esteiras manuais, assault bikes e remadores Concept2. A arena onde o método é vivido." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 mb-10", children: [{
          l: "Localização",
          v: "Teresina, PI — Brasil"
        }, {
          l: "Horários",
          v: "Seg–Sex 05:30 → 22:00 · Sáb 07:00 → 14:00"
        }, {
          l: "Estrutura",
          v: "Rigs, sleds, rowers, bikes, sala de mobilidade"
        }].map((r) => /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 border-b border-white/10 pb-3", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest text-chrome/50", children: r.l }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2 text-sm font-bold uppercase tracking-tight", children: r.v })
        ] }, r.l)) }),
        /* @__PURE__ */ jsxs("a", { href: "https://www.google.com/maps/place/STUDIO+FIT+ACADEMIA/data=!4m2!3m1!1s0x0:0x88b8068cc86dfc40?sa=X&ved=1t:2428&ictx=111", target: "_blank", rel: "noopener", className: "inline-flex items-center gap-3 px-6 py-3 border border-white/20 font-display uppercase text-sm tracking-widest hover:bg-white/10 transition-colors", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "size-4" }),
          " Como Chegar"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 w-full aspect-[16/10] border border-white/10 overflow-hidden", children: /* @__PURE__ */ jsx("iframe", { src: "https://maps.google.com/maps?q=STUDIO+FIT+ACADEMIA,Teresina,PI&hl=pt&z=17&output=embed", title: "Localização Studio Fit Academia", className: "w-full h-full", style: {
          border: 0
        }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsx("div", { className: "w-full aspect-[4/3] border border-white/10 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: studioTeam, alt: "Turma Studio Fit Academia", className: "w-full h-full object-cover" }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-32 px-6 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mb-12 flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6", children: "[07] — Social" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-6xl uppercase italic", children: "@studiofitpiripiri" })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "https://instagram.com/studiofitpiripiri", target: "_blank", rel: "noopener", className: "inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-chrome hover:text-foreground transition-colors", children: [
          /* @__PURE__ */ jsx(Instagram, { className: "size-4" }),
          " Seguir"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("a", { href: "https://instagram.com/studiofitpiripiri", target: "_blank", rel: "noopener", className: "block bg-background overflow-hidden relative group", children: [
        /* @__PURE__ */ jsx("img", { src: igFeed, alt: "Feed do Instagram @studiofitpiripiri", loading: "lazy", className: "w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center", children: /* @__PURE__ */ jsx(Instagram, { className: "size-10 text-foreground" }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "blog", className: "py-32 px-6 md:px-10 border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mb-16 flex-wrap gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6", children: "[08] — Journal" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-7xl uppercase italic leading-[0.9]", children: "Journal." })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#", className: "font-mono text-xs uppercase tracking-widest text-chrome hover:text-foreground transition-colors flex items-center gap-2", children: [
          "Ver todos ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-px bg-white/10", children: posts.map((p, i) => /* @__PURE__ */ jsxs("article", { className: "bg-background p-8 hover:bg-graphite transition-colors cursor-pointer group", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-12", children: [
          /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-chrome/60", children: p.tag }),
          /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] text-chrome/40", children: p.read })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl md:text-3xl uppercase leading-[1] mb-8 group-hover:text-chrome transition-colors", children: p.title }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-chrome", children: [
          "Ler ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "size-3" })
        ] })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "faq", className: "py-32 px-6 md:px-10 bg-graphite border-y border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6", children: "[09] — FAQ" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-7xl uppercase italic leading-[0.9] mb-16", children: [
        "Perguntas",
        /* @__PURE__ */ jsx("br", {}),
        "frequentes."
      ] }),
      /* @__PURE__ */ jsx(Faq, {})
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "cta", className: "py-40 px-6 md:px-10 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-0 flex items-center justify-center select-none pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "font-display text-[28vw] uppercase italic text-white/[0.03] leading-none whitespace-nowrap", children: "G-FORCE" }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center relative z-10", children: [
        /* @__PURE__ */ jsx("p", { className: "font-mono text-chrome/60 mb-8 tracking-[0.3em] uppercase text-xs", children: "Elite training movement" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-6xl md:text-8xl lg:text-9xl uppercase italic mb-12 tracking-tighter leading-[0.85]", children: [
          "Comece a evoluir.",
          /* @__PURE__ */ jsx("br", {}),
          "Build the Machine."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-12 max-w-xl mx-auto", children: "Junte-se ao ecossistema G-Force. Treinadores, atletas e a próxima geração de profissionais de elite começam aqui." }),
        /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener", className: "inline-flex items-center gap-4 px-12 md:px-16 py-6 md:py-7 bg-[#25D366] text-background font-display text-xl md:text-2xl uppercase italic tracking-widest hover:bg-[#128C7E] hover:scale-[1.02] transition-all", children: [
          "Falar no WhatsApp ",
          /* @__PURE__ */ jsx(Phone, { className: "size-6" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "border-t border-white/10 px-6 md:px-10 py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-12 mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
          /* @__PURE__ */ jsx("img", { src: logo, alt: "G-Force Hybrid Training Method", className: "h-8 w-auto object-contain mb-4" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-sm", children: "G-Force Hybrid Training Method. Metodologia oficial de alta performance. Treinamento híbrido, formação de treinadores e eventos de elite." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsx("h5", { className: "font-mono text-[10px] uppercase tracking-widest text-chrome/60 mb-4", children: "Método" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#method", className: "hover:text-chrome transition-colors", children: "Metodologia" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#trainer", className: "hover:text-chrome transition-colors", children: "GF Trainer" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#mentor", className: "hover:text-chrome transition-colors", children: "GF Mentor" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#systems", className: "hover:text-chrome transition-colors", children: "Sistemas" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsx("h5", { className: "font-mono text-[10px] uppercase tracking-widest text-chrome/60 mb-4", children: "Arena" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#events", className: "hover:text-chrome transition-colors", children: "Extreme Race" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#events", className: "hover:text-chrome transition-colors", children: "Studio Experience" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#studio", className: "hover:text-chrome transition-colors", children: "Studio Fit" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#blog", className: "hover:text-chrome transition-colors", children: "Journal" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "font-mono text-[10px] uppercase tracking-widest text-chrome/60 mb-4", children: "Contato" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "https://instagram.com/studiofitpiripiri", target: "_blank", rel: "noopener", className: "hover:text-chrome transition-colors inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Instagram, { className: "size-4" }),
              " @studiofitpiripiri"
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:contato@gforce.com", className: "hover:text-chrome transition-colors", children: "contato@gforce.com" }) }),
            /* @__PURE__ */ jsx("li", { className: "text-muted-foreground", children: "Teresina, PI — Brasil" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-chrome/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " G-Force Hybrid Training Method. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-chrome", children: "Privacy" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-chrome", children: "Terms" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(WhatsAppFab, {})
  ] });
}
export {
  Home as component
};
