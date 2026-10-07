import React from "react";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft, ArrowRight, CheckCircle2, MapPin, Store } from "lucide-react";
import { AppStoreBadges } from "@/components/AppStoreBadges";

const MyGuardianCaseStudy: React.FC = () => {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>FLAGSHIP PRODUCT • MY GUARDIAN</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            My Guardian: Citizen Safety & Civic Platform
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-6">
            Our flagship proprietary product built to empower citizens with real-time emergency SOS, GPS-tagged civic grievance reporting, and local community commerce discovery.
          </p>

          <AppStoreBadges />
        </div>

        {/* Brief Overview */}
        <div className="space-y-4 mb-8 text-sm text-slate-300 leading-relaxed">
          <p>
            Operating our own live consumer application gives our engineering team direct, end-to-end experience with production mobile apps, real-time location streaming, low-latency push notifications, and high-concurrency cloud backends.
          </p>
          <p>
            My Guardian integrates critical safety tools with civic accountability and local economic empowerment—bridging citizens, municipal administration, and local businesses in one cohesive ecosystem.
          </p>
        </div>

        {/* Key Product Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-5 rounded-2xl bg-[#090e1a] border border-slate-800">
            <div className="p-2 w-fit rounded-lg bg-blue-500/20 text-blue-400 mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">Emergency SOS</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Instant panic triggers with continuous live location telemetry to designated emergency contacts.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#090e1a] border border-slate-800">
            <div className="p-2 w-fit rounded-lg bg-emerald-500/20 text-emerald-400 mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">Civic Redressal</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Photo-verified grievance filing for road hazards, sanitation, and municipal upkeep with location tagging.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#090e1a] border border-slate-800">
            <div className="p-2 w-fit rounded-lg bg-sky-500/20 text-sky-400 mb-3">
              <Store className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">Local Discovery</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hyperlocal marketplace connecting citizens to neighborhood trades, clinics, and local businesses.
            </p>
          </div>
        </div>

        {/* Outcome Box */}
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm text-emerald-300 mb-10">
          <strong>Production Status:</strong> Live in production on both Google Play Store and Apple App Store, with continuous feature updates and active community engagement.
        </div>

        {/* Contact CTA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950/40 to-slate-900 border border-blue-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              Building a mobile product or consumer platform?
            </h3>
            <p className="text-xs text-slate-400">
              We bring real-world product engineering discipline to your startup or enterprise roadmap.
            </p>
          </div>
          <Link
            to="/contact?service=mobile"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs shadow-lg shadow-blue-600/30 transition-all shrink-0"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyGuardianCaseStudy;
