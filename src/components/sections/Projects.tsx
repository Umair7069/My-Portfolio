"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/data";
import { ExternalLink, Activity } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden glass-card p-1 transition-all duration-300 shadow-xl hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/10 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl z-0" />
              
              {/* Sweeping border overlay line */}
              <div className="absolute inset-0 z-0 bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0)_100%)] translate-x-[-150%] skew-x-[-20deg] group-hover:animate-[sweep_1.5s_ease-in-out_infinite] opacity-50" />

              <div className="relative rounded-[22px] bg-background/90 backdrop-blur-3xl h-full p-8 md:p-10 flex flex-col z-10 border border-white/5 group-hover:border-primary/50 transition-colors duration-500">
                
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <Activity size={28} />
                  </div>
                  <div className="flex gap-3 text-foreground/50">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all">
                        <FaGithub size={24} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70 mb-8 flex-grow text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-sm font-semibold text-white/50 uppercase tracking-wider block mb-2">Key Features</span>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map(f => (
                        <span key={f} className="text-xs font-medium text-white/80 flex items-center">
                          <span className="w-1 h-1 rounded-full bg-secondary mr-2" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-white/5 text-xs text-foreground/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
