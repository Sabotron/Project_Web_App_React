import React from 'react'

const AlbumLoader = (props, findAlbum) => {
    return (
      <div>
        {props.albums && props.albums.map((album) => {
          return (
            <div key={album.id} className='user-album' >
              <h3 onDoubleClick={()=>findAlbum(album.id)}>{album.title}</h3>
              <p type='hiden' name={album.id}></p>
            </div>
          )

        })}
      </div>
    )
  }

export default AlbumLoader