import washingMachine from '../assets/washing-machine.svg'
import space from '../assets/space.svg'
import armchair from '../assets/armchair.svg'
import { useState } from 'react'
import { shoplayoutElements } from '../lib/models'
import maximize from '../assets/maximize.svg'

const ShopLayout:React.FC<{onChange:(page:number)=>void}> =(props) =>{


    const [layout, setLayout] = useState<shoplayoutElements[]>(Array(30).fill(null).map((_,index)=>({
        index:index,
        class:"empty"
    })))

    const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)

    const [elements, setElements] = useState<shoplayoutElements[]>([
        {name:"Washer (8kg)", class:"washer", src:washingMachine},
        {name:"Washer (11kg)", class:"washer", src:washingMachine},
        {name:"Dryer (18kg)", class:"dryer", src:washingMachine},
        {name:"Dryer (25kg)", class:"dryer", src:washingMachine},
        {name:"Waiting area", class:"", src:armchair},
        {name:"Folding table", class:"", src:space},
    ])


    const handleClick = (e:React.MouseEvent, index:number)=>{
        console.log("single click")
        if(layout[index].class !== "empty" ){
            const emptyItem = {index:index,
                class:"empty"}
            const newLayoutItem  = [...layout]
            newLayoutItem[index] = emptyItem
            
            setLayout(newLayoutItem);
        }
    }

    
    const handleDoubleClick = (e:React.MouseEvent, index:number)=>{
        console.log("double click")
        const wallItem = {
            index:index,
            name:"Wall",
            class:"wall",
            src:undefined
        }
        const newLayoutItem  = [...layout]
        newLayoutItem[index] = wallItem
        
        setLayout(newLayoutItem);
    }

    const handlerRightClick = (e:React.MouseEvent, index:number)=>{
        e.preventDefault()
        const entranceItem = {
            index:index,
            class:"entrance"
        }

        const newLayoutItem = [...layout]
        newLayoutItem[index] = entranceItem
        setLayout(newLayoutItem)
    }



    
    const handleDragStart = (e: React.DragEvent, item: typeof elements[0]) => {
        e.dataTransfer.setData('item', JSON.stringify(item));
    }

    const handleDragOver = (e: React.DragEvent, index:number) => {
        e.preventDefault();
        setDragOverIndex(index);
        console.log(dragOverIndex)
    }

    const handleDragLeave = () => {
        setDragOverIndex(null);
    }

    const handleDrop = (e: React.DragEvent, index: number) => {
        e.preventDefault();
        const droppedItem = JSON.parse(e.dataTransfer.getData('item'));

        droppedItem.index = index;

        setDragOverIndex(null);

        const newLayoutItem  = [...layout]
        newLayoutItem[index] = droppedItem
        
        setLayout(newLayoutItem);
    }




    return(
    <>
    <header className="header">
          <h1>Register a new location</h1>
          <div className="steps">
          <button className="step done">
            1
          </button>
          <div className="step-divider"></div>
          <button className="step current">2</button>
          <div className="step-divider dashed"></div>
          <button className="step">3</button>
          <div className="step-divider dashed"></div>
          <button className="step" disabled>4</button>
          </div>
          
        <button className="fullscreen-btn">
          <img src={maximize} alt="Maximize" />
        </button>
        </header>
        <main className='main'>
        <h2>Shop layout</h2>

        <div className="dnd-row">
        
        {elements.map(item => (
            <div className={"grid-item " + item.class} draggable onDragStart={(e) => handleDragStart(e, item)}>
                <img src={item.src} alt={item.name} />
                <span>{item.name}</span>
            </div>
        ))}
        </div>

        <div className="grid">

        {layout.map((item) =>(
            <div className={`grid-item ${item.class} ${item.index === dragOverIndex?"grid-item-drag-over":""}`}  
            onDrop={(e) =>{handleDrop(e, item.index!)}} 
            onDragOver={(e) =>{handleDragOver(e, item.index!)}} 
            onDragLeave={handleDragLeave}
            onClick={(e)=>handleClick(e, item.index!)}
            onDoubleClick={(e)=>{handleDoubleClick(e, item.index!)}}
            onContextMenu={(e)=>{handlerRightClick(e, item.index!)}}>
                {item.name ? <>
                    {item.src ? <img src={item.src} alt={item.name} />:<></>}
                    <span>{item.name}</span>
                </> : <span></span>}
            </div>
        ))}


        </div>
        </main>
        <footer className="footer">
          <button className="btn" onClick={()=>{props.onChange(1)}}>Back</button>
          <button className="btn" onClick={()=>{props.onChange(3)}}>Next</button>
        </footer>
    </>
    )
}

export default ShopLayout