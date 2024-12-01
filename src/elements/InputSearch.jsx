import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// The default of this InputSearch elements is isPrimary and isNormal

function InputSearch({ href, placeholder }) {
  return (
    <div className="flex">
      <input type="text" placeholder={placeholder} className="py-3 px-6 bg-primary-grey rounded-l-lg" />
      <Link to={href}>
        <div className="p-6 bg-primary-blue relative rounded-r-lg">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-primary-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </Link>
    </div>
  );
}

export default InputSearch;
