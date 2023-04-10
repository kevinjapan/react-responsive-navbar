import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { NavBarContext } from './NavBarContext'



const MainNavBarLinks = () => {

    const { setDisplayDropdown } = useContext(NavBarContext)

    return (
        <ul className="text-2xl text-left ">
            <li>
                <NavLink to="/perferendis" onClick={() => setDisplayDropdown(false)}
                  className={({ isActive }) =>
                    isActive ? "navbar_active_link" : ""}>perferendis</NavLink>
            </li>
            <li>
                <NavLink to="/distinctio" onClick={() => setDisplayDropdown(false)}
                  className={({ isActive }) =>
                    isActive ? "navbar_active_link" : ""}>distinctio</NavLink>
            </li> 
            <li>
                <NavLink to="/inventore" onClick={() => setDisplayDropdown(false)}
                  className={({ isActive }) =>
                    isActive ? "navbar_active_link" : ""}>inventore</NavLink>
            </li>   
            <li>
                <NavLink to="/consequatur" onClick={() => setDisplayDropdown(false)}
                  className={({ isActive }) =>
                    isActive ? "navbar_active_link" : ""}>consequatur</NavLink>
            </li>  
            <li>
                <NavLink to="/libero" onClick={() => setDisplayDropdown(false)}
                  className={({ isActive }) =>
                    isActive ? "navbar_active_link" : ""}>libero</NavLink>
            </li>            
        </ul>
    )
}


export default MainNavBarLinks