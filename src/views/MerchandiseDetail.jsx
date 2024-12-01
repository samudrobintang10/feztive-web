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

function MerchandiseDetail() {
  // useParams to get the dynamic part of the route
  const pathnames = [
    { label: "Merchandise", path: "/merchandise" },
    { label: "Graphic Design", path: "/graphic-design" },
  ];

  const { merchandiseId } = useParams();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      alt: "image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      alt: "image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
      alt: "image 3",
    },
    {
      src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
      alt: "image 3",
    }
  ];


  return (
    <div className="merchandise">
      <div className="grid gap-y-9 py-12">
        <BreadcrumbsPath pathnames={pathnames} />
        <div className="flex gap-x-9">
          <div className="product-photo w-1/2">
            <Carousel
              className="carousel"
              autoplay
              autoplayDelay={5000}
              loop
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div
                  className={`absolute bottom-0 left-2/4 z-10 w-full grid grid-cols-4 pt-2 -translate-x-2/4 gap-2 bg-white`}
                >
                  {new Array(length).fill("").map((_, i) => (
                    <div className="image-preview">
                      <img
                        key={i}
                        src={images[i].src}
                        alt={images[i].alt}
                        className={`h-full w-full object-cover cursor-pointer ${
                          activeIndex === i ? "opacity-100 z-50" : " opacity-50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    </div>
                  ))}
                </div>
              )}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              ))}
            </Carousel>
          </div>
          <div className="product-detail w-1/2 px-5 py-3 grid gap-y-7">
            <div className="flex justify-between">
              <h3 className=" font-inter font-normal">Graphic Design</h3>
              <FontAwesomeIcon
                icon={faHeart}
                className="p-2 rounded-full justify-self-center bg-white"
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
        </div>
        <div className="bestseller-product grid gap-y-6 mb-12">
          <h2 className="font-semibold font-inter">BESTSELLER PRODUCTS</h2>
          <div className="mb-6 px-20">
            <hr className="border-[##ECECEC] " />
          </div>
          <div className="product-list grid grid-cols-3 gap-x-12 gap-y-7">
            {MerchandiseJson.map((merchandise) => (
              <ProductCard
                image={ExampleImagePng}
                title="Blackpink the show bornpink show fe.... "
                seller="Raihan"
                availableStock={36}
                totalStock={60}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchandiseDetail;
