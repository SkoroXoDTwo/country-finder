import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { changeTheme } from "../../store/theme/themeActions";
import { setTheme } from "../../utils/setTheme"

import LangList from "../LangList/LangList";

function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    setTheme(theme);
  }, [theme])

  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <header className="header">
      <Link to={"/"}>
        <h1 className="header__logo">Where in the world?</h1>
      </Link>

      <nav>
        <ul className="header__menu">
          <li>
            <button className="header__theme-btn" onClick={handleChangeTheme}>
              <span className="header__theme-icon"></span>
              <p className="header__theme-text">
                {theme === "light" ? "dark" : "light"} mode
              </p>
            </button>
          </li>

          <li>
            <LangList />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
