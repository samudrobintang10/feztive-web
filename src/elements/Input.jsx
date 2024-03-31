import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// The default of this Input elements is isPrimary and isNormal

function Input({
  href,
  placeholder,
  name,
  value,
  isEmail,
  isPassword,
  isNumber,
  onChange,
}) {
  const type = [];
  if (isEmail) {
    type.push("email");
  } else if (isPassword) {
    type.push("password");
  } else if (isNumber) {
    type.push("number");
  } else {
    type.push("text");
  }

  return (
    <div className="input grid gap-y-2">
      <h4 className="font-semibold">{placeholder}</h4>
      <input
        type={type.join(" ")}
        placeholder={placeholder}
        className="py-3 px-4 w-full border rounded-md border-quinary-grey text-base"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
