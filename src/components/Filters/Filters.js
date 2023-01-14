import "./Filters.scss";
import { regionsConfig } from "../../mock/regionsConfig";
import { useState } from "react";

function Filters() {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenList = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="filters">
      <button className="filters__btn" onClick={handleOpenList}>
        <p className="filters__btn-text">Filter by Region</p>
        <span className={`filters__btn-icon ${isOpen ? "filters__btn-icon_opened" : ''}`}></span>
      </button>

      <ul className={`filters__list ${isOpen ? "filters__list_opened" : ''}`}>
          {regionsConfig.map((region, index) => (
            <li key={index}>
              <button className="filters__list-item">{region}</button>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default Filters;
