import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, Mail, MapPin, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { toast } from "sonner";
import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
  const response = await axios.post(
    "https://formspree.io/f/xkovekry",
    formData,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (response.status === 200) {
    setIsSuccess(true);
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSuccess(false), 3000);
  }
} catch (error) {
  console.error("Contact form error:", error);
  toast.error("Failed to send message. Please try again.");
} finally {
  setIsSubmitting(false);
}
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "jigarkumarbarad@gmail.com", href: "mailto:jigarkumarbarad@gmail.com" },
    { icon: Phone, label: "Phone", value: "+44 07901033851", href: "tel:+4407901033851" },
    { icon: MapPin, label: "Location", value: "Leicester, UK", href: null },
    { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/jigarbarad09/" },
    { icon: Github, label: "GitHub", value: "View my work", href: "https://github.com/Jigarbarad" },
  ];

  return (
    <section id="contact" className="relative section-padding bg-[#030014]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="font-mono text-sm uppercase tracking-widest text-purple-400 mb-4 block">Get In Touch</span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl mb-6">Let's <span className="gradient-text">Connect</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Have a project in mind or want to discuss opportunities? I'd love to hear from you.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-6">
            <h3 className="font-syne font-bold text-2xl text-white mb-8">Contact Information</h3>
            
            {contactInfo.map((item, index) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-center gap-4 p-4 glass rounded-xl hover:border-purple-500/40 transition-all group">
                    <div className="p-3 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors"><item.icon className="w-5 h-5 text-purple-400" /></div>
                    <div><p className="text-sm text-gray-500">{item.label}</p><p className="text-white font-space group-hover:text-purple-400 transition-colors">{item.value}</p></div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 glass rounded-xl">
                    <div className="p-3 rounded-lg bg-purple-500/20"><item.icon className="w-5 h-5 text-purple-400" /></div>
                    <div><p className="text-sm text-gray-500">{item.label}</p><p className="text-white font-space">{item.value}</p></div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Name</Label>
                  <Input id="name" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} className="bg-[#1E293B]/50 border-purple-500/20 focus:border-purple-500/50 text-white placeholder:text-gray-500" disabled={isSubmitting} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} className="bg-[#1E293B]/50 border-purple-500/20 focus:border-purple-500/50 text-white placeholder:text-gray-500" disabled={isSubmitting} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                <Input id="subject" name="subject" type="text" placeholder="What's this about?" value={formData.subject} onChange={handleChange} className="bg-[#1E293B]/50 border-purple-500/20 focus:border-purple-500/50 text-white placeholder:text-gray-500" disabled={isSubmitting} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-300">Message</Label>
                <Textarea id="message" name="message" placeholder="Tell me about your project or opportunity..." value={formData.message} onChange={handleChange} rows={5} className="bg-[#1E293B]/50 border-purple-500/20 focus:border-purple-500/50 text-white placeholder:text-gray-500 resize-none" disabled={isSubmitting} />
              </div>

              <Button type="submit" disabled={isSubmitting || isSuccess} className={`w-full py-6 font-space font-medium rounded-full shine-effect transition-all ${isSuccess ? "bg-green-600 hover:bg-green-600" : "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500"}`}>
                {isSubmitting ? (<><Loader2 className="mr-2 h-5 w-5 animate-spin" />Sending...</>) : isSuccess ? (<><CheckCircle className="mr-2 h-5 w-5" />Message Sent!</>) : (<><Send className="mr-2 h-5 w-5" />Send Message</>)}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
