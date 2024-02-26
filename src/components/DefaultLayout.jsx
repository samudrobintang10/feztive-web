import { Outlet } from "react-router-dom";

// Imported Png or Svg
import FeztiveMiniLogoSvg from "../assets/festive-mini.svg";

// Imported Components
import Button from "../elements/Button";
import NavTab from "../elements/NavTab";

function DefaultLayout() {
  return (
    <div id="defaultLayout">
      <div className="content">
        <header className="flex justify-between py-3">
          <div className="flex gap-3 items-center">
            <img src={FeztiveMiniLogoSvg} alt="Your SVG" />
            <h2 className="text-primary-music-jazz font-monserrat font-bold">
              Feztive
            </h2>
          </div>
          <div className="flex gap-8 items-center">
            <NavTab placeholder="Home" href={"/"} />
            <NavTab placeholder="About" href={"/about"} />
            <NavTab placeholder="Event" href={"/event"} isComingSoon/>
            <NavTab placeholder="Merchandise" href={"/merchandise"} />
            <Button placeholder="Login" isSmall isSecondary />
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
