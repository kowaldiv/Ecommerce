import { products } from "@/src/data/products";
import { Dropdown } from "../../components/Dropdown";
import { ProductCard } from "../../components/ProductCard";

export function Main() {
  const filtered = products.filter((p) => p.category === "tv");

  return (
    <main className="flex-1 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p className="text-grayText">{filtered.length} products</p>{" "}
        <div className="flex items-center gap-2">
          <p>Sort by:</p>
          <Dropdown className="w-44!" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </main>
  );
}
