"use client";

interface QuestionCardProps {
  title: string;
  options: string[];
  onSelect: (index: number) => void;
}

export default function QuestionCard({
  title,
  options,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="animate-fade-in w-full">
      <h2 className="mb-6 text-xl font-semibold text-am-text sm:text-2xl">
        {title}
      </h2>
      <div className="flex flex-col gap-3">
        {options.map((option, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className="group w-full rounded-xl border border-am-border bg-am-card px-5 py-4 text-left text-base text-am-text transition-all duration-200 hover:border-am-blue/50 hover:bg-am-blue/5 active:scale-[0.98] sm:text-lg"
          >
            <span className="transition-colors group-hover:text-white">
              {option}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
