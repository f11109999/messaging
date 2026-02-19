import { motion } from "framer-motion";
import { Bitcoin, ArrowLeft, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "wouter";
import { useState } from "react";

export default function BitcoinDonate() {
  const [, setLocation] = useLocation();
  const [copied, setCopied] = useState(false);
  
  const bitcoinAddress = "1A1z7agoat2PYLV3jVm1EV2kQTwUQ1T1Y5";

  const handleCopy = () => {
    navigator.clipboard.writeText(bitcoinAddress);
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
            className="mb-8 p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20"
          >
            <Bitcoin className="w-12 h-12 text-orange-500 mx-auto" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 font-display text-white"
          >
            Support with Bitcoin
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground/80 mb-12 max-w-2xl font-light leading-relaxed"
          >
            Your donation helps us continue developing privacy-focused communication tools. Send any amount of Bitcoin to support Clover.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-md"
          >
            <Card className="border-orange-500/20 bg-black/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-orange-500">Bitcoin Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 rounded-lg bg-black/50 border border-orange-500/10 break-all font-mono text-sm text-muted-foreground">
                  {bitcoinAddress}
                </div>
                
                <Button 
                  onClick={handleCopy}
                  className="w-full bg-orange-500 text-black hover:bg-orange-600 font-bold h-12 rounded-lg transition-all"
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
              Don't have Bitcoin? <a href="https://buy.bitcoin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Learn how to get started</a>
            </p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
