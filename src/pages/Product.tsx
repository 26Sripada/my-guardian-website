import React from "react";
import { Link } from "react-router-dom";
import { Shield, Phone, MapPin, Camera, Store, Heart, Zap, CheckCircle2, ArrowRight, ExternalLink, Sparkles, AlertTriangle } from "lucide-react";
import { AppStoreBadges } from "@/components/AppStoreBadges";

const Product: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>OUR FLAGSHIP PROPRIETARY PRODUCT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            My Guardian: Citizen Safety & Civic SuperApp
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            A citizen-first digital ecosystem empowering individuals with emergency SOS alerts, GPS-tagged civic issue reporting, and neighborhood commerce discovery—supporting India’s Smart Cities and Digital India vision.
          </p>

          {/* Official Store Links */}
          <div className="pt-2">
            <AppStoreBadges />
          </div>
        </div>


        {/* Primary Features */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ecosystem Core Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Combining personal safety, municipal accountability, and neighborhood economic growth into one unified platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-blue-500/40 flex flex-col justify-between">
              <div>
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Emergency SOS & Live Location</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Double-tap panic alert broadcasting real-time continuous GPS coordinates to registered emergency contacts.
                </p>
                <ul className="space-y-2 text-xs font-mono text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Instant alert notification</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Low-battery background polling</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Trusted circle status monitors</li>
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-blue-400">
                Production Feature
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-emerald-500/40 flex flex-col justify-between">
              <div>
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Civic Complaints Redressal</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Anonymous photo/video grievance filing for garbage dumps, potholes, water leaks, and municipal hazards supporting Swachh Bharat.
                </p>
                <ul className="space-y-2 text-xs font-mono text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> GPS metadata verification</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Whistleblower identity protection</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Ward jurisdiction routing</li>
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400">
                Production Feature
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-sky-500/40 flex flex-col justify-between">
              <div>
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 w-fit mb-4">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Local Business & MSME Discovery</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Hyperlocal listings for neighborhood kirana stores, verified technicians, clinics, and small-scale domestic manufacturers.
                </p>
                <ul className="space-y-2 text-xs font-mono text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Proximity-based discovery</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Verified neighborhood ratings</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> MSME direct inquiries</li>
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-sky-400">
                Production Feature
              </div>
            </div>
          </div>
        </div>

        {/* Real Problem & Engineering Solution */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-blue-950/30 to-slate-900 border border-slate-800 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2 font-bold">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>THE CHALLENGE WE SET OUT TO SOLVE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Bridging Emergency Response, Civic Accountability, and Local Commerce
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            India's citizens frequently grapple with delayed emergency responses, lack of visibility into local civic complaint resolutions, and digital isolation for small neighborhood businesses. My Guardian bridges these disconnected services into one dependable platform.
          </p>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
            "Whether it's triggering an emergency alert for loved ones, holding civic bodies accountable for infrastructure upkeep, or discovering a trusted local tradesperson—My Guardian puts the power in the hands of the citizen."
          </div>
        </div>

        {/* Product Download & Engineering Service Bridge */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              Want our team to build an app for your organization?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              We bring the same production-grade mobile engineering capability to your startup or enterprise platform.
            </p>
          </div>
          <Link
            to="/contact?service=mobile"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-all shadow-lg shrink-0"
          >
            <span>Discuss Mobile App Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;