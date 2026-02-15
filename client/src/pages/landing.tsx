import { motion } from "framer-motion";
import { Bitcoin, Github, ChevronRight } from "lucide-react";
import { Background } from "@/components/landing/Background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import cloverOutline from "@/assets/clover-outline.png";
import shieldIcon from "@/assets/shield-icon.png";
import lockIcon from "@/assets/lock-icon.png";
import codeIcon from "@/assets/code-icon.png";

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-foreground font-sans selection:bg-primary/20 overflow-x-hidden">
      <Background />
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <motion.div 
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
              <img src={cloverOutline} alt="Clover Logo" className="w-8 h-8 relative z-10 brightness-150" />
            </motion.div>
            <span className="text-xl font-bold tracking-tight font-display">Clover</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Features</a>
            <a href="#" className="hover:text-primary transition-colors">Security</a>
            <a href="#" className="hover:text-primary transition-colors">Download</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </div>

          <div className="flex items-center gap-4">
             <Button variant="outline" className="hidden sm:flex border-primary/20 hover:bg-primary/10 hover:border-primary text-primary transition-all duration-300">
              Launch Web App
            </Button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-wider uppercase backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#22c55e]" />
            v2.0 Beta Live
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 font-display max-w-4xl leading-[1.1]"
          >
            Private by Design. <br />
            <span className="text-primary text-glow">Secure by Default.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl font-light leading-relaxed"
          >
            End-to-End Encrypted Messaging with Advanced Sandboxed Protection.
            Experience the future of secure communication.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
          >
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-semibold px-8 h-14 text-base shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)] transition-all hover:scale-105">
              Get Started <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 h-14 px-8 text-base backdrop-blur-sm hover:border-white/40 transition-all text-white">
              <Github className="mr-2 w-4 h-4" /> View on GitHub
            </Button>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              image={lockIcon}
              title="End-to-End Encryption"
              description="Your messages are encrypted on your device and can only be read by the intended recipient. No one else can read them."
              delay={0.2}
            />
            <FeatureCard 
              image={codeIcon}
              title="Open Source"
              description="Transparency is key to trust. Our entire codebase is open source and regularly audited by security experts."
              delay={0.4}
            />
            <FeatureCard 
              image={shieldIcon}
              title="Sandboxed Protection"
              description="Advanced application sandboxing prevents backdoors and malware from compromising your device or data."
              delay={0.6}
            />
          </div>
        </section>

        {/* Footer/Donate */}
        <footer className="container mx-auto px-6 text-center border-t border-white/5 pt-12 pb-8">
          <div className="flex flex-col items-center gap-6">
            <Button 
              variant="ghost" 
              className="group text-muted-foreground hover:text-primary hover:bg-transparent transition-colors border border-transparent hover:border-primary/20 rounded-full px-6 h-12"
            >
              <div className="bg-white/10 p-1 rounded-full mr-2 group-hover:bg-primary/20 transition-colors">
                <Bitcoin className="w-4 h-4 text-white group-hover:text-primary transition-all" />
              </div>
              <span className="text-sm font-medium">Donate with Bitcoin</span>
            </Button>
            <div className="flex gap-6 text-sm text-muted-foreground">
               <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <p className="text-xs text-muted-foreground/50 mt-4">
              © 2026 Clover Project. All rights reserved.
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="bg-white/[0.03] border-white/10 backdrop-blur-xl h-full hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-500 group overflow-hidden relative flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardHeader className="pb-2">
          <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)] transition-all duration-500 relative overflow-hidden">
             <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <img src={image} alt={title} className="w-10 h-10 object-contain relative z-10 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
          </div>
          <CardTitle className="text-xl font-display tracking-tight text-white group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
