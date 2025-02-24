import { useEffect, useState } from "react"
import maximize from '../assets/maximize.svg';
import minimize from "../assets/minimize.svg";
import { GenrelaInformations } from "../lib/models";


const GeneralInformation:React.FC<{
  data:GenrelaInformations;
  loadedPages:number[];
  onChange:(page:number, data:GenrelaInformations, loadedPages:number[])=>void, onMaximize:(maximize:boolean)=>void}> = (props)=> {


  const [isChecking, setIsChecking] = useState<boolean>(false)

  const [postalCode, setPostalCode] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [address, setAddress] = useState<string>("")
  const [openAt, setOpenAt] = useState<string>("Every Day")
  const [openFrom, setOpenFrom] = useState<string>("")
  const [openTo, setOpenTo] = useState<string>("")


  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const postal = e.target.value.replace(/[^0-9]/g, "").slice(0, 4)
    setPostalCode(postal)
  }
  
  function nextPage(index:number){
    if(name.length<3 || description.length<10 || postalCode.length<4 || city.length<3 || address.length<5 || openFrom.length<5 || openTo.length<5){
      setIsChecking(true)
    }

    else{
      const newGeneral:GenrelaInformations = {
        name:name,
        description:description,
        postalCode:parseInt(postalCode),
        city:city,
        address:address,
        from:openFrom,
        to:openTo,
        openAt:openAt,
        freeWiFi:props.data.freeWiFi,
        acessibleEntry:props.data.acessibleEntry,
        loungeArea:props.data.loungeArea,
        backgroundMusic:props.data.backgroundMusic,
        customerService:props.data.customerService,
        parking:props.data.parking
      }
      props.onChange(index, newGeneral, props.loadedPages);
    }
  }


  useEffect(()=>{
    setName(props.data.name)
    setDescription(props.data.description)
    setPostalCode(props.data.postalCode===0?"":props.data.postalCode.toString())
    setCity(props.data.city)
    setAddress(props.data.address)
    setOpenAt(props.data.openAt)
    setOpenFrom(props.data.from)
    setOpenTo(props.data.to)
  },[])

  const [isMaximized, setIsMaximized] = useState(false)

  return(
      <>
        <header className="header">
          <h1>Register a new location</h1>
          <div className="steps">
          <button className="step current">
            1
          </button>
          <div className={`step-divider ${props.loadedPages.includes(2)?"":"dashed"}`}></div>
          <button className={`step ${props.loadedPages.includes(2)?"done":""}`} onClick={()=>{nextPage(2)}} disabled={!props.loadedPages.includes(2)}>2</button>
          <div className={`step-divider ${props.loadedPages.includes(3)?"":"dashed"}`}></div>
          <button className={`step ${props.loadedPages.includes(3)?"done":""}`} onClick={()=>{nextPage(3)}} disabled={!props.loadedPages.includes(3)}>3</button>
          <div className="step-divider dashed"></div>
          <button className="step" disabled>4</button>
          </div>
            
          <button className="fullscreen-btn">
            <img src={isMaximized?minimize:maximize} alt="Maximize" onClick={()=>{props.onMaximize(true);setIsMaximized(!isMaximized)}} />
          </button>
        </header>
      <main className="main">
      <h2>Information about the location</h2>
      <div className="input-group">
        <label htmlFor="input-1">Name</label>
        <input type="text" id="input-1" autoComplete="new-password" className={isChecking && name.length<3?"error":""} value={name} onChange={(e)=>{setName(e.target.value)}}/>
        {isChecking && name.length<3?
        name.length!==0?
        <span className="input-error">Must be at least 3 character long</span>:
        <span className="input-error">This field is required</span>:<></>}
      </div>
      <div className="input-group">
        <label htmlFor="textarea">Description</label>
        <textarea id="textarea" rows={5} className={isChecking && description.length<10?"error":""} autoComplete="new-password" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
        {isChecking && description.length<10?
        description.length!==0?
        <span className="input-error">Must be at least 10 character long</span>:
        <span className="input-error">This field is required</span>:<></>}
      </div>

      <div className="input-row">
        <div className="input-group" id='postal-group'>
          <label htmlFor="postal">Postal code</label>
          <input type="text" id="postal" pattern='/d{4}' className={isChecking && postalCode.length<4?"error":""}  maxLength={4} inputMode='numeric' onInput={handlePostalCodeChange} value={postalCode} autoComplete="new-password"/>
          {isChecking && postalCode.length<4?
        postalCode.length!==0?
        <span className="input-error">Must be at least 4 character long</span>:
        <span className="input-error">This field is required</span>:<></>}
        </div>
        <div className="input-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" className={isChecking && city.length<3?"error":""}  autoComplete="new-password" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
          {isChecking && city.length<3?
        city.length!==0?
        <span className="input-error">Must be at least 3 character long</span>:
        <span className="input-error">This field is required</span>:<></>}
        </div>
        <div className="input-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" className={isChecking && address.length<3?"error":""}   autoComplete="new-password" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
          {isChecking && address.length<5?
        address.length!==0?
        <span className="input-error">Must be at least 5 character long</span>:
        <span className="input-error">This field is required</span>:<></>}
        </div>
      </div>
      
      <hr />
      
      <h3>Operational hours</h3>

      <div className="input-group">
        <label htmlFor="select">Open at</label>
        <select id="select" onChange={(e)=>{setOpenAt(e.target.value)}} value={openAt}>
          <option value="Every Day" >Every Day</option>
          <option value="Weekdays" >Weekdays</option>
          <option value="Weekends" >Weekends</option>
        </select>
      </div>

      <div className="input-row">
        <div className="input-group input-time">
          <label htmlFor="from">From</label>
          <input type="time" id="from" value={openFrom}  className={isChecking && openFrom.length<5?"error":""} autoComplete="new-password" onChange={(e)=>{setOpenFrom(e.target.value)}}/>
          {isChecking && openFrom.length<5?
        <span className="input-error">This field is required</span>:<></>}
        </div>
        <div className="input-group input-time">
          <label htmlFor="to">To</label>
          <input type="time" id="to" value={openTo} className={isChecking && openTo.length<5?"error":""} autoComplete="new-password" onChange={(e)=>{setOpenTo(e.target.value)}}/>
          {isChecking && openTo.length<5?
        <span className="input-error">This field is required</span>:<></>}
        </div>
      </div>
      </main>
      <footer className="footer">
        <button className="btn" disabled>Back</button>
        <button className="btn" onClick={()=>{nextPage(2)}}>Next</button>
      </footer>
      </>
  );
}


export default GeneralInformation