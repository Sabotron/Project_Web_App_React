import React from 'react'
import { Link } from 'react-router-dom'

const PhotoLoader = (props) => {

    return (
        <div className='photos'>
            {props.photos && props.photos.map((photo) => {
                return (
                    <div key={photo.id} className='album-photo' >
                        <img className='mini-img' src={photo.thumbnailUrl} alt="img" />
                        <div className='photo-info'>
                            <h3 >{photo.title}</h3>
                            <p type='hidden' name={photo.url}></p>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}

export default PhotoLoader

