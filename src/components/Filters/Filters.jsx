import "./Filters.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { changeFilter } from "../../store/filters/filtersActions";

import { regionsConfig } from "../../configs/regionsConfig";
import { translationConfig } from "../../configs/langConfig";

function Filters() {
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filter);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenedList = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const isHoverBtnFilters = (e) => {
      return !(e.target.classList.contains('filters__btn') ||
        e.target.classList.contains('filters__btn-text') ||
        e.target.classList.contains('filters__btn-icon'))
    }

    const closeFiltersList = (e) => {
      if (isHoverBtnFilters(e)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.body.addEventListener(('click'), closeFiltersList)
    }
    else {
      document.body.removeEventListener(('click'), closeFiltersList)
    }
  }, [isOpen])

  const activateFilter = (e) => {
    dispatch(changeFilter(e.target.textContent));
    toggleOpenedList(false);
  };

  return (
    <div className="filters">
      <button className="filters__btn" onClick={toggleOpenedList}>
        <p className="filters__btn-text">
          {filterValue === "all" ? translationConfig[lang].filter : filterValue}
        </p>
        <span
          className={`filters__btn-icon ${isOpen ? "filters__btn-icon_opened" : ""
            }`}
        ></span>
      </button>

      <ul className={`filters__list ${isOpen ? "filters__list_opened" : ""}`}>
        {regionsConfig.map((region, index) => (
          <li className="filters__list-item" key={index}>
            {filterValue === region && <div className="filters__item-circle" />}
            <button className="filters__item-btn" onClick={activateFilter}>
              {region}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filters;
