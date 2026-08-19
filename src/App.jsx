import { useState } from "react"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import GradeEvaluation from "./pages/GradeEvaluation"
import PasswordChecker from "./pages/PasswordChecker"
import ElectricityBill from "./pages/ElectricityBill"

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
        <GradeEvaluation />
      )}

      {page === "password" && (
        <PasswordChecker />
      )}

      {page === "electricity" && (
        <ElectricityBill />
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
