import React from "react";

// Dynamic NavMenu Component
function NavMenu({ menuTitle, subMenuItems, selectedItem, onSelectItem }) {
  // Handle item click and update parent state
  const handleItemClick = (item) => {
    onSelectItem(item);  // Call the parent function to update selected item
  };

  return (
    <div className="menu">
      <h5 className="font-semibold pl-4 py-4">{menuTitle}</h5>
      <div className="sub-menu">
        {subMenuItems.map((item, index) => (
          <div
            key={index}
            className={`pl-4 py-2 cursor-pointer ${
              selectedItem === item ? "text-blue-500" : "text-gray-400"
            }`} // Apply different color for selected item
            onClick={() => handleItemClick(item)} // Set item as selected on click
          >
            <h6 className="font-semibold">{item}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavMenu;
