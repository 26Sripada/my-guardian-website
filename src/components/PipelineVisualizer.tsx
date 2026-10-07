import React from "react";
import { ArrowRight, CheckCircle2, Cpu, Database, Cloud, Zap, Shield, FileCheck, Layers } from "lucide-react";

export type PipelineType = "weather" | "healthcare" | "scada" | "civic";

interface Step {
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface PipelineConfig {
  title: string;
  badge: string;
  steps: Step[];
}

const PIPELINES: Record<PipelineType, PipelineConfig> = {
  weather: {
    title: "Weather Data Processing Pipeline",
    badge: "MICROSOFT AZURE",
    steps: [
      { name: "Weather Data Source", desc: "Sensors & meteorological feeds", icon: Cloud },
      { name: "Data Ingestion", desc: "Azure Event Hubs & buffering", icon: Database },
      { name: "Azure Processing", desc: "Serverless anomaly filtering", icon: Cpu },
      { name: "Automation Layer", desc: "Event-triggered workflows", icon: Zap },
      { name: "Analytics & Output", desc: "Operational dashboards & APIs", icon: CheckCircle2 },
    ],
  },
  healthcare: {
    title: "Healthcare QA Automation Pipeline",
    badge: "QA AUTOMATION",
    steps: [
      { name: "Requirements", desc: "Clinical user stories & compliance", icon: FileCheck },
      { name: "Test Case Processing", desc: "Structured test generation", icon: Cpu },
      { name: "Validation Engine", desc: "Healthcare boundary checks", icon: Shield },
      { name: "Automation Suite", desc: "Headless regression runners", icon: Zap },
      { name: "Test Results", desc: "Auditable pass/fail artifacts", icon: CheckCircle2 },
    ],
  },
  scada: {
    title: "SCADA Application Automation",
    badge: "INDUSTRIAL AUTOMATION",
    steps: [
      { name: "SCADA Source", desc: "Supervisory telemetry streams", icon: Database },
      { name: "Automation Layer", desc: "Non-intrusive equipment bridge", icon: Zap },
      { name: "Data & Events", desc: "Real-time state & alarm capture", icon: Cpu },
      { name: "Processing Engine", desc: "Operational policy evaluation", icon: Shield },
      { name: "Notifications", desc: "Automated alerts & shift reports", icon: CheckCircle2 },
    ],
  },
  civic: {
    title: "AI Civic Operations Workflow",
    badge: "CIVIC TECH & AI",
    steps: [
      { name: "Citizen Report", desc: "GPS photo grievance submission", icon: Database },
      { name: "Computer Vision", desc: "AI authenticity & defect check", icon: Cpu },
      { name: "Duplicate Detection", desc: "Geospatial incident clustering", icon: Shield },
      { name: "Officer Routing", desc: "Automated ward assignment", icon: Zap },
      { name: "Resolution Portal", desc: "Verified resolution tracking", icon: CheckCircle2 },
    ],
  },
};

interface PipelineVisualizerProps {
  type: PipelineType;
  className?: string;
}

export const PipelineVisualizer: React.FC<PipelineVisualizerProps> = ({ type, className = "" }) => {
  const config = PIPELINES[type];

  return (
    <div className={`rounded-2xl bg-[#090e1a] border border-slate-800 p-5 sm:p-7 shadow-xl ${className}`}>
      {/* Title Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-800/80">
        <div>
          <span className="text-[10px] font-mono tracking-wider font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20 uppercase">
            {config.badge}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-1.5">
            {config.title}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Production Architecture</span>
        </div>
      </div>

      {/* Clean Horizontal Pipeline Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {config.steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="relative p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/90 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-slate-500">
                    0{idx + 1}
                  </span>
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="text-xs font-semibold text-white tracking-tight leading-snug">
                  {step.name}
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-1 leading-tight">
                  {step.desc}
                </div>
              </div>

              {idx < config.steps.length - 1 && (
                <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
