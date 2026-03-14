"use client";

interface ProgressStepsProps {
  current: number;
  total: number;
}

export default function ProgressSteps({ current, total }: ProgressStepsProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => {
        const step = i + 1;
        const isActive = step === current;
        const isComplete = step < current;

        return (
          <div key={step} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-all duration-300 ${
                isComplete
                  ? "bg-am-blue text-white"
                  : isActive
                    ? "bg-am-blue text-white ring-2 ring-am-blue/40 ring-offset-2 ring-offset-am-bg"
                    : "bg-am-card text-am-muted border border-am-border"
              }`}
            >
              {isComplete ? (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                step
              )}
            </div>
            {step < total && (
              <div
                className={`h-0.5 w-8 transition-all duration-300 ${
                  isComplete ? "bg-am-blue" : "bg-am-border"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
