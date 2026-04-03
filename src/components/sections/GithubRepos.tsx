"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, Loader2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "@/config/data";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${portfolioData.personalInfo.githubUsername}/repos?sort=updated&per_page=6`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setRepos(data);
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="github" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        <motion.div 
          className="text-center mb-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <FaGithub size={40} className="mb-4 text-white hover:text-primary transition-colors" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest on GitHub</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <a 
            href={portfolioData.personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-white transition-colors flex items-center group font-medium"
          >
            @{portfolioData.personalInfo.githubUsername}
            <ExternalLink size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-primary" size={40} />
          </div>
        ) : error ? (
          <div className="text-center py-10 text-foreground/50 bg-white/5 rounded-2xl border border-white/10 glass-card">
            Unable to load repositories. Please check my GitHub profile directly.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, idx) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] glass-card flex flex-col h-full overflow-hidden"
              >
                {/* Sweeping border overlay line */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0)_100%)] translate-x-[-150%] skew-x-[-20deg] group-hover:animate-[sweep_1.5s_ease-in-out_infinite] opacity-50" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors truncate pr-4">
                      {repo.name}
                    </h3>
                    <FaGithub size={20} className="text-foreground/40 group-hover:text-white flex-shrink-0 transition-colors" />
                  </div>
                  
                  <p className="text-sm text-foreground/60 mb-6 flex-grow line-clamp-3">
                    {repo.description || "No description provided."}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-foreground/50 pt-4 border-t border-white/5">
                    <div className="flex gap-4">
                      <span className="flex items-center">
                        <Star size={14} className="mr-1" /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center">
                        <GitFork size={14} className="mr-1" /> {repo.forks_count}
                      </span>
                    </div>
                    {repo.language && (
                      <span className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-secondary mr-2" />
                        {repo.language}
                      </span>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
