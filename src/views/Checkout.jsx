import React from "react";
import { useParams, useNavigate } from "react-router-dom";
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

function Checkout() {
  // useParams to get the dynamic part of the route
  const pathnames = [{ label: "Checkout", path: "/checkout" }];

  const { checkoutId } = useParams();
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  // if there is optional
  const isStepOptional = (step) => {
    return;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [selectedOptionShipping, setSelectedOptionShipping] = useState("");

  const handleShippingChange = (event) => {
    setSelectedOptionShipping(event.target.value);
  };

  const [selectedOptionPaymentType, setSelectedOptionPaymentType] =
    useState("");

  const handlePaymentTypeChange = (event) => {
    setSelectedOptionPaymentType(event.target.value);
  };

  const [selectedOptionPaymentMethod, setSelectedOptionPaymentMethod] =
    useState("");

  const handlePaymentMethodChange = (event) => {
    setSelectedOptionPaymentMethod(event.target.value);
  };

  return (
    <div className="checkout flex justify-center items-center">
      <div className="grid py-12 w-9/12 gap-y-12">
        <div className="grid gap-y-3">
          <h2 className="font-bold font-inter text-center">
            Where should we sent the order?
          </h2>
          <h4 className="font-normal font-inter text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </h4>
        </div>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>
                    <h5 className="font-inter text-xs">{label}</h5>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <div className=" rounded-2xl p-8 border border-senary-grey mt-4 bg-white">
              {activeStep === 0 && (
                <div className="field-information grid gap-y-3">
                  <h4 className="font-semibold font-inter">Home Address</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                    <div className=" col-span-2">
                      <Input placeholder={"Street Address"} isSmall />
                    </div>
                    <Input placeholder={"Province"} isSmall />
                    <Input placeholder={"City"} isSmall />
                    <Input placeholder={"Zip/Postal Code"} isSmall />
                    <Input placeholder={"Phone Number"} isSmall />
                  </div>
                  <div className="payment mt-4">
                    <div className="grid gap-y-4 mb-8">
                      <h4 className="font-semibold font-inter w-full mb-4">
                        Payment Summary
                      </h4>
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
                    <Button
                      isPurple
                      placeholder={"Next"}
                      isMedium
                      onClick={handleNext}
                    />
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="shipping-method grid gap-y-3">
                  <h4 className=" font-semibold font-inter">Shipping Method</h4>
                  <div className="grid gap-y-3 shipping-options">
                    <RadioButton
                      name="shipping"
                      value="standard"
                      price="Rp25.000"
                      description="Regular - JNE"
                      duration="3-4 Hari"
                      selectedValue={selectedOptionShipping}
                      onChange={handleShippingChange}
                    />
                    <RadioButton
                      name="shipping"
                      value="express"
                      price="Rp50.000"
                      description="Express - JNE"
                      duration="1-2 Hari"
                      selectedValue={selectedOptionShipping}
                      onChange={handleShippingChange}
                    />
                  </div>
                  <div className="flex gap-x-3 mt-2">
                    <Button
                      isPurple
                      placeholder={"Back"}
                      isMedium
                      isSecondary
                      onClick={handleBack}
                    />
                    <Button
                      isPurple
                      placeholder={"Next"}
                      isMedium
                      onClick={handleNext}
                    />
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="payment-terms grid gap-y-3">
                  <div className="grid gap-y-2">
                    <h4 className="font-semibold font-inter">Payment Terms</h4>
                    <div className="grid gap-y-3 shipping-options">
                      <RadioButton
                        name="payment-type"
                        value="dprepayment"
                        description="DP + Repayment"
                        selectedValue={selectedOptionPaymentType}
                        onChange={handlePaymentTypeChange}
                      />
                      <RadioButton
                        name="payment-type"
                        value="fullpayment"
                        description="Full Payment"
                        selectedValue={selectedOptionPaymentType}
                        onChange={handlePaymentTypeChange}
                      />
                    </div>
                  </div>
                  <div className="grid gap-y-2">
                    <h4 className="font-semibold font-inter">Payment Method</h4>
                    <div className="grid gap-y-3 shipping-options">
                      <RadioButton
                        name="payment-method"
                        value="gopay"
                        description="Gopay (Automated by Xendit)"
                        selectedValue={selectedOptionPaymentMethod}
                        onChange={handlePaymentMethodChange}
                      />
                      <RadioButton
                        name="payment-method"
                        value="manual"
                        description="Manual"
                        selectedValue={selectedOptionPaymentMethod}
                        onChange={handlePaymentMethodChange}
                      />
                    </div>
                  </div>
                  <div className="payment mt-4">
                    <div className="grid gap-y-4 mb-8">
                      <h4 className="font-semibold font-inter w-full mb-4">
                        Payment Summary
                      </h4>
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
                      <div className="flex w-full justify-end">
                        <h5 className="font-inter text-tertiary-grey">
                          Payment left for repayment: Rp 250.000
                        </h5>
                      </div>
                    </div>
                  </div>
                  <Warning
                    description={
                      "Payment still not include tax for bea cukai. It will be calculated later when the merchandise arrive in Indonesia. We will sent the original tax manufacture for the transparecy of payment"
                    }
                  />
                  <div className="flex gap-x-3 mt-2">
                    <Button
                      isPurple
                      placeholder={"Back"}
                      isMedium
                      isSecondary
                      onClick={handleBack}
                    />
                    <Button
                      isPurple
                      placeholder={"Next"}
                      isMedium
                      onClick={() => navigate("/my-account/checkout/complete")}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </Box>
      </div>
    </div>
  );
}

export default Checkout;
