
import React, { useState } from 'react'
import './App.css'
import check from './assets/check.svg'
import maximize from './assets/maximize.svg'

function App() {

  const [postalCode, setPostalCode] = useState<string>()

  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const postal = e.target.value.replace(/[^0-9]/g, "").slice(0, 4)
    setPostalCode(postal)
  }

  return (
    <>
      <article className="container">
        <header className="header">
          <h1>Register a new location</h1>
          <div className="steps">
          <button className="step current">
            1
          </button>
          <div className="step-divider dashed"></div>
          <button className="step">2</button>
          <div className="step-divider dashed"></div>
          <button className="step">3</button>
          <div className="step-divider dashed"></div>
          <button className="step" disabled>4</button>
          </div>
          
        <button className="fullscreen-btn">
          <img src={maximize} alt="Maximize" />
        </button>
        </header>
        <main className="main">
          <h2>Information about the location</h2>
          <div className="input-group">
            <label htmlFor="input-1">Name</label>
            <input type="text" id="input-1"/>
          </div>
          <div className="input-group">
            <label htmlFor="textarea">Description</label>
            <textarea id="textarea" rows={5}></textarea>
          </div>

          <div className="input-row">
            <div className="input-group" id='postal-group'>
              <label htmlFor="postal">Postal code</label>
              <input type="text" id="postal" pattern='/d{4}' maxLength={4} inputMode='numeric' onInput={handlePostalCodeChange} value={postalCode}/>
            </div>
            <div className="input-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" />
            </div>
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" />
            </div>
          </div>
          
          <hr />
          
          <h3>Operational hours</h3>

          <div className="input-group">
            <label htmlFor="select">Open at</label>
            <select id="select">
              <option value="1">Every Day</option>
              <option value="2">Weekdays</option>
              <option value="3">Weekends</option>
            </select>
          </div>

          <div className="input-row">
            <div className="input-group input-time">
              <label htmlFor="from">From</label>
              <input type="time" id="from" />
            </div>
            <div className="input-group input-time">
              <label htmlFor="to">To</label>
              <input type="time" id="to" />
            </div>
          </div>
        </main>
        <footer className="footer">
          <button className="btn" disabled>Back</button>
          <button className="btn">Next</button>
        </footer>
      </article>
    </>
  )
}

export default App
