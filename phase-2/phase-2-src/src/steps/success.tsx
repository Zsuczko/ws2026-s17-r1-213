import maximize from '../assets/maximize.svg'
import check from '../assets/check.svg'


const Success:React.FC = () => {
    return(<>
     <header className="header">
          <h1>Register a new location</h1>
          <div className="steps">
          <button className="step done">
            <img src={check} alt='Check'></img>
          </button>
          <div className="step-divider"></div>
          <button className="step done">
            <img src={check} alt='Check'></img>
          </button>
          <div className="step-divider"></div>
          <button className="step done">
            <img src={check} alt='Check'></img>
          </button>
          <div className="step-divider"></div>
          <button className="step done">
            <img src={check} alt='Check'></img>
          </button>
          </div>
          
        <button className="fullscreen-btn">
          <img src={maximize} alt="Maximize" />
        </button>
        </header>
        <main className='main'></main>
    
    </>)
}

export default Success