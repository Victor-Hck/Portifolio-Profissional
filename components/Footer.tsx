"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Feito com</span>
            <Heart size={18} className="text-red-500 fill-red-500" />
            <span className="text-gray-400">por Victor Gomes</span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Victor-Hck?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/victor-antônio-11596b218"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=victor.profissional3592@gmail.com"
              target="_blank"
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
