import { Product } from "@/lib/products";
import TrustNote from "./TrustNote";

interface ProductCardProps {
  product: Product;
}

const categoryLabels: Record<string, string> = {
  protect: "Protect",
  verify: "Verify",
  build: "Build",
  explore: "Explore",
  contact: "Contact",
};

const categoryColors: Record<string, string> = {
  protect: "bg-am-green/10 text-am-green border-am-green/20",
  verify: "bg-am-blue/10 text-am-blue border-am-blue/20",
  build: "bg-am-amber/10 text-am-amber border-am-amber/20",
  explore: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  contact: "bg-am-text/10 text-am-text border-am-text/20",
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-am-border bg-am-card p-5 transition-all duration-200 hover:border-am-blue/30">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-am-text">{product.name}</h3>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
            categoryColors[product.category] ?? ""
          }`}
        >
          {categoryLabels[product.category] ?? product.category}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-am-muted">
        {product.description}
      </p>
      <div className="text-xs text-am-muted">
        <span className="font-medium text-am-text/70">For:</span>{" "}
        {product.who_for.join(", ")}
      </div>
      <TrustNote text={product.trust_note} />
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center rounded-lg bg-am-blue px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-am-blue/80 active:scale-[0.98]"
      >
        {product.cta}
      </a>
    </div>
  );
}
