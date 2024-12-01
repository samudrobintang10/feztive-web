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

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Input from "../elements/Input";
import RadioButton from "../elements/RadioButton";
import Warning from "../elements/Warning";

const steps = ["Buying Summary", "Shopping method", "Payment", "Order"];

function CompleteCheckout() {
  return (
    <div className="checkout flex justify-center items-center">
      <div className="grid py-12 w-9/12 gap-y-12">
        <div className="grid gap-y-3">
          <h2 className="font-bold font-inter text-center">
            Yes, you've sucessfully ordered!
          </h2>
          <h4 className="font-normal font-inter text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </h4>
          <Button isPurple placeholder={"Back to main screen"} isMedium />
        </div>
      </div>
    </div>
  );
}

export default CompleteCheckout;
