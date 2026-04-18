import { images } from "@/src/assets";
import { Button } from "../../components/Button";
import { Dropdown } from "../../components/Dropdown";
import { Input } from "../../components/Input";

export function SideBar() {
  return (
    <aside className="lg:w-3xs w-full h-full grid gap-4">
      <div className="p-4 border border-border rounded-xl grid gap-4">
        <p className="font-medium text-xl">Filters</p>
        <div className="grid gap-6">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <p className="text-base font-medium">Brand</p>
              <Dropdown className="w-full" />
            </div>
            <div className="grid gap-2">
              <p className="text-base font-medium">Price Range</p>
              <div className="flex gap-2">
                <Input type="number" />
                <Input type="number" />
              </div>
            </div>
          </div>
          <Button title="Apply Filters" variant="primary" className="w-full" />
        </div>
      </div>
      <div className="p-4 bg-linear-to-r from-[#D4183D] to-[rgba(212,24,61,0.8)] rounded-xl grid gap-2">
        <div className="flex gap-2 items-center">
          <img src={images.icons.clock} alt="clock" />
          <p className="text-background font-medium text-lg">Special Deal!</p>
        </div>
        <div className="text-background">
          <p>Register now to unlock exclusive offers and discounts</p>
          <div className="flex gap-5">
            <p>Offer expires in:</p>
            <p>0:59:59</p> {/* TODO: сделать норм таймер потом */}
          </div>
        </div>
      </div>
    </aside>
  );
}
