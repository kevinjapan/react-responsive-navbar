import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { NavBarContext } from '../App/NavBar/NavBarContext'



const ArchitectoNavBarLinks = () => {

    const { setDisplayDropdown } = useContext(NavBarContext)

    return (
        <ul className="text-2xl text-left">
            <li><NavLink to="/architecto/perferendis"  onClick={() => setDisplayDropdown(false)}
                  className={({ isActive }) =>
                    isActive ? "navbar_active_link" : ""}>perferendis</NavLink></li>
            <li><NavLink to="/architecto/impedit"  onClick={() => setDisplayDropdown(false)}
                  className={({ isActive }) =>
                    isActive ? "navbar_active_link" : ""}>impedit</NavLink></li>
            <li><NavLink to="/architecto/laborum"  onClick={() => setDisplayDropdown(false)}
                  className={({ isActive }) =>
                    isActive ? "navbar_active_link" : ""}>laborum</NavLink></li>
            <li><NavLink to="/architecto/adipisci"  onClick={() => setDisplayDropdown(false)}
                  className={({ isActive }) =>
                    isActive ? "navbar_active_link" : ""}>adipisci</NavLink></li>
        </ul>
    )
}

export default ArchitectoNavBarLinks