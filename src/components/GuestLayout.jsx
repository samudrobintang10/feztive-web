import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

// Imported Png or Svg
import FeztiveMiniLogoSvg from "../assets/svg/feztive-mini.svg";
import GuestImage from "../assets/images/guestImage.png";

// Imported Elements
import InputNext from "../elements/InputNext";
import Header from "../elements/Header";

import { useLocation } from "react-router-dom";

function GuestLayout() {
  let location = useLocation();

  const [page, setPage] = useState(location.pathname);

  // setting the page to the as is
  const handleSetPage = (state) => {
    setPage(state);
  };

  // implementing header as the location goes back
  useEffect(() => {
    setPage(location.pathname);
  }, [location]);

  return (
    <div id="guestLayout">
      <header className="header-guest">
        <div className="wrapper-header-guest py-3 z-20">
          <div className="flex gap-3 items-center">
            <img
              src={FeztiveMiniLogoSvg}
              alt="Your SVG"
              className="bg-primary-white rounded-full justify-self-center"
            />
            <h2 className={"font-monserrat font-bold text-primary-music-jazz"}>
              Feztive
            </h2>
          </div>
        </div>
      </header>
      <main>
        <div className="mt-12 w-5/12">
          <Outlet />
        </div>
      </main>
      <div className="absolute right-0 top-0">
        <img
          src={GuestImage}
          alt="GuestImage.png"
          className=" h-screen w-full"
        />
      </div>
    </div>
  );
}

export default GuestLayout;