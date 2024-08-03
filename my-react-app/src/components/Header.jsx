import React, { useState } from 'react';
import { ProfilePicture } from './ProfilePicture'
import { ProfileName } from './ProfileName'

export const Header = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };


  return (
    <div className='row align-items-center bg-primary p-1' onClick={handleClick}>
        <ProfilePicture toggle={clicked}/>
        <ProfileName  toggle={clicked}/>
    </div>
  )
}
