import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import NavBar from '../components/NavBar';
import AlbumLoader from '../components/AlbumLoader';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
import Album from './Album';


const Home = () => {
  const navigate = new useNavigate();
  const cookies = new Cookies();
  const [albums, setAlbums] = useState('');
  const [albumFound, setAlbumFound] = useState('');
  const [albumIdFound, setAlbumIdFound] = useState('');
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

  function searchAlbum(e) {   
    console.log(e.target.value);
    for(let i = 0; i < albums.length; i++)
    {
     if(albums[i].title === e.target.value){
      cookies.set('albumId', albums[i].id, { path: "/" });
      console.log(cookies.get('albumId'));
      cookies.set('albumTitle', albums[i].title, { path: "/" });
      //setAlbumIdFound(albums[i].id);
       navigate('/album');
       break;
     } 
    }
 }


  useEffect(()=>{
    findAlbums();
  },[])
  
  return (
    <div className='Home'>
      <NavBar name={username} id={userId} />
      <h2>Albums de {username}</h2>
      <input type="text" className='searchBar' placeholder="Buscar Album" onChange={searchAlbum} onPaste={searchAlbum}/>
      <br />
      <AlbumLoader albums={albums}/>
    </div>
  )
}

export default Home