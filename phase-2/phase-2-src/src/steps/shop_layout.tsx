import washingMachine from '../assets/washing-machine.svg'
import space from '../assets/space.svg'
import armchair from '../assets/armchair.svg'
import { JSX, useState } from 'react'
import { shoplayoutElements } from '../lib/models'

const ShopLayout:React.FC =() =>{

    const [draggedItem, setDraggedItem] = useState<HTMLElement | null>(null);
    const [targetItem, setTargetItem] = useState<JSX.Element[]>([])

    const [layout, setlayout] = useState<shoplayoutElements[]>(Array(30).fill({id:undefined, name:undefined, class:"empty", src:undefined}))

    const [elements, setElements] = useState<shoplayoutElements[]>([
        {id:1, name:"Washer (8kg)", class:"washer", src:washingMachine},
        {id:2, name:"Washer (11kg)", class:"washer", src:washingMachine},
        {id:3, name:"Dryer (18kg)", class:"dryer", src:washingMachine},
        {id:4, name:"Dryer (25kg)", class:"dryer", src:washingMachine},
        {id:5, name:"Waiting area", class:"", src:armchair},
        {id:6, name:"Folding table", class:"", src:space},
    ])


    // const handleDragStart = (event: React.DragEvent<HTMLDivElement>) =>{
    //     setDraggedItem(event.currentTarget)
    //     event.dataTransfer.setData('text/plain', event.currentTarget.id)
    // }

    // const handleDragOver = (event: React.DragEvent<HTMLDivElement>)=>{
    //     event.preventDefault()
    // }

    // const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    //     if(draggedItem) {
    //         const clonedItem = draggedItem.cloneNode(true) as HTMLElement;
    //         clonedItem.removeAttribute("draggable")
    //         console.log(draggedItem.innerHTML)
    //         setTargetItem((prev) => [...prev, <div key={prev.length}>{clonedItem.innerHTML}</div>])
    //         setDraggedItem(null)
    //     }   
    // }


    
    const handleDragStart = (e: React.DragEvent, item: typeof elements[0]) => {
        e.dataTransfer.setData('item', JSON.stringify(item));
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent, index: number) => {
        e.preventDefault();
        const droppedItem = JSON.parse(e.dataTransfer.getData('item'));
        
        setlayout([...layout, droppedItem]);
    };

    return(
    <>
        <h3>Shop layout</h3>

        <div className="dnd-row">
        
        {elements.map(item => (
            <div className={"grid-item " + item.class} draggable onDragStart={(e) => handleDragStart(e, item)}>
                <img src={item.src} alt={item.name} />
                <span>{item.name}</span>
            </div>
        ))}
        </div>

        <div className="grid">

        {layout.map(item =>(
            <div className={"grid-item " + item.class}  onDrop={(e) =>{handleDrop(e, item.id!)}} onDragOver={handleDragOver}>
                {item.name ? <>
                    <img src={item.src} alt={item.name} />
                    <span>{item.name}</span>
                </> : <span></span>}
            </div>
        ))}



        {/* <div className="grid-item empty"></div>
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
                {item.type} 
            </div>
            ))}
        </div>
        <div className="grid-item empty" onDrop={(event) => handleDrop(event)} onDragOver={(event) => handleDragOver(event)}>
            {targetItem.map((item, index) => (
            <div
                key={index}
            >
                {item.type}
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
        <div className="grid-item empty"></div> */}
        </div>
    </>
    )
}

export default ShopLayout