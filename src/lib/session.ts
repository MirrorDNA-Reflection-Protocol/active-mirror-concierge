import { Need, Role, Mode, Recommendation } from "./routing";
import { ProductId } from "./products";

const SESSION_KEY = "active-mirror-concierge-session";

export interface SessionState {
  need?: Need;
  role?: Role;
  mode?: Mode;
  recommendation?: {
    productId: ProductId;
    reason: string;
    alternatives: ProductId[];
    disclosure: string;
  };
  timestamp?: number;
}

export function getSession(): SessionState {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as SessionState;
  } catch {
    return {};
  }
}

export function saveSession(state: SessionState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ ...state, timestamp: Date.now() })
    );
  } catch {
    // localStorage unavailable — silent fail
  }
}

export function saveRecommendation(rec: Recommendation): void {
  const current = getSession();
  saveSession({ ...current, recommendation: rec });
}

export function clearSession(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch {
    // silent fail
  }
}
