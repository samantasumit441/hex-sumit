"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Send, ExternalLink, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // Simulate a brief delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Construct mailto link
    // Replace 'hacker@htb.com' with your actual email address
    const emailTo = "hacker@htb.com";
    const subject = `Portfolio Contact from ${data.name}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast.success("Opening email client...", {
      description: "Please hit send in your email application.",
      duration: 5000,
    });
    
    reset();
  };

  const socials = [
    { name: "GitHub", icon: Github, href: "#", color: "#9fef00" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "#00d4ff" },
    { name: "Twitter", icon: Twitter, href: "#", color: "#1da1f2" },
    { name: "Email", icon: Mail, href: "mailto:hacker@htb.com", color: "#ff3e3e" },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#9fef00] mb-4" style={{ fontFamily: "Orbitron" }}>
            ESTABLISH CONNECTION
          </h2>
          <div className="neon-line w-48 mx-auto mb-4" />
          <p className="text-[#a4b1cd] text-lg">Ready to collaborate on security projects</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "Orbitron" }}>
              &gt; SEND_MESSAGE
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-[#6b7f9e] text-sm mb-2 font-mono">NAME</label>
                <input
                  type="text"
                  {...register("name")}
                  className={`w-full bg-[#141d2b] border ${errors.name ? "border-red-500" : "border-[#2a3a50]"} rounded-lg px-4 py-3 text-[#a4b1cd] focus:border-[#9fef00] focus:outline-none transition-colors`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 font-mono">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-[#6b7f9e] text-sm mb-2 font-mono">EMAIL</label>
                <input
                  type="email"
                  {...register("email")}
                  className={`w-full bg-[#141d2b] border ${errors.email ? "border-red-500" : "border-[#2a3a50]"} rounded-lg px-4 py-3 text-[#a4b1cd] focus:border-[#9fef00] focus:outline-none transition-colors`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 font-mono">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-[#6b7f9e] text-sm mb-2 font-mono">MESSAGE</label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className={`w-full bg-[#141d2b] border ${errors.message ? "border-red-500" : "border-[#2a3a50]"} rounded-lg px-4 py-3 text-[#a4b1cd] focus:border-[#9fef00] focus:outline-none transition-colors resize-none`}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 font-mono">{errors.message.message}</p>
                )}
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#9fef00] text-[#0a0e14] font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#8bd900] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "Orbitron" }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    TRANSMITTING...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    TRANSMIT
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "Orbitron" }}>
              &gt; NETWORK_LINKS
            </h3>
            <div className="space-y-4">
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-[#141d2b] border border-[#2a3a50] rounded-lg hover:border-[#9fef00]/50 transition-all group"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${social.color}20` }}
                  >
                    <social.icon className="w-6 h-6" style={{ color: social.color }} />
                  </div>
                  <span className="text-[#a4b1cd] font-semibold group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#6b7f9e] ml-auto group-hover:text-[#9fef00] transition-colors" />
                </motion.a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#141d2b] border border-[#2a3a50] rounded-lg">
              <div className="font-mono text-sm">
                <span className="text-[#6b7f9e]">// Available for:</span>
                <br />
                <span className="text-[#9fef00]">- Penetration Testing</span>
                <br />
                <span className="text-[#00d4ff]">- Security Consulting</span>
                <br />
                <span className="text-[#ffaf00]">- CTF Team Collaboration</span>
                <br />
                <span className="text-[#ff3e3e]">- Bug Bounty Programs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
