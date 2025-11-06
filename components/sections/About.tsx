"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen p-8 md:p-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white"
        >
          Sobre Mim
        </motion.h2>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-gray-600 dark:text-gray-300 text-lg"
        >
          <p className="leading-relaxed">
            Sou um desenvolvedor full stack apaixonado por tecnologia e inovação.
            Com experiência em criar soluções web modernas e escaláveis, trabalho
            constantemente para transformar ideias em produtos digitais de alta qualidade.
          </p>

          <p className="leading-relaxed">
            Minha jornada no desenvolvimento começou há alguns anos e desde então
            tenho me dedicado a aprender e dominar as tecnologias mais recentes do
            mercado. Acredito que a programação é uma forma de arte que permite
            resolver problemas complexos de maneira criativa.
          </p>

          <p className="leading-relaxed">
            Atualmente, foco em desenvolvimento web utilizando React, Next.js,
            Node.js e outras tecnologias modernas. Sempre busco entregar código
            limpo, bem estruturado e de fácil manutenção.
          </p>

          <div className="pt-6">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Experiência
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-600 pl-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  Desenvolvedor Full Stack
                </h4>
                <p className="text-gray-500 dark:text-gray-400">2021 - Presente</p>
                <p className="mt-2">
                  Desenvolvimento de aplicações web modernas utilizando React,
                  Next.js, Node.js e banco de dados PostgreSQL.
                </p>
              </div>
              <div className="border-l-4 border-accent-600 pl-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  Desenvolvedor Frontend
                </h4>
                <p className="text-gray-500 dark:text-gray-400">2019 - 2021</p>
                <p className="mt-2">
                  Criação de interfaces responsivas e interativas com foco em
                  experiência do usuário.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
