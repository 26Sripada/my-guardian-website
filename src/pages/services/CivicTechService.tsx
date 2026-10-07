import React from "react";
import { Link } from "react-router-dom";
import { Landmark, ArrowLeft, ArrowRight, CheckCircle2, Shield, Eye, MapPin, Users, Activity, Layers } from "lucide-react";
import { PipelineVisualizer } from "@/components/PipelineVisualizer";

const CivicTechService: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SERVICES ARCHITECTURE</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="pb-10 mb-12 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-4">
            <Landmark className="w-3.5 h-3.5" />
            <span>GOVTECH & SMART CITY INFRASTRUCTURE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Civic Technology & Smart City Operations
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            We engineer public-safety platforms, AI-assisted municipal grievance systems, geospatial triage engines, and administrative command dashboards that connect citizens with municipal governance.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact?service=civic"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-sm transition-all shadow-lg shadow-cyan-600/30"
            >
              <span>Discuss Civic Technology</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/work/civic-operations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-medium text-sm transition-all"
            >
              <span>View Civic Operations Case Study</span>
            </Link>
          </div>
        </div>

        {/* Real Reference Flow */}
        <div className="mb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Civic Operations & Dispatch Architecture
          </h2>
          <PipelineVisualizer type="civic" />
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">AI-Powered Complaint Triage</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Computer vision models assessing photos to classify municipal issues (potholes, garbage, water leaks) and detect duplicate submissions within proximity.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Automated severity grading</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> GIS deduplication clustering</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Automated Officer Routing</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Direct mapping of complaints to ward-level field officers based on administrative boundary polygons and real-time workload queues.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Boundary polygon mapping</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> SLA tracking & automated escalations</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Authority Command Cockpit</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Unified command dashboards providing department heads and municipal leadership with real-time KPI overviews, heatmaps, and resolution proofs.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Geospatial complaint heatmaps</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Department performance benchmarking</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Public Safety & SOS Networks</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Emergency broadcast mechanisms, live SOS triggers, and trusted community circle networks proven in our My Guardian flagship platform.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Encrypted live GPS broadcasting</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Anonymous whistleblower protection</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Partnering on civic, public-sector, or smart-city tech?</h3>
            <p className="text-sm text-slate-400 mt-1">We engineer reliable, scalable platforms that bridge governance and citizen engagement.</p>
          </div>
          <Link
            to="/contact?service=civic"
            className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-sm transition-all shadow-lg shrink-0"
          >
            Start Civic Tech Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CivicTechService;

