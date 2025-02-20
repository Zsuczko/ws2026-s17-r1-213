import washingMachine from '../assets/washing-machine.svg'
import space from '../assets/space.svg'
import armchair from '../assets/armchair.svg'
import { useEffect, useState } from 'react'
import { shoplayoutElements } from '../lib/models'
import maximize from '../assets/maximize.svg'
import alert from '../assets/alert.svg'

const ShopLayout:React.FC<{layout:shoplayoutElements[] , loadedPages:number[], onChange:(page:number, layout:shoplayoutElements[], loadedPages:number[])=>void}> =(props) =>{


    const [layout, setLayout] = useState<shoplayoutElements[]>([])

    const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)

    const [elements, setElements] = useState<shoplayoutElements[]>([
        {name:"Washer (8kg)", class:"washer", src:washingMachine, role:"machine"},
        {name:"Washer (11kg)", class:"washer", src:washingMachine,role:"machine"},
        {name:"Dryer (18kg)", class:"dryer", src:washingMachine, role:"machine"},
        {name:"Dryer (25kg)", class:"dryer", src:washingMachine, role:"machine"},
        {name:"Waiting area", class:"", src:armchair, role:"area"},
        {name:"Folding table", class:"", src:space, role:"area"},
    ])

    const [isChecking, setIsChecking] = useState<boolean>(false)


    const handleClick = (e:React.MouseEvent, index:number)=>{

        if(layout[index].class !== "empty" ){
            const emptyItem = {
                index:index,
                class:"empty",
                role:"empty"
            }
            const newLayoutItem  = [...layout]
            newLayoutItem[index] = emptyItem
            
            setLayout(newLayoutItem);
        }
    }

    
    const handleDoubleClick = (e:React.MouseEvent, index:number)=>{

        const wallItem = {
            index:index,
            name:"Wall",
            class:"wall",
            src:undefined,
            role:"wall"
        }
        const newLayoutItem  = [...layout]
        newLayoutItem[index] = wallItem
        
        setLayout(newLayoutItem);
    }

    const handlerRightClick = (e:React.MouseEvent, index:number)=>{
        e.preventDefault()
        const entranceItem = {
            index:index,
            class:"entrance",
            role:"entrance"
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



    function checkLayout(){


        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 5; col++) {
                
                if(layout[row*5+col].role === "machine"){
                    if(row-1 >= 0 && row+1<6 && col-1>=0 && col+1<5){
                        if(layout[(row-1)*5+(col)].role!=="wall" && layout[(row+1)*5+(col)].role!=="wall" && layout[(row)*5+(col-1)].role!=="wall" && layout[(row)*5+(col+1)].role!=="wall"){
                           
                            return false

                        }
                    }
                }

                // console.log(layout[row*5+col].role,row, col)


                
            }
            
        }

        return true
    }

    function setPage(index:number){
        
        if(checkLayout()){
            if (!props.loadedPages.includes(2)){
                props.loadedPages.push(2)
            }

            props.onChange(index, layout, props.loadedPages)
        }
        else{
            setIsChecking(true)
        }
       
    }


    useEffect(()=>{
        setLayout(props.layout)
    }, [])



    return(
    <>
    <header className="header">
          <h1>Register a new location</h1>
          <div className="steps">
          <button className="step done" onClick={()=>{setPage(1)}}>
            1
          </button>
          <div className="step-divider"></div>
          <button className="step current">2</button>
          <div className={`step-divider ${props.loadedPages.includes(3)?"":"dashed"}`}></div>
          <button  className={`step ${props.loadedPages.includes(3)?"done":""}`} onClick={()=>{setPage(3)}} disabled={!props.loadedPages.includes(3)}>3</button>
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



        {isChecking&&!checkLayout()?
        <div className="alert">
            <img src={alert} alt="Alert" />
            <span>Washers or Dryers can only be next to a wall</span>
        </div>:
        <></>}

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
          <button className="btn" onClick={()=>{setPage(1)}}>Back</button>
          <button className="btn" onClick={()=>{setPage(3)}}>Next</button>
        </footer>
    </>
    )
}

export default ShopLayout