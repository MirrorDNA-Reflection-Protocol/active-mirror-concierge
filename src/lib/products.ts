export type ProductId =
  | "chetana"
  | "id"
  | "mirror-seed"
  | "ecosystem"
  | "founder";

export type ProductCategory =
  | "protect"
  | "verify"
  | "build"
  | "explore"
  | "contact";

export interface Product {
  id: ProductId;
  name: string;
  category: ProductCategory;
  url: string;
  best_for: string[];
  description: string;
  trust_note: string;
  cta: string;
  fallbacks: ProductId[];
  status: "available" | "degraded" | "unavailable";
  who_for: string[];
  what_it_is_not: string[];
}

export const products: Product[] = [
  {
    id: "chetana",
    name: "Chetana",
    category: "protect",
    url: "https://chetana.activemirror.ai",
    best_for: [
      "scams",
      "suspicious messages",
      "UPI",
      "QR",
      "phone numbers",
      "links",
      "families",
      "elders",
    ],
    description:
      "Check suspicious messages, links, QR codes, UPI IDs, phone numbers, and payment screenshots.",
    trust_note: "Built for India. Fast, practical, awareness-first.",
    cta: "Start with Chetana",
    fallbacks: ["id", "ecosystem"],
    status: "available",
    who_for: ["individual", "family", "parent", "elder"],
    what_it_is_not: ["not identity proof", "not a bank", "not legal advice"],
  },
  {
    id: "id",
    name: "ID",
    category: "verify",
    url: "https://id.activemirror.ai",
    best_for: ["identity", "verification", "trust online", "proof"],
    description: "Identity and trust verification tools.",
    trust_note: "Verification-focused path.",
    cta: "Go to ID",
    fallbacks: ["chetana", "ecosystem"],
    status: "available",
    who_for: ["individual", "business", "researcher"],
    what_it_is_not: ["not scam triage", "not general AI assistant"],
  },
  {
    id: "mirror-seed",
    name: "Mirror Seed",
    category: "build",
    url: "https://github.com/active-mirror/active-mirror-identity",
    best_for: [
      "local ai",
      "offline",
      "persona",
      "ollama",
      "lm studio",
      "builder",
    ],
    description:
      "Portable identity/context file for local AI workflows.",
    trust_note: "Local-first, user-controlled, no cloud required by default.",
    cta: "Create a Mirror Seed",
    fallbacks: ["ecosystem", "founder"],
    status: "available",
    who_for: ["builder", "developer", "researcher"],
    what_it_is_not: [
      "not persistent memory",
      "not authentication",
      "not cloud sync",
    ],
  },
  {
    id: "ecosystem",
    name: "Active Mirror Ecosystem",
    category: "explore",
    url: "https://activemirror.ai",
    best_for: ["overview", "products", "research", "architecture"],
    description: "Explore the broader Active Mirror ecosystem.",
    trust_note: "Best for people who want the full picture.",
    cta: "Explore the ecosystem",
    fallbacks: ["chetana", "mirror-seed"],
    status: "available",
    who_for: ["explorer", "researcher", "business", "builder"],
    what_it_is_not: ["not the fastest utility path"],
  },
  {
    id: "founder",
    name: "Founder Route",
    category: "contact",
    url: "https://activemirror.ai",
    best_for: ["founder", "business", "partnership", "serious inquiry"],
    description: "For strategic, founder, and partnership conversations.",
    trust_note: "For higher-intent visitors.",
    cta: "Talk to the founder",
    fallbacks: ["ecosystem", "id"],
    status: "available",
    who_for: ["business", "partner", "press", "investor"],
    what_it_is_not: ["not the default path for casual visitors"],
  },
];

export function getProduct(id: ProductId): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}
