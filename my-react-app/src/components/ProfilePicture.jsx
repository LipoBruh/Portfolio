import React from 'react'
import photo from '../assets/TEMP_PHOTO.png'


export const ProfilePicture = ({toggle}) => {



  return (
    <div className="col-4">
        <img  
        src={photo}
        alt="Photo Emanuel Rollin"
        style={ toggle?{"width":200,"height":200,"transition": "all 0.5s ease"}:{"width":150,"height":150, "transition": "all 0.5s ease"} }
        className='border border-light rounded-circle'
        />
    </div>
  )


}
