import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";

const SERVICE_PILLARS = [
  {
    pillar: "BUILD",
    tagline: "High-density digital products & enterprise software",
    services: [
      { name: "Web Applications & SaaS", route: "/services/web", desc: "Modern web applications, multi-tenant SaaS platforms, customer portals, and administrative cockpits." },
      { name: "Mobile Applications", route: "/services/mobile", desc: "Production-grade iOS and Android mobile applications engineered for performance and offline reliability." },
      { name: "Custom Software & ERP / CRM", route: "/services/custom-software", desc: "Bespoke operational systems, internal tooling, workflow automation, and enterprise integrations." },
    ],
  },
  {
    pillar: "INTELLIGENT",
    tagline: "Action-oriented AI systems, knowledge retrieval & computer vision",
    services: [
      { name: "AI & Intelligent Automation", route: "/services/ai", desc: "Generative AI, enterprise knowledge retrieval, computer vision, and task-executing operational assistants." },
      { name: "Civic & Smart City AI", route: "/services/civic-tech", desc: "Automated complaint classification, vision-based verification, and municipal operational triage." },
    ],
  },
  {
    pillar: "AUTOMATE",
    tagline: "Eliminating manual bottlenecks across software & operational workflows",
    services: [
      { name: "QA & Test Automation", route: "/services/qa-automation", desc: "Automated regression pipelines, clinical/enterprise test generation, and compliance verification." },
      { name: "Industrial & SCADA Automation", route: "/work/scada-automation", desc: "Supervisory telemetry processing, threshold alert triggers, and automated operational dispatches." },
    ],
  },
  {
    pillar: "CONNECT",
    tagline: "Interfacing disparate APIs, payment rails & third-party services",
    services: [
      { name: "APIs & System Integration", route: "/services/custom-software", desc: "REST and microservice APIs, payment gateways, geospatial maps, and data synchronization." },
    ],
  },
  {
    pillar: "SCALE",
    tagline: "Cloud infrastructure, data pipelines & continuous reliability",
    services: [
      { name: "Cloud & Data Engineering", route: "/services/cloud", desc: "Resilient cloud infrastructure, automated data pipelines, serverless workflows, and high-availability databases across any cloud." },
    ],
  },
];

const ServicesIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>PRODUCT & TECHNOLOGY SERVICES ARCHITECTURE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Services Built Around Your Problem.
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-6">
            We don't restrict you to a rigid predefined list or sell boilerplate hours. We organize our engineering capability around five core pillars: <strong>BUILD</strong>, <strong>INTELLIGENT</strong>, <strong>AUTOMATE</strong>, <strong>CONNECT</strong>, and <strong>SCALE</strong>.
          </p>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs sm:text-sm text-slate-300 font-mono flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>Technology Agnostic:</strong> We engineer in whatever language, framework, cloud, or database best fits your existing architecture and constraints.</span>
          </div>
        </div>

        {/* Pillars Display */}
        <div className="space-y-10 mb-20">
          {SERVICE_PILLARS.map((pillarGroup) => (
            <div
              key={pillarGroup.pillar}
              className="rounded-2xl bg-[#090e1a] border border-slate-800 p-6 sm:p-8 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wider font-mono">
                    {pillarGroup.pillar}
                  </h2>
                </div>
                <span className="text-xs sm:text-sm font-mono text-slate-400">
                  {pillarGroup.tagline}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pillarGroup.services.map((srv) => (
                  <Link
                    key={srv.name}
                    to={srv.route}
                    className="group p-5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                        {srv.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-blue-400">
                      <span>Explore Capability</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Need a custom engineering combination?
            </h3>
            <p className="text-sm text-slate-400">
              Tell us your business requirement and we'll architect the right solution from day one.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/30 shrink-0"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesIndex;
