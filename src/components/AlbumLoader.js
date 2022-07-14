import React from 'react';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

const cookies = new Cookies();

const AlbumLoader = (props, navigate) => {

    const setAlbum = (id) => {
        cookies.set('albumId', id, {path: "/"});
        navigate('/album');

    }

    return (
      <div>
        {props.albums && props.albums.map((album) => {
          return (
            <div key={album.id} className='user-album' onClick={ ()=>setAlbum(album.id) }>
             <h3> <Link to={'/album'}>{album.title}</Link></h3>
            </div>
          )

        })}
      </div>
    )
  }

export default AlbumLoader