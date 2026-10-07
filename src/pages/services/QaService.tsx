import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, ArrowRight, Shield, Activity, FileCheck, Cpu, Zap, Database } from "lucide-react";
import { PipelineVisualizer } from "@/components/PipelineVisualizer";

const QaService: React.FC = () => {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>QUALITY ENGINEERING & AUTOMATION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            QA & Automated Test Pipelines
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Eliminate costly manual QA cycles and shipping regressions. We engineer deterministic test case pipelines, end-to-end regression runners, and compliance verification harnesses—proven with US healthcare enterprise clients.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact?service=qa"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-lg shadow-emerald-600/30"
            >
              <span>Discuss QA Automation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/work/healthcare-qa"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-medium text-sm transition-all"
            >
              <span>View US Healthcare QA Case Study</span>
            </Link>
          </div>
        </div>

        {/* Real Reference Flow */}
        <div className="mb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Automated Validation Workflow
          </h2>
          <PipelineVisualizer type="healthcare" />
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit mb-4">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Automated Test Case Generation</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Ingesting user stories, business rules, and API specifications to generate executable test scenario matrices automatically.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Combinatorial edge-case coverage</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Traceability back to requirements</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Continuous CI/CD Regression Harness</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Headless browser (Playwright / Cypress) and API test runners integrated directly into GitHub Actions or Azure DevOps pipelines.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Automated deployment blocking on failures</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Parallelized cloud execution</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit mb-4">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Healthcare & Regulated System QA</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Strict audit trails, synthetic PII-safe test fixtures, and regulatory compliance validation for sensitive software environments.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Auditable compliance test logs</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Synthetic healthcare record generation</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">API & Contract Testing</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Schema contract validation, load testing, boundary simulations, and security penetration checks for backend microservices.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Breaking change prevention</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Microservice contract guarantees</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Tired of regressions slowing down your releases?</h3>
            <p className="text-sm text-slate-400 mt-1">Let's build an automated testing pipeline tailored to your codebase.</p>
          </div>
          <Link
            to="/contact?service=qa"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-lg shrink-0"
          >
            Automate QA Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QaService;

