import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Send, Eye } from "lucide-react";
import { Button } from "../ui/button";

const roles = [
  "Full Stack Developer",
  "AI/ML Engineer",
  "Software Engineer",
  "Problem Solver",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/50 to-[#030014] pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center">
        {/* Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-mono text-gray-300">Open to opportunities in UK</span>
        </motion.div> */}

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-syne font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter mb-6"
        >
          <span className="text-white">Jigar</span>
          <span className="gradient-text">kumar</span>
          <br />
          <span className="text-white">Barad</span>
        </motion.h1>

        {/* Typewriter Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-12 md:h-16 flex items-center justify-center mb-8"
        >
          <span className="font-space text-xl md:text-2xl lg:text-3xl text-purple-400">
            {displayText}
            <span className="typewriter-cursor" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          MSc Advanced Computer Science student at University of Leicester.
          Building intelligent systems and scalable web architectures that solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={() => scrollToSection("#projects")}
            className="px-8 py-6 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-space font-medium rounded-full shine-effect group"
          >
            <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View Projects
          </Button>

          <Button
            onClick={() => scrollToSection("#contact")}
            variant="outline"
            className="px-8 py-6 border-purple-500/50 text-white hover:bg-purple-500/10 font-space font-medium rounded-full group"
          >
            <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            Contact Me
          </Button>

          <a href="/jigarCV.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              className="px-8 py-6 text-gray-400 hover:text-white hover:bg-white/5 font-space font-medium rounded-full group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download CV
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={() => scrollToSection("#about")}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-500 hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;