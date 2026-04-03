"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/data";
import { Code2, Server, Database, Braces } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const cards = [
    { title: "Backend Systems", icon: <Server size={24} className="text-primary" />, desc: "Building scalable & reliable architectures." },
    { title: "REST APIs", icon: <Code2 size={24} className="text-secondary" />, desc: "Designing clean and efficient API endpoints." },
    { title: "Databases", icon: <Database size={24} className="text-primary" />, desc: "Structuring optimized data storage solutions." },
    { title: "Clean Architecture", icon: <Braces size={24} className="text-secondary" />, desc: "Writing maintainable and decoupled code." },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white">My Journey</h3>
            {portfolioData.about.journey.map((paragraph, index) => (
              <p key={index} className="text-foreground/70 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {cards.map((card, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group glass-card"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{card.title}</h4>
                <p className="text-sm text-foreground/60">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
