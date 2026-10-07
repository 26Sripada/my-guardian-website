import React from "react";
import { Link } from "react-router-dom";
import { Cloud, ArrowLeft, ArrowRight, CheckCircle2, Server, Database, Activity, Cpu } from "lucide-react";

const CloudService: React.FC = () => {
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
            <Cloud className="w-3.5 h-3.5" />
            <span>CLOUD & DATA ENGINEERING</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Cloud Architecture & Data Pipelines
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            We architect, deploy, and maintain scalable cloud infrastructure, serverless compute, and high-throughput data processing systems across AWS, Azure, Google Cloud, or hybrid environments based on your requirements.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact?service=cloud"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/30"
            >
              <span>Discuss Cloud Engineering</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/work/weather-pipeline"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-medium text-sm transition-all"
            >
              <span>View Canadian Weather Pipeline Brief</span>
            </Link>
          </div>
        </div>

        {/* Capabilities Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit mb-4">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Multi-Cloud Infrastructure & Serverless</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Event-driven compute and managed services across AWS, Azure, and Google Cloud, designed for automatic scaling and zero idle costs.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Infrastructure as Code (IaC)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Zero-downtime deployments</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Data Pipelines & ETL Workloads</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Continuous ingestion streams, automated schema normalization, anomaly filtering, and aggregations feeding analytical dashboards.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Zero packet loss ingestion buffers</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> High-volume spatial and time-series data</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">API Gateways & Microservices</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Robust REST and GraphQL endpoints backed by distributed caching and tokenized authentication layers.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Rate limiting and DDoS protection</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Low-latency regional response times</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit mb-4">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Observability & Monitoring</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              End-to-end distributed tracing, metrics instrumentation, and automated alert paging for operational anomalies.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Real-time error diagnostics</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Cost-conscious cloud billing governance</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Planning a cloud migration or data pipeline?</h3>
            <p className="text-sm text-slate-400 mt-1">We design right-sized architectures with zero vendor lock-in overhead.</p>
          </div>
          <Link
            to="/contact?service=cloud"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shrink-0"
          >
            Start Cloud Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CloudService;
