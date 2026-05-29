import { useState } from "react";
import { GitCommit, Star } from "lucide-react";

// Generate mock data representing 52 weeks (364 days) of commits
// We will inject actual developer milestones on specific dates to make it super engaging!
const milestones: { [key: number]: string } = {
  25: "Migrated Redux state slices to RTK",
  54: "Released first production build of Sulekha NRI",
  112: "Integrated Stripe & Apple Pay payment flows",
  180: "Optimized FlatList image caching (+15fps)",
  210: "Launched Sulekha Business App on Google Play",
  280: "Refactored push notification handles in Kotlin",
  315: "Completed migration to Tailwind CSS v4 framework",
  340: "Conducted security audit & package upgrade sprints"
};

export function ContributionGraph() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Generate grid tiles
  const totalTiles = 52 * 7; // 364
  const tiles = Array.from({ length: totalTiles }, (_, index) => {
    // Determine level: 0 (none), 1 (low), 2 (mid), 3 (high), 4 (milestone)
    let level = 0;
    if (milestones[index]) {
      level = 4;
    } else {
      // Create interesting pattern (higher density on workdays, random noise)
      const dayOfWeek = index % 7;
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const rand = Math.random();
      if (isWeekend) {
        level = rand > 0.85 ? 1 : 0;
      } else {
        level = rand > 0.9 ? 3 : rand > 0.5 ? 2 : rand > 0.2 ? 1 : 0;
      }
    }

    // Commits count
    const commits = level === 4 ? 12 : level === 3 ? 6 : level === 2 ? 3 : level === 1 ? 1 : 0;

    return {
      index,
      level,
      commits,
      message: milestones[index] || `${commits} commit${commits !== 1 ? "s" : ""} on this day`
    };
  });

  // Level colors
  const getColorClass = (level: number) => {
    switch (level) {
      case 4:
        return "bg-neon-cyan shadow-sm shadow-neon-cyan animate-pulse";
      case 3:
        return "bg-emerald-400";
      case 2:
        return "bg-emerald-600";
      case 1:
        return "bg-emerald-950 border border-emerald-900/50";
      default:
        return "bg-zinc-900 border border-zinc-800/30";
    }
  };

  return (
    <div className="glass-card rounded-xl p-6 border border-neon-blue/20 w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div className="flex items-center space-x-2">
          <GitCommit className="w-5 h-5 text-emerald-400" />
          <h3 className="text-lg text-white font-display font-semibold">
            Engineering Contribution Graph
          </h3>
        </div>
        <div className="flex items-center space-x-2 text-xs text-gray-400">
          <div className="flex items-center space-x-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-zinc-900 border border-zinc-800" />
            <span>Less</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-950" />
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-600" />
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
            <span className="w-2.5 h-2.5 rounded-sm bg-neon-cyan shadow shadow-neon-cyan" />
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Timeline Grid container */}
      <div className="relative overflow-x-auto pb-2 scrollbar-thin">
        <div className="flex flex-col gap-1 min-w-[550px] select-none">
          <div className="grid grid-flow-col auto-cols-max gap-1">
            {tiles.map((tile, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`w-2.5 h-2.5 rounded-sm cursor-pointer transition-all duration-150 hover:scale-125 hover:z-10 ${getColorClass(
                  tile.level
                )}`}
              />
            ))}
          </div>
        </div>

        {/* Hover Tooltip Overlay */}
        {hoveredIndex !== null && (
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-black/95 border border-white/10 backdrop-blur-md px-3 py-2 rounded-lg text-xs text-white max-w-[280px] text-center shadow-xl z-20 pointer-events-none transition-opacity duration-200">
            <div className="font-semibold mb-0.5 flex items-center justify-center gap-1">
              {tiles[hoveredIndex].level === 4 ? (
                <>
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span className="text-neon-cyan">Milestone Release</span>
                </>
              ) : (
                <span>Commit log</span>
              )}
            </div>
            <div className="text-gray-300">{tiles[hoveredIndex].message}</div>
          </div>
        )}
      </div>

      <p className="text-xs text-gray-500 mt-3 text-center">
        Hover over the glowing cells to view key repository check-ins and performance milestones.
      </p>
    </div>
  );
}
