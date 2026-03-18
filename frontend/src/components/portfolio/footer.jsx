import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030014] border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center md:text-left">
            <button onClick={scrollToTop} className="font-syne font-bold text-2xl gradient-text mb-2 inline-block cursor-pointer">JB</button>
            <p className="text-gray-500 text-sm">© {currentYear} Jigarkumar Barad. All rights reserved.</p>
          </motion.div>

          

          {/* Social Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex items-center gap-4">
            <a href="https://github.com/Jigarbarad" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full text-gray-400 hover:text-white hover:border-purple-500/40 transition-all"><Github className="w-5 h-5" /></a>
            <a href="https://linkedin.com/in/jigarkumarbarad" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full text-gray-400 hover:text-white hover:border-purple-500/40 transition-all"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:jigarkumarbarad@gmail.com" className="p-3 glass rounded-full text-gray-400 hover:text-white hover:border-purple-500/40 transition-all"><Mail className="w-5 h-5" /></a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;