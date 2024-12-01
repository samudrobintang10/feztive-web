import Button from "../elements/Button";
import MerchandiseMenuCard from "../elements/MerchandiseMenuCard";
import MerchandiseCard from "../elements/MerchandiseCard";
import { useState } from "react";

// Imported Library
import { faArrowRight, faAngleRight, faClose } from "@fortawesome/free-solid-svg-icons";

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
import InputSearch from "../elements/InputSearch";
import ProductCard from "../elements/ProductCard";
import Pagination from "@mui/material/Pagination";
import BreadcrumbsPath from "../elements/BreadcrumbsPath";
import NavMenu from "../elements/NavMenu";
import { Box, Modal, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function MerchandiseMenu() {
  const pathnames = [{ label: "Merchandise", path: "/merchandise" }];

  const [selectedItem, setSelectedItem] = useState(null); // State to store selected item

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const accessoriesMenu = {
    menuTitle: "Accessories",
    subMenuItems: ["View All", "Bags", "Watches"],
  };

  const clothingMenu = {
    menuTitle: "Clothing",
    subMenuItems: ["Shirts", "Jeans", "Jackets"],
  };
  return (
    <div className="merchandise">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="fixed inset-0 flex items-center justify-center">
          <div className="w-4/12 bg-white p-7 rounded-xl grid gap-y-7">
            <div className="flex justify-between">
              <h3 className=" font-inter font-normal">Graphic Design</h3>
              <FontAwesomeIcon
                icon={faClose}
                className="p-2 rounded-full justify-self-center bg-white cursor-pointer"
                onClick={handleClose}
              />
            </div>
            <h2 className=" font-inter font-bold ">Rp25.000</h2>
            <div className="grid gap-y-3">
              <h5 className="text-tertiary-grey font-normal">
                Slot left: <b className="text-black">2</b>
              </h5>
              <h5 className="text-tertiary-grey font-normal">
                Until: <b className="text-black">23 Dec 2024</b>
              </h5>
            </div>
            <h5 className="text-tertiary-grey font-normal">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </h5>
            <hr className="border-tertiary-grey" />
            <div className=" border-tertiary-grey border rounded-2xl p-5 grid gap-y-6">
              <h5 className="font-semibold">Set amount to buy</h5>
              <div className="flex justify-between information-total items-center">
                <div className="counter flex gap-x-3 items-center">
                  <button className="bg-senary-grey px-2 py-0.5 rounded">
                    <h5>-</h5>
                  </button>
                  <h5>1</h5>
                  <button className=" bg-primary-pink px-2 py-0.5 rounded">
                    <h5>+</h5>
                  </button>
                </div>
                <h5 className="text-tertiary-grey font-normal">
                  Subtotal: <b className="text-black">Rp250.000</b>
                </h5>
              </div>
              <div className="flex gap-x-4">
                <Button placeholder={"Buy Now"} isMedium isPurple />
                <Button
                  placeholder={"Add to Cart"}
                  isMedium
                  isSecondary
                  isPurple
                />
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <div className="grid gap-y-9 py-12">
        <div className="merchandise-menu flex justify-between items-center">
          <h2 className="font-semibold ">Merchandise</h2>
          <BreadcrumbsPath pathnames={pathnames} />
        </div>
        <div className="flex">
          <div className="grid w-2/12 h-fit">
            <NavMenu
              menuTitle={accessoriesMenu.menuTitle}
              subMenuItems={accessoriesMenu.subMenuItems}
              selectedItem={selectedItem}
              onSelectItem={setSelectedItem} // Pass the function to update selectedItem
            />
            <NavMenu
              menuTitle={clothingMenu.menuTitle}
              subMenuItems={clothingMenu.subMenuItems}
              selectedItem={selectedItem}
              onSelectItem={setSelectedItem} // Pass the function to update selectedItem
            />
          </div>
          <div className="view grid gap-y-10 w-10/12">
            <InputSearch placeholder={"Search"} />
            <div className="product-list grid grid-cols-3 gap-x-12 gap-y-7">
              {MerchandiseJson.map((merchandise) => (
                <ProductCard
                  image={ExampleImagePng}
                  title="Blackpink the show bornpink show fe.... "
                  seller="Raihan"
                  availableStock={36}
                  totalStock={60}
                  icon={ClockIconSvg}
                  onClick={handleOpen}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="grid place-items-center">
          <Pagination
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#8000FF", // Custom text color
                borderColor: "#8000FF", // Custom border color for outlined variant
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                color: "#ffffff", // Text color for selected item
                backgroundColor: "#8000FF", // Background color for selected item
                borderColor: "#8000FF",
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: "#C78EFF", // Hover background color
              },
            }}
            count={3}
            variant="outlined"
            shape="rounded"
            color="secondary"
            size="large"
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default MerchandiseMenu;
