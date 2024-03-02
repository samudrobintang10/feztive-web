import { Outlet } from "react-router-dom";

// Imported Png or Svg
import FeztiveMiniLogoSvg from "../assets/svg/festive-mini.svg";

// Imported Components
import Button from "../elements/Button";
import NavTab from "../elements/NavTab";
import InputNext from "../elements/InputNext";

function DefaultLayout() {
  return (
    <div id="defaultLayout">
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
          <NavTab placeholder="Event" href={"/event"} isComingSoon />
          <NavTab placeholder="Merchandise" href={"/merchandise"} />
          <Button placeholder="Login" isSmall isSecondary />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="w-full bg-gradient-to-r from-primary-music-jazz to-primary-light-orange px-16 pb-5 pt-8 grid grid-cols-2 gap-y-16">
          <div className="grid grid-cols-4 gap-x-12">
            <div className="address col-span-2">
              <h3 className=" font-inter font-semibold text-primary-white pb-4">
                Address:
              </h3>
              <h4 className="font-inter text-primary-white">
                Jalan Sisingamangaraja No 18, Pulogadung Jakarta Selatan, DKI
                Jakarat
              </h4>
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
            <h3 className="text-primary-white">
              @Copyright 2023
            </h3>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DefaultLayout;
