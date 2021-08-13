import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Styles/Header.css'

function Header() {
    return (
        <div className="header">
            <Link to='/'><h1 className="header__title">MERN App</h1></Link>
        </div>
    )
}

export default Header
