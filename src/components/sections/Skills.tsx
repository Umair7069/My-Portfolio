"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/data";

export function Skills() {
  const categories = [
    { name: "Frontend", items: portfolioData.skills.frontend },
    { name: "Backend", items: portfolioData.skills.backend },
    { name: "Databases", items: portfolioData.skills.databases },
    { name: "Concepts", items: portfolioData.skills.concepts },
  ];

  return (
    <section id="skills" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 border-t border-t-primary/20"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 text-sm">
                  {idx + 1}
                </span>
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, sIdx) => (
                  <motion.span 
                    key={skill}
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-foreground/90 hover:text-white hover:border-primary/60 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
