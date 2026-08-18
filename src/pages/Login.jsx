import { useState } from "react"
import "./Login.css"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()

    if (username.trim() === "" && password.trim() === "") {
      setMessage("Please enter username and password.")
    } else if (username === "admin" && password === "12345") {
      setMessage("Login successful!")
      setIsLoggedIn(true)
    } else {
      setMessage("Invalid username or password.")
    }
  }

  const handleLogout = () => {
    setUsername("")
    setPassword("")
    setMessage("")
    setIsLoggedIn(false)
  }

  return (
    <main className="login-page">
      <div className="login-card">

        <div className="login-header">
          <h1>Login Authentication</h1>
          <p>Activity 1</p>
        </div>

        {!isLoggedIn ? (
          <form className="login-form" onSubmit={handleLogin}>

            <div className="login-field">
              <label htmlFor="username">Username</label>

              <input
                id="username"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="login-field">
              <label htmlFor="password">Password</label>

              <input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {message && (
              <p className="login-message">
                {message}
              </p>
            )}

            <button type="submit" className="login-button">
              Login
            </button>

            <div className="demo-account">
              <p>Sample credentials</p>
              <span>
                Username: <strong>admin</strong>
              </span>
              <span>
                Password: <strong>12345</strong>
              </span>
            </div>

          </form>
        ) : (
          <div className="login-success">

            <h2>Welcome, {username}!</h2>

            <p>{message}</p>

            <button
              className="logout-button"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>
        )}

      </div>
    </main>
  )
}

export default Login