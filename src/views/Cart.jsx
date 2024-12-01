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
import CartItem from "../elements/CartItem";
import CheckboxInput from "../elements/CheckboxInput";

function Cart() {
  // useParams to get the dynamic part of the route
  const pathnames = [
    { label: "My Account", path: "/my-account" },
    { label: "Cart", path: "/cart" },
  ];

  return (
    <div className="cart">
      <div className="grid gap-y-9 py-12 mb-12">
        <div className="page-title">
          <h2 className="font-semibold font-inter mb-2">Cart</h2>
          <BreadcrumbsPath pathnames={pathnames} />
        </div>
        <div className="flex gap-x-12">
          <div className="grid w-1/2 gap-y-6">
            <div className="rounded-xl border border-tertiary-grey px-6 py-1 flex gap-x-4 items-center">
              <CheckboxInput />
              <div className="flex justify-between w-full">
                <h5 className="font-semibold font-inter">Select All</h5>
                <h5 className="font-semibold font-inter text-primary-music-jazz">
                  Delete All
                </h5>
              </div>
            </div>
            <CartItem />
            <CartItem />
          </div>
          <div className="rounded-xl border border-tertiary-grey p-8 w-1/2 h-fit">
            <div className="grid gap-y-4 mb-8">
              <h5 className="font-semibold font-inter text-center w-full mb-4">
                Payment Summary
              </h5>
              <div className="flex w-full justify-between">
                <h6 className="font-inter">Barang keren Mantap (1x)</h6>
                <h6 className="font-inter">Rp 25.000</h6>
              </div>
              <div className="flex w-full justify-between">
                <h6 className="font-inter">Biaya aplikasi (1x)</h6>
                <h6 className="font-inter">Rp 250.000</h6>
              </div>
              <hr className="border-tertiary-grey" />
              <div className="flex w-full justify-between">
                <h6 className="font-inter">
                  Total <b>(not include tax)</b>
                </h6>
                <h4 className="font-inter font-semibold">Rp 250.000</h4>
              </div>
            </div>

            <Button isPurple placeholder={"Next"} isMedium />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
