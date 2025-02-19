import { useState } from "react"
import PostalInput from "../components/postal_input";
import maximize from '../assets/maximize.svg';


const GeneralInformation:React.FC<{onChange:(page:number)=>void}> = (props)=> {

  const [postalCode, setPostalCode] = useState<number>(0)
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [address, setAddress] = useState<string>("")
  const [openAt, setOpenAt] = useState<string>("Every Day")
  const [openFrom, setOpenFrom] = useState<string>("")
  const [openTo, setOpenTo] = useState<string>("")
  

    return(
        <>
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
          <input type="text" id="input-1" autoComplete="new-password" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className="input-group">
          <label htmlFor="textarea">Description</label>
          <textarea id="textarea" rows={5} autoComplete="new-password" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
        </div>

        <div className="input-row">
          <div className="input-group" id='postal-group'>
            <label htmlFor="postal">Postal code</label>
           <PostalInput onChange={setPostalCode}></PostalInput>
          </div>
          <div className="input-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" autoComplete="new-password" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address"  autoComplete="new-password" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
          </div>
        </div>
        
        <hr />
        
        <h3>Operational hours</h3>

        <div className="input-group">
          <label htmlFor="select">Open at</label>
          <select id="select" onChange={(e)=>{setOpenAt(e.target.value)}}>
            <option value="Every Day" >Every Day</option>
            <option value="Weekdays" >Weekdays</option>
            <option value="Weekends" >Weekends</option>
          </select>
        </div>

        <div className="input-row">
          <div className="input-group input-time">
            <label htmlFor="from">From</label>
            <input type="time" id="from" autoComplete="new-password" onChange={(e)=>{setOpenFrom(e.target.value)}}/>
          </div>
          <div className="input-group input-time">
            <label htmlFor="to">To</label>
            <input type="time" id="to" autoComplete="new-password" onChange={(e)=>{setOpenTo(e.target.value)}}/>
          </div>
        </div>
        </main>
        <footer className="footer">
          <button className="btn" disabled>Back</button>
          <button className="btn" onClick={()=>{props.onChange(2)}}>Next</button>
        </footer>
        </>
    );
}


export default GeneralInformation