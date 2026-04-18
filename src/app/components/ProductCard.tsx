import { useCallback, useRef, useState } from "react";
import { Button } from "./Button";
import { images } from "@/src/assets";
import type { Product } from "@/src/data/products";

export function ProductCard({ product }: { product: Product }) {
  const imagePlaceholderRef = useRef<HTMLDivElement>(null);

  const [openedAvatarIndex, setOpenedAvatarIndex] = useState(1);
  const [isHover, setIsHover] = useState(false);

  const scrollToIndex = useCallback(
    (side: "left" | "right") => {
      if (!imagePlaceholderRef.current) return;

      let newIndex = openedAvatarIndex;
      if (side === "left") newIndex = openedAvatarIndex - 1;
      if (side === "right") newIndex = openedAvatarIndex + 1;

      if (newIndex < 1 || newIndex > (product.images.length ?? 0)) return;

      const offset = -(newIndex - 1) * imagePlaceholderRef.current.offsetWidth;
      imagePlaceholderRef.current.style.transform = `translateX(${offset}px)`;
      setOpenedAvatarIndex(newIndex);
    },
    [openedAvatarIndex, product],
  );

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="flex-1 h-fit relative rounded-xl overflow-hidden border border-border"
    >
      <div className="w-full aspect-square">
        <div className="absolute flex w-full bg-gray-500 overflow-hidden">
          <div ref={imagePlaceholderRef} className="flex w-full transition">
            {product.images.map((image) => {
              return (
                <img
                  key={image}
                  className="min-w-full aspect-square object-cover"
                  src={image}
                  alt="product preview"
                />
              );
            })}
          </div>
          {product.images.length > 1 ? (
            <>
              <Button
                variant="default"
                onClick={() => scrollToIndex("left")}
                className={`z-1 absolute top-1/2 -translate-y-1/2 py-2! rounded-4xl! left-2 transition ${!isHover ? "opacity-0" : ""}`}
              >
                <img src={images.icons.arrow} alt="" />
              </Button>
              <Button
                variant="default"
                onClick={() => scrollToIndex("right")}
                className={`z-1 absolute top-1/2 -translate-y-1/2 right-2 rotate-180 rounded-4xl! py-2! transition ${!isHover ? "opacity-0" : ""}`}
              >
                <img src={images.icons.arrow} alt="" />
              </Button>
              <div
                className={`flex gap-1.5 z-1 absolute left-1/2 -translate-x-1/2 bottom-0 py-2! transition ${!isHover ? "opacity-0" : ""}`}
              >
                {product.images.map((_, index) => {
                  return (
                    <div
                      className={`h-1.5 rounded-2xl ${index + 1 === openedAvatarIndex ? "w-3.75 bg-foreground" : "w-1.5 bg-background"}`}
                    ></div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
          <Button
            variant="default"
            className={`z-1 absolute right-2 top-2 py-2! transition ${!isHover ? "opacity-0" : ""}`}
          >
            <img src={images.icons.favorite} alt="" />
          </Button>
          {product.isSpecialOffer ? (
            <div
              className={`z-1 absolute left-2 top-2 py-1 px-1.5 bg-[#D4183D] rounded-lg transition ${!isHover ? "opacity-0" : ""}`}
            >
              <p className="text-sm text-background">Special Offer</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="p-4 grid gap-3">
        <div className="grid gap-7">
          <div className="grid gap-1">
            <p className="text-grayText">{product.brand}</p>
            <p>{product.model}</p>
          </div>
          <p>${product.price}</p>
        </div>
        <Button variant="primary" title="Add to Cart" className="w-full" />
      </div>
    </div>
  );
}
