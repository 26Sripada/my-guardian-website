import React from "react";
import { Link } from "react-router-dom";
import { Compass, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const CivicOperations: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </Link>
        </div>

        {/* Header */}
        <div className="pb-8 mb-8 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>CIVIC TECHNOLOGY & GOVTECH OPERATIONS</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            AI-Powered Civic Operations
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            A centralized civic operational platform uniting citizen complaint reporting, computer-vision verification, geospatial duplicate clustering, and municipal officer routing.
          </p>
        </div>

        {/* Brief Overview */}
        <div className="space-y-4 mb-8 text-sm text-slate-300 leading-relaxed">
          <p>
            Municipal administration frequently struggles with unstructured citizen grievance backlogs, duplicate reports for the same physical issue, and lack of visual proof during ticket resolution.
          </p>
          <p>
            We developed an intelligent civic operations platform combining computer-vision image verification, geospatial proximity indexing, and administrative escalation dashboards to route issues directly to responsible municipal teams.
          </p>
        </div>

        {/* Key Capabilities Delivered */}
        <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-4">
            Platform Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Vision-Based Verification:</strong> Computer vision checks classifying photo evidence upon submission.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Geospatial Clustering:</strong> Automated duplicate detection within localized GPS radius.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Municipal Cockpit:</strong> Administrative dashboard with SLA countdowns and team dispatch.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Photo Resolution Proofs:</strong> Mandatory post-repair image verification before ticket closure.</span>
            </div>
          </div>
        </div>

        {/* Outcome Box */}
        <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs sm:text-sm text-cyan-300 mb-10">
          <strong>Platform Impact:</strong> Streamlined municipal grievance backlogs into accountable, verifiable resolution workflows with auditable resolution proofs.
        </div>

        {/* Contact CTA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              Building civic, GovTech, or geospatial solutions?
            </h3>
            <p className="text-xs text-slate-400">
              We engineer scalable public-facing platforms, workflow automation, and administrative dispatch tools.
            </p>
          </div>
          <Link
            to="/contact?service=civic"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs shadow-lg shadow-cyan-600/30 transition-all shrink-0"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CivicOperations;
