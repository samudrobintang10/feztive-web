import Button from "../elements/Button";
import MerchandiseMenuCard from "../elements/MerchandiseMenuCard";
import MerchandiseCard from "../elements/MerchandiseCard";

// Imported Library
import { faArrowRight, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Imported Png or Svg
import HeroPng from "../assets/images/hero.png";
import ExampleImagePng from "../assets/images/example-image.png";
import BannerAboutPng from "../assets/images/banner-about.png";
import TwoPeopleIconSvg from "../assets/svg/two-people-icon.svg";
import CheckIconSvg from "../assets/svg/check-icon.svg";
import RocketIconSvg from "../assets/svg/rocket-icon.svg";
import StarIconSvg from "../assets/svg/star-icon.svg";
import ClockIconSvg from "../assets/svg/clock-icon.svg";

// Imported JSON for Example
import MerchandiseJson from "../assets/json/merchandise.json";

function Merchandise() {
  return (
    <div className="merchandise">
      <div className="grid gap-y-9 py-24">
        <div className="merchandise-menu">
          <h2 className=" font-semibold text-primary-music-jazz pb-5">
            Merchandise Menu
          </h2>
          <div className="flex gap-x-4">
            <MerchandiseMenuCard
              logo={RocketIconSvg}
              title="Owned Merchandise"
              isBlue
            />
            <MerchandiseMenuCard
              logo={StarIconSvg}
              title="Purchased Merchandise"
            />
          </div>
        </div>
        <div className="merchandise-result">
          <h3 className=" font-semibold pb-5">Merchandise Result: 8 Product</h3>
          <div className="grid grid-cols-4 gap-x-4 gap-y-7">
            {MerchandiseJson.map((merchandise) => (
              <MerchandiseCard
                image={ExampleImagePng}
                title="Blackpink the show bornpink show fe.... "
                seller="Raihan"
                availableStock={36}
                totalStock={60}
                icon={ClockIconSvg}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Merchandise;
