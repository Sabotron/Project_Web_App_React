import React from 'react'


const PhotoModal = (props) => {
    console.log('from PhotoModal here is the url:'+ props.photoUrl  );
        return (
            <div className='modalBackground'>
                <div className='modalContainer'>
                    <input type="button" value={'X'} />
                    <div className='modalTitle'></div>
                    <div className='modalBody'><img src={props.photoUrl} alt="img" /></div>
                    <div className='modalFooter'></div>

                </div>
            </div>
        )

}

export default PhotoModal

