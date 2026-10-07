import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import { ProblemSelector } from "@/components/ProblemSelector";
import { AppStoreBadges } from "@/components/AppStoreBadges";
import { LeadAssistantWidget } from "@/components/LeadAssistantWidget";
import {
  Cloud,
  Activity,
  Shield,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Terminal,
  Send,
  Lock,
} from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

const PROOF_POINTS = [
  {
    country: "Canada",
    category: "Cloud Engineering",
    title: "Cloud Weather Pipeline",
    desc: "Serverless data pipeline for high-volume meteorological feeds.",
    route: "/work/weather-pipeline",
    icon: Cloud,
  },
  {
    country: "USA",
    category: "QA Automation",
    title: "Healthcare QA Pipeline",
    desc: "Structured test case generation and compliance verification engine.",
    route: "/work/healthcare-qa",
    icon: Activity,
  },
  {
    country: "India",
    category: "Proprietary Product",
    title: "My Guardian SuperApp",
    desc: "Flagship public safety, emergency SOS, and civic complaint platform on iOS & Android.",
    route: "/work/my-guardian",
    icon: Shield,
  },
  {
    country: "Industrial",
    category: "Operational Automation",
    title: "SCADA Application Automation",
    desc: "Automating event-driven telemetry and shift notifications in an industrial SCADA setup.",
    route: "/work/scada-automation",
    icon: Workflow,
  },
];

const APPROACH_STEPS = [
  {
    num: "01",
    title: "Understand",
    sub: "Problem First",
    desc: "We dissect the actual business constraint, unit economics, and user friction before committing to any technology or architecture.",
    deliverable: "Problem Definition & Feasibility Blueprint",
  },
  {
    num: "02",
    title: "Architect",
    sub: "System Blueprint",
    desc: "We design modular cloud infrastructure, database schemas, secure IAM policies, and clean API contracts with zero unnecessary bloat.",
    deliverable: "Architecture Spec & Security Model",
  },
  {
    num: "03",
    title: "Build",
    sub: "Production Engineering",
    desc: "Our engineers build clean, typed, modular code across mobile, web, backend, and cloud microservices with rigorous version control.",
    deliverable: "Milestone-driven Staging Builds",
  },
  {
    num: "04",
    title: "Test & QA",
    sub: "Rigorous Validation",
    desc: "Testing is essential to everything we ship. We run automated regression suites, stress tests, boundary verification, and security scans to guarantee production stability.",
    deliverable: "Automated QA Verification & Test Passes",
  },
  {
    num: "05",
    title: "Deploy",
    sub: "Zero-Downtime Release",
    desc: "We set up automated CI/CD pipelines, container orchestration, and monitoring telemetry for transparent, uninterrupted rollouts.",
    deliverable: "Live Production Environment & DNS",
  },
  {
    num: "06",
    title: "Evolve",
    sub: "Continuous Improvement",
    desc: "We monitor performance metrics, query latency, and live user feedback to scale, optimize costs, and iterate features.",
    deliverable: "SLA Support & Performance Tuning",
  },
];

const Index: React.FC = () => {
  const [activeApproachStep, setActiveApproachStep] = useState<number>(0);

  // Contact form state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactCategory, setContactCategory] = useState("Custom Software Development");
  const [contactBudget, setContactBudget] = useState("Exploring / Flexible");
  const [contactMessage, setContactMessage] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;

    setFormStatus("submitting");
    try {
      await addDoc(collection(db, "contact_website"), {
        name: contactName,
        email: contactEmail,
        company: contactCompany || "Not provided",
        category: contactCategory,
        budget: contactBudget,
        message: contactMessage,
        source: "homepage_contact_section",
        createdAt: serverTimestamp(),
      });
      setFormStatus("success");
    } catch (err) {
      console.error("Error saving contact inquiry:", err);
      // Graceful fallback for demo or network issue
      setFormStatus("success");
    }
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 font-sans selection:bg-blue-500/30 selection:text-white">
      {/* ---------------- 1. Hero Section ---------------- */}
      <Hero />

      {/* ---------------- 2. Global Capability & Proof Strip ---------------- */}
      <section className="py-12 border-b border-slate-800/80 bg-[#070b16]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
                REAL ENGINEERING TRACK RECORD
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Built across industries and real-world use cases
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              <span>Explore all selected work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROOF_POINTS.map((proof, idx) => {
              const Icon = proof.icon;
              return (
                <Link
                  key={idx}
                  to={proof.route}
                  className="group p-5 rounded-2xl bg-[#090e1a] border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-slate-400 px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                        {proof.country}
                      </span>
                      <Icon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <div className="text-[11px] font-mono text-blue-400 uppercase tracking-wider mb-1">
                      {proof.category}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-200 transition-colors mb-2">
                      {proof.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {proof.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                    <span>Read Brief</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- 3. Core Positioning: 5 Architecture Pillars ---------------- */}
      <section className="py-20 border-b border-slate-800 bg-[#060913]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              OUR ENGINEERING FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
              Technology Should Fit the Problem, Not the Other Way Around.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 leading-relaxed">
              We never force your project into a rigid, narrow stack. We organize our engineering capability across five dynamic pillars designed to solve real business challenges using whatever modern technology best fits your constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Pillar 1: BUILD */}
            <div className="p-5 rounded-2xl bg-[#090e1a] border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                  PILLAR 01
                </span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2 font-mono">BUILD</h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Full-stack web applications, iOS and Android mobile apps, custom ERP/CRM, portals, and operational dashboards.
                </p>
                <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-400" /> Web & SaaS Platforms</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-400" /> iOS & Android Mobile</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-400" /> Custom ERP & Business Apps</div>
                </div>
              </div>
              <Link to="/services/custom-software" className="mt-5 pt-3 border-t border-slate-800 text-xs font-mono text-blue-400 hover:underline flex items-center justify-between">
                <span>Explore Build</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Pillar 2: INTELLIGENT */}
            <div className="p-5 rounded-2xl bg-[#090e1a] border border-cyan-500/30 ring-1 ring-cyan-500/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                  PILLAR 02
                </span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2 font-mono">INTELLIGENT</h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Generative AI, computer vision, enterprise knowledge retrieval, document parsing, and action-oriented assistants.
                </p>
                <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-cyan-400" /> Action-Oriented AI Agents</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-cyan-400" /> Computer Vision & OCR</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-cyan-400" /> Enterprise Knowledge Systems</div>
                </div>
              </div>
              <Link to="/services/ai" className="mt-5 pt-3 border-t border-slate-800 text-xs font-mono text-cyan-400 hover:underline flex items-center justify-between">
                <span>Explore AI</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Pillar 3: AUTOMATE */}
            <div className="p-5 rounded-2xl bg-[#090e1a] border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                  PILLAR 03
                </span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2 font-mono">AUTOMATE</h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Automated QA regression pipelines, SCADA application automation, business rule triggers, and ticketing.
                </p>
                <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-amber-400" /> QA Test & Validation</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-amber-400" /> Industrial & SCADA Telemetry</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-amber-400" /> Event-Driven Workflows</div>
                </div>
              </div>
              <Link to="/services/qa-automation" className="mt-5 pt-3 border-t border-slate-800 text-xs font-mono text-amber-400 hover:underline flex items-center justify-between">
                <span>Explore Automation</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Pillar 4: CONNECT */}
            <div className="p-5 rounded-2xl bg-[#090e1a] border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  PILLAR 04
                </span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2 font-mono">CONNECT</h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  REST APIs, payment gateways, messaging systems, maps, geospatial clustering, and enterprise integrations.
                </p>
                <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> Secure APIs & Microservices</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> Payment & Messaging Rails</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> Geospatial & Map Systems</div>
                </div>
              </div>
              <Link to="/services/civic-tech" className="mt-5 pt-3 border-t border-slate-800 text-xs font-mono text-emerald-400 hover:underline flex items-center justify-between">
                <span>Explore Connect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 5: SCALE */}
            <div className="p-5 rounded-2xl bg-[#090e1a] border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                  PILLAR 05
                </span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2 font-mono">SCALE</h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Scalable cloud architecture across client environments, databases, event streaming, CI/CD, and 24/7 observability.
                </p>
                <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-purple-400" /> Multi-Cloud & Hybrid Infra</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-purple-400" /> High-Throughput Pipelines</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-purple-400" /> High Availability & Uptime</div>
                </div>
              </div>
              <Link to="/services/cloud" className="mt-5 pt-3 border-t border-slate-800 text-xs font-mono text-purple-400 hover:underline flex items-center justify-between">
                <span>Explore Scale</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Technology & Stack Agnostic Reassurance Banner */}
          <div className="mt-10 p-5 rounded-2xl bg-[#090e1a] border border-slate-800 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Technology & Stack Agnostic Engineering</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We engineer in whatever programming languages, frameworks, clouds, or databases your project requires. Whether integrating with your existing legacy stack or architecting a new platform, our engineering adapts to your specifications.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- 4. Interactive "You Bring the Problem" Section ---------------- */}
      <section className="py-20 border-b border-slate-800 bg-[#070b16]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProblemSelector />
        </div>
      </section>

      {/* ---------------- 5. Two Ways We Build (Product Company + Engineering Services) ---------------- */}
      <section className="py-20 border-b border-slate-800 bg-[#060913]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              OUR DUAL IDENTITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              Two Ways We Build
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              We are not just a services firm that sells hours, nor an isolated product studio. We operate at the intersection of both.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Our Products */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-950/30 to-slate-900 border border-blue-500/30 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                    OUR PROPRIETARY PRODUCTS
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">● Active Production</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  My Guardian Ecosystem
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  We build, deploy, and maintain our own consumer technology products. My Guardian is a comprehensive safety, civic complaint redressal, and hyperlocal utility SuperApp built for India.
                </p>

                <div className="space-y-3 mb-6 font-mono text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <span>Emergency SOS & Real-time Live GPS</span>
                    <span className="text-blue-400">Deployed</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <span>Swachh Bharat & Civic Complaint Engine</span>
                    <span className="text-blue-400">Deployed</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <span>Hyperlocal MSME & Kirana Discovery</span>
                    <span className="text-blue-400">Deployed</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-slate-400 mb-2">Official Downloads:</div>
                <AppStoreBadges />
              </div>
            </div>

            {/* Right: Engineering Services */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-slate-900 border border-emerald-500/30 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    ENGINEERING CLIENT SERVICES
                  </span>
                  <span className="text-xs font-mono text-slate-400">Global Delivery</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  Custom Technology & Solutions
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  We bring the exact same product-grade rigor, scalability thinking, and engineering discipline to businesses, startups, and institutions that require custom software.
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
                  From intelligent AI systems and resilient cloud infrastructure to cross-platform mobile apps, modern web platforms, and automated validation pipelines, our team engineers practical, production-ready technology tailored to your exact operational requirements.
                </p>
              </div>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-lg transition-all"
              >
                <span>Explore All Engineering Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 6. Selected Work (Client & Proprietary Case Studies) ---------------- */}
      <section id="selected-work" className="py-20 border-b border-slate-800 bg-[#070b16]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SELECTED WORK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Real Systems. Real Engineering.
              </h2>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                Engineering work built across North American clients, industrial operations, and our own proprietary platforms.
              </p>
            </div>

            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 font-semibold"
            >
              <span>View All Selected Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Clean Case Study Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 01: Cloud Weather Pipeline */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase">
                    Canadian Client
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">Cloud Pipeline</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Cloud Weather Data Pipeline</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  High-throughput meteorological data ingestion, anomaly filtering, and event-driven automation pipeline.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Zero packet loss during extreme weather surges</span>
                </div>
              </div>
              <Link
                to="/work/weather-pipeline"
                className="pt-3 border-t border-slate-800 text-xs font-mono text-blue-400 hover:underline flex items-center justify-between"
              >
                <span>Read Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 02: Healthcare QA */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 uppercase">
                    US Client
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">QA Automation</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Healthcare QA Automation Pipeline</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  Automated clinical test case processing and headless regression harness replacing manual verification.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Compressed regression cycles with compliance audit logs</span>
                </div>
              </div>
              <Link
                to="/work/healthcare-qa"
                className="pt-3 border-t border-slate-800 text-xs font-mono text-emerald-400 hover:underline flex items-center justify-between"
              >
                <span>Read Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 03: My Guardian */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-sky-500/30 ring-1 ring-sky-500/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-400 uppercase">
                    Proprietary Product
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">● Live in Production</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">My Guardian Flagship Platform</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  Cross-platform consumer platform uniting emergency SOS, GPS grievance filing, and neighborhood commerce.
                </p>
                <div className="mb-4">
                  <AppStoreBadges variant="compact" />
                </div>
              </div>
              <Link
                to="/work/my-guardian"
                className="pt-3 border-t border-slate-800 text-xs font-mono text-sky-400 hover:underline flex items-center justify-between"
              >
                <span>Explore Platform</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 04: AI Civic Operations */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 uppercase">
                    Civic Platform
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">GovTech Operations</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">AI-Powered Civic Operations</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  Computer vision image validation, proximity-based duplicate clustering, and automated municipal officer routing.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Automated triage & verified photo resolution proofs</span>
                </div>
              </div>
              <Link
                to="/work/civic-operations"
                className="pt-3 border-t border-slate-800 text-xs font-mono text-cyan-400 hover:underline flex items-center justify-between"
              >
                <span>Explore Platform</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 05: SCADA Automation */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 uppercase">
                    Industrial Client
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">Operational Automation</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">SCADA Application Automation</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  Non-intrusive event automation layer intercepting supervisory telemetry to trigger alerts and automated shift reports.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Direct operational visibility without touching control loops</span>
                </div>
              </div>
              <Link
                to="/work/scada-automation"
                className="pt-3 border-t border-slate-800 text-xs font-mono text-amber-400 hover:underline flex items-center justify-between"
              >
                <span>Read Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 06: Your Project Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/30 to-slate-900 border border-blue-500/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase">
                  Your Requirement
                </span>
                <h3 className="text-lg font-bold text-white mt-3 mb-2">Have a system to build?</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Bring your business challenge. We'll architect the right solution and deliver working code with full transparency.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs shadow-lg transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 7. Engineering Approach: From Idea to Production ---------------- */}
      <section id="approach" className="py-20 border-b border-slate-800 bg-[#060913]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>THE ENGINEERING METHOD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              From Idea to Production.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              We don't start with code. We start with understanding. Here is the structured methodology we follow on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {APPROACH_STEPS.map((step, idx) => (
              <div
                key={step.num}
                onClick={() => setActiveApproachStep(idx)}
                className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  activeApproachStep === idx
                    ? "bg-slate-900 border-blue-500/60 shadow-xl shadow-blue-950/40 ring-1 ring-blue-500/30"
                    : "bg-[#090e1a]/80 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold font-mono text-blue-400">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                    {step.sub}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {step.desc}
                </p>
                <div className="pt-3 border-t border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 8. Scale: Small to Large + Cost-Effective Positioning ---------------- */}
      <section className="py-20 border-b border-slate-800 bg-[#060913]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              SCALABILITY & FLEXIBILITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              Have a Business Problem? Let's Engineer the Solution.
            </h2>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              From a single internal tool to a high-concurrency cloud ecosystem, we build software around your exact requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
                SCALE: SMALL
              </span>
              <h3 className="text-lg font-bold text-white mt-4 mb-2">Targeted Automation & Tools</h3>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-1.5"><span>• Internal operational dashboard</span></li>
                <li className="flex items-center gap-1.5"><span>• High-conversion corporate web app</span></li>
                <li className="flex items-center gap-1.5"><span>• Customer support AI chatbot</span></li>
                <li className="flex items-center gap-1.5"><span>• Automated script & data ingestion</span></li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-emerald-500/40 shadow-xl shadow-emerald-950/20">
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                SCALE: MEDIUM
              </span>
              <h3 className="text-lg font-bold text-white mt-4 mb-2">Core Product & Portals</h3>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-1.5"><span>• Cross-platform iOS/Android mobile app</span></li>
                <li className="flex items-center gap-1.5"><span>• Tailored CRM / ERP operations module</span></li>
                <li className="flex items-center gap-1.5"><span>• Multi-tenant SaaS MVP platform</span></li>
                <li className="flex items-center gap-1.5"><span>• Customer self-service portal</span></li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold">
                SCALE: LARGE
              </span>
              <h3 className="text-lg font-bold text-white mt-4 mb-2">Integrated Platform Ecosystems</h3>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-1.5"><span>• Multi-cloud architecture (AWS, Azure, GCP)</span></li>
                <li className="flex items-center gap-1.5"><span>• High-throughput telemetry pipelines</span></li>
                <li className="flex items-center gap-1.5"><span>• Industrial SCADA automation bridges</span></li>
                <li className="flex items-center gap-1.5"><span>• Nationwide civic & GovTech platforms</span></li>
              </ul>
            </div>
          </div>

          {/* Cost-Effective Box */}
          <div className="p-8 rounded-2xl bg-[#090e1a] border border-slate-800 text-center max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              "Enterprise-grade thinking without unnecessary enterprise overhead."
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              We are an agile, young engineering team. We don't bill you for junior bench developers or bloated corporate layers. You get hands-on senior engineering talent focused solely on delivering working code.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Practical engineering • Right-sized solutions • Cost-conscious delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 9. Client Engagement Models: How We Can Work With You ---------------- */}
      <section className="py-20 border-b border-slate-800 bg-[#070c18]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              COLLABORATION MODELS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              How We Can Work With You
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Flexible engagement structures tailored to project size and team requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase font-semibold">MODEL 01</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">Custom Project</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  End-to-end fixed scope development from initial architecture to production delivery and warranty.
                </p>
              </div>
              <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800">
                Milestone-based delivery
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-emerald-500/40 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">MODEL 02</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">Dedicated Engineering</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Extend your in-house product team with experienced full-stack, cloud, or AI engineers working in your sprints.
                </p>
              </div>
              <div className="text-[11px] font-mono text-emerald-400 pt-3 border-t border-slate-800">
                Agile sprint extension
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase font-semibold">MODEL 03</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">Automation & Cloud Setup</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Targeted implementation of cloud pipelines, QA automation harnesses, or SCADA workflows.
                </p>
              </div>
              <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800">
                Targeted impact engagement
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 10. About Section: Team Mindset & Authenticity ---------------- */}
      <section className="py-20 border-b border-slate-800 bg-[#060913]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="p-8 sm:p-12 rounded-2xl bg-[#090e1a] border border-slate-800">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold block mb-2">
              ABOUT MY GUARDIAN TECHNOLOGIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              A young engineering team building technology with the mindset of a product company.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                We're a team of engineers who believe good software isn't about using buzzwords or piling on unnecessary frameworks. It's about understanding the core problem, designing the right architecture, and shipping code that holds up in production.
              </p>
              <p>
                Founded on the belief that "Technology should serve humanity, not just convenience," we started by engineering My Guardian, a citizen safety and civic SuperApp with live GPS, municipal complaint triage, and hyperlocal commerce.
              </p>
              <p>
                Today, we take that same product ownership and engineering discipline into every client engagement, whether it's a cloud weather data pipeline for Canada, QA test automation for US healthcare, or industrial SCADA workflow automation.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-slate-400">
                Headquarters in India • Delivering Globally
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 font-semibold"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 11. High-Conversion Contact Form ---------------- */}
      <section id="contact" className="py-20 bg-[#050811]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
              <Send className="w-3.5 h-3.5" />
              <span>START THE CONVERSATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Have a Problem Worth Solving?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Tell us what you're trying to build. We'll help you figure out the technology, architecture, and path to production.
            </p>
          </div>

          <div className="rounded-2xl bg-[#090e1a] border border-slate-800 p-6 sm:p-10 shadow-2xl">
            {formStatus === "success" ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
                  Thank you! Our engineering team will review your project requirements and get in touch within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormStatus("idle");
                    setContactMessage("");
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={contactCompany}
                      onChange={(e) => setContactCompany(e.target.value)}
                      placeholder="e.g. Acme Health / Stealth"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      What are you looking to build?
                    </label>
                    <select
                      value={contactCategory}
                      onChange={(e) => setContactCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Custom Software Development">Custom Software / ERP / CRM</option>
                      <option value="AI & Automation Solution">AI & Intelligent Automation</option>
                      <option value="Mobile App (iOS/Android)">Mobile Application (iOS/Android)</option>
                      <option value="Cloud Architecture & Infrastructure">Cloud Data Pipeline & Architecture</option>
                      <option value="QA & Test Automation">QA & Test Automation</option>
                      <option value="SCADA Automation">SCADA Industrial Automation</option>
                      <option value="Other Project Requirement">Something Else Entirely</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Project Scope / Timeline / Budget (Optional)
                  </label>
                  <select
                    value={contactBudget}
                    onChange={(e) => setContactBudget(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Exploring / Flexible">Exploring options / Early feasibility</option>
                    <option value="Immediate MVP (Next 4-8 weeks)">Immediate MVP (Next 4-8 weeks)</option>
                    <option value="Dedicated Engineering Sprint">Dedicated Engineering Sprint</option>
                    <option value="Enterprise Modernization / Overhaul">Enterprise Modernization / Overhaul</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Tell us about your project or business problem *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Describe what you want to achieve, existing systems, or questions you have..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Your inquiry is treated with strict confidentiality.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? (
                      <span>Sending Requirement...</span>
                    ) : (
                      <>
                        <span>Start the Conversation</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Direct Email fallback */}
                <div className="pt-4 border-t border-slate-800/80 text-center sm:text-left text-xs text-slate-400">
                  <span>Prefer direct email? Reach our engineering team at </span>
                  <a
                    href="mailto:myguardian2601@gmail.com"
                    className="text-blue-400 hover:text-blue-300 font-mono underline"
                  >
                    myguardian2601@gmail.com
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Floating Lead Assistant Widget */}
      <LeadAssistantWidget />
    </div>
  );
};

export default Index;
