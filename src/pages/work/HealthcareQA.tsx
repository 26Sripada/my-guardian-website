import React from "react";
import { Link } from "react-router-dom";
import { Activity, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const HealthcareQA: React.FC = () => {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>US CLIENT • HEALTHCARE QA AUTOMATION</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Healthcare QA Automation Pipeline
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Engineered an automated clinical test case processing, validation, and continuous regression pipeline for a US healthcare technology client.
          </p>
        </div>

        {/* Brief Overview */}
        <div className="space-y-4 mb-8 text-sm text-slate-300 leading-relaxed">
          <p>
            The client operated mission-critical healthcare software where complex clinical workflows and compliance requirements made manual testing slow and error-prone. Feature releases required days of manual verification before staging deployments.
          </p>
          <p>
            We engineered an automated QA pipeline that parses clinical requirements into structured test definitions, executes automated regression suites across endpoints, and generates auditable verification reports.
          </p>
        </div>

        {/* Key Capabilities Delivered */}
        <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-4">
            Key Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Automated Test Generation:</strong> Parsing complex clinical requirements into repeatable tests.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Headless Regression Runner:</strong> Parallelized execution against staging APIs and user endpoints.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Auditable Diagnostic Reports:</strong> Structured pass/fail breakdowns with full trace logs.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>CI/CD Gate Integration:</strong> Deterministic pre-deployment validation gate.</span>
            </div>
          </div>
        </div>

        {/* Outcome Box */}
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm text-emerald-300 mb-10">
          <strong>Outcome:</strong> Replaced multi-day manual verification with a deterministic automated release gate, accelerating deployment cycles while maintaining compliance.
        </div>

        {/* Contact CTA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              Need automated QA or validation for your software?
            </h3>
            <p className="text-xs text-slate-400">
              We design robust test harnesses and regression automation for complex systems.
            </p>
          </div>
          <Link
            to="/contact?service=qa"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-lg shadow-emerald-600/30 transition-all shrink-0"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthcareQA;
