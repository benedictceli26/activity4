import { useState } from "react"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"

import "./App.css"

function App() {
  const [page, setPage] = useState("home")

  return (
    <>
      <Navbar page={page} setPage={setPage} />

      {page === "home" && (
        <Home setPage={setPage} />
      )}

      {page === "login" && (
        <Login />
      )}

      {page === "grade" && (
        <section className="placeholder-page">
          <span>ACTIVITY 02</span>
          <h1>Student Grade Evaluation</h1>
          <p>This activity will be added by the assigned group member.</p>
        </section>
      )}

      {page === "password" && (
        <section className="placeholder-page">
          <span>ACTIVITY 03</span>
          <h1>Password Strength Checker</h1>
          <p>This activity will be added by the assigned group member.</p>
        </section>
      )}

      {page === "electricity" && (
        <section className="placeholder-page">
          <span>ACTIVITY 04</span>
          <h1>Electricity Bill Calculator</h1>
          <p>This activity will be added by the assigned group member.</p>
        </section>
      )}

      {page === "attendance" && (
        <section className="placeholder-page">
          <span>ACTIVITY 05</span>
          <h1>Employee Attendance Checker</h1>
          <p>This activity will be added by the assigned group member.</p>
        </section>
      )}
    </>
  )
}

export default App