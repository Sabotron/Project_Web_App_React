import React from 'react';
import '../css/PhotoModal.css';

const PhotoModal = (props) => {
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='modalTitle'>
                    <input type="button" className='close-btn' value={'X'} onClick={() => props.setOpenModal(false)} />
                </div>
                <div className='modalBody'><img src={props.photoUrl} alt="img" /></div>
                <div className='modalFooter'></div>
            </div>
        </div>
    )

}

export default PhotoModal

