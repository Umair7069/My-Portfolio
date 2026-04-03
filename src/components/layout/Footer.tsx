import { portfolioData } from "@/config/data";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/50 py-12 backdrop-blur-md relative z-10 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            UMAIR.
          </h2>
          <p className="text-foreground/60 text-sm mt-2">
            Backend Developer | Building scalable systems
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href={portfolioData.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={portfolioData.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-[#0A66C2] transition-colors p-2 rounded-full hover:bg-[#0A66C2]/10"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            className="text-foreground/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="mt-10 pt-6 border-t border-white/5 text-center px-6">
        <p className="text-sm text-foreground/50">
          © {year} {portfolioData.personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
