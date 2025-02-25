
import { useEffect, useRef, useState } from 'react'
import './App.css'

import GeneralInformation from './steps/general_information'
import ShopLayout from './steps/shop_layout'
import Extras from './steps/extras'
import Success from './steps/success'
import { GenrelaInformations, shoplayoutElements } from './lib/models'

// main
function App() {

  const [page, setPage] = useState<number>(()=>{
    const saved = sessionStorage.getItem("page")
    return saved ? JSON.parse(saved) : 1
  })
  const [loadedPages, setLoadedPages] = useState<number[]>(()=>{
    const saved = sessionStorage.getItem("loadedPages")
    return saved ? JSON.parse(saved) :[]
  })

  const [generalInformation, setGeneralInformation] = useState<GenrelaInformations>(()=>{
    const saved = sessionStorage.getItem("generalInformation")
    return saved ? JSON.parse(saved) : {
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
  }})

  const [layout, setLayout] = useState<shoplayoutElements[]>(()=>{
    const saved = sessionStorage.getItem("layout")
    return saved ? JSON.parse(saved) :  Array(30).fill(null).map((_,index)=>({
            index:index,
            class:"empty",
            role:"empty"
  }))})

  const [startOver, setStartOver] = useState<boolean>(false)

  const handleGeneralInformationChange = (page:number, data:GenrelaInformations, loadedPages:number[])=>{
    setPage(page);
    setGeneralInformation(data)
    setLoadedPages(loadedPages)
  }

  const handleShopLayoutChange = (page:number, layout:shoplayoutElements[], loadedPages:number[])=>{
    setPage(page);
    setLayout(layout),
    setLoadedPages(loadedPages)
  }

  useEffect(()=>{
    sessionStorage.setItem("page", JSON.stringify(page))
  }, [page])
  useEffect(()=>{
    sessionStorage.setItem("loadedPages", JSON.stringify(loadedPages))
  }, [loadedPages])
  useEffect(()=>{
    sessionStorage.setItem("generalInformation", JSON.stringify(generalInformation))
  }, [generalInformation])
  useEffect(()=>{
    sessionStorage.setItem("layout", JSON.stringify(layout))
  }, [layout])

  useEffect(()=>{
    if(startOver){
    setPage(1)
    setLoadedPages([])
    setGeneralInformation({
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
    setLayout(Array(30).fill(null).map((_,index)=>({
      index:index,
      class:"empty",
      role:"empty" })))
      setStartOver(false)}
  }, [startOver])


  const divRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = async () => {
    console.log(!document.fullscreenElement, divRef.current)
      if (!document.fullscreenElement && divRef.current) {
          try {
              await divRef.current.requestFullscreen();
              setIsFullscreen(true);
          } catch (err) {
              console.error("Error entering fullscreen:", err);
          }
      } else if (document.fullscreenElement) {
          document.exitFullscreen();
          setIsFullscreen(false);
      }
  };

  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement);
};

useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
        document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
}, []);

 


  return (
    <>
      <article className={`container ${!isFullscreen? "":"fullscreen"}`} ref={divRef}>
        {/* <ShopLayout></ShopLayout>         */}
        {page === 1?
        <GeneralInformation loadedPages={loadedPages} data={generalInformation} onChange={handleGeneralInformationChange} onMaximize={toggleFullscreen} ></GeneralInformation>:
        page ===2?
        <ShopLayout layout={layout} onChange={handleShopLayoutChange} loadedPages={loadedPages} onMaximize={toggleFullscreen}></ShopLayout>:
        page===3?
        <Extras data={generalInformation} onChange={handleGeneralInformationChange} loadedPages={loadedPages}  onMaximize={toggleFullscreen}></Extras>:
        <Success data={generalInformation} layout={layout} onStartOver={setStartOver}  onMaximize={toggleFullscreen}></Success>}
      </article>
    </>
  )
}

export default App