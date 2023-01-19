import "./LangList.scss";
import { useEffect, useState } from "react";
import { langConfig } from "../../configs/langConfig";

function LangList() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenedList = () => {
    setIsOpen(!isOpen);
  };

  const activateLang = () => {
    toggleOpenedList();
  };

  return (
    <div className="lang-list">
      <button className="lang-list__btn" onClick={toggleOpenedList}>
        <p className="lang-list__btn-text">En</p>
        <span
          className={`lang-list__btn-icon ${isOpen && "lang-list__btn-icon_opened"}`}
        ></span>
      </button>

      <ul
        className={`lang-list__list ${isOpen && "lang-list__list_opened"}`}
      >
        {langConfig.map((setup) => (
          <li className="lang-list__list-item" key={setup.lang}>
            <div className="lang-list__item-circle" />
            <button className="lang-list__item-btn" onClick={activateLang}>
              {setup.lang}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LangList;
