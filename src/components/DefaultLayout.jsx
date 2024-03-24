import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

// Imported Png or Svg
import FeztiveWhiteIconSvg from "../assets/svg/feztive-white-icon.svg";

// Imported Elements
import InputNext from "../elements/InputNext";
import Header from "../elements/Header";

import { useLocation } from "react-router-dom";

function DefaultLayout() {
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
    <div id="defaultLayout">
      <Header page={page} onOpenPage={handleSetPage} />
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="w-full bg-gradient-to-r from-primary-music-jazz to-primary-light-orange px-16 pb-5 pt-8 grid grid-cols-2 gap-y-16">
          <div className="grid grid-cols-4 gap-x-12">
            <div className="address col-span-2 grid gap-y-4">
              <div className="flex gap-x-2 items-center">
                <img
                  src={FeztiveWhiteIconSvg}
                  alt="feztive-white-icon.svg"
                  width={60}
                  height={52}
                />
                <h2 className="text-primary-white text-5xl font-semibold">
                  Feztive
                </h2>
              </div>
              <div className="address-detail">
                <h3 className=" font-inter font-semibold text-primary-white pb-4">
                  Address:
                </h3>
                <h4 className="font-inter text-primary-white">
                  Jalan Sisingamangaraja No 18, Pulogadung Jakarta Selatan, DKI
                  Jakarat
                </h4>
              </div>
            </div>
            <div className="our-product-menu">
              <h3 className=" font-inter text-primary-white pb-7">
                Our Product
              </h3>
              <div className="our-product-sub-menu grid gap-4">
                <h4 className="font-inter text-primary-white">Merchandise</h4>
                <h4 className="font-inter text-primary-white">Event</h4>
              </div>
            </div>
            <div className="our-profile-menu">
              <h3 className=" font-inter text-primary-white pb-7">
                Our Profile
              </h3>
              <div className="our-profile-sub-menu grid gap-4">
                <h4 className="font-inter text-primary-white">About us</h4>
              </div>
            </div>
          </div>
          <div className="grid place-items-end pr-10">
            <div className="contact-us">
              <h3 className=" font-inter text-primary-white pb-4">
                Contact Us
              </h3>
              <div className="our-product-sub-menu grid gap-4 pb-7">
                <h4 className="font-inter text-primary-white">
                  (+62) 81292930923
                </h4>
                <h4 className="font-inter text-primary-white">
                  DamotySpeed@gmail.com
                </h4>
              </div>
              <InputNext placeholder="Subscribe Newsletter" />
            </div>
          </div>
          <div className="col-span-2 flex justify-center">
            <h3 className="text-primary-white">@Copyright 2023</h3>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DefaultLayout;
