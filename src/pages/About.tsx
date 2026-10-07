import React from "react";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Shield, Lightbulb, ArrowRight, CheckCircle2, Terminal, Code2, Cpu } from "lucide-react";
import { AppStoreBadges } from "@/components/AppStoreBadges";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>ABOUT MY GUARDIAN TECHNOLOGIES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Engineering digital products with the mindset of a product company.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            "Technology should serve humanity, not just convenience."
            <br />
            We are a team of young engineers who believe good software isn't about using the most buzzwords. It's about solving the right problem with the right architecture.
          </p>
        </div>

        {/* Dual Core: Products + Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-8 rounded-2xl bg-[#090e1a] border border-blue-500/30">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Our Proprietary Products</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              We architect and operate our own live platforms, led by <strong>My Guardian</strong>, our civic safety SuperApp empowering citizens across India with live SOS telemetry, anonymous grievance filing, and neighborhood commerce.
            </p>
            <div className="pt-2">
              <AppStoreBadges variant="compact" />
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#090e1a] border border-emerald-500/30">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Client Engineering Services</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              We bring our production-tested product standards directly to startups, businesses, and enterprises needing custom AI workflows, scalable cloud data pipelines, mobile apps, or industrial SCADA automation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:underline pt-2"
            >
              <span>Discuss Engineering Engagement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Authentic Story Section */}
        <div className="p-8 sm:p-12 rounded-2xl bg-slate-900/60 border border-slate-800 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our Authentic Story</h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              In a world where personal safety, community growth, and civic transparency are critical, <strong className="text-white">My Guardian Technologies</strong> was born out of a simple yet powerful belief:
              <em className="text-blue-300 block my-2 font-mono text-sm">"Technology should serve humanity, not just convenience."</em>
            </p>
            <p>
              Founded by two visionary engineers from a region with limited initial tech access, our journey started with the mission of safeguarding women, children, and senior citizens through intelligent software and affordable safety tools.
            </p>
            <p>
              What started as an urgent safety project quickly evolved into a dual-engine technology company:
            </p>
            <ul className="space-y-2 font-mono text-xs sm:text-sm text-slate-300 pl-4 border-l-2 border-blue-500 my-4">
              <li>1. A <strong>Flagship SuperApp</strong> uniting emergency SOS, Swachh Bharat civic reporting, and local business support.</li>
              <li>2. A <strong>Software Engineering Firm</strong> building cloud architectures (Canada), healthcare QA pipelines (USA), and SCADA automations for global businesses.</li>
            </ul>
            <p>
              We don't inflate our background or invent fictional corporate pedigrees. We let our working systems, verified architectures, and relentless engineering commitment speak for themselves.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800">
            <Target className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              To engineer dependable, high-impact technology solutions, from civic infrastructure to enterprise software, that solve tangible problems without unnecessary overhead.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800">
            <Eye className="w-8 h-8 text-cyan-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              To be recognized as a world-class engineering partner and product powerhouse trusted by startups, enterprises, and civic institutions globally.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800">
            <Cpu className="w-8 h-8 text-emerald-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Engineering Standard</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Zero fluff. Deterministic architecture. Typed, maintainable code. Continuous delivery with real observability and SLA accountability.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Core Engineering Values</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <Shield className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-white">Integrity First</div>
              <div className="text-[11px] text-slate-400 mt-1">Honest capability, zero fake metrics.</div>
            </div>
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <Terminal className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-white">Problem-Driven</div>
              <div className="text-[11px] text-slate-400 mt-1">Tech follows the constraint.</div>
            </div>
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <Users className="w-6 h-6 text-sky-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-white">Human Impact</div>
              <div className="text-[11px] text-slate-400 mt-1">Software that protects and empowers.</div>
            </div>
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <Lightbulb className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-white">Cost-Conscious</div>
              <div className="text-[11px] text-slate-400 mt-1">Enterprise rigor, zero bloat.</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/30 border border-blue-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Want to collaborate with our engineering team?
            </h3>
            <p className="text-sm text-slate-400">
              Tell us about your technical goals. We're ready to engineer.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shrink-0"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
