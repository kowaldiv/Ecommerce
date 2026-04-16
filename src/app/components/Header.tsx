import { useCatalogStore } from "@/src/stores/catalog-store";
import { Button } from "./Button";
import { images } from "@/src/assets";

const stores = [
  {
    title: "TV",
    storeName: "tv",
    onClick: () => useCatalogStore.getState().setOpenStore("tv"),
  },
  {
    title: "Phone",
    storeName: "phone",
    onClick: () => useCatalogStore.getState().setOpenStore("phone"),
  },
  {
    title: "Laptop",
    storeName: "laptop",
    onClick: () => useCatalogStore.getState().setOpenStore("laptop"),
  },
];

export function Header() {
  const openStore = useCatalogStore((state) => state.openStore);

  return (
    <header className="sticky top-0 z-10 bg-background w-full h-16 border-b border-b-border">
      <div className="max-w-360 w-full h-full mx-auto px-8 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <a className="font-medium text-2xl" href="">
            TechStore
          </a>
          <div className="flex gap-2">
            {stores.map((store) => {
              return (
                <Button
                  key={store.title}
                  title={store.title}
                  onClick={store.onClick}
                  className={`font-medium ${store.storeName !== openStore ? "text-grayText" : ""}`}
                />
              );
            })}
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="p-1!">
            <img src={images.icons.cart} alt="cart" className="p-2!" />
          </Button>
          <Button className="p-1!">
            <img src={images.icons.profile} alt="profile" className="p-2!" />
          </Button>
        </div>
      </div>
    </header>
  );
}
