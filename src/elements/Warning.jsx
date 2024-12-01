import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Warning = ({ description }) => {
  return (
    <div className="py-4 px-4 flex gap-x-4 bg-primary-orange bg-opacity-10 border border-primary-orange rounded-xl">
      <FontAwesomeIcon
        icon={faWarning}
        className="p-2 rounded-full justify-self-center border border-primary-orange text-primary-orange"
      />
      <h5 className="font-semibold text-primary-orange font-inter">{description}</h5>
    </div>
  );
};

export default Warning;
