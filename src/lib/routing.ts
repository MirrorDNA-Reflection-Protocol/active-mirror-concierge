import { ProductId } from "./products";

export type Need =
  | "scam"
  | "verify"
  | "build"
  | "explore"
  | "founder"
  | "unsure";

export type Role =
  | "individual"
  | "family"
  | "builder"
  | "researcher"
  | "business"
  | "exploring";

export type Mode = "guided" | "fast" | "browse";

export interface WizardAnswers {
  need: Need;
  role: Role;
  mode: Mode;
}

export interface Recommendation {
  productId: ProductId;
  reason: string;
  alternatives: ProductId[];
  disclosure: string;
}

export function routeVisitor(answers: WizardAnswers): Recommendation {
  const { need, role, mode } = answers;

  if (need === "scam") {
    return {
      productId: "chetana",
      reason:
        "You selected scam protection. Chetana is the fastest path for suspicious messages, links, QR codes, UPI IDs, phone numbers, and payment screenshots.",
      alternatives: ["id", "ecosystem"],
      disclosure:
        "This recommendation is based on your need for scam protection and the choices you made in this session.",
    };
  }

  if (need === "verify") {
    return {
      productId: "id",
      reason:
        "You selected identity or trust verification. ID is the closest fit for verification-focused needs.",
      alternatives: ["chetana", "ecosystem"],
      disclosure:
        "This recommendation is based on your need for identity or trust verification.",
    };
  }

  if (need === "build") {
    return {
      productId: "mirror-seed",
      reason:
        "You selected a local/private AI setup. Mirror Seed is the best starting point for portable AI identity/context in local workflows.",
      alternatives: ["ecosystem", "founder"],
      disclosure:
        "This recommendation is based on your interest in local/private AI setup and builder-oriented tooling.",
    };
  }

  if (need === "explore" || mode === "browse") {
    return {
      productId: "ecosystem",
      reason:
        "You chose to explore. The ecosystem path is best when you want the broader picture before going deeper.",
      alternatives: ["chetana", "mirror-seed"],
      disclosure:
        "This recommendation is based on your preference to browse or explore the broader Active Mirror ecosystem.",
    };
  }

  if (need === "founder") {
    return {
      productId: "founder",
      reason:
        "You selected a founder or strategic inquiry path. This route is intended for higher-intent conversations.",
      alternatives: ["ecosystem", "id"],
      disclosure:
        "This recommendation is based on your interest in strategic, founder, or partnership conversations.",
    };
  }

  // Unsure — fallback by role
  if (role === "family" || role === "individual") {
    return {
      productId: "chetana",
      reason:
        "You were unsure, but your role suggests a practical trust/safety starting point. Chetana is the safest first route.",
      alternatives: ["id", "ecosystem"],
      disclosure:
        "You selected 'I'm not sure yet'. This best guess is based on your role in this session.",
    };
  }

  if (role === "builder" || role === "researcher") {
    return {
      productId: "mirror-seed",
      reason:
        "You were unsure, but your role suggests a builder/research path. Mirror Seed is the strongest technical starting point.",
      alternatives: ["ecosystem", "founder"],
      disclosure:
        "You selected 'I'm not sure yet'. This best guess is based on your role in this session.",
    };
  }

  // Final fallback
  return {
    productId: "ecosystem",
    reason:
      "You were unsure, so the ecosystem overview is the broadest and safest place to start.",
    alternatives: ["chetana", "id"],
    disclosure:
      "You selected 'I'm not sure yet'. This recommendation is the broadest starting point based on your answers.",
  };
}
