import { Main } from "./Main";
import { SideBar } from "./SideBar";

export function Home() {
  return (
    <div className="max-w-360 flex-1 w-full h-full mx-auto my-8 px-8 flex flex-col lg:flex-row gap-6">
      <SideBar />
      <Main />
    </div>
  );
}
