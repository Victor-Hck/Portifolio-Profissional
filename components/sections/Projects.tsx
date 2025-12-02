"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Calculadora de IMC - (em breve)",
      description:
        "Plataforma completa de e-commerce com carrinho de compras, pagamentos e painel administrativo.",
    //   image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop",
    //   tags: ["Next.js", "TypeScript", "React"],
      demo: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Jogo de Memória - (em breve)",
      description:
        "Dashboard interativo com gráficos e análises em tempo real para visualização de dados.",
    //   image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94b4?w=600&h=400&fit=crop",
    //   tags: ["React", "Chart.js", "Node.js"],
      demo: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Clone do WhatsApp - (em breve)",
      description:
        "Rede social com feed de notícias, sistema de amizades e chat em tempo real.",
    //   image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=600&h=400&fit=crop",
    //   tags: ["Next.js", "Socket.io", "MongoDB"],
      demo: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Lista de Tarefas - (em breve)",
      description:
        "Aplicativo de gerenciamento de tarefas com recursos de colaboração em equipe.",
    //   image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=600&h=400&fit=crop",
    //   tags: ["React", "Firebase", "TailwindCSS"],
      demo: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Sistema de Finanças Pessoais - (em breve)",
      description:
        "Gerencie despesas, receitas, gráficos e metas financeiras com total controle.",
    //   image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&h=400&fit=crop",
    //   tags: ["Next.js", "Prisma", "PostgreSQL"],
      demo: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Galeria de Fotos - (em breve)",
      description:
        "Galeria elegante com filtros, animações e visualização em tela cheia.",
    //   image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=600&h=400&fit=crop",
    //   tags: ["React", "Framer Motion", "CSS Grid"],
      demo: "#",
      github: "#",
    },
    {
      id: 7,
      title: "Jogo RPG - (em breve)",
      description:
        "Jogo de RPG simples com combate, inventário e progressão de personagem.",
    //   image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
    //   tags: ["JavaScript", "Canvas", "HTML"],
      demo: "#",
      github: "#",
    },
    {
      id: 8,
      title: "Formulário Multi-etapas - (em breve)",
      description:
        "Formulário moderno dividido por etapas com validação inteligente.",
    //   image: "https://images.unsplash.com/photo-1588702547866-b5c9a45398f8?w=600&h=400&fit=crop",
    //   tags: ["React", "Zod", "TailwindCSS"],
      demo: "#",
      github: "#",
    },
    {
      id: 9,
      title: "Clone do Twitter - (em breve)",
      description:
        "Aplicação social com tweets, likes, comentários e autenticação.",
    //   image: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37e4?w=600&h=400&fit=crop",
    //   tags: ["Next.js", "Supabase", "TailwindCSS"],
      demo: "#",
      github: "#",
    },
    {
      id: 10,
      title: "Pizzaria - (em breve)",
      description:
        "Sistema de pedidos completo com carrinho, categorias, adicionais e painel.",
    //   image: "https://images.unsplash.com/photo-1604382354938-07c5d9983bd3?w=600&h=400&fit=crop",
    //   tags: ["React", "Node.js", "MongoDB"],
      demo: "#",
      github: "#",
    },
    {
      id: 11,
      title: "Store - Frontend - (em breve)",
      description:
        "Loja completa com grid de produtos, filtro, busca e carrinho local.",
    //   image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
    //   tags: ["Next.js", "Stripe", "TailwindCSS"],
      demo: "#",
      github: "#",
    },
    {
      id: 12,
      title: "Dashboard de RPG (Runway Fantasy Style) - (em breve)",
      description:
        "Dashboard estilizado com elementos de fantasia e cards animados.",
    //   image: "https://images.unsplash.com/photo-1618172193763-7dfeeebf7bfc?w=600&h=400&fit=crop",
    //   tags: ["React", "Framer Motion", "API"],
      demo: "#",
      github: "#",
    },
    {
      id: 13,
      title: "Loja Virtual Minimalista (com Admin Panel) - (em breve)",
      description:
        "E-commerce minimalista com painel administrativo para gestão completa.",
    //   image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop",
    //   tags: ["Next.js", "Prisma", "TailwindCSS"],
      demo: "#",
      github: "#",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section className="min-h-screen p-8 md:p-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 dark:text-white"
        >
          Projetos
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                //   src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                {/* 
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                      */}
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
