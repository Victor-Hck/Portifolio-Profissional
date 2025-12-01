"use client";

import { Home, User, Code, Briefcase, Mail, X, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({
  activeSection,
  setActiveSection,
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "Sobre Mim", icon: User },
    { id: "skills", label: "Habilidades", icon: Code },
    // { id: "projects", label: "Projetos", icon: Briefcase },
    { id: "contact", label: "Contato", icon: Mail },
  ];

  const handleItemClick = (id: string) => {
    setActiveSection(id);
    setIsSidebarOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary-600 text-white rounded-lg shadow-lg hover:bg-primary-700 transition-colors"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white transform transition-transform duration-300 ease-in-out lg:transform-none ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex flex-col items-center mb-8 pt-12 lg:pt-0">
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center mb-4 shadow-xl overflow-hidden">
              <Image 
                src="https://avatars.githubusercontent.com/u/157487572?v=4" 
                alt="" 
                fill
                className="object-cover"
                />
            </div>
            <h2 className="text-xl font-bold text-center">Victor Gomes</h2>
            <p className="text-sm text-gray-400 text-center mt-1">Desenvolvedor Web Front End</p>
          </div>

          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-primary-600 shadow-lg shadow-primary-600/50"
                      : "hover:bg-gray-700/50"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              <span className="font-medium">
                {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
              </span>
            </button>
          )}
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}
    </>
  );
}
