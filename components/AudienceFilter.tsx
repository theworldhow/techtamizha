"use client";

export const AUDIENCE_LEVELS = [
  { value: "all", label: "All Levels", icon: "🌐" },
  { value: "school", label: "School Level", icon: "📚" },
  { value: "college", label: "College Level", icon: "🎓" },
  { value: "teens", label: "Teens", icon: "🧑‍💻" },
  { value: "it-pros", label: "IT Pros", icon: "💼" },
] as const;

export type AudienceLevel = (typeof AUDIENCE_LEVELS)[number]["value"];

interface AudienceFilterProps {
  selectedLevel: AudienceLevel;
  onLevelChange: (level: AudienceLevel) => void;
  className?: string;
}

export default function AudienceFilter({
  selectedLevel,
  onLevelChange,
  className = "",
}: AudienceFilterProps) {
  return (
    <div
      className={`flex flex-wrap gap-2 ${className}`}
      role="group"
      aria-label="Filter by audience level"
    >
      {AUDIENCE_LEVELS.map((level) => (
        <button
          key={level.value}
          onClick={() => onLevelChange(level.value)}
          aria-pressed={selectedLevel === level.value}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
            selectedLevel === level.value
              ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          <span aria-hidden="true">{level.icon}</span>
          <span>{level.label}</span>
        </button>
      ))}
    </div>
  );
}

