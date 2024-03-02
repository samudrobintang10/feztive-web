import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// The default of this InputNext elements is isPrimary and isNormal

function InputNext({ href, placeholder }) {
  return (
    <div className="flex">
      <input type="text" placeholder={placeholder} className="py-3 px-6" />
      <Link to={href}>
        <div className="p-6 bg-gradient-to-r from-primary-blue to-secondary-blue relative">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-primary-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </Link>
    </div>
  );
}

export default InputNext;
