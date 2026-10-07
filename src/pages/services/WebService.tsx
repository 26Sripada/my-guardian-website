import React from "react";
import { Link } from "react-router-dom";
import { Globe, ArrowLeft, ArrowRight, CheckCircle2, Layout, Database, Shield, Zap, Layers } from "lucide-react";

const WebService: React.FC = () => {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400 mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>WEB APPLICATION ENGINEERING</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Modern Web Applications & Enterprise Dashboards
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            We build high-performance, responsive web applications, multi-tenant SaaS platforms, and high-density operational portals engineered across modern web frameworks, robust APIs, and scalable cloud backends.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact?service=web"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/30"
            >
              <span>Build a Web Platform</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 w-fit mb-4">
              <Layout className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">High-Density Operational Cockpits</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Complex administrative dashboards, telemetry graphs, and multi-pane workflow consoles built for fast data consumption without lag.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Virtualized tables & real-time charts</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Granular role-based access control (RBAC)</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Multi-Tenant SaaS Architecture</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Scalable multi-tenant databases, billing integrations (Stripe, Razorpay), team seat permissions, and custom subdomain provisioning.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Isolated tenant security policies</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Automated subscription metering</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Lighthouse 95+ Performance</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Zero layout shifts, sub-second first contentful paint, aggressive edge caching, and optimized asset delivery for supreme conversion.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Core Web Vitals optimization</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Semantic accessibility & high-contrast UI</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Enterprise Security & IAM</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              SSO (SAML, OAuth, OIDC), multi-factor authentication, audit trails, CSRF/XSS hardening, and strict API token management.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> SOC2/compliance-aligned architecture</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Comprehensive immutable activity logs</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Need a modern web application or portal?</h3>
            <p className="text-sm text-slate-400 mt-1">We engineer platforms that delight users and handle enterprise scale effortlessly.</p>
          </div>
          <Link
            to="/contact?service=web"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shrink-0"
          >
            Start Web Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebService;

