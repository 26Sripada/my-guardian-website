import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AppStoreBadges } from "@/components/AppStoreBadges";

const CASE_STUDIES = [
  {
    id: "weather-pipeline",
    badge: "Canadian Client",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    client: "Cloud Data Engineering",
    title: "Cloud Weather Data Pipeline",
    summary: "Architected an automated meteorological data ingestion, validation, and analytics pipeline built for high-volume weather event processing.",
    outcome: "Zero data loss during extreme weather surges with automated alert triggering.",
    route: "/work/weather-pipeline",
    ctaText: "Read Brief",
  },
  {
    id: "healthcare-qa",
    badge: "US Client",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    client: "Healthcare QA Automation",
    title: "Healthcare QA Automation Pipeline",
    summary: "Engineered an automated clinical test case generation and validation harness that eliminated manual regression bottlenecks in release cycles.",
    outcome: "Drastically compressed release validation turnaround with auditable compliance artifacts.",
    route: "/work/healthcare-qa",
    ctaText: "Read Brief",
  },
  {
    id: "my-guardian",
    badge: "Proprietary Product",
    badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    client: "Safety & Civic SuperApp",
    title: "My Guardian Flagship Platform",
    summary: "Our cross-platform consumer platform uniting real-time emergency SOS alerts, GPS-tagged civic grievance triage, and hyperlocal commerce discovery.",
    outcome: "Live in production on Android and iOS with real-time location telemetry.",
    route: "/work/my-guardian",
    ctaText: "View Platform",
    hasStoreBadges: true,
  },
  {
    id: "civic-operations",
    badge: "Civic Tech Platform",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    client: "GovTech Operations",
    title: "AI-Powered Civic Operations",
    summary: "An enterprise civic-service back-office combining computer vision image validation, proximity-based deduplication, and automated municipal officer routing.",
    outcome: "Streamlined municipal grievance backlogs with verified resolution proofs and SLA tracking.",
    route: "/work/civic-operations",
    ctaText: "View Platform",
  },
  {
    id: "scada-automation",
    badge: "Industrial Client",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    client: "Industrial Operations",
    title: "SCADA Application Automation",
    summary: "Automating operational workflows, threshold alerts, and shift reporting around an industrial supervisory control and telemetry (SCADA) system.",
    outcome: "Isolated automation layer ensuring direct operational visibility without touching supervisory control loops.",
    route: "/work/scada-automation",
    ctaText: "Read Brief",
  },
];

const WorkIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
            <span>SELECTED CLIENT & PROPRIETARY WORK</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Selected Work
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Practical engineering work built across North American clients, industrial operations, and our own proprietary platforms.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-6">
          {CASE_STUDIES.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#090e1a] border border-slate-800 hover:border-slate-700 transition-all duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider border ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.client}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.outcome}</span>
                  </div>

                  {project.hasStoreBadges && (
                    <div className="pt-2">
                      <AppStoreBadges variant="compact" />
                    </div>
                  )}
                </div>

                {/* Action Link */}
                <div className="shrink-0 flex items-center">
                  <Link
                    to={project.route}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 text-xs font-medium text-white transition-all shadow-md group"
                  >
                    <span>{project.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/30 border border-blue-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Have a problem you need engineered?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Tell us what you're trying to build. We'll figure out the architecture and path to production.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-all shadow-lg shrink-0"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkIndex;
