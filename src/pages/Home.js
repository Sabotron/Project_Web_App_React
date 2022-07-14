import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import NavBar from '../components/NavBar';
import AlbumLoader from '../components/AlbumLoader';
import '../css/Home.css';

const cookies = new Cookies();
const Home = () => {
  const [albums, setAlbums] = useState('');
  const userId = cookies.get('id');
  const username = cookies.get('username');
  const albumsUrl = 'https://jsonplaceholder.typicode.com/albums?userId=' + userId;

  const findAlbums = async () => {
    await axios.get(albumsUrl)
      .then(res => {
        setAlbums(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(()=>{
    findAlbums();
  },[])
  
  return (
    <div className='Home'>
      <NavBar name={username} id={userId} />
      <h2>Albums de {username}</h2>
      <input type="text" className='searchBar' placeholder="Buscar Album"/>
      <br />
      <AlbumLoader albums={albums}/>
    </div>
  )
}

export default Home