import React from "react";
import { Link } from "react-router-dom";
import { Handshake, Building, Heart, Hospital, Leaf, ArrowRight, CheckCircle2, Shield, Landmark } from "lucide-react";

const CATEGORIES = [
  {
    icon: Landmark,
    title: "Government & Smart Cities",
    desc: "Collaborating with municipal corporations, smart-city missions, and emergency services (112).",
    points: [
      "Municipal grievance redressal system integration",
      "Smart city IoT & sensor data sharing",
      "Public safety and emergency coordination infrastructure",
      "Digital governance workflow support",
    ],
  },
  {
    icon: Hospital,
    title: "Healthcare & Emergency Response",
    desc: "Connecting hospitals, ambulance dispatch networks, and clinical providers for fast response.",
    points: [
      "Immediate emergency medical routing",
      "Direct ambulance dispatch integration",
      "Emergency medical information access",
      "Healthcare technology compliance assurance",
    ],
  },
  {
    icon: Building,
    title: "Insurance & Risk Assessment",
    desc: "Partnering with life, general, and health insurers to provide comprehensive safety coverage.",
    points: [
      "Emergency response protection plans",
      "Safety premium discounts for verified users",
      "Quick claims verification through app telemetry",
      "Risk assessment analytics for communities",
    ],
  },
  {
    icon: Heart,
    title: "NGOs & Community Networks",
    desc: "Collaborating with grassroots non-profits to protect women, children, and elderly citizens.",
    points: [
      "Volunteer coordination for emergency relief",
      "Women's safety awareness initiatives",
      "Grassroots community outreach programs",
      "Senior citizen welfare programs",
    ],
  },
  {
    icon: Leaf,
    title: "Swachh Bharat & Sanitation",
    desc: "Empowering clean living initiatives through transparent GPS-tagged civic issue reporting.",
    points: [
      "Public waste management complaint routing",
      "Community cleanliness drives",
      "Environmental monitoring and hazard reporting",
      "Sustainable development tracking",
    ],
  },
];

const Partnership: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
            <Handshake className="w-3.5 h-3.5" />
            <span>INSTITUTIONAL COLLABORATION & PARTNERSHIPS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Partner With My Guardian Technologies
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            We collaborate with civic authorities, healthcare providers, NGOs, and enterprise institutions to build a safer, smarter, and more accountable digital ecosystem.
          </p>

          <a
            href="mailto:myguardian2601@gmail.com?subject=Partnership%20Inquiry%20-%20My%20Guardian"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/30"
          >
            <span>Discuss Institutional Partnership</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Partnership Categories */}
        <div className="space-y-6 mb-16">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#090e1a] border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-400">{cat.desc}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-800/80 font-mono text-xs text-slate-300">
                  {cat.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Have a collaborative proposal?
            </h3>
            <p className="text-sm text-slate-400">
              Reach our leadership directly at <span className="text-blue-400 font-mono">myguardian2601@gmail.com</span>
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shrink-0"
          >
            <span>Contact Partnership Desk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
