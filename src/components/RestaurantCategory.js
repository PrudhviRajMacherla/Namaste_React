import React, { useState, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import ItemList from "./ItemList";

const RestaurantCategory = ({ dataObj,showItems,setShowIndex}) => {
  const { title } = dataObj;
  // const handleClick = () => {
  //   setShowIndex();
  // };

  const handleClick = () => {
    
    if (showItems) {
      console.log('it is working in if')
      setShowIndex(null); // Collapse the accordion
    } else {
      console.log('it is working in else')
      setShowIndex(); // Open the accordion
    }
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-2 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {title} ({dataObj.itemCards.length})
          </span>
          <FaArrowDown className={`transition-transform duration-300 ${showItems ? "rotate-180" : ""}`} />
        </div>

        {showItems && <ItemList items={dataObj.itemCards}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
