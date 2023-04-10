import React from 'react'
import NavBar from '../NavBar/NavBar'
import MainNavBarLinks from '../NavBar/MainNavBarLinks'



const AppHeader = () => {
    return (
        <header>
            <section>
                <div className="text-lg text-slate-400">react-responsive-navbar</div>
            </section>
            <NavBar title="Lorem, ipsum dolor." 
                    title_link="/" 
                    title_classname="text-lg">
                <MainNavBarLinks/>
            </NavBar>
        </header>
    )
}

export default AppHeader