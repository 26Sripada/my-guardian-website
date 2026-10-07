import React from "react";
import { Link } from "react-router-dom";
import { Smartphone, ArrowLeft, ArrowRight, CheckCircle2, Shield, MapPin, Zap, Layers, Bell } from "lucide-react";
import { AppStoreBadges } from "@/components/AppStoreBadges";

const MobileService: React.FC = () => {
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
            <Smartphone className="w-3.5 h-3.5" />
            <span>MOBILE ENGINEERING (IOS & ANDROID)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Mobile Application Development
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            We build performant, offline-first, location-aware mobile applications across iOS and Android. Engineered by a team who builds and operates consumer mobile apps with thousands of active downloads.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              to="/contact?service=mobile"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/30"
            >
              <span>Build a Mobile App</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/product"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-medium text-sm transition-all"
            >
              <span>Inspect Our Flagship App</span>
            </Link>
          </div>
        </div>

        {/* Flagship App Proof Strip */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950/30 to-slate-900 border border-emerald-500/30 p-6 sm:p-8 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-1">
              PROVEN IN PRODUCTION
            </span>
            <h3 className="text-xl font-bold text-white">
              My Guardian Mobile SuperApp
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Engineered for Android and iOS. Features real-time GPS telemetry, low-battery background polling, and crash-resilient cloud persistence.
            </p>
          </div>
          <div className="shrink-0">
            <AppStoreBadges variant="compact" />
          </div>
        </div>

        {/* Mobile Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Cross-Platform & Native Mobile</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              High-fidelity mobile applications that look, perform, and feel native on both iOS and Android, cutting delivery cycles and maintenance overhead.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 60fps animations & gestures</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Seamless App Store & Play Store compliance</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Location & Geospatial Systems</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Live continuous tracking, geofencing, radius queries, and map clustering optimized so your users' device batteries don't drain.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Google Maps & Mapbox integrations</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Geofence event triggers</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 w-fit mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Offline-First Data Sync</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Local database caching (SQLite / Hive) with deterministic bi-directional conflict resolution when mobile devices reconnect to network.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Zero UI freezing on poor connections</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Encrypted local credentials & tokens</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit mb-4">
              <Bell className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Push Notifications & Realtime Sync</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              FCM / APNs pipeline delivering instant alerts, background silent data pushes, and real-time chat/emergency broadcasts.
            </p>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> High-deliverability notification channels</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Analytics & user retention tracking</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Have a mobile app to engineer?</h3>
            <p className="text-sm text-slate-400 mt-1">From MVP to enterprise consumer scale, we build production-ready mobile apps.</p>
          </div>
          <Link
            to="/contact?service=mobile"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shrink-0"
          >
            Start Mobile Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileService;

