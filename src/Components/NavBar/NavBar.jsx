import React, { useEffect, useState } from 'react'
import './NavBar.css'

function NavBar() {
    //State for store scroll event
    const [showNav, setShowNav] = useState(false)

    //Code snippet for appearing navbar after 100px scrollY
    useEffect(() => {
       window.addEventListener("scroll", () => {
           if(window.scrollY > 100){
               setShowNav(true)
           } else setShowNav(false)
       })
       return () => {
           window.removeEventListener("scroll")
       }
    }, [])

    return (
    <div className={`navbar ${showNav && "navbar-dark"}`}>
           <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" /> 
            <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="profile" />
        </div>
    )
}

export default NavBar
