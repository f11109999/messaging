import { motion } from "framer-motion";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "wouter";
import { useState } from "react";
import moneroIconImg from "@/assets/dsadasd.png";

export default function MoneroDonate() {
  const [, setLocation] = useLocation();
  const [copied, setCopied] = useState(false);
  
  const moneroAddress = "83tVyX5zCtXmj5vqh3ddPS7gchcoor2MH6ftLkmwAp7pS2DthmAXw3ohJZCqNCjhBeAezjkDvQV7dcqXfzUfhR6j47bBr2p";

  const handleCopy = () => {
    navigator.clipboard.writeText(moneroAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-foreground font-sans selection:bg-primary/20">
      {/* Back Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center">
          <Button 
            variant="ghost" 
            className="text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setLocation("/")}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
        </div>
      </div>

      <main className="relative z-10 pt-32">
        <section className="container mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 p-4 rounded-2xl bg-[#FF6600]/10 border border-[#FF6600]/20"
          >
            <img src={moneroIconImg} alt="Monero" className="w-12 h-12 mx-auto" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 font-display text-white"
          >
            Support with Monero
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground/80 mb-12 max-w-2xl font-light leading-relaxed"
          >
            Your donation helps us continue developing privacy-focused communication tools. Send any amount of Monero to support Clover.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-md"
          >
            <Card className="border-[#FF6600]/20 bg-black/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-[#FF6600]">Monero Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 rounded-lg bg-black/50 border border-[#FF6600]/10 break-all font-mono text-sm text-muted-foreground">
                  {moneroAddress}
                </div>
                
                <Button 
                  onClick={handleCopy}
                  className="w-full bg-[#FF6600] text-black hover:bg-[#FF6600]/90 font-bold h-12 rounded-lg transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied to Clipboard!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Address
                    </>
                  )}
                </Button>

                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs text-muted-foreground/60 leading-relaxed">
                    This is a donation address. All contributions are appreciated and will directly support Clover's development and infrastructure.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-muted-foreground/60">
              Don't have Monero? <a href="https://www.getmonero.org/get-started/beginner/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Learn how to get started</a>
            </p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
