import Button from "../elements/Button";
import MerchandiseMenuCard from "../elements/MerchandiseMenuCard";
import MerchandiseCard from "../elements/MerchandiseCard";

// Imported Library
import {
  faArrowRight,
  faAngleRight,
  faLaptop,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Imported Png or Svg
import HeroPng from "../assets/images/home-hero.png";
import BecomeASeller from "../assets/images/becomeaseller.png";
import BecomeABuyer from "../assets/images/becomeabuyer.png";
import ExampleImagePng from "../assets/images/example-image.png";
import BannerAboutPng from "../assets/images/banner-about.png";
import TwoPeopleIconSvg from "../assets/svg/two-people-icon.svg";
import CheckIconSvg from "../assets/svg/check-icon.svg";
import RocketIconSvg from "../assets/svg/rocket-icon.svg";
import StarIconSvg from "../assets/svg/star-icon.svg";
import ClockIconSvg from "../assets/svg/clock-icon.svg";

// Imported JSON for Example
import MerchandiseJson from "../assets/json/merchandise.json";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { useState } from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="home">
      <section className="hero">
        <div className="py-24 flex justify-between gap-20 items-center">
          <div className="hero-images w-6/12 relative">
            <img
              src={HeroPng}
              alt="hero.png"
              className="rounded-3xl overflow-hidden"
            />
          </div>
          <div className="hero-narative w-6/12 relative">
            <h1 className="font-inter font-bold text-[56px] leading-tight pb-3">
              Elevating Merchandise Experiences for All with Feztive
            </h1>
          </div>
        </div>
      </section>
      <section className="tab-menu my-12">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="tabs"
              variant="fullWidth"
              TabIndicatorProps={{
                style: {
                  backgroundColor: value === 0 ? "#8000FF" : "#FF8A00",
                },
              }}
            >
              <Tab
                label={"Become a Seller"}
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                  "&.Mui-selected": {
                    color: "#8000FF",
                  },
                  fontFamily: "inherit",
                  fontSize: 20,
                }}
                {...a11yProps(0)}
              />
              <Tab
                label={"Become a Buyer"}
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                  "&.Mui-selected": {
                    color: "#FF8A00",
                  },
                  fontFamily: "inherit",
                  fontSize: 20,
                }}
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="py-8 flex justify-between gap-12">
              <div className="hero-images w-5/12 relative">
                <img
                  src={BecomeASeller}
                  alt="becomeaseller.png"
                  className="rounded-3xl overflow-hidden"
                />
              </div>
              <div className="hero-narative w-7/12 relative">
                <h3 className="font-inter font-semibold leading-tight pb-6">
                  Embrace flexible selling joyfully on our platform, whether
                  sharing or full pre-orders effortlessly!
                </h3>
                <div className="grid gap-y-6">
                  <div className="flex gap-x-4 items-center">
                    <div className="icon p-3 bg-septenary-grey rounded-lg h-fit">
                      <FontAwesomeIcon icon={faLaptop} />
                    </div>
                    <div className="explain grid gap-y-2">
                      <h4 className="font-semibold text-primary-purple">
                        Dashboard to Manage
                      </h4>
                      <h5 className="font-medium text-quinary-grey">
                        Dashboard to Manage
                      </h5>
                    </div>
                  </div>
                  <div className="flex gap-x-4 items-center">
                    <div className="icon p-3 bg-septenary-grey rounded-lg h-fit">
                      <FontAwesomeIcon icon={faShop} />
                    </div>
                    <div className="explain grid gap-y-2">
                      <h4 className="font-semibold text-primary-purple">
                        Sell as sharing pre-orders
                      </h4>
                      <h5 className="font-medium text-quinary-grey">
                        Dashboard to Manage
                      </h5>
                    </div>
                  </div>
                  <div className="flex gap-x-4 items-center">
                    <div className="icon p-3 bg-septenary-grey rounded-lg h-fit">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="explain grid gap-y-2">
                      <h4 className="font-semibold text-primary-purple">
                        Sell as full pre-orders
                      </h4>
                      <h5 className="font-medium text-quinary-grey">
                        Dashboard to Manage
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="py-8 flex justify-between gap-12">
              <div className="hero-images w-5/12 relative">
                <img
                  src={BecomeABuyer}
                  alt="becomeabuyer.png"
                  className="rounded-3xl overflow-hidden"
                />
              </div>
              <div className="hero-narative w-7/12 relative">
                <h3 className="font-inter font-semibold leading-tight pb-6">
                  Embrace the ease where buying meets flexibility, only at
                  Feztive!
                </h3>
                <div className="grid gap-y-6">
                  <div className="flex gap-x-4 items-center">
                    <div className="icon p-3 bg-secondary-orange  rounded-lg h-fit">
                      <FontAwesomeIcon icon={faPaypal} />
                    </div>
                    <div className="explain grid gap-y-2">
                      <h4 className="font-semibold text-primary-orange">
                        Flexible payment method
                      </h4>
                      <h5 className="font-medium text-quinary-grey">
                        Dashboard to Manage
                      </h5>
                    </div>
                  </div>
                  <div className="flex gap-x-4 items-center">
                    <div className="icon p-3 bg-secondary-orange rounded-lg h-fit">
                      <FontAwesomeIcon icon={faShop} />
                    </div>
                    <div className="explain grid gap-y-2">
                      <h4 className="font-semibold text-primary-orange">
                        Buy merchandise by sharing with others
                      </h4>
                      <h5 className="font-medium text-quinary-grey">
                        Dashboard to Manage
                      </h5>
                    </div>
                  </div>
                  <div className="flex gap-x-4 items-center">
                    <div className="icon p-3 bg-secondary-orange rounded-lg h-fit">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="explain grid gap-y-2">
                      <h4 className="font-semibold text-primary-orange">
                        Solely buy merchandise for you
                      </h4>
                      <h5 className="font-medium text-quinary-grey">
                        Dashboard to Manage
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CustomTabPanel>
        </Box>
      </section>
      <section className="get-to-know my-36">
        <div className="py-12 bg-primary-purple rounded-2xl flex justify-center">
          <div className="w-1/3 mx-auto text-center grid gap-y-6">
            <h4 className="text-white font-semibold">
              Have something you wanna ask? Hit us on this link below
            </h4>
            <Button placeholder={"Contact us"} isSmall isWhite />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
