"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Recommendation } from "@/lib/routing";
import { getSession, clearSession } from "@/lib/session";
import RecommendationCard from "@/components/RecommendationCard";

export default function RecommendationPage() {
  const router = useRouter();
  const [recommendation, setRecommendation] = useState<Recommendation | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = getSession();
    if (session.recommendation) {
      setRecommendation(session.recommendation);
    }
    setLoading(false);
  }, []);

  const handleStartOver = () => {
    clearSession();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-am-blue border-t-transparent" />
      </div>
    );
  }

  if (!recommendation) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
        <p className="mb-4 text-am-muted">
          No recommendation found. Start the guided flow to get a
          recommendation.
        </p>
        <button
          onClick={() => router.push("/")}
          className="rounded-lg bg-am-blue px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-am-blue/80"
        >
          Start over
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-[80vh] flex-col items-center px-4 py-12 sm:px-6">
      <RecommendationCard
        recommendation={recommendation}
        onStartOver={handleStartOver}
      />
    </div>
  );
}
