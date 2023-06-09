import { useState } from "react";
import { BasicItem } from "./BasicItem"
import { menu } from "../models/MenuItem"

export function MenuRoute() {
    const [items, setItems] = useState<any[]>(menu);    

    
    return(
        <div>            
            {
                items.map(item => <BasicItem key={item.id} menuItem={item}></BasicItem>)
            }
        </div>
    )
}