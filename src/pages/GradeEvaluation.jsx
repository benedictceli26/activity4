import { useState } from "react"
import "./GradeEvaluation.css"

function GradeEvaluation() {
  const [studentName, setStudentName] = useState("")
  const [score, setScore] = useState("")
  const [result, setResult] = useState(null)
  const [error, setError] = useState("")

  const handleEvaluate = (event) => {
    event.preventDefault()

    if (studentName.trim() === "" || score.trim() === "") {
      setError("Please enter the student name and score.")
      setResult(null)
      return
    }

    const numericScore = Number(score)

    if (Number.isNaN(numericScore)) {
      setError("Please enter a valid numeric score.")
      setResult(null)
      return
    }

    let remarks

    if (numericScore < 0 || numericScore > 100) {
      remarks = "Invalid score"
    } else if (numericScore >= 90) {
      remarks = "Excellent"
    } else if (numericScore >= 85) {
      remarks = "Very Good"
    } else if (numericScore >= 80) {
      remarks = "Good"
    } else if (numericScore >= 75) {
      remarks = "Passed"
    } else {
      remarks = "Failed"
    }

    setError("")
    setResult({ studentName: studentName.trim(), score: numericScore, remarks })
  }

  const handleClear = () => {
    setStudentName("")
    setScore("")
    setResult(null)
    setError("")
  }

  return (
    <main className="grade-page">
      <section className="grade-card">
        <header className="grade-header">
          <h1>Student Grade Evaluation</h1>
          <p>Activity 2</p>
        </header>

        <form className="grade-form" onSubmit={handleEvaluate} noValidate>
          <div className="grade-field">
            <label htmlFor="student-name">Student Name</label>
            <input
              id="student-name"
              type="text"
              placeholder="Enter student name"
              value={studentName}
              onChange={(event) => setStudentName(event.target.value)}
            />
          </div>

          <div className="grade-field">
            <label htmlFor="score">Score</label>
            <input
              id="score"
              type="number"
              placeholder="Enter score"
              value={score}
              onChange={(event) => setScore(event.target.value)}
            />
          </div>

          {error && <p className="grade-error" role="alert">{error}</p>}

          <div className="grade-actions">
            <button type="submit" className="grade-evaluate-button">Evaluate</button>
            <button type="button" className="grade-clear-button" onClick={handleClear}>Clear</button>
          </div>
        </form>

        {result && (
          <section
            className={`grade-result ${result.remarks === "Invalid score" ? "grade-result-invalid" : ""}`}
            aria-live="polite"
          >
            <h2>Evaluation Result</h2>
            <dl>
              <div><dt>Student Name</dt><dd>{result.studentName}</dd></div>
              <div><dt>Score</dt><dd>{result.score}</dd></div>
              <div><dt>Remarks</dt><dd>{result.remarks}</dd></div>
            </dl>
          </section>
        )}
      </section>
    </main>
  )
}

export default GradeEvaluation
