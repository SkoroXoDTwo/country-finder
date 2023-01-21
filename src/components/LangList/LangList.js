import "./LangList.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { langConfig } from "../../configs/langConfig";
import { changeLang } from "../../store/lang/langActions";

function LangList() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(changeLang(langConfig[0]));
  }, []);

  useEffect(() => {
    const isHoverBtnLang = (e) => {
      return !(
        e.target.classList.contains("lang-list__btn") ||
        e.target.classList.contains("lang-list__btn-text") ||
        e.target.classList.contains("lang-list__btn-icon")
      );
    };

    const closeLangList = (e) => {
      if (isHoverBtnLang(e)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.addEventListener("click", closeLangList);
    } else {
      document.body.removeEventListener("click", closeLangList);
    }
  }, [isOpen]);

  const toggleOpenedList = () => {
    setIsOpen(!isOpen);
  };

  const activateLang = (e) => {
    toggleOpenedList();
    dispatch(changeLang(e.target.textContent));
  };

  return (
    <div className="lang-list">
      <button className="lang-list__btn" onClick={toggleOpenedList}>
        <p className="lang-list__btn-text">{lang}</p>
        <span
          className={`lang-list__btn-icon ${
            isOpen && "lang-list__btn-icon_opened"
          }`}
        ></span>
      </button>

      <ul className={`lang-list__list ${isOpen && "lang-list__list_opened"}`}>
        {langConfig.map((setup) => (
          <li className="lang-list__list-item" key={setup}>
            {lang === setup && <div className="lang-list__item-circle" />}
            <button className="lang-list__item-btn" onClick={activateLang}>
              {setup}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LangList;
