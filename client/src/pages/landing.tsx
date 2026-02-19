import { motion } from "framer-motion";
import { Bitcoin, Github, ChevronRight, Cpu, Globe, Zap, Target, Database, Terminal, Shield, Server, Gavel, EyeOff } from "lucide-react";
import { Background } from "@/components/landing/Background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import cloverRealistic from "@/assets/clover-realistic.png";
import shieldIcon from "@/assets/shield-icon.png";
import lockIcon from "@/assets/lock-icon.png";
import codeIcon from "@/assets/code-icon.png";

const MoneroIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
    <path d="M22.5 19V9.5L18.5 13.5V19H22.5ZM1.5 19V9.5L5.5 13.5V19H1.5ZM12 11.5L8 15.5H6.5V20.5H4.5V12.5L12 5L19.5 12.5V20.5H17.5V15.5H16L12 11.5Z" />
  </svg>
);

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#020503] text-foreground font-sans selection:bg-primary/20 overflow-x-hidden">
      <Background />
      
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-black/60 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={cloverRealistic} alt="Clover Logo" className="w-9 h-9 brightness-125 drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
            </motion.div>
            <span className="text-2xl font-bold tracking-tight font-display bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/60">Clover</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#sovereignty" className="hover:text-primary transition-colors">Sovereignty</a>
            <a href="#security" className="hover:text-primary transition-colors">Protocol</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </div>

          <Button variant="outline" className="border-primary/40 hover:bg-primary/20 hover:border-primary text-primary transition-all duration-500 rounded-full px-6 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
            Launch Secure Portal
          </Button>
        </div>
      </nav>

      <main className="relative z-10 pt-40">
        {/* Hero Section */}
        <section className="container mx-auto px-6 flex flex-col items-center text-center mb-48">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 p-[1px] rounded-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          >
            <div className="px-5 py-1.5 rounded-full bg-black/90 text-primary text-[10px] font-mono tracking-[0.2em] uppercase">
              Sovereign Data Infrastructure
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-10 font-display max-w-5xl leading-[0.95] text-white"
          >
            Private by Design. <br />
            <span className="text-primary italic text-glow brightness-125">Untouchable by Law.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground/90 mb-14 max-w-2xl font-light leading-relaxed"
          >
            Encrypted communication meets offshore physical security. 
            Hosted in bulletproof Lithuanian data centers designed to resist global surveillance.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full justify-center"
          >
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold px-10 h-16 text-lg rounded-full shadow-[0_0_40px_-5px_rgba(21,128,61,0.4)] transition-all hover:scale-105 active:scale-95">
              Get Started <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 h-16 px-10 text-lg rounded-full backdrop-blur-md hover:border-primary/40 transition-all text-white">
              <Github className="mr-3 w-5 h-5" /> View on GitHub
            </Button>
          </motion.div>
        </section>

        {/* Bulletproof Hosting Section */}
        <section id="sovereignty" className="container mx-auto px-6 mb-48">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-widest px-3 py-1 rounded bg-primary/10 border border-primary/20">
                <Server className="w-3 h-3" /> Bulletproof Infrastructure
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-display leading-tight text-white">Lithuanian <br /><span className="text-primary italic">Digital Sovereignty.</span></h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Our core infrastructure is physically located in high-security, off-grid Lithuanian bunkers. We operate under a strict jurisdictional policy that ignores DMCA requests, foreign court orders, and cross-border data subpoenas.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Gavel, text: "Zero compliance with foreign DMCA/Court orders" },
                  { icon: EyeOff, text: "Physical air-gapped node architecture" },
                  { icon: Shield, text: "Bunker-grade hardware security modules" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/80">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden border border-primary/20 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
              <div className="absolute inset-0 bg-black/40 z-20 group-hover:bg-black/20 transition-all duration-700" />
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000" 
                alt="High security data center" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
              />
              <div className="absolute bottom-10 left-10 z-30 space-y-2">
                <div className="text-white font-bold text-2xl tracking-tighter">BUNKER_NODE_01</div>
                <div className="text-primary font-mono text-xs uppercase tracking-[0.3em]">Vilnius, Lithuania [SECURE]</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Cards */}
        <section id="features" className="container mx-auto px-6 mb-48">
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard 
              image={lockIcon}
              title="State-of-the-Art E2EE"
              description="Using a modified Double Ratchet algorithm with post-quantum key encapsulation. Your keys never leave your device secure enclave."
              delay={0.1}
            />
            <FeatureCard 
              image={codeIcon}
              title="Verified Open Source"
              description="Zero hidden logic. Every line of code is public, reproducible, and mathematically verifiable for absolute trust."
              delay={0.2}
            />
            <FeatureCard 
              image={shieldIcon}
              title="Kernel-Level Sandboxing"
              description="Each conversation runs in an isolated virtual sandbox, preventing memory leaks and exploit escalation at the OS level."
              delay={0.3}
            />
          </div>
        </section>

        {/* Facts/Stats Section */}
        <section id="stats" className="container mx-auto px-6 mb-48">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Encryption Bits", value: "4096", icon: Cpu },
              { label: "Active Nodes", value: "1,240+", icon: Globe },
              { label: "Message Latency", value: "<40ms", icon: Zap },
              { label: "Vulnerability Audits", value: "Quarterly", icon: Target },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="mb-4 p-3 rounded-2xl bg-primary/5 border border-primary/10">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer/Donate */}
        <footer className="container mx-auto px-6 border-t border-primary/5 pt-20 pb-12">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="ghost" 
                className="group text-muted-foreground hover:text-primary hover:bg-white/[0.02] transition-all border border-white/5 hover:border-primary/30 rounded-full px-8 h-12"
              >
                <Bitcoin className="w-4 h-4 mr-3 text-orange-500 group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
                <span className="text-sm font-medium">Bitcoin Support</span>
              </Button>
              <Button 
                variant="ghost" 
                className="group text-muted-foreground hover:text-primary hover:bg-white/[0.02] transition-all border border-white/5 hover:border-primary/30 rounded-full px-8 h-12"
              >
                <MoneroIcon />
                <span className="text-sm font-medium text-[#FF6600]">Monero Support</span>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-xs font-mono uppercase tracking-tighter text-muted-foreground/40">
               <a href="#" className="hover:text-primary transition-colors">Documentation</a>
               <a href="#" className="hover:text-primary transition-colors">Privacy manifest</a>
               <a href="#" className="hover:text-primary transition-colors">Security Audit 2026</a>
               <a href="#" className="hover:text-primary transition-colors">Canary</a>
            </div>
            <p className="text-[10px] text-muted-foreground/30 font-mono">
              HASH_VERIFY: 7f8a1c...e3d9 (v2.0.4-stable)
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function FeatureCard({ image, title, description, delay }: { image: string, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="h-full"
    >
      <Card className="bg-white/[0.02] border-white/5 backdrop-blur-3xl h-full hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-700 group overflow-hidden relative flex flex-col p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <CardHeader className="pb-4">
          <div className="w-20 h-20 rounded-3xl bg-black/60 border border-white/5 flex items-center justify-center mb-8 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)] transition-all duration-700 relative overflow-hidden">
             <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <img src={image} alt={title} className="w-12 h-12 object-contain relative z-10 drop-shadow-[0_0_12px_rgba(34,197,94,0.6)] group-hover:scale-110 transition-transform duration-500" />
          </div>
          <CardTitle className="text-2xl font-display tracking-tighter text-white group-hover:text-primary transition-colors duration-500">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground/70 leading-relaxed text-sm font-light">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
