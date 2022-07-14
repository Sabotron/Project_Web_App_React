import React from 'react';
import '../css/Home.css';
import Cookies from 'universal-cookie';
import NavBar from '../components/NavBar';
import AlbumLoader from '../components/AlbumLoader';
import { useState } from 'react';
import axios from 'axios';

const cookies = new Cookies();
const Home = () => {
 // const [album, setAlbum] = useState(''); 
  const [albums, setAlbums] = useState('');
  const userId = cookies.get('id');
  const username = cookies.get('username');
  const albumsUrl = 'https://jsonplaceholder.typicode.com/albums?userId=' + userId;
 // const photosUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=';

  const findAlbums = async () => {
    await axios.get(albumsUrl)
      .then(res => {
        setAlbums(res.data);
      })
      .catch(err => {
        console.log(err);
      })

  }
/*
  const findAlbum = async (id) => {
    await axios.get(photosUrl+id)
      .then(res => {
        setAlbum(res.data);
        console.log(album);
      })
      .catch(err => {
        console.log(err);
      })
  }
*/

  return (
    <div className='Home'>
      <NavBar name={username} id={userId} />
      <h2>Albums de {username}</h2>
      <br />
      <input type="button" value={'Albums'} onClick={() => { findAlbums() }} />
      <AlbumLoader albums={albums}/>
    </div>
  )
}
//      <AlbumLoader albums={albums} findAlbum={findAlbum}/>
export default Home