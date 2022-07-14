import React from 'react'

const PhotoLoader = (props) => {

    return (
        <div>
            {props.photos && props.photos.map((photo) => {
                return (
                    <div key={photo.id} className='album-photo' >
                        <img className='mini-img' src={photo.thumbnailUrl} alt="img" />
                        <h3 >{photo.title}</h3>
                        <p type='hiden' name={photo.url}></p>
                    </div>
                )

            })}
        </div>
    )
}




export default PhotoLoader

