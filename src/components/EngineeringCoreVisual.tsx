import React, { useState } from "react";
import { Cpu, Cloud, Smartphone, Globe, Workflow, Database, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface NodeData {
  id: string;
  label: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  borderColor: string;
  badgeColor: string;
  tech: string[];
  metrics: string;
  route: string;
}

const NODES: NodeData[] = [
  {
    id: "ai",
    label: "AI & Intelligence",
    category: "LLM, RAG & Vision",
    icon: Cpu,
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/40 hover:border-cyan-400",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    tech: ["Computer Vision", "RAG Systems", "AI Assistants", "Doc Intelligence"],
    metrics: "Production-ready AI workflows",
    route: "/services/ai",
  },
  {
    id: "cloud",
    label: "Cloud Architecture",
    category: "AWS, Azure, GCP & Infra",
    icon: Cloud,
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/40 hover:border-blue-400",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    tech: ["Cloud Ingestion", "Serverless Compute", "Managed Storage", "CI/CD Pipelines"],
    metrics: "Canadian client cloud pipeline",
    route: "/services/cloud",
  },
  {
    id: "mobile",
    label: "Mobile Platforms",
    category: "iOS & Android",
    icon: Smartphone,
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/40 hover:border-emerald-400",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    tech: ["Cross-Platform Mobile", "Native Modules", "Live Geolocation", "Real-Time Sync"],
    metrics: "Flagship SuperApp deployed",
    route: "/services/mobile",
  },
  {
    id: "web",
    label: "Web & Enterprise",
    category: "Portals & SaaS",
    icon: Globe,
    color: "from-sky-500/20 to-indigo-500/20",
    borderColor: "border-sky-500/40 hover:border-sky-400",
    badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    tech: ["Web Platforms", "Admin Dashboards", "REST APIs", "Modern UX"],
    metrics: "High-density enterprise portals",
    route: "/services/web",
  },
  {
    id: "data",
    label: "Data Pipelines",
    category: "ETL & Streaming",
    icon: Database,
    color: "from-violet-500/20 to-blue-500/20",
    borderColor: "border-violet-500/40 hover:border-violet-400",
    badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    tech: ["Data Ingestion", "Structured Validation", "Managed DBs", "Event Streams"],
    metrics: "Automated real-time processing",
    route: "/work/weather-pipeline",
  },
  {
    id: "automation",
    label: "QA & Automation",
    category: "Test & SCADA Workflows",
    icon: Workflow,
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/40 hover:border-amber-400",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    tech: ["Test Case Pipelines", "SCADA Automation", "Business Rules", "Regression"],
    metrics: "US healthcare & industrial clients",
    route: "/services/qa-automation",
  },
];

export const EngineeringCoreVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<NodeData>(NODES[0]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-cyan-500/5 to-emerald-500/10 rounded-3xl blur-2xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative rounded-2xl bg-[#090e1a]/90 border border-slate-800/80 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-300 font-semibold tracking-wider uppercase text-[11px]">
              ENGINEERING CORE v2.6
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-slate-400 text-[11px]">
            <span>ARCHITECTURE: UNIFIED</span>
            <span className="text-emerald-400 font-semibold">ALL SYSTEMS NOMINAL</span>
          </div>
        </div>

        {/* Central Core + Radial Grid of Systems */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {NODES.map((node) => {
            const Icon = node.icon;
            const isSelected = activeNode.id === node.id;

            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node)}
                className={`group relative text-left p-3.5 rounded-xl border transition-all duration-200 ${
                  isSelected
                    ? `bg-slate-900/95 ${node.borderColor} shadow-lg shadow-blue-950/40 ring-1 ring-blue-500/30`
                    : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg bg-slate-800/90 border border-slate-700/50 transition-transform ${isSelected ? "scale-110" : "group-hover:scale-105"}`}>
                    <Icon className="w-4 h-4 text-slate-200" />
                  </div>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#38bdf8]" />
                  )}
                </div>

                <div className="text-xs font-semibold text-white tracking-tight leading-snug">
                  {node.label}
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5 truncate">
                  {node.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Active Node Telemetry Panel */}
        <div className="relative rounded-xl bg-slate-950/80 border border-slate-800 p-4 font-mono text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${activeNode.badgeColor}`}>
                ACTIVE SUBSYSTEM
              </span>
              <span className="text-slate-200 font-medium text-sm">
                {activeNode.label}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{activeNode.metrics}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
            {activeNode.tech.map((item, idx) => (
              <div
                key={idx}
                className="px-2.5 py-1.5 rounded bg-slate-900/90 border border-slate-800 text-slate-300 text-[11px] font-mono flex items-center gap-1.5"
              >
                <span className="text-blue-400">›</span>
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
            <span>Production deployment ready</span>
            <Link
              to={activeNode.route}
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              <span>Explore Capability</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

