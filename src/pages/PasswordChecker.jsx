import { useState } from "react"
import "./PasswordChecker.css"

function PasswordChecker() {
  const [password, setPassword] = useState("")
  const [result, setResult] = useState(null)
  const [error, setError] = useState("")

  const handleCheck = (event) => {
    event.preventDefault()

    if (password.trim() === "") {
      setError("Please enter a password.")
      setResult(null)
      return
    }

    let strength
    let message
    let level
    let tone

    if (password.length < 6) {
      strength = "Weak Password"
      message = "Status: Weak – Create a stronger password."
      level = 1
      tone = "weak"
    } else if (password.length <= 9) {
      strength = "Medium Password"
      message = "Status: Weak – Create a stronger password."
      level = 2
      tone = "medium"
    } else {
      strength = "Strong Password"
      message = "Status: Strong – You can use this password."
      level = 3
      tone = "strong"
    }

    setError("")
    setResult({
      strength,
      message,
      level,
      tone,
    })
  }

  const handleClear = () => {
    setPassword("")
    setResult(null)
    setError("")
  }

  return (
    <main className="password-page">
      <section className="password-card">
        <header className="password-header">
          <h1>Password Strength Checker</h1>
          <p>Activity 3</p>
        </header>

        <form
          className="password-form"
          onSubmit={handleCheck}
          noValidate
        >
          <div className="password-field">
            <label htmlFor="password-check">
              Password
            </label>

            <input
              id="password-check"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
            />
          </div>

          {error && (
            <p
              className="password-error"
              role="alert"
            >
              {error}
            </p>
          )}

          <div className="password-actions">
            <button
              type="submit"
              className="password-check-button"
            >
              Check Password
            </button>

            <button
              type="button"
              className="password-clear-button"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </form>

        {result && (
          <section
            className={`password-result password-result-${result.tone}`}
            aria-live="polite"
          >
            <h2>Password Result</h2>

            <dl>
              <div>
                <dt>Password Status</dt>
                <dd>{result.strength}</dd>
              </div>

              <div>
                <dt>Strength Message</dt>
                <dd>{result.message}</dd>
              </div>
            </dl>

            <div className="password-indicator">
              <p>Visual strength indicator</p>

              <div
                className="password-bars"
                aria-label={result.strength}
              >
                <span
                  className={
                    result.level >= 1
                      ? `active ${result.tone}`
                      : ""
                  }
                ></span>

                <span
                  className={
                    result.level >= 2
                      ? `active ${result.tone}`
                      : ""
                  }
                ></span>

                <span
                  className={
                    result.level >= 3
                      ? `active ${result.tone}`
                      : ""
                  }
                ></span>
              </div>
            </div>
          </section>
        )}
      </section>
    </main>
  )
}

export default PasswordChecker