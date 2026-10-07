import React from "react";
import { Link } from "react-router-dom";
import { Cpu, ArrowLeft, ArrowRight, CheckCircle2, Bot, Sparkles, Eye, FileText, Database, Shield } from "lucide-react";

const AiService: React.FC = () => {
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
            <Cpu className="w-3.5 h-3.5" />
            <span>INTELLIGENT SYSTEMS & AUTOMATION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            AI & Intelligent Automation
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            We don't build gimmicky toy demos. We engineer action-oriented AI systems, Computer Vision pipelines, and RAG architectures that automate real business operations.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact?service=ai"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/30"
            >
              <span>Discuss Your AI Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Core Philosophy Card */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-950/40 to-slate-900 border border-blue-500/30 p-6 sm:p-8 mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-bold">
            ACTION-ORIENTED AI PHILOSOPHY
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
            "Don't just answer questions. Automate the work behind them."
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            A traditional chatbot outputs text. An engineered AI assistant parses intent, queries your relational database, triggers a CRM update, creates an ERP ticket, and escalates to a human operator when confidence falls below the threshold.
          </p>

          {/* Workflow Diagram */}
          <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
            <div className="flex items-center gap-2 min-w-[600px]">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-white">User Request</span>
              <span className="text-blue-400">→</span>
              <span className="px-2.5 py-1 rounded bg-blue-500/20 text-cyan-300 border border-blue-500/40">Intent & Extraction</span>
              <span className="text-blue-400">→</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-white">Knowledge / API Query</span>
              <span className="text-blue-400">→</span>
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">Automated Action Trigger</span>
              <span className="text-blue-400">→</span>
              <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">Human Escalation (if needed)</span>
            </div>
          </div>
        </div>

        {/* Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit mb-4">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Custom AI Assistants & Helpdesks</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Enterprise customer support, employee IT helpdesks, and ticket generation bots connected to your proprietary knowledge base.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp & Webhook integrations</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Automated ticket creation & triage</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Computer Vision & OCR</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Automated image classification, defect detection, and OCR extraction. Proven in our civic-tech complaint verification systems.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Photo & document validation</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Duplicate image detection</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Retrieval-Augmented Generation (RAG)</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Private semantic search over your contracts, PDFs, schematics, and internal documentation without leaking confidential data.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Strict chunking & citation attribution</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Zero data pollution guarantees</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Document Intelligence & Parsing</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Transform unstructured invoices, medical records, legal clauses, and civic filings into structured JSON payloads.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Automated ERP & accounting syncing</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Human-in-the-loop review queues</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Have an AI or automation requirement?</h3>
            <p className="text-sm text-slate-400 mt-1">Let's discuss architecture, data security, and practical ROI.</p>
          </div>
          <Link
            to="/contact?service=ai"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shrink-0"
          >
            Start an AI Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AiService;

