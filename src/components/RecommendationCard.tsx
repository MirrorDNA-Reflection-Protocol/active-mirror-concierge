"use client";

import { useState } from "react";
import Link from "next/link";
import { Recommendation } from "@/lib/routing";
import { getProduct } from "@/lib/products";
import { copy } from "@/lib/copy";
import TrustNote from "./TrustNote";

interface RecommendationCardProps {
  recommendation: Recommendation;
  onStartOver: () => void;
}

export default function RecommendationCard({
  recommendation,
  onStartOver,
}: RecommendationCardProps) {
  const [showDisclosure, setShowDisclosure] = useState(false);
  const product = getProduct(recommendation.productId);

  if (!product) return null;

  const alternatives = recommendation.alternatives
    .map((id) => getProduct(id))
    .filter(Boolean);

  return (
    <div className="animate-fade-in w-full max-w-xl space-y-6">
      {/* Best match */}
      <div className="rounded-xl border border-am-blue/30 bg-am-card p-6">
        <p className="mb-1 text-sm font-medium text-am-blue">
          {copy.recommendation.titlePrefix}
        </p>
        <h2 className="mb-4 text-2xl font-bold text-am-text sm:text-3xl">
          {product.name}
        </h2>
        <p className="mb-5 text-base leading-relaxed text-am-muted">
          {product.description}
        </p>
        <p className="mb-6 text-sm leading-relaxed text-am-text/80">
          <span className="font-medium text-am-text">Why this fits: </span>
          {recommendation.reason}
        </p>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-lg bg-am-blue px-6 py-3.5 text-base font-medium text-white transition-all duration-200 hover:bg-am-blue/80 active:scale-[0.98] sm:w-auto"
        >
          {product.cta}
        </a>
      </div>

      {/* Alternatives */}
      {alternatives.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-medium text-am-muted">
            Also worth exploring
          </p>
          {alternatives.map(
            (alt) =>
              alt && (
                <a
                  key={alt.id}
                  href={alt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-am-border bg-am-card px-5 py-3.5 transition-all duration-200 hover:border-am-blue/30"
                >
                  <div>
                    <p className="font-medium text-am-text">{alt.name}</p>
                    <p className="text-sm text-am-muted">{alt.description}</p>
                  </div>
                  <svg
                    className="ml-3 h-4 w-4 shrink-0 text-am-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              )
          )}
        </div>
      )}

      {/* Trust note */}
      <TrustNote text={copy.recommendation.trustNote} />

      {/* Disclosure toggle */}
      <button
        onClick={() => setShowDisclosure(!showDisclosure)}
        className="text-sm text-am-muted underline decoration-am-border underline-offset-4 transition-colors hover:text-am-text"
      >
        {copy.recommendation.whyAmISeeingThis}
      </button>
      {showDisclosure && (
        <div className="animate-fade-in rounded-lg bg-am-card/50 px-4 py-3">
          <p className="text-sm leading-relaxed text-am-muted">
            {recommendation.disclosure}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Link
          href="/browse"
          className="inline-flex items-center justify-center rounded-lg border border-am-border px-5 py-2.5 text-sm font-medium text-am-text transition-all duration-200 hover:border-am-blue/30 hover:bg-am-card"
        >
          {copy.recommendation.showEverything}
        </Link>
        <button
          onClick={onStartOver}
          className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-am-muted transition-colors hover:text-am-text"
        >
          {copy.recommendation.startOver}
        </button>
      </div>
    </div>
  );
}
