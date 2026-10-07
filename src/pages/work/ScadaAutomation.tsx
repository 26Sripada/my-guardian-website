import React from "react";
import { Link } from "react-router-dom";
import { Cpu, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const ScadaAutomation: React.FC = () => {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>INDUSTRIAL CLIENT • SCADA WORKFLOW AUTOMATION</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            SCADA Application Automation
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Automating operational workflows, event-driven notifications, and shift reporting around an industrial supervisory control and telemetry (SCADA) environment.
          </p>
        </div>

        {/* Brief Overview */}
        <div className="space-y-4 mb-8 text-sm text-slate-300 leading-relaxed">
          <p>
            Industrial supervisory systems monitor continuous telemetry, but plant operators often rely on manual oversight for alert escalation and shift log compilation. The client needed an automated bridge between supervisory alarms and engineering dispatch without disrupting plant control loops.
          </p>
          <p>
            We engineered an isolated, event-driven automation layer that intercepts read-only telemetry, validates dynamic thresholds, and dispatches automated notifications and shift logs directly to operations teams.
          </p>
        </div>

        {/* Key Capabilities Delivered */}
        <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-4">
            Key Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Isolated Telemetry Bridge:</strong> Non-intrusive read-only event listener preserving control loop safety.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Rules & Events Engine:</strong> Dynamic threshold validation and priority alert classification.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Automated Dispatch:</strong> Multi-channel operational alerting to technicians and plant managers.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Automated Shift Logs:</strong> Digital record compilation replacing manual paper shift handovers.</span>
            </div>
          </div>
        </div>

        {/* Outcome Box */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-300 mb-10">
          <strong>Outcome:</strong> Delivered real-time operational visibility and instant incident dispatch without disrupting mission-critical industrial control loops.
        </div>

        {/* Contact CTA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-950/40 to-slate-900 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              Need industrial, SCADA, or workflow automation?
            </h3>
            <p className="text-xs text-slate-400">
              We engineer dependable automation systems that bridge operational hardware and digital workflows.
            </p>
          </div>
          <Link
            to="/contact?service=automation"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/30 transition-all shrink-0"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScadaAutomation;
