import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFigma,
  SiPython,
  SiPhp,
  SiMysql,
  SiSqlite,
  SiGithub,
  SiCplusplus,
  SiGnubash,
  SiZod,
  SiReactquery,
  
} from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Next", icon: SiNextdotjs, color: "#06B6D4" }
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    //   { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    //   { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Python", icon: SiPython, color: "#00FFFF" },
      { name: "PHP", icon: SiPhp, color: "#00FFFF" },
      { name: "MySql", icon: SiMysql, color: "#ffffff" },
      { name: "SQLite", icon: SiSqlite, color: "#000000" },
      { name: "C++", icon: SiCplusplus, color: "#fff"},
      
    ],
  },
  {
    category: "Ferramentas",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#000000" },
      { name: "React Query", icon: SiReactquery, color: "#fff"},
      { name: "Zod", icon: SiZod, color: "#fff"}
    //   { name: "Docker", icon: SiDocker, color: "#2496ED" },
    //   { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex items-center justify-center p-8"
    >
      <div className="max-w-6xl w-full space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Habilidades</h2>
          <p className="text-lg text-muted-foreground">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + categoryIndex * 0.1, duration: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">{category.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.4 + categoryIndex * 0.1 + index * 0.05,
                      duration: 0.3,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                    data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="bg-card border border-card-border rounded-lg p-6 flex flex-col items-center justify-center gap-3 h-32 hover-elevate active-elevate-2 transition-transform">
                      <skill.icon
                        className="h-10 w-10 transition-colors"
                        style={{ color: skill.color }}
                      />
                      <p className="text-sm font-medium text-center">
                        {skill.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="pt-8"
        >
          {/* <h3 className="text-xl font-semibold mb-4">Outras Competências</h3> */}
          <div className="flex flex-wrap gap-2">
            {[
            //   "REST APIs",
            //   "GraphQL",
            //   "Responsive Design",
            //   "Agile/Scrum",
            //   "CI/CD",
            //   "Testing",
            //   "Performance Optimization",
            //   "SEO",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.05, duration: 0.2 }}
              >
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
