import { Button } from "./Button";
import { images } from "@/src/assets";

const stores = [
  {
    title: "TV",
    storeName: "tv",
    onClick: () => {},
  },
  {
    title: "Phone",
    storeName: "phone",
    onClick: () => {},
  },
  {
    title: "Laptop",
    storeName: "laptop",
    onClick: () => {},
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background w-full border-b border-b-border">
      <div className="max-w-360 w-full mx-auto sm:px-8 px-4">
        <div className="w-full h-16 flex justify-between items-center border-b border-b-border sm:border-0">
          <div className="flex gap-6 items-center">
            <a className="font-medium text-xl sm:text-2xl" href="">
              TechStore
            </a>
            <div className="hidden sm:block">
              <div className="flex gap-2">
                {stores.map((store) => {
                  return (
                    <Button
                      key={store.title}
                      title={store.title}
                      onClick={store.onClick}
                      className={`font-medium text-grayText`}
                    />
                  );
                })}
              </div>
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
      </div>
      <div>
        <div className="flex justify-between sm:hidden py-3 px-4">
          {stores.map((store) => {
            return (
              <Button
                key={store.title}
                title={store.title}
                onClick={store.onClick}
                className={`font-medium text-grayText flex-1 h-10`}
              />
            );
          })}
        </div>
      </div>
    </header>
  );
}
