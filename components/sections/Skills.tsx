"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "HTML5", level: 95, color: "bg-orange-500" },
    { name: "CSS3", level: 90, color: "bg-blue-500" },
    { name: "JavaScript", level: 92, color: "bg-yellow-500" },
    { name: "TypeScript", level: 88, color: "bg-blue-600" },
    { name: "React", level: 90, color: "bg-cyan-500" },
    { name: "Next.js", level: 85, color: "bg-gray-800" },
    { name: "Node.js", level: 87, color: "bg-green-600" },
    { name: "TailwindCSS", level: 93, color: "bg-teal-500" },
    { name: "Git", level: 89, color: "bg-red-500" },
    { name: "PostgreSQL", level: 82, color: "bg-blue-700" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <section className="min-h-screen p-8 md:p-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 dark:text-white"
        >
          Habilidades
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={item} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700 dark:text-gray-200">
                  {skill.name}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`h-full ${skill.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {["Frontend", "Backend", "Database", "DevOps"].map((category) => (
            <div
              key={category}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                {category}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
