import { useState } from "react";


const PostalInput:React.FC<{onChange:(postalCode: number) => void}> = (props) => {

    
    const [postalCode, setPostalCode] = useState<string>("")

    const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const postal = e.target.value.replace(/[^0-9]/g, "").slice(0, 4)
        setPostalCode(postal)
        props.onChange(parseInt(postal))
        
    }

    return(
        <input type="text" id="postal" pattern='/d{4}' maxLength={4} inputMode='numeric' onInput={handlePostalCodeChange} value={postalCode}/>
    );
}


export default PostalInput