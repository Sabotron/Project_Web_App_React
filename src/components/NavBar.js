import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <>
            <nav className='navbar'>
                <ul>
                    <p className='p-username'> Bienvenid@ {props.name} Id: {props.id}!</p>
                    <li className='li-item'> <Link to="/album" > Album </Link></li>
                    <li className='li-item'> <Link to="/" > Logout </Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar