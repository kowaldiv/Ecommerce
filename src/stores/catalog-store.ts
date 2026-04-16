import { create } from "zustand";
import { products } from "../data/products";

type Stores = "tv" | "phone" | "laptop";

export interface Product {
  id: number;
  category: string;
  make: string;
  model: string;
  price: number;
  images: string[];
  isSpecialOffer?: boolean;
  brand: string;
}

interface CatalogStore {
  openStore: Stores;
  products: Product[];

  setOpenStore: (panel: Stores) => void;
  fetchProducts: () => Promise<
    { success: true } | { success: false; userMessage: string }
  >;
}

export const useCatalogStore = create<CatalogStore>((set, get) => ({
  openStore: "tv",
  products: [],

  setOpenStore: (openStore) => set({ openStore }),

  fetchProducts: async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));

      const category = get().openStore;
      const filtered = products.filter((p) => p.category === category);

      set({ products: filtered });
      return { success: true };
    } catch (err) {
      return {
        success: false,
        userMessage: (err as Error).message,
      };
    }
  },
}));
