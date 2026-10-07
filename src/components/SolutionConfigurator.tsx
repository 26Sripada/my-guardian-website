import React, { useState } from "react";
import { Cpu, Cloud, Smartphone, Globe, Workflow, Database, Check, ArrowRight, Layers, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface CapabilityOption {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  tech: string;
  architectureLayer: string;
}

const CAPABILITIES: CapabilityOption[] = [
  {
    id: "ai",
    name: "AI & Intelligence",
    category: "LLM, RAG & Vision",
    icon: Cpu,
    tech: "Computer Vision / RAG / OpenAI / Claude API",
    architectureLayer: "AI Inference & Reasoning Layer",
  },
  {
    id: "cloud",
    name: "Cloud & Infrastructure",
    category: "Azure / Serverless",
    icon: Cloud,
    tech: "Microsoft Azure / Serverless Compute / Blob Storage",
    architectureLayer: "Cloud Infrastructure & Scalable Workloads",
  },
  {
    id: "mobile",
    name: "Mobile Application",
    category: "iOS & Android",
    icon: Smartphone,
    tech: "Flutter / React Native / Offline-first",
    architectureLayer: "Cross-Platform Mobile Client",
  },
  {
    id: "web",
    name: "Web Platform & Portal",
    category: "React & SaaS",
    icon: Globe,
    tech: "React / TypeScript / High-density Dashboard",
    architectureLayer: "Enterprise Web & Admin Surface",
  },
  {
    id: "automation",
    name: "Workflow & SCADA Automation",
    category: "Pipelines & Events",
    icon: Workflow,
    tech: "Event-driven Rules / SCADA Bridge / Triggers",
    architectureLayer: "Operational Automation Engine",
  },
  {
    id: "qa",
    name: "QA & Test Automation",
    category: "Deterministic Validation",
    icon: Database,
    tech: "Automated Regression / Test Pipeline / Audit Logs",
    architectureLayer: "Quality Assurance & Validation Harness",
  },
];

export const SolutionConfigurator: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>(["ai", "cloud", "web"]);

  const toggleCapability = (id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        if (prev.length <= 1) return prev; // keep at least 1
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const selectedCapabilities = CAPABILITIES.filter((c) => selectedIds.includes(c.id));

  return (
    <div className="relative rounded-2xl bg-[#080d19] border border-slate-800 p-6 sm:p-8 shadow-2xl">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INTERACTIVE ARCHITECTURE BUILDER</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Build Your Solution Architecture
        </h3>
        <p className="text-sm sm:text-base text-slate-400 mt-2">
          Select the technological building blocks your business requires. Our engine models the interconnected system blueprint in real-time.
        </p>
      </div>

      {/* Selectable Capability Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
        {CAPABILITIES.map((cap) => {
          const Icon = cap.icon;
          const isSelected = selectedIds.includes(cap.id);

          return (
            <button
              key={cap.id}
              onClick={() => toggleCapability(cap.id)}
              className={`flex flex-col p-3 rounded-xl border text-left transition-all duration-200 ${
                isSelected
                  ? "bg-slate-900 border-blue-500/70 shadow-md shadow-blue-950/40 ring-1 ring-blue-500/30"
                  : "bg-slate-900/30 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700 text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-1.5 rounded-lg ${isSelected ? "bg-blue-500/20 text-blue-400" : "bg-slate-800 text-slate-400"}`}>
                  <Icon className="w-4 h-4" />
                </div>
                {isSelected ? (
                  <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px]">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                ) : (
                  <span className="w-4 h-4 rounded-full border border-slate-700" />
                )}
              </div>
              <div className="text-xs font-semibold text-white tracking-tight leading-tight">
                {cap.name}
              </div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5 truncate">
                {cap.category}
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Solution Architecture Diagram */}
      <div className="rounded-xl bg-slate-950/90 border border-slate-800 p-5 sm:p-6 mb-8">
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80 font-mono text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Layers className="w-4 h-4 text-blue-400" />
            <span className="font-semibold uppercase tracking-wider">SYNTHESIZED ARCHITECTURE BLUEPRINT</span>
          </div>
          <span className="text-emerald-400 text-[11px] font-semibold">
            {selectedCapabilities.length} SUBSYSTEMS INTEGRATED
          </span>
        </div>

        {/* Visual Pipeline Flow */}
        <div className="space-y-3">
          {selectedCapabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-xs font-bold">
                    0{index + 1}
                  </div>
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white tracking-tight">
                      {cap.architectureLayer}
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      Technology: {cap.tech}
                    </div>
                  </div>
                </div>

                <div className="text-left sm:text-right text-[11px] font-mono text-slate-400 shrink-0">
                  <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-slate-300">
                    Integration: Active
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unified Output Guarantee */}
        <div className="mt-4 pt-4 border-t border-slate-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-slate-400">
          <span>End-to-end telemetry, secure IAM & cloud deployment pipeline included.</span>
          <span className="text-blue-400 font-semibold">Ready for production specification</span>
        </div>
      </div>

      {/* Call to Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/30 border border-blue-500/30">
        <div>
          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
            Have a project requiring this architecture?
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Discuss your requirements with our engineering team. We'll architect and build it from the ground up.
          </p>
        </div>

        <Link
          to={`/contact?stack=${selectedIds.join(",")}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 shrink-0"
        >
          <span>Talk to Our Engineering Team</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

