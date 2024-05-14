import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavTab from "./NavTab";
import Button from "./Button";
import { useState } from "react";

// Imported Png or Svg
import FeztiveMiniLogoSvg from "../assets/svg/feztive-mini.svg";
import BoxOnePng from "../assets/images/box1.png";
import BoxTwoPng from "../assets/images/box2.png";
import CupOnePng from "../assets/images/cup1.png";
import CubeOnePng from "../assets/images/cube1.png";
import {
  faAngleDown,
  faSignIn,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";

function Header({ onOpenPage, page, token, onLogout }) {
  const brush = [];
  const pageSecondary = ["/event", "/merchandise"];
  if (page === "/merchandise") {
    brush.length = 0;
    brush.push("bg-gradient-to-r from-secondary-purple to-primary-purple");
  }
  if (page === "/event") {
    brush.length = 0;
    brush.push("bg-gradient-to-r from-primary-blue to-secondary-blue");
  }

  // Set on dropdown navbar
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            className={"lg:text-2xl text-base font-monserrat font-bold".concat(
              " ",
              pageSecondary.includes(page)
                ? "text-white"
                : "text-primary-music-jazz"
            )}
          >
            Feztive
          </h2>
        </div>
        <div className="gap-8 items-center hidden lg:flex">
          <NavTab
            placeholder="Home"
            href={"/"}
            onClick={() => onOpenPage("/")}
            isSecondary={pageSecondary.includes(page)}
          />
          <NavTab
            placeholder="About"
            href={"/about"}
            onClick={() => onOpenPage("/about")}
            isSecondary={pageSecondary.includes(page)}
          />
          <NavTab
            placeholder="Event"
            href={"/event"}
            onClick={() => onOpenPage("/event")}
            isSecondary={pageSecondary.includes(page)}
          />
          <NavTab
            placeholder="Merchandise"
            href={"/merchandise"}
            onClick={() => onOpenPage("/merchandise")}
            isSecondary={pageSecondary.includes(page)}
          />
          {token && (
            <div className="vertical-line border-l-2 h-1/2 border-l-black"></div>
          )}
          {token && (
            <div className="dropdown hover:cursor-pointer">
              <div className="flex items-center gap-x-4" onClick={handleClick}>
                <h5
                  className={(pageSecondary.includes(page)
                    ? "text-white"
                    : "text-black"
                  ).concat(" ", "hover:text-primary-orange")}
                >
                  My Account
                </h5>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={
                    pageSecondary.includes(page) ? "text-white" : "text-black"
                  }
                />
              </div>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    border: 1,
                    borderColor: "#D8D8D8",
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <NavTab
                    placeholder="Profile"
                    href={"/profile"}
                    onClick={() => onOpenPage("/profile")}
                  />
                </MenuItem>
                <MenuItem>
                  <NavTab
                    placeholder="Dashboard Catalog"
                    href={"/dashboard-catalog"}
                    onClick={() => onOpenPage("/dashboard-catalog")}
                  />
                </MenuItem>
                <Divider component="li" />
                <MenuItem onClick={onLogout} sx={{ columnGap: 1 }}>
                  <FontAwesomeIcon
                    icon={faSignOut}
                    className="text-primary-red"
                    style={{ transform: "rotate(180deg)" }}
                  />
                  <h5 className={"text-primary-red"}>Logout</h5>
                </MenuItem>
              </Menu>
            </div>
          )}
          {!token && (
            <Button placeholder="Login" isSmall isSecondary href={"/login"} />
          )}
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
