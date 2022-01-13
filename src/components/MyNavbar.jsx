import { Navbar, Nav } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

const MyNavbar = () => {
  const location = useLocation()
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">StriveBooks</Navbar.Brand>

      <Navbar.Collapse>
        <Nav>
          <Link to="/">
            <div
              className={`nav-link${
                location.pathname === "/" ? " active" : ""
              }`}
            >
              Home
            </div>
          </Link>
          <Link to="/register">
            <div
              className={
                location.pathname === "/register"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Register
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
