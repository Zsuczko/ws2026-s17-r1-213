
import React, { useState } from 'react'
import './App.css'
import check from './assets/check.svg'

import maximize from './assets/maximize.svg'
import GeneralInformation from './steps/general_information'
import ShopLayout from './steps/shop_layout'

function App() {

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

          <ShopLayout></ShopLayout>
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
