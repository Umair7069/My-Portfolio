"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { portfolioData } from "@/config/data";
import { Mail, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Typewriter } from "@/components/ui/Typewriter";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Generate dynamic mesh particles (using divs for simplicity)
  const particles = Array.from({ length: 15 });

  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Interactive Mesh */}
      <div className="absolute inset-0 z-0 opacity-30">
        {mounted && particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-tr from-primary to-secondary mix-blend-screen"
            style={{
              width: Math.random() * 300 + 100 + "px",
              height: Math.random() * 300 + 100 + "px",
              filter: "blur(80px)",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() * 0.5 + 1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-6 text-center z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="mb-8 relative perspective-1000"
          variants={itemVariants}
        >
          <motion.div 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary shadow-[0_0_40px_rgba(139,92,246,0.3)] transform-style-3d cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img 
              src={portfolioData.personalInfo.image} 
              alt={portfolioData.personalInfo.name} 
              className="w-full h-full rounded-full object-cover border-4 border-background pointer-events-none"
            />
          </motion.div>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          variants={itemVariants}
        >
          Hi, I am{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {portfolioData.personalInfo.name}
          </span>
        </motion.h1>

        <motion.h2 
          className="text-2xl md:text-4xl text-foreground font-semibold mb-6 flex gap-2 items-center justify-center min-h-[48px]"
          variants={itemVariants}
        >
          I build <span className="text-primary"><Typewriter words={["Full Stack Apps", "React Interfaces", ".NET Core APIs", "Scalable Systems"]} delay={2500} /></span>
        </motion.h2>

        <motion.p 
          className="max-w-2xl mx-auto text-foreground/60 text-base md:text-lg mb-10 leading-relaxed"
          variants={itemVariants}
        >
          {portfolioData.personalInfo.tagline}
        </motion.p>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4"
          variants={itemVariants}
        >
          <a href="#projects" className="group flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
            View Projects
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="flex items-center px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm font-medium hover:bg-white/10 transition-all hover:scale-105">
            <Mail size={18} className="mr-2 opacity-70" />
            Contact Me
          </a>
          <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm font-medium hover:bg-white/10 transition-all hover:scale-105">
            <FaGithub size={18} className="mr-2 opacity-70" />
            GitHub
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}
