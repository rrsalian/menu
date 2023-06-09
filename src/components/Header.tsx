import { DetailsRoute } from "./DetailsRoute"
import { MenuRoute } from "./MenuRoute"
import { Route, Routes } from 'react-router-dom'

export function Header() {
    return(
        <div>
            <h1>Menu</h1>
            <Routes>
                <Route path="/" element={<MenuRoute />} />
                <Route path="/details/:id" element={<DetailsRoute />} />
            </Routes>
        </div>
    )
}