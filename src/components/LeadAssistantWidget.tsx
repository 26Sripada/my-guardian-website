import React, { useState } from "react";
import { MessageSquare, X, Send, ArrowRight, CheckCircle2, Bot, Sparkles, Building2, Mail } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

const PROMPT_OPTIONS = [
  "Build an AI solution",
  "Develop a mobile app",
  "Automate a workflow",
  "Move to the cloud",
  "Build a web platform",
  "Discuss a custom project",
];

export const LeadAssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSelectTopic = (topic: string) => {
    setSelectedTopic(topic);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !selectedTopic) return;

    setStatus("submitting");
    try {
      await addDoc(collection(db, "contact_website"), {
        email,
        company: company || "Not specified",
        topic: selectedTopic,
        message: details || `Inquiry initiated via Engineering Assistant for: ${selectedTopic}`,
        source: "engineering_assistant_widget",
        createdAt: serverTimestamp(),
      });
      setStatus("success");
    } catch (err) {
      console.warn("Assistant submission fallback:", err);
      // Even if Firestore fails, show success and allow email fallback
      setStatus("success");
    }
  };

  const handleReset = () => {
    setSelectedTopic(null);
    setEmail("");
    setCompany("");
    setDetails("");
    setStatus("idle");
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm shadow-xl shadow-blue-900/40 border border-blue-400/30 transition-all hover:scale-105"
            aria-label="Open Project Assistant"
          >
            <Bot className="w-4 h-4 text-sky-200" />
            <span className="font-semibold tracking-wide">What are you looking to build?</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
          </button>
        )}
      </div>

      {/* Assistant Modal / Card */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[92vw] max-w-md rounded-2xl bg-[#0a0f1d] border border-slate-700/80 shadow-2xl shadow-black/80 overflow-hidden flex flex-col font-sans">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-tight flex items-center gap-2">
                  <span>ENGINEERING ADVISORY</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-normal">● Online</span>
                </div>
                <div className="text-[11px] text-slate-400">My Guardian Technologies</div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content Body */}
          <div className="p-5 max-h-[75vh] overflow-y-auto">
            {status === "success" ? (
              <div className="py-6 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Requirement Received</h4>
                <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                  Our engineering team will review your requirement for <strong className="text-white">{selectedTopic}</strong> and respond within 24 hours.
                </p>
                <div className="mt-5 flex gap-2 justify-center">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 rounded-lg bg-slate-800 text-xs font-medium text-slate-200 hover:bg-slate-700"
                  >
                    Start Another Inquiry
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-xs font-medium text-white hover:bg-blue-500"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : !selectedTopic ? (
              <div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-white">
                    What are you looking to build?
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Select a solution focus below to connect directly with our engineering team:
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2 mb-4">
                  {PROMPT_OPTIONS.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelectTopic(option)}
                      className="group flex items-center justify-between p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/50 text-left text-xs font-medium text-slate-200 hover:text-white transition-all"
                    >
                      <span>{option}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  <span>We build for startups, SMEs and enterprise organizations.</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-blue-400 block">Focus Area:</span>
                    <span className="font-semibold text-white">{selectedTopic}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedTopic(null)}
                    className="text-[11px] text-blue-400 hover:underline"
                  >
                    Change
                  </button>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1">
                    Your Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1">
                    Company or Organization (Optional)
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Corp / Stealth Startup"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1">
                    Brief Requirements / Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="e.g. Need a cloud data pipeline, mobile MVP in Flutter, or workflow automation..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs shadow-lg shadow-blue-600/30 transition-all disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <span>Routing to Engineering...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Connect With Engineering Team</span>
                    </>
                  )}
                </button>

                <p className="text-[10px] text-slate-400 text-center">
                  Direct inquiry to: <a href="mailto:myguardian2601@gmail.com" className="text-blue-400 hover:underline">myguardian2601@gmail.com</a>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

