import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function SelectBox({ isSmall, placeholder }) {
  // Define state to manage the selected value
  const [selectedOption, setSelectedOption] = useState("");

  // Handle change in selected option
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // List of options for the select dropdown
  const options = [
    { value: "option1", label: "I want to change the location" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  return (
    <div className="relative w-full grid gap-y-2">
      <h6
        className={`font-semibold ${
          isSmall ? "text-xs" : "lg:text-base text-xs"
        }`}
      >
        {placeholder}
      </h6>
      <div className="relative">
        <select
          value={selectedOption}
          onChange={handleChange}
          className="w-full py-2 pl-3 pr-12 border border-gray-300 rounded-md appearance-none text-sm"
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <FontAwesomeIcon
          icon={faAngleDown}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
        />
      </div>
    </div>
  );
}

export default SelectBox;
