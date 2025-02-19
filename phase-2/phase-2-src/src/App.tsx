
import React, { useState } from 'react'
import './App.css'
import check from './assets/check.svg'

import GeneralInformation from './steps/general_information'
import ShopLayout from './steps/shop_layout'
import Extras from './steps/extras'
import Success from './steps/success'

function App() {

  const [page, setPage] = useState(1)

  return (
    <>
      <article className="container">
        {/* <ShopLayout></ShopLayout>         */}
        {page === 1?
        <GeneralInformation onChange={setPage}></GeneralInformation>:
        page ===2?
        <ShopLayout onChange={setPage}></ShopLayout>:
        page===3?
        <Extras onChange={setPage}></Extras>:
        <Success></Success>}
      </article>
    </>
  )
}

export default App
