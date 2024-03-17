import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavTab from "./NavTab";
import Button from "./Button";

// Imported Png or Svg
import FeztiveMiniLogoSvg from "../assets/svg/feztive-mini.svg";
import BoxOnePng from "../assets/images/box1.png";
import BoxTwoPng from "../assets/images/box2.png";
import LineScrowlingOnePng from "../assets/images/LineScrowling1.png";
import LineScrowlingTwoPng from "../assets/images/LineScrowling2.png";
import CupOnePng from "../assets/images/cup1.png";
import CubeOnePng from "../assets/images/cube1.png";

function Header({ onOpenPage, page }) {
  const brush = [];
  if (page === "/merchandise") {
    brush.length = 0;
    brush.push("bg-gradient-to-r from-secondary-purple to-primary-purple");
  }
  if (page === "/event") {
    brush.length = 0;
    brush.push("bg-gradient-to-r from-primary-blue to-secondary-blue");
  }
  return (
    <header className={"header relative z-0".concat(" ", brush.join(" "))}>
      <div className="wrapper-header flex justify-between py-3 z-20">
        <div className="flex gap-3 items-center">
          <img
            src={FeztiveMiniLogoSvg}
            alt="Your SVG"
            className="bg-primary-white rounded-full justify-self-center"
          />
          <h2
            className={"font-monserrat font-bold".concat(
              " ",
              page !== "/" ? "text-white" : "text-primary-music-jazz"
            )}
          >
            Feztive
          </h2>
        </div>
        <div className="flex gap-8 items-center">
          <NavTab
            placeholder="Home"
            href={"/"}
            onClick={() => onOpenPage("/")}
            isSecondary={page !== "/"}
          />
          <NavTab
            placeholder="About"
            href={"/about"}
            onClick={() => onOpenPage("/about")}
            isSecondary={page !== "/"}
          />
          <NavTab
            placeholder="Event"
            href={"/event"}
            onClick={() => onOpenPage("/event")}
            isSecondary={page !== "/"}
          />
          <NavTab
            placeholder="Merchandise"
            href={"/merchandise"}
            onClick={() => onOpenPage("/merchandise")}
            isSecondary={page !== "/"}
          />
          <Button placeholder="Login" isSmall isSecondary />
        </div>
      </div>
      {page === "/merchandise" && (
        <div className="flex justify-center py-40">
          <div className="w-7/12 relative flex justify-center">
            <h2 className="w-9/12 text-6xl text-white font-inter font-bold text-center leading-snug z-10">
              Pre-order The Best Merchandise For You
            </h2>
            <img
              src={BoxOnePng}
              alt="box1.svg"
              className="w-[223px] h-[223px] absolute -top-20 left-0 z-0"
            />
            <img
              src={BoxTwoPng}
              alt="box1.svg"
              className="w-[157px] h-[157px] absolute -bottom-10 right-10 z-0"
            />
          </div>
        </div>
      )}
      {page === "/event" && (
        <div className="flex justify-center py-32">
          <div className="w-7/12 relative flex justify-center">
            <h2 className="w-12/12 text-6xl text-white font-inter font-bold text-center leading-snug z-10">
              Connect With Another Feztiver Through Event Community
            </h2>
            <img
              src={CupOnePng}
              alt="box1.svg"
              className="w-[165px] h-[165px] absolute -top-10 left-0 z-0"
            />
            <img
              src={CubeOnePng}
              alt="box1.svg"
              className="w-[195px] h-[195px] absolute -bottom-0 right-10 z-0"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
