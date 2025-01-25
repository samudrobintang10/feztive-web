import ExampleImagePng from "../assets/images/example-image.png";
import Button from "./Button";
import { useState } from "react";
import ModalPopUp from "./ModalPopUp";
import { Modal, Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import SelectBox from "./SelectBox";

function OrderHistoryCard({
  image,
  shoppingDate,
  invoiceNum,
  status,
  title,
  price,
}) {
  const [openCancelModal, setOpenCancelModal] = useState(false);
  const [openTrackModal, setOpenTrackModal] = useState(false);

  // Modal Open/Close Handlers
  const handleCancelOrderClick = () => setOpenCancelModal(true);
  const handleTrackOrderClick = () => setOpenTrackModal(true);
  const handleCloseModal = () => {
    setOpenCancelModal(false);
    setOpenTrackModal(false);
  };

  // Define a mapping object for status to background color classes
  const statusClasses = {
    "Waiting for Courier": "bg-primary-green",
    Success: "bg-primary-green",
    "Waiting for Refund": "bg-secondary-yellow",
    "Waiting for Confirmation": "bg-secondary-brown",
    Cancelled: "bg-secondary-red",
  };

  // Default to a fallback class if the status doesn't match
  const bgClass = statusClasses[status] || "bg-primary-blue";

  // Map status to button properties
  const buttonConfig = {
    "Waiting for Courier": {
      placeholder: "Track Order",
      colorClass: "isPurple",
      onClick: handleTrackOrderClick,
    },
    Success: { placeholder: "Give Rating", colorClass: "isOrange" },
    "Waiting for Confirmation": {
      placeholder: "Cancel Order",
      colorClass: "isRed",
      onClick: handleCancelOrderClick,
    },
  };

  const buttonProps = buttonConfig[status];

  return (
    <div className="rounded-xl p-6 border border-secondary-grey">
      <div className="flex justify-between mb-4">
        <div className="info-bill grid gap-y-2">
          <h5 className="font-inter">
            <span className="font-semibold">Shopping Date:</span> 5 Jan 2025
          </h5>
          <h5 className="font-inter">
            <span className="font-semibold">Invoice:</span>{" "}
            INV/20250105/MPL/4381184725
          </h5>
        </div>
        <div className={`status rounded-md py-1 px-2 ${bgClass} h-fit`}>
          <h5 className="text-white">{status}</h5>
        </div>
      </div>
      <div className="flex gap-x-6">
        <img
          src={image}
          alt="merchandise-product.png"
          className="rounded-xl w-64"
        />
        <div className="product-info w-full flex flex-col justify-between">
          <div className="product-detail">
            <div className="flex justify-between mb-2">
              <h5 className="text-black font-semibold font-inter">
                Koudetat à la Maison #1 (L'intégrale)
              </h5>
              <h5 className="text-black font-semibold font-inter">Rp250.000</h5>
            </div>
            <h6 className=" text-primary-blue font-semibold font-inter cursor-pointer mb-4">
              See Detail
            </h6>
          </div>

          <div className="self-end flex items-center gap-x-6">
            <h6 className="text-primary-purple">Download Invoice</h6>
            {buttonProps && (
              <Button
                isSmall
                placeholder={buttonProps.placeholder}
                {...{ [buttonProps.colorClass]: true }}
                onClick={buttonProps.onClick}
              />
            )}
          </div>
        </div>
      </div>
      {/* Modal for Cancel Order */}
      <Modal open={openCancelModal} onClose={handleCloseModal}>
        <Box className="fixed inset-0 flex items-center justify-center">
          <div className="w-4/12 bg-white p-7 rounded-xl grid gap-y-7">
            <div className="flex justify-between">
              <h3 className=" font-inter font-semibold text-primary-red">
                Cancel Order
              </h3>
              <FontAwesomeIcon
                icon={faClose}
                className="p-2 rounded-full justify-self-center bg-white cursor-pointer"
                onClick={handleCloseModal}
              />
            </div>
            <div className="grid gap-y-4">
              <h5>
                Apakah anda yakin untuk melakukan pembatalan pesanan untuk:
              </h5>
              <div className=" rounded-lg border border-secondary-grey p-4">
                <div className="flex gap-x-4">
                  <img
                    src={image}
                    alt="merchandise-product.png"
                    className="rounded-xl w-16 h-fit"
                  />
                  <div className="grid gap-y-1">
                    <h5 className="font-inter">
                      <span className="font-semibold">Invoice:</span>{" "}
                      INV/20250105/MPL/4381184725
                    </h5>
                    <h4 className="text-black font-semibold font-inter">
                      Koudetat à la Maison #1 (L'intégrale)
                    </h4>
                    <h5 className="text-tertiary-grey">1 x Rp250.000</h5>
                  </div>
                </div>
              </div>

              <SelectBox
                placeholder={"Why are you cancelling this product?"}
                isSmall
              />
              <Button isPurple isMedium placeholder={"Request Cancellation"} />
            </div>
          </div>
        </Box>
      </Modal>

      {/* Modal for Track Order */}
      <Modal open={openTrackModal} onClose={handleCloseModal}>
        <Box className="fixed inset-0 flex items-center justify-center">
          <div className="w-4/12 bg-white p-7 rounded-xl grid gap-y-7">
            <div className="flex justify-between">
              <h3 className=" font-inter font-semibold text-primary-purple">
                Track Order
              </h3>
              <FontAwesomeIcon
                icon={faClose}
                className="p-2 rounded-full justify-self-center bg-white cursor-pointer"
                onClick={handleCloseModal}
              />
            </div>
            <div className="grid gap-y-4">
              <div className=" rounded-lg border border-secondary-grey p-4">
                <div className="flex gap-x-4">
                  <img
                    src={image}
                    alt="merchandise-product.png"
                    className="rounded-xl w-16 h-fit"
                  />
                  <div className="grid gap-y-1">
                    <h5 className="font-inter">
                      <span className="font-semibold">Invoice:</span>{" "}
                      INV/20250105/MPL/4381184725
                    </h5>
                    <h4 className="text-black font-semibold font-inter">
                      Koudetat à la Maison #1 (L'intégrale)
                    </h4>
                    <h5 className="text-tertiary-grey">1 x Rp250.000</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default OrderHistoryCard;
