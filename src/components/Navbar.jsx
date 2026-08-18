import "./Navbar.css"

function Navbar({ page, setPage }) {
  return (
    <nav className="main-navbar">
      <div
        className="navbar-brand"
        onClick={() => setPage("home")}
      >
        <div className="navbar-logo">
          R
        </div>

        <div className="navbar-title">
          <strong>React Activity Portal</strong>
          <span>Practical Assessment</span>
        </div>
      </div>

      <div className="navbar-links">
        <button
          className={page === "home" ? "nav-active" : ""}
          onClick={() => setPage("home")}
        >
          Home
        </button>

        <button
          className={page === "login" ? "nav-active" : ""}
          onClick={() => setPage("login")}
        >
          Activity 1
        </button>

        <button
          className={page === "grade" ? "nav-active" : ""}
          onClick={() => setPage("grade")}
        >
          Activity 2
        </button>

        <button
          className={page === "password" ? "nav-active" : ""}
          onClick={() => setPage("password")}
        >
          Activity 3
        </button>

        <button
          className={page === "electricity" ? "nav-active" : ""}
          onClick={() => setPage("electricity")}
        >
          Activity 4
        </button>

        <button
          className={page === "attendance" ? "nav-active" : ""}
          onClick={() => setPage("attendance")}
        >
          Activity 5
        </button>
      </div>
    </nav>
  )
}

export default Navbar