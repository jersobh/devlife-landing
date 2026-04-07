/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Globe, ArrowRight, BookOpen, ShoppingBag, Briefcase, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const translations = {
  en: {
    heroTitle: "Welcome to Dev Life",
    heroSubtitle: "A community of developers, specially for early stage career.",
    joinTelegram: "Join our Telegram",
    learn: "Learn",
    learnDesc: "Access our educational platform and boost your skills.",
    store: "Store",
    storeDesc: "Get exclusive Dev Life merchandise and gear.",
    jobs: "Jobs",
    jobsDesc: "Curated job offerings for JR and entry levels.",
    footer: "© 2024 Dev Life. All rights reserved.",
    language: "Language",
    theme: "Theme",
    visit: "Visit"
  },
  pt: {
    heroTitle: "Bem-vindo ao Dev Life",
    heroSubtitle: "Uma comunidade de desenvolvedores, especialmente para início de carreira.",
    joinTelegram: "Entre no nosso Telegram",
    learn: "Aprenda",
    learnDesc: "Acesse nossa plataforma educacional e impulsione suas habilidades.",
    store: "Loja",
    storeDesc: "Adquira produtos e equipamentos exclusivos Dev Life.",
    jobs: "Vagas",
    jobsDesc: "Vagas selecionadas para níveis JR e iniciantes.",
    footer: "© 2024 Dev Life. Todos os direitos reservados.",
    language: "Idioma",
    theme: "Tema",
    visit: "Visitar"
  }
};

type Lang = 'en' | 'pt';

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="#000000" rx="20" />
    <path d="M 12 20 h 32 v 60 h -32 v -60 z M 24 30 v 40 h 8 v -40 h -8 z" fill="#39FF14" />
    <path d="M 52 20 h 12 v 48 h 24 v 12 h -36 v -60 z" fill="#39FF14" />
  </svg>
);

export default function App() {
  const [lang, setLang] = useState<Lang>('pt');
  const { theme, setTheme } = useTheme();
  const t = translations[lang];

  const toggleLang = () => setLang(l => l === 'en' ? 'pt' : 'en');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const links = [
    {
      title: t.learn,
      desc: t.learnDesc,
      icon: <BookOpen className="w-10 h-10" />,
      bgIcon: <BookOpen className="w-64 h-64" />,
      url: "https://learn.devlife.com.br/",
      gradient: "from-blue-500 to-cyan-400",
      shadow: "shadow-blue-500/20",
      border: "group-hover:border-blue-500/50",
      text: "text-blue-500 dark:text-blue-400",
    },
    {
      title: t.store,
      desc: t.storeDesc,
      icon: <ShoppingBag className="w-10 h-10" />,
      bgIcon: <ShoppingBag className="w-64 h-64" />,
      url: "https://loja.devlife.com.br/",
      gradient: "from-primary to-purple-500",
      shadow: "shadow-primary/20",
      border: "group-hover:border-primary/50",
      text: "text-primary dark:text-primary",
    },
    {
      title: t.jobs,
      desc: t.jobsDesc,
      icon: <Briefcase className="w-10 h-10" />,
      bgIcon: <Briefcase className="w-64 h-64" />,
      url: "https://www.linkedin.com/company/dev-life-br/posts",
      gradient: "from-orange-500 to-rose-500",
      shadow: "shadow-orange-500/20",
      border: "group-hover:border-orange-500/50",
      text: "text-orange-500 dark:text-orange-400",
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300 font-sans">
      {/* Top Bar */}
      <header className="bg-black text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8 rounded-lg overflow-hidden" />
            <span className="font-bold text-xl tracking-tight text-white">Dev Life</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 hover:text-primary transition-colors text-sm font-medium"
              aria-label={t.language}
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{lang}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 hover:text-primary transition-colors rounded-full hover:bg-zinc-800"
              aria-label={t.theme}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent dark:from-primary/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6"
            >
              {t.heroTitle}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10"
            >
              {t.heroSubtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="https://t.me/+noyHSv403io1MGZh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                <MessageCircle className="w-5 h-5" />
                {t.joinTelegram}
              </a>
            </motion.div>
          </div>
        </section>

        {/* Links Section */}
        <section className="py-20 bg-zinc-50 dark:bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${link.shadow} ${link.border}`}
                >
                  {/* Subtle background gradient that appears on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.08] transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${link.gradient} flex items-center justify-center mb-8 shadow-lg ${link.shadow} transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 text-white`}>
                      {link.icon}
                    </div>
                    
                    <h3 className="text-3xl font-extrabold mb-4 tracking-tight text-zinc-900 dark:text-white">{link.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-10 text-lg leading-relaxed flex-grow">
                      {link.desc}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800/50">
                      <span className={`font-bold ${link.text} flex items-center gap-2 text-lg`}>
                        {t.visit} 
                      </span>
                      <div className={`w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 group-hover:bg-gradient-to-br ${link.gradient} flex items-center justify-center text-zinc-400 group-hover:text-white transform group-hover:translate-x-2 transition-all duration-500`}>
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative large background icon */}
                  <div className={`absolute -bottom-12 -right-12 opacity-[0.03] dark:opacity-[0.05] transform group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none text-zinc-900 dark:text-white`}>
                    {link.bgIcon}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-950 py-12 border-t border-zinc-200 dark:border-zinc-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-4 text-zinc-900 dark:text-zinc-50">
            <Logo className="w-6 h-6 rounded overflow-hidden" />
            <span className="font-bold tracking-tight">Dev Life</span>
          </div>
          <p className="text-zinc-500 dark:text-zinc-500 text-sm">
            {t.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}
