import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuItem, menu } from "../models/MenuItem";


export function DetailsRoute() {
    const id = useParams().id;
    
    const [item, setItem] = useState<any>(getItem(`${id}`));
    
    function getItem(id: string) {
        const mItem = menu.find((item: MenuItem) => `item.id = ${id}`);
        if (mItem !== undefined)
            return mItem;
    }

    useEffect( () => {
        setItem(getItem(`${id}`));
    },[id])

    return(
        <div>
            <div>Name: {item?.name}</div>
            <div>Calories: {item?.calories}</div>
            <div>Description: {item?.description}</div>
            <div>Vegeterian: {item?.vegeterian}</div>
            <div>Price: {item?.price}</div>
        </div>
    )
    

}