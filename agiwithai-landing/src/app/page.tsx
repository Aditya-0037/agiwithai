import { StarfieldBackground } from "@/components/StarfieldBackground";
import { Github, Twitter, Rocket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white font-sans selection:bg-cyan-500/30">
      <StarfieldBackground />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">

        {/* Core Content Container */}
        <div className="flex flex-col items-center text-center space-y-12 max-w-4xl mx-auto">

          {/* Logo & Taglines */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
              AGIwithAI
            </h1>

            <div className="space-y-1 mt-6">
              <p className="text-xl md:text-3xl font-medium text-cyan-50 tracking-wide drop-shadow-md">
                Building Brains for the Digital Age
              </p>
              <p className="text-lg md:text-xl text-cyan-200/70 font-light italic">
                Where Machines Imagine and humanity leads
              </p>
            </div>
          </div>

          {/* Coming Soon Pulse */}
          <div className="py-6 animate-pulse">
            <h2 className="text-3xl md:text-5xl font-bold tracking-widest text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              Coming Soon
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 fill-mode-both">
            <Link
              href="https://dorahacks.io/hackathon/ideathon4agiwithai/detail"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 rounded-full bg-white/10 px-8 py-4 backdrop-blur-md border border-white/20 transition-all hover:bg-white/20 hover:scale-105 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
            >
              <Rocket className="w-6 h-6 text-cyan-300 group-hover:text-cyan-200 group-hover:animate-bounce" />
              <span className="font-semibold tracking-wide text-lg text-white">Join the Ideathon</span>
            </Link>

            <Link
              href="https://x.com/agiwithai"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 rounded-full bg-white/5 px-8 py-4 backdrop-blur-md border border-white/10 transition-all hover:bg-white/15 hover:scale-105 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <Twitter className="w-6 h-6 text-zinc-300 group-hover:text-white" />
              <span className="font-semibold tracking-wide text-lg text-zinc-200 group-hover:text-white">Join X handle</span>
            </Link>

            <Link
              href="https://github.com/AGIwithAI"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 rounded-full bg-white/5 px-8 py-4 backdrop-blur-md border border-white/10 transition-all hover:bg-white/15 hover:scale-105 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <Github className="w-6 h-6 text-zinc-300 group-hover:text-white" />
              <span className="font-semibold tracking-wide text-lg text-zinc-200 group-hover:text-white">Want to contribute</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
