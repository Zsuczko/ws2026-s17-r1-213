import { useState } from "react"
import PostalInput from "../components/postal_input";


function GeneralInformation() {

  const [postalCode, setPostalCode] = useState<number>(0)

    return(
        <>
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
           <PostalInput onChange={setPostalCode}></PostalInput>
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
        </>
    );
}


export default GeneralInformation