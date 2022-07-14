import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import NavBar from '../components/NavBar';
import PhotoLoader from '../components/PhotoLoader';
import PhotoModal from '../components/PhotoModal';
import '../css/Album.css';

const Album = () => {
  const cookies = new Cookies();
  const [photos, setPhotos] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [openModal, setOpenModal] = useState(false);
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

  function openPhotoModal(photoUrl){
    setPhotoUrl(photoUrl);
    setOpenModal(true);
    console.log('it should open');
    console.log(photoUrl);
  }

  function searchPhoto(e) {
    for (let i = 0; i < photos.length; i++) {
      if (photos[i].title === e.target.value) {
        setPhotoUrl(photos[i].url);
        setOpenModal(true);
        console.log(photoUrl);
        break;
      }
    }
  }

  useEffect(() => {
    findPhotos();
  }, [])


  return (
    <div className='Album'>
      <NavBar name={username} id={userId} />
      <h2>Album: {albumTitle}</h2>
      <input type="text" className='searchBar' placeholder="Buscar Foto" onChange={searchPhoto} onPaste={searchPhoto} />
      <hr />
      {openModal && <PhotoModal photoUrl={photoUrl}/>}
      <PhotoLoader photos={photos} openPhotoModal={openPhotoModal} />
    </div>
  )
}

export default Album