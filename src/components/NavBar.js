import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
const cookies = new Cookies();
const NavBar = (props) => {

    const eraseCookies =()=>{
        cookies.remove('id');
        cookies.remove('albumId');
        cookies.remove('username');
    }

    return (
        <>
            <nav className='navbar'>
                <ul>
                    <p className='p-username'> Bienvenid@ {props.name}! Id:({props.id})</p>
                    <li className='li-item'> <Link to="/album" > Album </Link></li>
                    <li className='li-item' onClick={()=>eraseCookies()}> <Link to="/" > Logout </Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar