"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Olá, Meu nome é Victor
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Desenvolvedor Web Front End
          </h2>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Apaixonado por criar experiências digitais incríveis e funcionais.
          Especializado em desenvolvimento web moderno com tecnologias de ponta.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center gap-4 mb-8"
        >
          <a
            href="https://github.com/Victor-Hck?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/victor-antônio-11596b218"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-accent-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=victor.profissional3592@gmail.com"
            target="_blank"
            className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <Mail size={24} />
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          
          <a
            href="/curriculo-victor.pdf" download>
                <button className="px-8 py-4 bg-gradient-to-r ml-3 from-primary-600 to-accent-600 text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    Baixar CV
                </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
