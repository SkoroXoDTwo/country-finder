import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/theme/themeActions";

function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <header className="header">
      <h1 className="header__logo">Where in the world?</h1>

      <button className="header__theme-btn" onClick={handleChangeTheme}>
        <span className="header__theme-icon"></span>
        <p className="header__theme-text">
          {theme === "light" ? "dark" : "light"} mode
        </p>
      </button>
    </header>
  );
}

export default Header;