import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">Where in the world?</h1>

      <button className="header__theme-btn">
        <span className="header__theme-icon"></span>
        <p className="header__theme-text">dark mode</p>
      </button>
    </header>
  );
}

export default Header;
