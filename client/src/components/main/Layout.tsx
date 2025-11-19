import { Activity, useState } from "react";
import "./Layout.style.css";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Sections from "../sections/Sections";
import Header from "../header/Header";

const Layout = ({children}:{children:React.ReactNode}) => {
    
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  return (
    <div className="main-page flex h-screen">
      <div className={`bg-white ${activeMenu ? "w-80" : ""} p-1 flex flex-col gap-3`}>
        <div className="menu-trigger flex w-full items-end justify-end">
          <Button variant={"default"} className="bg-black text-white cursor-pointer" onClick={() => setActiveMenu((prevState) => !prevState)}>
            <Menu />
          </Button>
        </div>
        <Activity mode={activeMenu ? 'visible': 'hidden'}>
                <Sections/>
        </Activity>
      </div>
      <div className="main-content w-full p-1">
        <Header/>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
