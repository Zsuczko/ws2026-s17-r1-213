import washingMachine from '../assets/washing-machine.svg'
import space from '../assets/space.svg'
import armchair from '../assets/armchair.svg'
import { JSX, useState } from 'react'

const ShopLayout:React.FC =() =>{

    const [draggedItem, setDraggedItem] = useState<HTMLElement | null>(null);
    const [targetItem, setTargetItem] = useState<JSX.Element[]>([])

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) =>{
        setDraggedItem(event.currentTarget)
    }

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>)=>{
        event.preventDefault()
    }

    const handleDrop = () => {
        if(draggedItem) {
            setTargetItem((prev) => [...prev, <div key={prev.length}>{draggedItem.innerHTML}</div>])
            setDraggedItem(null)
        }
    }

    return(
    <>
        <h3>Shop layout</h3>

        <div className="dnd-row">
        <div key={0} className="grid-item washer" draggable onDragStart={handleDragStart} >
            <img src={washingMachine} alt="Washing Machine" />
            <span>Washer (8 kg)</span>
        </div>
        <div className="grid-item washer">
            <img src={washingMachine} alt="Washing Machine" />
            <span>Washer (11 kg)</span>
        </div>
        <div className="grid-item dryer">
            <img src={washingMachine}  alt="Drying Machine" />
            <span>Dryer (18 kg)</span>
        </div>
        <div className="grid-item dryer">
            <img src={washingMachine}  alt="Drying Machine" />
            <span>Dryer (25 kg)</span>
        </div>
        <div className="grid-item">
            <img src={armchair} alt="Waiting Area" />
            <span>Waiting Area</span>
        </div>
        <div className="grid-item">
            <img src={space} alt="Folding Tables" />
            <span>Folding Table</span>
        </div>
        </div>

        <div className="grid">
        <div className="grid-item empty"></div>
        <div className="grid-item wall">
            <span>Wall</span>
        </div>
        <div className="grid-item washer">
            <img src={washingMachine} alt="Washing Machine" />
            <span>Washer (11 kg)</span>
        </div>
        <div className="grid-item dryer">
            <img src={washingMachine} alt="Drying Machine" />
            <span>Dryer (25 kg)</span>
        </div>
        <div className="grid-item dryer">
            <img src={washingMachine} alt="Drying Machine" />
            <span>Dryer (25 kg)</span>
        </div>
        <div className="grid-item entrance"></div>
        <div className="grid-item empty" onDrop={handleDrop} onDragOver={handleDragOver}>
            {targetItem.map((item, index) => (
            <div
                key={index}
            >
                {item} 
            </div>
            ))}
        </div>
        <div className="grid-item empty" onDrop={handleDrop} onDragOver={handleDragOver}>
            {targetItem.map((item, index) => (
            <div
                key={index}
            >
                {item}
            </div>
            ))}
        </div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        </div>
    </>
    )
}

export default ShopLayout