import maximize from '../assets/maximize.svg'
import check from '../assets/check.svg'
import { GenrelaInformations, shoplayoutElements } from '../lib/models'


const Success:React.FC<{data:GenrelaInformations, layout:shoplayoutElements[]}> = (props) => {


  function copyToClipboard(){

    const jsonInfo = JSON.stringify(props.data, null, 2)
    navigator.clipboard.writeText(jsonInfo)
  }

  function downloadCSV(){
    
    let dataToWrite = ""
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 5; col++) {
            
          if(props.layout[row*5+col].role === "empty"){
            dataToWrite+="-"
          }
          else if(props.layout[row*5+col].role === "entrance"){
            dataToWrite += "Entrance"
          }
          else{
            dataToWrite += props.layout[row*5+col].name
          }

          if(col!== 4){
            dataToWrite+=","
          }

        }
      dataToWrite+="\n"
      
    }

    console.log(dataToWrite)

    const blob = new Blob([dataToWrite], {type:"text/csv"})
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = 'layout.csv'
    link.click()
    URL.revokeObjectURL(link.href)
  }

  return(<>
     <header className="header">
          <h1>Register a new location</h1>
          <div className="steps">
          <button className="step done" disabled>
            <img src={check} alt='Check'></img>
          </button>
          <div className="step-divider"></div>
          <button className="step done" disabled>
            <img src={check} alt='Check'></img>
          </button>
          <div className="step-divider"></div>
          <button className="step done" disabled>
            <img src={check} alt='Check'></img>
          </button>
          <div className="step-divider"></div>
          <button className="step done" disabled>
            <img src={check} alt='Check'></img>
          </button>
          </div>
          
        <button className="fullscreen-btn">
          <img src={maximize} alt="Maximize" />
        </button>
        </header>
        <main className='main'>

          <div className='success-div'>
            <h2>Successful submition!</h2>
            <h3>Thank you for your new location registration</h3>
            <button className="btn" onClick={copyToClipboard}>Copy from values</button>
            <button className="btn" onClick={downloadCSV}>Export floorplan</button>
            <hr></hr>
            <button className="btn">Start over</button>
          </div>
        </main>
    
  </>)
}

export default Success