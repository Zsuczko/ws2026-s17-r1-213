
import React, { useState } from 'react'
import './App.css'
import check from './assets/check.svg'

import GeneralInformation from './steps/general_information'
import ShopLayout from './steps/shop_layout'
import Extras from './steps/extras'
import Success from './steps/success'
import { GenrelaInformations, shoplayoutElements } from './lib/models'

function App() {

  const [page, setPage] = useState<number>(1)
  const [loadedPages, setLoadedPages] = useState<number[]>([])

  const [generalInformation, setGeneralInformation] = useState<GenrelaInformations>({
    name:"",
    description:"",
    postalCode:0,
    city:"",
    address:"",
    from:"",
    to:"",
    openAt:"Every Day",
    freeWiFi:false,
    acessibleEntry:false,
    loungeArea:false,
    backgroundMusic:false,
    customerService:false,
    parking:"Easy"
  })

  const [layout, setLayout] = useState<shoplayoutElements[]>(Array(30).fill(null).map((_,index)=>({
          index:index,
          class:"empty",
          role:"empty"
  })))

  const handleGeneralInformationChange = (page:number, data:GenrelaInformations)=>{
    setPage(page);
    setGeneralInformation(data)
  }

  const handleShopLayoutChange = (page:number, layout:shoplayoutElements[])=>{
    setPage(page);
    setLayout(layout)
  }

  return (
    <>
      <article className="container">
        {/* <ShopLayout></ShopLayout>         */}
        {page === 1?
        <GeneralInformation loadedPages={loadedPages} data={generalInformation} onChange={handleGeneralInformationChange}></GeneralInformation>:
        page ===2?
        <ShopLayout layout={layout} onChange={handleShopLayoutChange} loadedPages={loadedPages}></ShopLayout>:
        page===3?
        <Extras data={generalInformation} onChange={handleGeneralInformationChange}></Extras>:
        <Success data={generalInformation} layout={layout}></Success>}
      </article>
    </>
  )
}

export default App
