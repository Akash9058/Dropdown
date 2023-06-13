import { ArrowDropDown } from "@mui/icons-material";
import React, { useState } from "react";
import "./dropdown.css";
export const Dropdown = ({ items }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <h1>Should you use a dropdown ? </h1>
      <div className="dropdown-btn" onMouseOver={() => setIsActive(!isActive)}>
        Select
        <ArrowDropDown />
      </div>
      {isActive && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li
              className="dropdownItem"
              key={index}
              onClick={() => setIsActive(!isActive)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
