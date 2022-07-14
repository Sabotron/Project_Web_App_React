import React from 'react';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

const cookies = new Cookies();

const AlbumLoader = (props) => {

    const setAlbum = (id, title) => {
        cookies.set('albumId', id, { path: "/" });
        cookies.set('albumTitle', title, { path: "/" })
    }

    return (
        <div className='albums'>
            {props.albums && props.albums.map((album) => {
                return (
                    <div key={album.id} className='user-album' onClick={() => setAlbum(album.id, album.title)}>
                        <div className='container'> <Link to={'/album'} className='album-info'>
                            <h3> {album.title}</h3></Link>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}

export default AlbumLoader