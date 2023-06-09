import { Link } from "react-router-dom"
import { MenuItem } from "../models/MenuItem"
import "./BasicItem.css"

export function BasicItem(prop : { menuItem: MenuItem } ) {
    return(
        <div className="basic">
            <div>{prop.menuItem.name}</div>
            <div>{prop.menuItem.price}</div>            
            <div><Link to={`/details/${prop.menuItem.id}`}>Details</Link></div>
        </div>
    )
}

//