import "./Navbar.scss"

function Navbar({ children }) {
  return (
    <section className="navbar">
      {children}
    </section>
  )
}

export default Navbar;
