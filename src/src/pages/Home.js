import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
import Cookies from 'universal-cookie';


const cookies = new Cookies();


const Home = () => {
  const navigate = useNavigate();
  const id = cookies.get('id');
  const username = cookies.get('username');

  const logout = () => {
    cookies.remove('id', { path: "/" });
    cookies.remove('username', { path: "/" });
    navigate('/');
  };

  return (
    <div className='Home'>
      <h2>Hello {username} id: {id}</h2>
      <input type="button" value={'Goodbye MF'} onClick={()=>logout()} />
    </div>
  )
}

export default Home