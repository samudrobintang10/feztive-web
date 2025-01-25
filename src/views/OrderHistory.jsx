import React from "react";
import { useParams } from "react-router-dom";
import BreadcrumbsPath from "../elements/BreadcrumbsPath";
import Button from "../elements/Button";
import ProductCard from "../elements/ProductCard";
import MerchandiseJson from "../assets/json/merchandise.json";

import ExampleImagePng from "../assets/images/example-image.png";
import { Carousel } from "@material-tailwind/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import NavMenu from "../elements/NavMenu";
import OrderHistoryCard from "../elements/OrderHistoryCard";

function OrderHistory() {
  // useParams to get the dynamic part of the route
  const pathnames = [
    { label: "My Account", path: "/my-account" },
    { label: "Order History", path: "/my-account/order-history" },
  ];

  const { merchandiseId } = useParams();

  const myAccountMenu = {
    menuTitle: "My Account",
    subMenuItems: ["Profile", "Bookmark", "Order History"],
  };

  const [selectedItem, setSelectedItem] = useState(null); // State to store selected item

  return (
    <div className="order-history">
      <div className="grid gap-y-9 py-12">
        <BreadcrumbsPath pathnames={pathnames} />
        <div className="flex">
          <div className="grid w-2/12 h-fit">
            <NavMenu
              menuTitle={myAccountMenu.menuTitle}
              subMenuItems={myAccountMenu.subMenuItems}
              selectedItem={selectedItem}
              onSelectItem={setSelectedItem} // Bookmark theOrder History to update selectedItem
            />
          </div>
          <div className="w-10/12 grid gap-y-6">
            <OrderHistoryCard status={"Waiting for Confirmation"} image={ExampleImagePng} />
            <OrderHistoryCard status={"Cancelled"} image={ExampleImagePng} />
            <OrderHistoryCard status={"Waiting for Courier"} image={ExampleImagePng} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
