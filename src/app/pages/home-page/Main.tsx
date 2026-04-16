import { useCatalogStore } from "@/src/stores/catalog-store";
import { Dropdown } from "../../components/Dropdown";
import { ProductCard } from "../../components/ProductCard";
import { useEffect } from "react";

export function Main() {
  const openStore = useCatalogStore((state) => state.openStore);
  const products = useCatalogStore((state) => state.products);

  useEffect(() => {
    async function fetchProducts() {
      const result = await useCatalogStore.getState().fetchProducts();
      if (!result.success) {
        alert("опа, ошибка при запросе отоваров на Home/Main");
      }
    }
    fetchProducts();
  }, [openStore]);

  return (
    <main className="flex-1 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p className="text-grayText">{products.length} products</p>{" "}
        <div className="flex items-center gap-2">
          <p>Sort by:</p>
          <Dropdown className="w-44!" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </main>
  );
}
