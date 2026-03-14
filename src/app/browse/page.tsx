import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function BrowsePage() {
  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-am-text sm:text-3xl">
          Active Mirror Ecosystem
        </h1>
        <p className="text-base text-am-muted">
          Browse all products and paths. Pick what fits your need.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/"
          className="text-sm text-am-muted underline decoration-am-border underline-offset-4 transition-colors hover:text-am-text"
        >
          Or get guided with 3 quick questions
        </Link>
      </div>
    </div>
  );
}
