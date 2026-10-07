import React from "react";
import { Link } from "react-router-dom";
import { Layers, ArrowLeft, ArrowRight, CheckCircle2, Building2, Package, Users, Cpu, Shield, Sparkles, Workflow } from "lucide-react";
import { ProblemSelector } from "@/components/ProblemSelector";

const DOMAINS = [
  "ERP Systems",
  "CRM Systems",
  "HRMS & Payroll",
  "Inventory & Warehousing",
  "Healthcare & Clinic Tech",
  "Education Platforms",
  "B2B & D2C E-commerce",
  "Logistics & Fleet Dispatch",
  "Finance & Invoicing Engines",
  "Manufacturing & Plant Tools",
  "SCADA Telemetry Automation",
  "Customer & Vendor Portals",
  "Employee Self-Service Portals",
  "High-Density Admin Cockpits",
  "Ticketing & Helpdesk Systems",
  "Workflow & Approval Engines",
];

const CustomSoftwareService: React.FC = () => {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>END-TO-END CUSTOM SOFTWARE ENGINEERING</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Tell Us What You Need to Build. We'll Engineer It.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            We are domain-agnostic engineers. Whether you need a bespoke ERP, an internal operational tool, a CRM, a logistics platform, or an enterprise workflow system, we design and build software around your exact business requirements.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact?service=custom-software"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/30"
            >
              <span>Discuss Your Software Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Domain Breadth Grid */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DOMAIN-AGNOSTIC CAPABILITY</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Software Engineered For Any Industry
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-2xl leading-relaxed">
            We don't force your business into restrictive off-the-shelf templates with endless per-seat license fees. We build custom, production-ready software systems tailored to your unique operational logic.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {DOMAINS.map((domain, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">{domain}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scale: Small to Large */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              From Internal Tool to Enterprise Ecosystem
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Size doesn't matter. The engineering approach does.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800">
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
                TIER 01 • TARGETED
              </span>
              <h3 className="text-lg font-bold text-white mt-4 mb-2">Internal Tools & Automation</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Replacing chaotic spreadsheets, email chains, and manual data entry with focused portals, chatbots, or workflow scripts.
              </p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-800">
                Rapid delivery • High immediate ROI
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#090e1a] border border-blue-500/40 shadow-xl shadow-blue-950/40 ring-1 ring-blue-500/20">
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                TIER 02 • CORE BUSINESS
              </span>
              <h3 className="text-lg font-bold text-white mt-4 mb-2">Custom ERP, CRM & Mobile Apps</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Full-featured business platforms consolidating customer records, inventory, mobile operations, and financial invoicing.
              </p>
              <div className="text-[11px] font-mono text-emerald-400 pt-3 border-t border-slate-800">
                Full IP ownership • Zero per-seat tax
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800">
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold">
                TIER 03 • ENTERPRISE
              </span>
              <h3 className="text-lg font-bold text-white mt-4 mb-2">Integrated Platform Ecosystems</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Multi-tenant cloud architectures, real-time data pipelines, AI models, SCADA bridges, and high-availability microservices.
              </p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-800">
                SLA-backed • Global scalability
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Problem Selector */}
        <div className="mb-16">
          <ProblemSelector />
        </div>

        {/* Cost-Effective Positioning Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-950/40 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-1">
              COST-CONSCIOUS ENGINEERING
            </span>
            <h3 className="text-xl font-bold text-white">
              Enterprise-grade thinking without unnecessary enterprise overhead.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Practical engineering. Right-sized solutions. We work on fixed custom project contracts, dedicated team extension, or long-term engineering support.
            </p>
          </div>
          <Link
            to="/contact?service=custom-software"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shrink-0"
          >
            Request Project Scope
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomSoftwareService;

