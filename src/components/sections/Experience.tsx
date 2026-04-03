"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0">
          
          {/* Subtle line glow */}
          <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent opacity-50" />

          {portfolioData.experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="mb-12 relative pl-10 md:pl-16 group"
            >
              {/* Timeline marker */}
              <div className="absolute left-[-11px] top-2 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-[0_0_10px_rgba(139,92,246,0.6)] group-hover:shadow-[0_0_20px_rgba(139,92,246,1)]">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-secondary"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                />
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-8 hover:bg-white/[0.04] transition-all duration-500 border border-white/5 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 flex items-center">
                      <Briefcase size={20} className="mr-3 text-primary" />
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-secondary font-medium">{exp.company}</h4>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                
                <p className="text-foreground/70 leading-relaxed text-base md:text-lg">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
