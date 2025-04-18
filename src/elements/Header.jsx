import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faSignOut,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";

// Components & Assets
import NavTab from "./NavTab";
import Button from "./Button";
import FeztiveMiniLogoSvg from "../assets/svg/feztive-mini.svg";
import BoxOnePng from "../assets/images/box1.png";
import BoxTwoPng from "../assets/images/box2.png";
import CupOnePng from "../assets/images/cup1.png";
import CubeOnePng from "../assets/images/cube1.png";

function Header({ onOpenPage, page, token, onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const pageSecondary = ["/event", "/merchandise"];
  const isSecondary = pageSecondary.includes(page);
  const brush = isSecondary
    ? page === "/merchandise"
      ? "bg-gradient-to-r from-secondary-purple to-primary-purple"
      : "bg-gradient-to-r from-primary-blue to-secondary-blue"
    : "";

  return (
    <header className={`header relative z-50 ${brush}`}>
      {/* Top Navigation */}
      <div className="wrapper-header flex justify-between py-3 z-20 px-4 lg:px-16">
        <div className="flex gap-3 items-center">
          <img
            src={FeztiveMiniLogoSvg}
            alt="Logo"
            className="bg-primary-white rounded-full w-10 h-10"
          />
          <h2
            className={`lg:text-2xl text-base font-monserrat font-bold ${
              isSecondary ? "text-white" : "text-primary-music-jazz"
            }`}
          >
            Feztive
          </h2>
        </div>

        {/* Desktop Nav */}
        <div className="gap-8 items-center hidden lg:flex">
          <NavTab
            placeholder="Home"
            href="/"
            onClick={() => onOpenPage("/")}
            isSecondary={isSecondary}
          />
          <NavTab
            placeholder="About"
            href="/about"
            onClick={() => onOpenPage("/about")}
            isSecondary={isSecondary}
          />
          <NavTab
            placeholder="Event"
            href="/event"
            onClick={() => onOpenPage("/event")}
            isSecondary={isSecondary}
          />
          <NavTab
            placeholder="Merchandise"
            href="/merchandise"
            onClick={() => onOpenPage("/merchandise")}
            isSecondary={isSecondary}
          />
          {token && (
            <>
              <div className="vertical-line border-l-2 h-1/2 border-l-black"></div>
              <div className="dropdown hover:cursor-pointer">
                <div
                  className="flex items-center gap-x-4"
                  onClick={handleClick}
                >
                  <h5
                    className={`${
                      isSecondary ? "text-white" : "text-black"
                    } hover:text-primary-orange`}
                  >
                    My Account
                  </h5>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={isSecondary ? "text-white" : "text-black"}
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
                      href="/profile"
                      onClick={() => onOpenPage("/profile")}
                    />
                  </MenuItem>
                  <MenuItem>
                    <NavTab
                      placeholder="Dashboard Catalog"
                      href="/dashboard-catalog"
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
                    <h5 className="text-primary-red">Logout</h5>
                  </MenuItem>
                </Menu>
              </div>
            </>
          )}
          {!token && (
            <Button placeholder="Login" isSmall isSecondary href="/login" />
          )}
        </div>

        {/* Burger button */}
        <div className="lg:hidden flex items-center">
          <FontAwesomeIcon
            icon={faBars}
            className="text-black text-xl cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-primary-orange z-50 transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center py-14 h-full gap-8">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-white text-2xl "
            onClick={() => setSidebarOpen(false)}
          />
          <Link
            to="/"
            onClick={() => {
              setSidebarOpen(false);
              onOpenPage("/");
            }}
          >
            <h4 className="text-white">Home</h4>
          </Link>
          <Link
            to="/about"
            onClick={() => {
              setSidebarOpen(false);
              onOpenPage("/about");
            }}
          >
            <h4 className="text-white">About</h4>
          </Link>
          <Link
            to="/merchandise"
            onClick={() => {
              setSidebarOpen(false);
              onOpenPage("/merchandise");
            }}
          >
            <h4 className="text-white">Merchandise</h4>
          </Link>
          {!token && (
            <Link
              to="/login"
              onClick={() => {
                setSidebarOpen(false);
                onOpenPage("/login");
              }}
            >
              <button className="text-white border border-white px-6 py-2 rounded">
                LOGIN
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Hero Section */}
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
              alt="box2.svg"
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
              alt="cup1.svg"
              className="w-[165px] h-[165px] absolute -top-10 left-0 z-0"
            />
            <img
              src={CubeOnePng}
              alt="cube1.svg"
              className="w-[195px] h-[195px] absolute -bottom-0 right-10 z-0"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
