import { useState } from "react";
import { Smartphone, Battery, Wifi, Signal, Play, Award, Zap, Cpu } from "lucide-react";

interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  duration?: string;
  image: string;
  screens: {
    name: string;
    title: string;
    description: string;
    icon: any;
    details: string[];
  }[];
  stats: {
    metric: string;
    value: string;
    label: string;
  }[];
}

interface PhoneSimulatorProps {
  project: ProjectData;
}

export function PhoneSimulator({ project }: PhoneSimulatorProps) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const currentScreen = project.screens[activeScreenIndex] || project.screens[0];

  return (
    <div className="flex flex-col items-center justify-center lg:sticky lg:top-24 select-none">
      {/* Outer Phone Ring with Neon Border */}
      <div className="relative w-72 h-[550px] bg-black rounded-[40px] p-3 shadow-2xl border-4 border-zinc-800 shadow-neon-blue/20 hover:shadow-neon-cyan/30 transition-all duration-500 flex flex-col">
        {/* Speaker Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-30 flex items-center justify-center space-x-1">
          <div className="w-10 h-1 bg-black rounded-full" />
          <div className="w-2.5 h-2.5 bg-zinc-950 rounded-full border border-zinc-800" />
        </div>

        {/* Status Bar */}
        <div className="h-6 flex justify-between items-center px-6 text-[10px] text-white/80 font-semibold z-20 pt-2 select-none">
          <span>09:41</span>
          <div className="flex items-center space-x-1">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <Battery className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Inner Screen Canvas */}
        <div className="flex-1 bg-gradient-to-b from-[#0a0520] to-[#120025] rounded-[32px] overflow-hidden relative flex flex-col border border-white/5 mt-1 select-none">
          {/* Main App Content Viewport */}
          <div className="flex-1 p-4 flex flex-col text-white pt-6">
            
            {/* Mock App Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
              <span className="text-xs font-bold bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent truncate w-32">
                {project.title}
              </span>
              <span className="text-[9px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded-full">
                Beta v2.4
              </span>
            </div>

            {/* Simulated Screen Body */}
            <div className="flex-1 flex flex-col justify-between overflow-y-auto max-h-[350px] pr-1">
              <div>
                {/* Title */}
                <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-1.5">
                  {currentScreen.title}
                </h4>
                <p className="text-[11px] text-zinc-300 leading-normal mb-3">
                  {currentScreen.description}
                </p>

                {/* Sub Features details list */}
                <div className="space-y-1.5 mb-4">
                  {currentScreen.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[10px] text-zinc-400 leading-normal">
                      <span className="text-neon-cyan mt-0.5">•</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Stats Cards */}
              <div className="bg-white/5 rounded-xl p-2.5 border border-white/5 mb-2">
                <div className="flex items-center gap-1 mb-1.5">
                  <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span className="text-[10px] font-bold text-zinc-200">Device Telemetry</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {project.stats.slice(0, 2).map((stat, idx) => (
                    <div key={idx} className="bg-black/30 p-1.5 rounded-lg border border-white/5 flex flex-col items-center">
                      <span className="text-xs font-black text-neon-cyan">{stat.value}</span>
                      <span className="text-[8px] text-zinc-400 text-center leading-tight">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Bar inside the simulated App */}
          <div className="h-14 bg-black/60 backdrop-blur-md border-t border-white/5 px-3 py-1 flex items-center justify-around z-20">
            {project.screens.map((screen, idx) => {
              const Icon = screen.icon;
              const isActive = activeScreenIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`flex flex-col items-center gap-0.5 cursor-pointer transition-all duration-300 ${
                    isActive ? "text-neon-cyan scale-110" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-[9px] font-semibold">{screen.name}</span>
                </button>
              );
            })}
          </div>

          {/* iOS Bottom Swipe Bar */}
          <div className="h-1 flex justify-center pb-2 bg-black/60">
            <div className="w-24 h-1 bg-white/30 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
}
