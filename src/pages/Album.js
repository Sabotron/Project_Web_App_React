import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import NavBar from '../components/NavBar';
import PhotoLoader from '../components/PhotoLoader';
import '../css/Album.css';

const cookies = new Cookies();
const Album = () => {
 const [photos, setPhotos] = useState('');
  const userId = cookies.get('id');
  const username = cookies.get('username');
  const albumId = cookies.get('albumId');
  const albumTitle = cookies.get('albumTitle');
  const photosUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=' + albumId;

  const findPhotos = async () => {
    await axios.get(photosUrl)
      .then(res => {
        setPhotos(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    findPhotos();
  }, [])

  return (
    <div className='Album'>
      <NavBar name={username} id={userId} />
      <h2>Album: {albumTitle}</h2>
      <input type="text" className='searchBar' placeholder="Buscar Album"/>
      <br />
      <PhotoLoader photos={photos} />
    </div>
  )
}

export default Album