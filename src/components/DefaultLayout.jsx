import { Outlet } from "react-router-dom";
import FeztiveMiniLogoSvg from "../assets/festive-mini.svg";
import Button from "../elements/Button";

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
            <h5 className="font-bold text-primary-light-orange">Home</h5>
            <h5 className="font-medium">About</h5>
            <h5 className="font-medium">Event</h5>
            <h5 className="font-medium">Merchandise</h5>
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
