import { useEffect, useState } from 'react'
import maximize from '../assets/maximize.svg'
import { GenrelaInformations } from '../lib/models'

const Extras:React.FC<{data:GenrelaInformations, onChange:(page:number, data:GenrelaInformations)=> void}> = (props) => {
    
    const [parkingRadio, setParkingRadio] = useState<string>("Easy")
    const [freeWiFi, setFreeWifi] = useState<boolean>(false)
    const [accesible, setAccesible] = useState<boolean>(false)
    const [loungeArea, setLoungeArea] = useState<boolean>(false)
    const [bgMusic, setBgMusic] = useState<boolean>(false)
    const [personalCS, setPersonalCS] = useState<boolean>(false)


    function setPage(index:number){
        
        const newGeneral:GenrelaInformations = {
            name:props.data.name,
            description:props.data.description,
            postalCode:props.data.postalCode,
            city:props.data.city,
            address:props.data.address,
            from:props.data.from,
            to:props.data.to,
            openAt:props.data.openAt,
            freeWiFi:freeWiFi,
            acessibleEntry:accesible,
            loungeArea:loungeArea,
            backgroundMusic:bgMusic,
            customerService:personalCS,
            parking:parkingRadio
          }
        
        props.onChange(index, newGeneral);
    }

    useEffect(()=>{
        setFreeWifi(props.data.freeWiFi)
        setAccesible(props.data.acessibleEntry)
        setLoungeArea(props.data.loungeArea)
        setBgMusic(props.data.backgroundMusic)
        setPersonalCS(props.data.customerService)
        setParkingRadio(props.data.parking)
    },[])
    
    return(<>
         <header className="header">
          <h1>Register a new location</h1>
          <div className="steps">
          <button className="step done">
            1
          </button>
          <div className="step-divider"></div>
          <button className="step done">2</button>
          <div className="step-divider"></div>
          <button className="step current">3</button>
          <div className="step-divider dashed"></div>
          <button className="step" disabled>4</button>
          </div>
          
        <button className="fullscreen-btn">
          <img src={maximize} alt="Maximize" />
        </button>
        </header>
        <main className='main'>
            <h2>Amenities and Services</h2>
            <label className="cnr-label">
                <input type="checkbox" checked={freeWiFi} onChange={(e)=>{setFreeWifi(e.target.checked)}}/>
                <span>Free Wi-Fi</span>
            </label>
            <label className="cnr-label">
                <input type="checkbox" checked={accesible} onChange={(e)=>{setAccesible(e.target.checked)}} />
                <span>Accesible entry</span>
            </label>
            <label className="cnr-label">
                <input type="checkbox" checked={loungeArea} onChange={(e)=>{setLoungeArea(e.target.checked)}} />
                <span>Lounge Area</span>
            </label>
            <label className="cnr-label">
                <input type="checkbox" checked={bgMusic} onChange={(e)=>{setBgMusic(e.target.checked)}}/>
                <span>Background music</span>
            </label>
            <label className="cnr-label">
                <input type="checkbox" checked={personalCS} onChange={(e)=>{setPersonalCS(e.target.checked)}} />
                <span>Personal customor service</span>
            </label>

            <hr />

            <h3>Parking</h3>

            <div className="input-row">
            <label className="cnr-label">
                <input type="radio" name="parking-radio" defaultChecked value="Easy" onChange={(e)=>{setParkingRadio(e.target.value)}} />
                <span>Easy</span>
            </label>
            <label className="cnr-label">
                <input type="radio" name="parking-radio" value="Medium" onChange={(e)=>{setParkingRadio(e.target.value)}} />
                <span>Medium</span>
            </label>
            <label className="cnr-label">
            <input type="radio" name="parking-radio" value="Hard" onChange={(e)=>{setParkingRadio(e.target.value)}} />
            <span>Hard</span>
          </label>
            </div>
        </main>
        <footer className="footer">
          <button className="btn" onClick={()=>{setPage(2)}}>Back</button>
          <button className="btn" onClick={()=>{setPage(4)}}>Next</button>
        </footer>
    </>)
}

export default Extras