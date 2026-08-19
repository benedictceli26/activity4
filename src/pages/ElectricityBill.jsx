import { useState } from "react"
import "./ElectricityBill.css"

function ElectricityBill() {
  const [customerName, setCustomerName] = useState("")
  const [consumption, setConsumption] = useState("")
  const [result, setResult] = useState(null)
  const [error, setError] = useState("")

  const handleCalculate = (event) => {
    event.preventDefault()

    if (customerName.trim() === "" || consumption.trim() === "") {
      setError("Please enter the customer name and consumption.")
      setResult(null)
      return
    }

    const numericConsumption = Number(consumption)

    if (Number.isNaN(numericConsumption) || numericConsumption < 0) {
      setError("Please enter a valid consumption.")
      setResult(null)
      return
    }

    let rate

    if (numericConsumption <= 100) {
      rate = 10
    } else if (numericConsumption <= 200) {
      rate = 12
    } else if (numericConsumption <= 300) {
      rate = 15
    } else {
      rate = 18
    }

    const totalBill = numericConsumption * rate

    let usageStatus

    if (totalBill >= 5000) {
      usageStatus = "High Electricity Usage"
    } else {
      usageStatus = "Normal Electricity Usage"
    }

    setError("")

    setResult({
      customerName: customerName.trim(),
      consumption: numericConsumption,
      rate,
      totalBill,
      usageStatus,
    })
  }

  const handleClear = () => {
    setCustomerName("")
    setConsumption("")
    setResult(null)
    setError("")
  }

  return (
    <main className="electricity-page">
      <section className="electricity-card">
        <header className="electricity-header">
          <h1>Electricity Bill Calculator</h1>
          <p>Activity 4</p>
        </header>

        <form
          className="electricity-form"
          onSubmit={handleCalculate}
          noValidate
        >
          <div className="electricity-field">
            <label htmlFor="customer-name">Customer Name</label>

            <input
              id="customer-name"
              type="text"
              placeholder="Enter customer name"
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
            />
          </div>

          <div className="electricity-field">
            <label htmlFor="consumption">
              Consumption (kWh)
            </label>

            <input
              id="consumption"
              type="number"
              placeholder="Enter consumption"
              value={consumption}
              onChange={(event) => setConsumption(event.target.value)}
            />
          </div>

          {error && (
            <p className="electricity-error" role="alert">
              {error}
            </p>
          )}

          <div className="electricity-actions">
            <button
              type="submit"
              className="electricity-calculate-button"
            >
              Calculate Bill
            </button>

            <button
              type="button"
              className="electricity-clear-button"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </form>

        {result && (
          <section
            className={`electricity-result ${
              result.usageStatus === "High Electricity Usage"
                ? "electricity-result-high"
                : ""
            }`}
            aria-live="polite"
          >
            <h2>Billing Result</h2>

            <dl>
              <div>
                <dt>Customer Name</dt>
                <dd>{result.customerName}</dd>
              </div>

              <div>
                <dt>Consumption</dt>
                <dd>{result.consumption} kWh</dd>
              </div>

              <div>
                <dt>Rate Applied</dt>
                <dd>₱{result.rate} per kWh</dd>
              </div>

              <div>
                <dt>Total Bill</dt>
                <dd>₱{result.totalBill.toLocaleString()}</dd>
              </div>

              <div>
                <dt>Usage Status</dt>
                <dd>{result.usageStatus}</dd>
              </div>
            </dl>
          </section>
        )}
      </section>
    </main>
  )
}

export default ElectricityBill