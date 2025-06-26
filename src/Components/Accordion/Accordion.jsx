import React, { useState } from "react";
import "./Accordion.css";
import { FaChevronDown } from "react-icons/fa";

const Accordion = ({ children }) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  
  const toggleSection = (index) => {
    setActiveSectionIndex(activeSectionIndex === index ? 0 : index);
  };

  return (
    <div className="accordion">
      {React.Children.map(children, (child, index) => (
        <div className="accordion-section" key={index}>
          <div
            className={`accordion-header ${
              activeSectionIndex === index ? "active" : ""
            }`}
            onClick={() => toggleSection(index)}
          >
            <div className="accordion-headerIcon">
              <div className="accordion-icon">{child.props.icon}</div>
              <h1>{child.props.header}</h1>
            </div>

            <div
              className={`accordion-arrow ${
                activeSectionIndex === index ? "open" : ""
              }`}
            >
              <FaChevronDown />
            </div>
          </div>
          <div
            className={`accordion-content ${
              activeSectionIndex === index ? "open" : ""
            }`}
          >
            {child.props.children}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
