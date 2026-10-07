import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown, Sparkles, Shield } from "lucide-react";
import logo from "/logo-modified.png";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Selected Work", href: "/work" },
    { name: "Products", href: "/product" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceSublinks = [
    { name: "AI & Intelligent Automation", href: "/services/ai", desc: "Enterprise AI, RAG, Action Agents & Vision" },
    { name: "Cloud & Data Engineering", href: "/services/cloud", desc: "Multi-cloud architecture & real-time pipelines" },
    { name: "Mobile App Development", href: "/services/mobile", desc: "Native & cross-platform iOS and Android apps" },
    { name: "Web Applications & SaaS", href: "/services/web", desc: "Full-stack web portals, SaaS & admin dashboards" },
    { name: "QA & Test Automation", href: "/services/qa-automation", desc: "Automated regression pipelines & validation" },
    { name: "Custom Software Engineering", href: "/services/custom-software", desc: "ERP, CRM, internal tools & bespoke systems" },
    { name: "Civic & Smart City Tech", href: "/services/civic-tech", desc: "Civic operations, vision verification & GIS dispatch" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#060913]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={logo}
                alt="My Guardian Technologies"
                className="h-9 w-9 sm:h-10 sm:w-10 object-contain transition-transform group-hover:scale-105"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-[#060913]" />
            </div>

            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold tracking-tight text-white font-sans">
                  MY GUARDIAN
                </span>
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest hidden sm:inline-block">
                  TECHNOLOGIES
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 tracking-normal hidden sm:block">
                Product & Software Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      to={link.href}
                      className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                        isActiveRoute(link.href)
                          ? "text-white bg-slate-800/60"
                          : "text-slate-300 hover:text-white hover:bg-slate-900"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    </Link>

                    {/* Services Dropdown */}
                    {servicesDropdown && (
                      <div className="absolute left-0 top-full pt-2 w-80 z-50">
                        <div className="rounded-xl bg-[#090e1a] border border-slate-800 p-2 shadow-2xl shadow-black/80 backdrop-blur-xl">
                          <div className="px-3 py-1.5 text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-800/80 mb-1">
                            ENGINEERING DISCIPLINES
                          </div>
                          {serviceSublinks.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              onClick={() => setServicesDropdown(false)}
                              className="block p-2.5 rounded-lg hover:bg-slate-900 transition-colors group"
                            >
                              <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400 flex items-center justify-between">
                                <span>{sub.name}</span>
                                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                              </div>
                              <div className="text-[11px] text-slate-500 font-mono mt-0.5 line-clamp-1">
                                {sub.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isActiveRoute(link.href)
                      ? "text-white bg-slate-800/60"
                      : "text-slate-300 hover:text-white hover:bg-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/product"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>Flagship App</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium"
            >
              Start Project
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-800 py-4 space-y-2 bg-[#060913]/95">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                  isActiveRoute(item.href)
                    ? "bg-slate-900 text-white font-semibold"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-slate-800/80 px-4 space-y-2">
              <Link
                to="/product"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200"
              >
                <Shield className="w-4 h-4 text-blue-400" />
                <span>My Guardian Flagship App</span>
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-lg shadow-blue-600/30"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;