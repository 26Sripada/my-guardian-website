import React, { useState } from "react";
import { ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ProblemCase {
  id: string;
  problem: string;
  summary: string;
  deliverables: string;
  estimatedTimeline: string;
}

const PROBLEMS: ProblemCase[] = [
  {
    id: "erp",
    problem: "I need an ERP / CRM",
    summary: "Tailored multi-department enterprise software consolidating inventory, sales, invoicing, operations, and role-based permissions.",
    deliverables: "Custom ERP platform built exactly around your workflows with zero recurring seat license bloat.",
    estimatedTimeline: "Structured MVP in weeks, followed by staged production rollout.",
  },
  {
    id: "mobile",
    problem: "I need a mobile app (iOS & Android)",
    summary: "Cross-platform mobile applications with real-time sync, geolocation, notifications, and secure authentication.",
    deliverables: "Production-grade iOS and Android apps published on App Store & Google Play with reliable crash monitoring.",
    estimatedTimeline: "Design to App Store submission in phased sprints.",
  },
  {
    id: "website",
    problem: "I need a website or web platform",
    summary: "Fast, modern web platforms, corporate digital assets, customer portals, or SaaS products designed for high conversion and speed.",
    deliverables: "High-performance responsive web platform with intuitive CMS or bespoke admin capabilities.",
    estimatedTimeline: "Agile delivery with staging previews.",
  },
  {
    id: "chatbot",
    problem: "I need an AI assistant / Chatbot",
    summary: "Action-oriented enterprise AI assistants that integrate with your databases, tickets, and internal tools to automate work.",
    deliverables: "Secure conversational assistant connected to your knowledge base, messaging, or internal helpdesk.",
    estimatedTimeline: "Rapid pilot testing with your actual documentation.",
  },
  {
    id: "ai_automation",
    problem: "I need AI & Computer Vision automation",
    summary: "Automated document processing, image verification, defect detection, or predictive intelligence integrated into everyday operations.",
    deliverables: "High-accuracy AI pipelines that eliminate manual human verification bottlenecks.",
    estimatedTimeline: "Proof of concept with sample data followed by production API.",
  },
  {
    id: "cloud",
    problem: "I need cloud migration / scalable infrastructure",
    summary: "Architecting, migrating, or modernizing scalable cloud systems across AWS, Azure, Google Cloud, or hybrid environments with automated CI/CD.",
    deliverables: "Reliable, auto-scaling cloud environment optimized for cost, security, and uptime.",
    estimatedTimeline: "Architecture assessment followed by zero-downtime staged migration.",
  },
  {
    id: "qa",
    problem: "I need QA & test automation",
    summary: "Eliminating manual testing cycles with automated test case generation, end-to-end regression pipelines, and compliance verification.",
    deliverables: "Robust test automation pipeline designed for mission-critical software releases.",
    estimatedTimeline: "Integrated into your existing build pipeline quickly.",
  },
  {
    id: "dashboard",
    problem: "I need a business dashboard",
    summary: "Unified operational command centers pulling data across disparate silos into actionable real-time charts and KPI monitors.",
    deliverables: "Executive or operational cockpit providing full visibility into your business metrics.",
    estimatedTimeline: "Live interactive prototypes in early iterations.",
  },
  {
    id: "internal_tool",
    problem: "I need an internal tool / workflow system",
    summary: "Replacing fragile spreadsheets and disconnected email threads with custom internal portals tailored for your team.",
    deliverables: "Robust internal portal that accelerates team velocity and prevents operational errors.",
    estimatedTimeline: "Fast iterative deployment.",
  },
  {
    id: "scada",
    problem: "I need SCADA application automation",
    summary: "Automating operational workflows, notifications, and analytics around industrial supervisory control and telemetry environments.",
    deliverables: "Industrial-grade automation layer built with strict telemetry isolation and zero control loop interference.",
    estimatedTimeline: "Safety-reviewed integration with strict telemetry isolation.",
  },
  {
    id: "custom",
    problem: "I have something else entirely",
    summary: "Unique business logic, proprietary hardware interfacing, civic technology, or uncatalogued challenges. We engineer software around your specific problem.",
    deliverables: "You don't need to know the technology stack. Describe the business problem and we will architect and engineer the solution end-to-end.",
    estimatedTimeline: "Deep-dive discovery session followed by transparent architecture plan.",
  },
];

export const ProblemSelector: React.FC = () => {
  const [activeProblemId, setActiveProblemId] = useState<string>("erp");
  const selected = PROBLEMS.find((p) => p.id === activeProblemId) || PROBLEMS[0];

  return (
    <div className="relative rounded-2xl bg-[#090e1a] border border-slate-800 p-5 sm:p-9 shadow-2xl">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>YOU BRING THE PROBLEM • WE BRING THE ENGINEERING</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Tell Us What You're Trying to Solve
        </h3>
        <p className="text-sm sm:text-base text-slate-400 mt-2">
          You don't need a 50-page tech spec. Click the challenge closest to your goals, or select "Something else entirely" if your requirement is unique.
        </p>
      </div>

      {/* Selectable Problem Badges */}
      <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
        {PROBLEMS.map((item) => {
          const isSelected = item.id === activeProblemId;
          const isSpecial = item.id === "custom";

          return (
            <button
              key={item.id}
              onClick={() => setActiveProblemId(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                isSelected
                  ? isSpecial
                    ? "bg-amber-500 text-slate-950 font-semibold shadow-lg shadow-amber-500/20 ring-2 ring-amber-400/50"
                    : "bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400"
                  : isSpecial
                  ? "bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20"
                  : "bg-slate-900/60 text-slate-300 border border-slate-800 hover:bg-slate-800/80 hover:text-white"
              }`}
            >
              {isSpecial && <HelpCircle className="w-3.5 h-3.5" />}
              <span>{item.problem}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Engineering Response */}
      <div className="rounded-xl bg-slate-950/90 border border-slate-800 p-5 sm:p-7 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              ENGINEERING SOLUTION BLUEPRINT
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
              "{selected.problem}"
            </h4>
          </div>
          <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            {selected.estimatedTimeline}
          </span>
        </div>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          {selected.summary}
        </p>

        {/* Deliverables Outcome */}
        <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs sm:text-sm text-slate-300">
          <span className="font-semibold text-blue-300 block mb-1">Our Engineering Commitment:</span>
          {selected.deliverables}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl bg-slate-900/80 border border-slate-800">
        <div>
          <div className="text-sm font-semibold text-white">
            We can help engineer this for your organization.
          </div>
          <div className="text-xs text-slate-400 mt-0.5">
            No technical jargon required. Tell us your business goals and constraints.
          </div>
        </div>

        <Link
          to={`/contact?problem=${encodeURIComponent(selected.problem)}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/30 shrink-0"
        >
          <span>Discuss Your Requirement</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
