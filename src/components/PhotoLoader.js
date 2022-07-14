import React from 'react'
const PhotoLoader = ({photos,openPhotoModal}) => {

    return (
        <div className='photos'>
            {photos && photos.map((photo) => {
                return (
                    <div key={photo.id} className='album-photo' onClick={()=>openPhotoModal(photo.url)}>
                        <img className='mini-img' src={photo.thumbnailUrl} alt="img" />
                        <div className='photo-info'>
                            <h3 >{photo.title}</h3>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}

export default PhotoLoader

