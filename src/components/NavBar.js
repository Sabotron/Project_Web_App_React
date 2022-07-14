import '../css/NavBar.css';
import Cookies from 'universal-cookie'
import React  from 'react'
import { Outlet, Link } from 'react-router-dom'


const cookies = new Cookies();
const NavBar = (props) => {

    const eraseCookies =()=>  {
        cookies.remove('id');
        cookies.remove('username');
        cookies.remove('albumId');
        cookies.remove('albumTitle');
    }

    return (
        <>
            <nav className='navbar'>
                <ul>
                    <li className='p-username'> Bienvenid@ {props.name}!</li>
                    <li className='li-item'> <Link to="/home" > Home </Link></li>
                    <li className='li-item'> <Link to="/album" > Album </Link></li>
                    <li className='li-item' onClick={()=>eraseCookies()}> <Link to="/" > Logout </Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar