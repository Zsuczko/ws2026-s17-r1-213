
import React, { useState } from 'react'
import './App.css'
import check from './assets/check.svg'

import GeneralInformation from './steps/general_information'
import ShopLayout from './steps/shop_layout'
import Extras from './steps/extras'
import Success from './steps/success'
import { GenrelaInformations } from './lib/models'

function App() {

  const [page, setPage] = useState<number>(1)

  const [generalInformation, setGeneralInformation] = useState<GenrelaInformations>({
    name:"",
    description:"",
    postalCode:0,
    city:"",
    address:"",
    from:"",
    to:"",
    openAt:"Every Day"
  })

  const handleGeneralInformationChange = (page:number, data:GenrelaInformations)=>{
    setPage(page);
    setGeneralInformation(data)
  }

  return (
    <>
      <article className="container">
        {/* <ShopLayout></ShopLayout>         */}
        {page === 1?
        <GeneralInformation data={generalInformation} onChange={handleGeneralInformationChange}></GeneralInformation>:
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
