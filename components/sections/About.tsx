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
            Com 24 anos, sou um profissional entusiasta por tecnologia e com uma paixão genuína por tudo que a envolve.
            Possuo uma forte inclinação para o estudo contínuo e dedico-me ativamente à atualização constante dos meus conhecimentos e habilidades. 
            Acredito que a tecnologia avança rapidamente, e por isso, mantenho um ritmo de aprendizado ininterrupto para garantir que minhas competências estejam sempre alinhadas com as exigências e inovações do mercado de trabalho.
            Minha dedicação em estudar continuamente não é apenas uma obrigação, mas uma motivação intrínseca para me qualificar e contribuir de forma significativa para os desafios e projetos das empresas. 
            Estou sempre em busca de novas ferramentas, metodologias e tendências para aplicar na prática e agregar valor.
          </p>

        </motion.div>
      </div>
    </section>
  );
}
