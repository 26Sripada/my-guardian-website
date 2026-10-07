import React from "react";
import { Link } from "react-router-dom";
import { Mail, ExternalLink, Twitter, Instagram, Youtube, ArrowRight, Shield, Sparkles } from "lucide-react";
import logo from "/logo-modified.png";
import { AppStoreBadges } from "@/components/AppStoreBadges";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 text-slate-400 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="My Guardian Technologies"
                className="h-9 w-9 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold tracking-tight text-white">
                  MY GUARDIAN TECHNOLOGIES
                </span>
                <span className="text-[10px] font-mono text-blue-400 tracking-wider uppercase">
                  Product & Software Engineering
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              An engineering-led technology company building practical AI, cloud, mobile, web, and automation solutions for businesses and organizations worldwide.
            </p>

            <div className="pt-2">
              <div className="text-xs font-mono text-slate-300 font-semibold mb-2">
                FLAGSHIP PROPRIETARY PRODUCT
              </div>
              <AppStoreBadges variant="compact" />
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://x.com/MyGuardian2601?t=zsvH12bmIRHxKMy6TWgZrQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://www.instagram.com/my_guardian_?igsh=MWlmMTllNjZxOWZpNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://youtube.com/@myguardian-app?si=gNHfpvcg9nIBEvxB"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/services/ai" className="hover:text-blue-400 transition-colors">
                  AI & Intelligent Automation
                </Link>
              </li>
              <li>
                <Link to="/services/cloud" className="hover:text-blue-400 transition-colors">
                  Cloud & Data Engineering
                </Link>
              </li>
              <li>
                <Link to="/services/mobile" className="hover:text-blue-400 transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services/web" className="hover:text-blue-400 transition-colors">
                  Web & SaaS Applications
                </Link>
              </li>
              <li>
                <Link to="/services/qa-automation" className="hover:text-blue-400 transition-colors">
                  QA & Test Automation
                </Link>
              </li>
              <li>
                <Link to="/services/custom-software" className="hover:text-blue-400 transition-colors">
                  Custom Software & ERP / CRM
                </Link>
              </li>
              <li>
                <Link to="/services/civic-tech" className="hover:text-blue-400 transition-colors">
                  Civic & Smart City Tech
                </Link>
              </li>
            </ul>
          </div>

          {/* Selected Work Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4">
              Selected Work
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/work/weather-pipeline" className="hover:text-blue-400 transition-colors flex items-center justify-between">
                  <span>Weather Data Pipeline</span>
                  <span className="text-[10px] font-mono text-slate-500">CA</span>
                </Link>
              </li>
              <li>
                <Link to="/work/healthcare-qa" className="hover:text-blue-400 transition-colors flex items-center justify-between">
                  <span>Healthcare QA Pipeline</span>
                  <span className="text-[10px] font-mono text-slate-500">US</span>
                </Link>
              </li>
              <li>
                <Link to="/work/my-guardian" className="hover:text-blue-400 transition-colors flex items-center justify-between">
                  <span>My Guardian Flagship</span>
                  <span className="text-[10px] font-mono text-emerald-400">Live</span>
                </Link>
              </li>
              <li>
                <Link to="/work/civic-operations" className="hover:text-blue-400 transition-colors">
                  AI Civic Operations
                </Link>
              </li>
              <li>
                <Link to="/work/scada-automation" className="hover:text-blue-400 transition-colors">
                  SCADA Automation
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-blue-400 hover:underline flex items-center gap-1 pt-1 font-mono text-xs">
                  <span>View All Case Studies</span>
                  <ArrowRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About Us & Team
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-blue-400 transition-colors">
                  Flagship Product
                </Link>
              </li>
              <li>
                <Link to="/partnership" className="hover:text-blue-400 transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-blue-400 transition-colors">
                  Engineering Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:myguardian2601@gmail.com"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 pt-1 font-mono text-xs"
                >
                  <Mail size={13} />
                  <span>myguardian2601@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 My Guardian Technologies. All rights reserved. Engineering practical technology solutions.
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://26sripada.github.io/myguardian-privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors inline-flex items-center gap-1"
            >
              <span>Privacy Policy</span>
              <ExternalLink size={12} />
            </a>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Security & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;