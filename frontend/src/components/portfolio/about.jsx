import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "MSc Advanced Computer Science",
      subtitle: "University of Leicester",
      description: "Pursuing advanced studies in AI, Machine Learning, and Software Engineering",
    },
    {
      icon: Briefcase,
      title: "Professional Experience",
      subtitle: "AI-ML & Full Stack",
      description: "Building production-grade systems at Rooman Technologies and The Skybrisk",
    },
    {
      icon: MapPin,
      title: "Based in UK",
      subtitle: "Leicester, England",
      description: "Available for full-time opportunities and exciting projects",
    },
  ];

  return (
    <section id="about" className="relative section-padding bg-[#030014]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-purple-400 mb-4 block">
            Introduction
          </span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-2xl blur-2xl" />
              
              {/* Image Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden image-frame">
                <img
                  src="https://customer-assets.emergentagent.com/job_jigar-portfolio-1/artifacts/ggrsan9v_Gemini_Generated_Image_bijev9bijev9bije.png"
                  alt="Jigarkumar Barad"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/50 to-transparent" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 glass rounded-xl flex items-center justify-center"
              >
                <span className="text-3xl font-bold gradient-text">AI</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-20 h-20 glass rounded-xl flex items-center justify-center"
              >
                <span className="text-3xl font-bold gradient-text">ML</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              I'm a passionate developer who combines{" "}
              <span className="text-purple-400 font-medium">intelligent systems</span> with{" "}
              <span className="text-cyan-400 font-medium">scalable web architecture</span>.
              Currently pursuing my MSc at University of Leicester, I bring hands-on
              experience from building production systems at leading tech companies.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              My journey spans from developing deep learning models for fraud detection
              to building full-stack applications that serve thousands of users. I thrive
              on solving complex problems and turning innovative ideas into reality.
            </p>

            {/* Highlights */}
            <div className="grid gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 glass rounded-xl hover:border-purple-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                    <item.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-space font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-purple-400">{item.subtitle}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;