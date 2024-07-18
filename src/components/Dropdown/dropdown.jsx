import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ options, onSelect }) => {
  console.log("options--", options);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleToggle}>
        {selectedOption ? selectedOption.label : "Sort"}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li
            key={"Select an option"}
            onClick={() =>
              handleSelect({
                value: "Select an option",
                label: "Select an option",
              })
            }
          >
            {"Select an option"}
          </li>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
