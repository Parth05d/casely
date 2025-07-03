import { Link } from "react-router-dom";

function Navbar({
  title = "Casely",
  about = "About",
  mode,
  setTheme,
  navStyle,
}) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}
        style={navStyle}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand d-flex align-items-center gap-2"
            to="/"
            style={{ color: navStyle.color }}
          >
            <img src="/Casely-logo.png" alt="logo" style={{ height: "40px" }} />
            <strong>{title}</strong>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ color: navStyle.color }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  style={{ color: navStyle.color }}
                >
                  {about}
                </Link>
              </li>
            </ul>
            <select
              className={`form-select bg-${mode} text-${
                mode === "dark" ? "light" : "dark"
              }`}
              style={{ width: "180px" }}
              onChange={(e) => setTheme(e.target.value)}
              defaultValue={mode}
            >
              <option value="light">🌞 Light Theme</option>
              <option value="dark">🌙 Dark Theme</option>
              <option value="blue">🔵 Blue Theme</option>
              <option value="green">🟢 Green Theme</option>
            </select>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
