"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Need, Role, Mode, routeVisitor } from "@/lib/routing";
import { saveSession, saveRecommendation } from "@/lib/session";
import { copy } from "@/lib/copy";
import ProgressSteps from "./ProgressSteps";
import QuestionCard from "./QuestionCard";

const NEED_MAP: Need[] = [
  "scam",
  "verify",
  "build",
  "explore",
  "founder",
  "unsure",
];

const ROLE_MAP: Role[] = [
  "individual",
  "family",
  "builder",
  "researcher",
  "business",
  "exploring",
];

const MODE_MAP: Mode[] = ["guided", "fast", "browse"];

export default function ConciergeWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [need, setNeed] = useState<Need | null>(null);
  const [role, setRole] = useState<Role | null>(null);

  const handleBack = useCallback(() => {
    if (step > 1) setStep(step - 1);
  }, [step]);

  const handleNeed = useCallback(
    (index: number) => {
      const selected = NEED_MAP[index];
      setNeed(selected);
      saveSession({ need: selected });
      setStep(2);
    },
    []
  );

  const handleRole = useCallback(
    (index: number) => {
      const selected = ROLE_MAP[index];
      setRole(selected);
      saveSession({ need: need!, role: selected });
      setStep(3);
    },
    [need]
  );

  const handleMode = useCallback(
    (index: number) => {
      const selected = MODE_MAP[index];
      const answers = { need: need!, role: role!, mode: selected };
      const rec = routeVisitor(answers);
      saveSession({ need: need!, role: role!, mode: selected });
      saveRecommendation(rec);
      router.push("/recommendation");
    },
    [need, role, router]
  );

  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center px-4 py-8 sm:px-6">
      <div className="mb-8">
        <ProgressSteps current={step} total={3} />
      </div>

      {step > 1 && (
        <button
          onClick={handleBack}
          className="mb-6 flex items-center gap-1.5 self-start text-sm text-am-muted transition-colors hover:text-am-text"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
      )}

      <div className="w-full max-w-lg">
        {step === 1 && (
          <QuestionCard
            title={copy.questions.need.title}
            options={copy.questions.need.options}
            onSelect={handleNeed}
          />
        )}
        {step === 2 && (
          <QuestionCard
            title={copy.questions.role.title}
            options={copy.questions.role.options}
            onSelect={handleRole}
          />
        )}
        {step === 3 && (
          <QuestionCard
            title={copy.questions.mode.title}
            options={copy.questions.mode.options}
            onSelect={handleMode}
          />
        )}
      </div>
    </div>
  );
}
