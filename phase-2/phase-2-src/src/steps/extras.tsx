import maximize from '../assets/maximize.svg'

const Extras:React.FC<{onChange:(page:number)=> void}> = (props) => {
    
    
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
                <input type="checkbox" />
                <span>Free Wi-Fi</span>
            </label>
            <label className="cnr-label">
                <input type="checkbox" />
                <span>Accesible entry</span>
            </label>
            <label className="cnr-label">
                <input type="checkbox" />
                <span>Lounge Area</span>
            </label>
            <label className="cnr-label">
                <input type="checkbox" />
                <span>Background music</span>
            </label>
            <label className="cnr-label">
                <input type="checkbox" />
                <span>Personal customor service</span>
            </label>

            <hr />

            <h3>Parking</h3>

            <div className="input-row">
            <label className="cnr-label">
                <input type="radio" name="parking-radio" defaultChecked />
                <span>Easy</span>
            </label>
            <label className="cnr-label">
                <input type="radio" name="parking-radio" />
                <span>Medium</span>
            </label>
            <label className="cnr-label">
            <input type="radio" name="parking-radio" />
            <span>Hard</span>
          </label>
            </div>
        </main>
        <footer className="footer">
          <button className="btn" onClick={()=>{props.onChange(2)}}>Back</button>
          <button className="btn" onClick={()=>{props.onChange(4)}}>Next</button>
        </footer>
    </>)
}

export default Extras