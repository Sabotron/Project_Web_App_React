import React from 'react'
import { Link } from 'react-router-dom'

const PhotoLoader = (props) => {

    return (
        <div>
            {props.photos && props.photos.map((photo) => {
                return (
                    <div key={photo.id} className='album-photo' >
                        <img className='mini-img' src={photo.thumbnailUrl} alt="img" />
                        <Link to={photo.url} ><h3 >{photo.title}</h3>
                        <p type='hiden' name={photo.url}></p> </Link>
                    </div>
                )

            })}
        </div>
    )
}




export default PhotoLoader

