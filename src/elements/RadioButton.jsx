import React from "react";

const RadioButton = ({
  name,
  value,
  selectedValue,
  price,
  description,
  duration,
  onChange,
}) => {
  const isSelected = selectedValue === value;
  return (
    <label
      className={`flex items-center gap-x-4 p-3 border border-senary-grey rounded-xl cursor-pointer ${
        isSelected ? "bg-senary-grey" : ""
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        className="cursor-pointer"
      />
      <div className="grid gap-y-2">
        {price && <h5 className="font-semibold font-inter">{price}</h5>}
        {description && (
          <h5 className="font-normal font-inter">{description}</h5>
        )}
        {duration && <h5 className="font-normal font-inter">{duration}</h5>}
      </div>
    </label>
  );
};

export default RadioButton;
