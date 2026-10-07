import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Sparkles, CheckCircle2, ChevronRight, Terminal } from "lucide-react";
import { EngineeringCoreVisual } from "./EngineeringCoreVisual";
import { AppStoreBadges } from "./AppStoreBadges";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-slate-800/80 bg-grid-tech">
      {/* Subtle radial lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning & Conversion Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-slate-300">
                PRODUCT COMPANY + ENGINEERING PARTNER
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Whatever You're Building,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
                We Engineer It.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              AI, cloud architectures, mobile & web applications, automation pipelines, and enterprise software. <strong>My Guardian Technologies</strong> builds practical, production-ready technology solutions for businesses of every size.
            </p>

            {/* One Team End-to-End Value Prop */}
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 max-w-xl font-mono text-[11px] text-slate-300">
              <div className="text-[10px] text-blue-400 uppercase tracking-wider font-bold mb-1.5 flex items-center gap-1.5">
                <Terminal className="w-3 h-3" />
                <span>ONE TEAM. END-TO-END ENGINEERING.</span>
              </div>
              <div className="text-slate-400 leading-normal">
                Discovery → Architecture → Development → AI / Cloud → Testing → Deployment → SLA Support
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#selected-work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-medium text-sm transition-all"
              >
                <span>Explore Selected Work</span>
              </a>
            </div>

            {/* Flagship App Quick Badge */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="font-mono text-[11px] text-slate-400">Our Flagship App:</span>
              <AppStoreBadges variant="compact" />
            </div>
          </div>

          {/* Right Column: Hero Visual - Central Engineering Core */}
          <div className="lg:col-span-6 w-full">
            <EngineeringCoreVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;