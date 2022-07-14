import React from 'react'
import '../css/Home.css';
import Cookies from 'universal-cookie';
import NavBar from '../components/NavBar';
import PhotoLoader from '../components/PhotoLoader';
//import AlbumLoader from '../components/AlbumLoader';
import { useState } from 'react';
import axios from 'axios';



const cookies = new Cookies();
const Album = () => {
  const [photo, setPhoto] = useState(''); 
  const [photos, setPhotos] = useState('');
  const userId = cookies.get('id');
  const username = cookies.get('username');
  const albumId = cookies.get('albumId');
  const photosUrl = 'https://jsonplaceholder.typicode.com/photos?albumId='+albumId;
  const photoUrl = 'https://jsonplaceholder.typicode.com/photos?photoId=';

  const findPhotos = async () => {
    await axios.get(photosUrl)
      .then(res => {
        setPhotos(res.data);
      })
      .catch(err => {
        console.log(err);
      })

  }
/*
  const findPhoto = async (id) => {
    await axios.get(photoUrl+id)
      .then(res => {
        setPhoto(res.data);
        console.log(photo);
      })
      .catch(err => {
        console.log(err);
      })
  }*/


  return (
    <div className='Album'>
      <NavBar name={username} id={userId} />
      <h2>Fotos de {username} | Album Id: {albumId}</h2>
      <br />
      <input type="button" value={'Ver Fotos'} onClick={() => { findPhotos() }} />
      <PhotoLoader photos={photos}/>
    </div>
  )


}

//       <PhotoLoader photos={photos} findPhoto={findPhoto}/>
export default Album