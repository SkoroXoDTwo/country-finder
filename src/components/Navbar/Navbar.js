import "./Navbar.scss"
import Search from "../Search/Search";
import Filters from "../Filters/Filters";

function Navbar() {
  return (
    <section className="navbar">
      <Search />
      <Filters />
    </section>
  )
}

export default Navbar;
