import React from "react";
import { Link } from "react-router-dom";
import { Cloud, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const WeatherPipeline: React.FC = () => {
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
            <Cloud className="w-3.5 h-3.5" />
            <span>CANADIAN CLIENT • CLOUD DATA ENGINEERING</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Cloud Weather Data Pipeline
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Architected and deployed an automated, high-throughput meteorological data ingestion and processing pipeline for a Canadian client.
          </p>
        </div>

        {/* Brief Overview */}
        <div className="space-y-4 mb-8 text-sm text-slate-300 leading-relaxed">
          <p>
            The client required a scalable cloud solution to continuously ingest, standardize, and route high-frequency weather observations and sensor feeds from multiple external data providers without data loss during extreme weather events.
          </p>
          <p>
            We engineered an event-driven data pipeline that standardizes varied telemetry feeds, validates sensor data integrity, and triggers automated operational alert dispatches downstream.
          </p>
        </div>

        {/* Key Capabilities Delivered */}
        <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-4">
            Key Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span><strong>Cloud Data Architecture:</strong> Resilient, high-volume event ingestion and streaming.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span><strong>Automated Validation:</strong> Anomaly filtering and sensor data standardization.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span><strong>Operational Automation:</strong> Real-time threshold alerts and downstream feeds.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span><strong>System Reliability:</strong> Automated deployment, alerting, and 24/7 monitoring.</span>
            </div>
          </div>
        </div>

        {/* Outcome Box */}
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm text-emerald-300 mb-10">
          <strong>Outcome:</strong> Delivered a zero-touch, reliable cloud pipeline capable of handling severe weather surges with continuous operational uptime.
        </div>

        {/* Contact CTA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950/40 to-slate-900 border border-blue-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              Have a similar data engineering requirement?
            </h3>
            <p className="text-xs text-slate-400">
              We can help architect, build, and deploy reliable cloud pipelines for your team.
            </p>
          </div>
          <Link
            to="/contact?service=cloud"
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

export default WeatherPipeline;
