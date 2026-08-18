import "./Home.css"

function Home({ setPage }) {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <span className="home-label">
            REACT JS PRACTICAL ASSESSMENT
          </span>

          <h1>
            React Activity
            <br />
            <span>Portal</span>
          </h1>

          <p>
            A collection of interactive React exercises demonstrating
            state management, events, conditional logic, validation,
            and basic calculations.
          </p>

          <button
            className="home-primary-button"
            onClick={() => setPage("login")}
          >
            Start Activity 1
          </button>
        </div>

        <aside className="home-overview">
          <div className="overview-heading">
            Project Overview
          </div>

          <div className="overview-row">
            <strong>5</strong>
            <span>Total Activities</span>
          </div>

          <div className="overview-row">
            <strong>1</strong>
            <span>React Application</span>
          </div>

          <div className="overview-row">
            <strong>React</strong>
            <span>Framework</span>
          </div>
        </aside>
      </section>

      <section className="home-activities">
        <div className="home-section-heading">
          <div>
            <span>ACTIVITY DIRECTORY</span>
            <h2>Select an activity</h2>
          </div>

          <p>
            Choose an activity below to open its workspace.
          </p>
        </div>

        <div className="home-activity-grid">

          <article className="home-activity-card">
            <div className="home-card-header">
              <span className="home-card-number">01</span>
              <span className="home-card-category">Authentication</span>
            </div>

            <h3>Login Authentication</h3>

            <p>
              Validate a username and password while managing
              login and logout states.
            </p>

            <button onClick={() => setPage("login")}>
              Open Activity
              <span>→</span>
            </button>
          </article>

          <article className="home-activity-card">
            <div className="home-card-header">
              <span className="home-card-number">02</span>
              <span className="home-card-category">Evaluation</span>
            </div>

            <h3>Student Grade Evaluation</h3>

            <p>
              Evaluate a student's score and display the corresponding
              academic remark.
            </p>

            <button onClick={() => setPage("grade")}>
              Open Activity
              <span>→</span>
            </button>
          </article>

          <article className="home-activity-card">
            <div className="home-card-header">
              <span className="home-card-number">03</span>
              <span className="home-card-category">Security</span>
            </div>

            <h3>Password Strength Checker</h3>

            <p>
              Check a password's length and determine whether it is
              weak, medium, or strong.
            </p>

            <button onClick={() => setPage("password")}>
              Open Activity
              <span>→</span>
            </button>
          </article>

          <article className="home-activity-card">
            <div className="home-card-header">
              <span className="home-card-number">04</span>
              <span className="home-card-category">Calculation</span>
            </div>

            <h3>Electricity Bill Calculator</h3>

            <p>
              Calculate an electricity bill based on customer
              consumption and applicable rates.
            </p>

            <button onClick={() => setPage("electricity")}>
              Open Activity
              <span>→</span>
            </button>
          </article>

          <article className="home-activity-card">
            <div className="home-card-header">
              <span className="home-card-number">05</span>
              <span className="home-card-category">Attendance</span>
            </div>

            <h3>Employee Attendance Checker</h3>

            <p>
              Determine whether an employee is on time, late,
              or very late based on time-in.
            </p>

            <button onClick={() => setPage("attendance")}>
              Open Activity
              <span>→</span>
            </button>
          </article>

        </div>
      </section>
    </main>
  )
}

export default Home