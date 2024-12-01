import Button from "./Button";
import { faHeart, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TwoPeopleIconSvg from "../assets/svg/two-people-icon.svg";
import CheckboxInput from "./CheckboxInput";

function CartItem({ image, title, seller, availableStock, totalStock, icon }) {
  return (
    <div className="rounded-xl border border-tertiary-grey p-6 flex gap-x-4 items-start">
      <CheckboxInput />
      <img
        src={
          "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        }
        alt={"image-1"}
        className={`w-4/12 h-fit`}
      />
      <div className="product-detail">
        <div className="flex justify-between mb-2">
          <h5 className="text-black font-semibold font-inter w-1/2">
            Koudetat à la Maison #1 (L'intégrale)
          </h5>
          <h5 className="text-black font-semibold font-inter">Rp250.000</h5>
        </div>
        <h6 className=" text-primary-blue font-semibold font-inter cursor-pointer mb-4">
          See Detail
        </h6>
        <div className="flex justify-end gap-x-4">
          <FontAwesomeIcon
            icon={faHeart}
            className="p-2 rounded-full justify-self-center bg-white"
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="p-2 rounded-full justify-self-center bg-white text-primary-red border-primary-red border"
          />
          <div className="counter flex gap-x-3 items-center">
            <button className="bg-senary-grey px-2 py-0.5 rounded">
              <h5>-</h5>
            </button>
            <h5>1</h5>
            <button className=" bg-primary-pink px-2 py-0.5 rounded">
              <h5>+</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
