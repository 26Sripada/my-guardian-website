import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Terminal, Home, Layers, Shield } from "lucide-react";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404 Error: Non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#060913] text-slate-100 px-4">
      <div className="max-w-md w-full p-8 rounded-2xl bg-[#090e1a] border border-slate-800 text-center">
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4 font-mono text-base font-bold">
          404
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Endpoint Not Found</h1>
        <p className="text-xs sm:text-sm text-slate-400 mb-6 font-mono">
          Route <span className="text-slate-300 font-semibold">{location.pathname}</span> is not registered in our application router.
        </p>

        <div className="space-y-2">
          <Link
            to="/"
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-all shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <Link
              to="/services"
              className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-mono"
            >
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Services</span>
            </Link>
            <Link
              to="/work"
              className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-mono"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>Selected Work</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
