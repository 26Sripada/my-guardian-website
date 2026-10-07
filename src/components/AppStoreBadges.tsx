import React from "react";
import { ArrowUpRight } from "lucide-react";

interface AppStoreBadgesProps {
  className?: string;
  variant?: "default" | "compact" | "subtle";
}

export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.angel.guardian_angel";
export const APP_STORE_URL = "https://apps.apple.com/in/app/my-guardian-app/id6775873738";

export const AppStoreBadges: React.FC<AppStoreBadgesProps> = ({ className = "", variant = "default" }) => {
  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-all hover:border-blue-500/40"
        >
          <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
            <path d="M3.609 1.814L13.792 12 3.61 22.186c-.198-.18-.323-.443-.323-.745V2.56c0-.302.125-.566.322-.746zm11.242 11.244l2.56 2.56-11.75 6.772 9.19-9.332zm0-2.116L5.661 1.61l11.75 6.772-2.56 2.56zm1.488 1.488l3.69-2.126c.74-.426.74-1.12 0-1.546l-3.69-2.126-2.115 2.115 2.115 2.115z" />
          </svg>
          <span>Google Play</span>
          <ArrowUpRight className="w-3 h-3 text-slate-400" />
        </a>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-all hover:border-blue-500/40"
        >
          <svg className="w-4 h-4 fill-current text-sky-400" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.64 1.35-.57.65-1.07 1.72-.94 2.74 1.01.08 2.03-.49 2.65-1.24z" />
          </svg>
          <span>App Store</span>
          <ArrowUpRight className="w-3 h-3 text-slate-400" />
        </a>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
      {/* Google Play */}
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-emerald-500/50 shadow-lg shadow-black/40 transition-all duration-200"
        aria-label="Download My Guardian on Google Play"
      >
        <svg className="w-6 h-6 fill-current text-emerald-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
          <path d="M3.609 1.814L13.792 12 3.61 22.186c-.198-.18-.323-.443-.323-.745V2.56c0-.302.125-.566.322-.746zm11.242 11.244l2.56 2.56-11.75 6.772 9.19-9.332zm0-2.116L5.661 1.61l11.75 6.772-2.56 2.56zm1.488 1.488l3.69-2.126c.74-.426.74-1.12 0-1.546l-3.69-2.126-2.115 2.115 2.115 2.115z" />
        </svg>
        <div className="text-left">
          <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 leading-none">
            Get it on
          </div>
          <div className="text-sm font-semibold text-white tracking-tight leading-tight mt-0.5">
            Google Play
          </div>
        </div>
      </a>

      {/* Apple App Store */}
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-sky-500/50 shadow-lg shadow-black/40 transition-all duration-200"
        aria-label="Download My Guardian on Apple App Store"
      >
        <svg className="w-6 h-6 fill-current text-sky-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.64 1.35-.57.65-1.07 1.72-.94 2.74 1.01.08 2.03-.49 2.65-1.24z" />
        </svg>
        <div className="text-left">
          <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 leading-none">
            Download on the
          </div>
          <div className="text-sm font-semibold text-white tracking-tight leading-tight mt-0.5">
            App Store
          </div>
        </div>
      </a>
    </div>
  );
};

