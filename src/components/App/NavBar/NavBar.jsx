import React from 'react'
import { Link } from 'react-router-dom'
import { NavBarProvider } from '../NavBar/NavBarContext'
import NavBarLg from '../NavBar/NavBarLg'
import NavBarSm from '../NavBar/NavBarSm'
import NavBarToggler from './NavBarToggler'



const NavBar = props => {
    
    const HeadingTag = props.title_size || "h4"
    const heading_tag_className = props.title_classname

    return (
        <NavBarProvider>
            <div className="navbar">

                {/* topbar */}
                <div className="navbar_topbar">
                    <div className="navbar_title" style={{whiteSpace:'nowrap'}}>
                        {props.title_link ?
                            <HeadingTag className={heading_tag_className}><Link to={`${props.title_link}`}>{props.title}</Link></HeadingTag>
                        :   <HeadingTag className={heading_tag_className}>{props.title}</HeadingTag>}
                    </div>
                    {props.children && (
                        <NavBarToggler />)}
                </div>

                {/* links/dropdown */}
                {props.children && (
                    <>
                        <NavBarLg>{props.children}</NavBarLg>
                        <NavBarSm>{props.children}</NavBarSm>
                    </>
                )}
            </div>
        </NavBarProvider>
    )
}


export default NavBar