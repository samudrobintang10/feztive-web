import Button from "./Button";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TwoPeopleIconSvg from "../assets/svg/two-people-icon.svg";

function ProductCard({
  image,
  title,
  seller,
  availableStock,
  totalStock,
  icon,
  onClick
}) {
  return (
    <div className="rounded-xl w-64">
      <div className="pb-5">
        <div className="relative">
          <img
            src={image}
            alt="merchandise-product.png"
            className="rounded-xl "
          />
          <div className="flex gap-x-2 absolute justify-center pb-3 bottom-0 left-1/2 transform -translate-x-1/2">
            <FontAwesomeIcon
              icon={faHeart}
              className="p-2 rounded-full justify-self-center bg-white"
            />
            <FontAwesomeIcon
              icon={faCartShopping}
              className="p-2 rounded-full justify-self-center bg-white"
              onClick={onClick}
            />
          </div>
        </div>
      </div>
      <div className="title-author pb-3 grid gap-y-3">
        <h4 className="font-semibold leading-tight">Graphic Design</h4>
        <h6 className="font-medium w-fit text-primary-black">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </h6>
        <div className="flex justify-between">
          <h5 className="text-tertiary-grey font-normal">
            Slot left: <b className="text-black">2</b>
          </h5>
          <h5 className="text-tertiary-grey font-normal">
            Until: <b className="text-black">23 Dec 2024</b>
          </h5>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-black font-semibold">Rp500.000</h4>
          <Button placeholder={"See More"} isSmall isSecondary isPurple />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
