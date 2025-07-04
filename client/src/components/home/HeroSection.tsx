import { Button } from "@/components/ui/button";
import { CalendarIcon, Wand2 } from "lucide-react";
import { SiNvidia, SiAmazon } from "react-icons/si";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-br from-[#3c3758] via-[#554f7a] to-[#2c2747] animate-gradient-xy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4a90e2] text-white rounded-full text-sm font-semibold">
                <span>Backed By</span>
                <SiNvidia className="h-4 w-4" />

                <span> NVIDIA INCEPTION</span>
              </div>

            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="block mb-2">TwinTry™</span>
              <span className="text-[#eeff15]">Revolutionizing Fashion Reatil with <br/> AI</span>
            </h1>
            <p className="text-[#bcbcbc] text-lg mb-8">
            Transform your fashion retail with photorealistic, AI-powered virtual try-on technology. Deepen engagement, boost customer confidence, and drive conversions like never before.            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="flex items-center gap-2 bg-[#eeff15] text-[#2c2747] hover:bg-[#d9ea00]">
                <a href="#demo">
                  <Wand2 className="h-5 w-5" />
                  Try TwinTry Now
                </a>
              </Button>

            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#eeff15]/20 rounded-3xl transform rotate-3 scale-105"></div>
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="aspect-w-4 aspect-h-3 w-full">
                <img
                  src="hero-image.webp"
                  alt="Virtual try-on demonstration showing a woman trying clothes virtually"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-[#eeff15] rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Live Demo</span>
                    </div>
                    <p className="text-sm font-medium">Experience real-time virtual try-on with photorealistic results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
