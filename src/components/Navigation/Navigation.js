import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/catalog'}>About</NavLink>
        <NavLink to={'/favorites'}>Favorites</NavLink>
    </nav>
}