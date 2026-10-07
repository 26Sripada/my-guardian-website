import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Bell, Calendar, ArrowRight, TrendingUp, Sparkles, Terminal, Shield } from "lucide-react";

const ARTICLES = [
  {
    title: "Architecting High-Throughput Weather Ingestion on Microsoft Azure",
    category: "Cloud Engineering",
    readTime: "6 min read",
    date: "Case Technical Review",
    summary: "How we leveraged serverless Azure Functions and Event Hubs to process sensor telemetry with zero packet drop during meteorological anomalies.",
    route: "/work/weather-pipeline",
  },
  {
    title: "Automating Clinical QA Pipelines: Lessons from US Healthcare Releases",
    category: "QA & Automation",
    readTime: "8 min read",
    date: "Engineering Note",
    summary: "Building deterministic test case generation models and regression runners that eliminate manual verification lag in healthcare environments.",
    route: "/work/healthcare-qa",
  },
  {
    title: "Battery-Conscious Geospatial Telemetry in Flutter Consumer Apps",
    category: "Mobile Engineering",
    readTime: "5 min read",
    date: "Mobile Architecture",
    summary: "Balancing real-time GPS broadcasting with battery conservation algorithms in our My Guardian flagship safety SuperApp.",
    route: "/work/my-guardian",
  },
  {
    title: "Computer Vision & Geospatial Clustering in Civic Incident Redressal",
    category: "AI & GovTech",
    readTime: "7 min read",
    date: "AI Engineering",
    summary: "Preventing municipal backlog saturation through proximity-based deduplication algorithms and automated image defect verification.",
    route: "/work/civic-operations",
  },
];

const Insights: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>ENGINEERING INSIGHTS & CHANGELOG</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Technical Insights & Architectural Notes
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Read practical engineering breakdowns, architectural decisions, and product updates from the My Guardian Technologies team.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {ARTICLES.map((article, idx) => (
            <Link
              key={idx}
              to={article.route}
              className="group p-6 sm:p-8 rounded-2xl bg-[#090e1a] border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                    {article.category}
                  </span>
                  <span className="text-slate-500">{article.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-blue-400">
                <span>Read Architectural Case</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter / Direct Updates */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-blue-950/30 to-slate-900 border border-slate-800 text-center max-w-2xl mx-auto">
          <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white mb-2">Stay Connected with Our Engineering Team</h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
            For questions about our open architecture patterns or to discuss a technical collaboration, reach out to our team directly.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-all shadow-lg"
          >
            <span>Connect With Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Insights;
