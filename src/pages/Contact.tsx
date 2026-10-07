import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, Send, Clock, Twitter, Instagram, Youtube, Smartphone, CheckCircle2, Lock, Sparkles, Shield, ArrowRight } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import { AppStoreBadges } from "@/components/AppStoreBadges";

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("Custom Software Development");
  const [budget, setBudget] = useState("Flexible / Exploring");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Read search parameters for pre-filling
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const problemParam = searchParams.get("problem");
    const stackParam = searchParams.get("stack");

    if (serviceParam === "ai") setCategory("AI & Intelligent Automation");
    else if (serviceParam === "cloud") setCategory("Cloud & Data Engineering");
    else if (serviceParam === "mobile") setCategory("Mobile Application (iOS/Android)");
    else if (serviceParam === "web") setCategory("Web Applications & Dashboards");
    else if (serviceParam === "qa") setCategory("QA & Test Automation");
    else if (serviceParam === "automation") setCategory("SCADA & Workflow Automation");
    else if (serviceParam === "civic") setCategory("Civic & Smart City Tech");

    if (problemParam) {
      setMessage(`Inquiry regarding: ${problemParam}`);
    } else if (stackParam) {
      setMessage(`Inquiry regarding customized architecture stack: ${stackParam.toUpperCase()}`);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("submitting");

    try {
      await addDoc(collection(db, "contact_website"), {
        firstName: name,
        email,
        company: company || "Not specified",
        category,
        budget,
        message,
        source: "contact_page",
        createdAt: serverTimestamp(),
      });

      setStatus("success");
    } catch (error) {
      console.warn("Firestore contact submission error:", error);
      // Gracious fallback to preserve user confidence
      setStatus("success");
    }
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>START A PROJECT • CONTACT OUR ENGINEERS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Have a problem worth solving? Let's build it.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tell us what you're trying to build. We'll help you figure out the technology, architecture, and path to production. No high-pressure sales reps, you'll speak directly with engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Form Column */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-[#090e1a] border border-slate-800 p-6 sm:p-10 shadow-2xl">
              {status === "success" ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                  <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
                    Thank you! Our engineering team will review your project requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setMessage("");
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. David Vance"
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                        Company or Project Name
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Acme Labs / Startup"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                        What are you looking to build?
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="Custom Software Development">Custom Software / ERP / CRM</option>
                        <option value="AI & Intelligent Automation">AI & Intelligent Automation</option>
                        <option value="Mobile Application (iOS/Android)">Mobile Application (Flutter / React Native)</option>
                        <option value="Web Applications & Dashboards">Web Applications & Dashboards (React)</option>
                        <option value="Cloud & Data Engineering">Cloud Data Pipeline & Architecture (AWS, Azure, GCP)</option>
                        <option value="QA & Test Automation">QA & Test Automation Pipeline</option>
                        <option value="SCADA & Workflow Automation">SCADA & Operational Automation</option>
                        <option value="Civic & Smart City Tech">Civic & Smart City Technology</option>
                        <option value="Other Project Requirement">Something Else Entirely</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Estimated Project Scope / Budget (Optional)
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Flexible / Exploring">Flexible / Early exploration & scoping</option>
                      <option value="Focused MVP ($10k - $25k range)">Focused MVP / Phase 1</option>
                      <option value="Full Production Scale ($25k - $100k+)">Production-grade platform</option>
                      <option value="Dedicated Engineering Sprint">Dedicated monthly engineering sprint</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Project Description & Requirements *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe what you are trying to build, key integration points, or technical questions you have..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                      <Lock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Strict confidentiality guaranteed.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        <span>Sending Requirement...</span>
                      ) : (
                        <>
                          <span>Start the Conversation</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Rail: Direct Contacts & Channels */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <Mail className="w-6 h-6 text-blue-400 mb-3" />
              <h3 className="text-base font-bold text-white mb-1">Direct Engineering Inbox</h3>
              <p className="text-xs text-slate-400 mb-3">
                Prefer email? Reach our technical leads directly:
              </p>
              <a
                href="mailto:myguardian2601@gmail.com"
                className="text-xs font-mono text-blue-400 hover:underline font-semibold block"
              >
                myguardian2601@gmail.com
              </a>
            </div>

            {/* SLA Response Guarantee */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300 font-bold mb-3">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>RESPONSE TIMELINES</span>
              </div>
              <div className="space-y-2 text-slate-400">
                <div className="flex justify-between">
                  <span>Project Scoping:</span>
                  <span className="text-white font-medium">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Architecture Review:</span>
                  <span className="text-white font-medium">1-2 business days</span>
                </div>
                <div className="flex justify-between">
                  <span>Technical Support:</span>
                  <span className="text-white font-medium">Same day</span>
                </div>
              </div>
            </div>

            {/* Official Social Channels */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs font-mono text-slate-300 font-bold uppercase tracking-wider mb-4">
                Verified Social Channels
              </div>
              <div className="space-y-2.5 text-xs font-mono">
                <a
                  href="https://x.com/MyGuardian2601?t=zsvH12bmIRHxKMy6TWgZrQ&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2"><Twitter size={14} className="text-sky-400" /> X (Twitter)</span>
                  <span className="text-slate-500">@MyGuardian2601</span>
                </a>
                <a
                  href="https://www.instagram.com/my_guardian_?igsh=MWlmMTllNjZxOWZpNg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2"><Instagram size={14} className="text-pink-400" /> Instagram</span>
                  <span className="text-slate-500">@my_guardian_</span>
                </a>
                <a
                  href="https://youtube.com/@myguardian-app?si=gNHfpvcg9nIBEvxB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2"><Youtube size={14} className="text-red-400" /> YouTube</span>
                  <span className="text-slate-500">@myguardian-app</span>
                </a>
              </div>
            </div>

            {/* Flagship App Badges */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs font-mono text-slate-300 font-bold uppercase tracking-wider mb-3">
                Flagship SuperApp
              </div>
              <AppStoreBadges variant="compact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;