import React from 'react'

export const ProfileName = ({toggle}) => {
  return (
    <div className='col-8'>
        <h1 className='display-1'>Émanuel Rollin</h1>

        <div
        className='bg-secondary row rounded-bottom border-top'
        style={toggle?
            {height:"100px",overflow:"hidden",transition:"height ease 0.5s"}:
            {height:"0px", overflow:"hidden",transition:"height ease 0.5s"}
        }
        >
            <div className='col-6'>
                aaa
            </div>
            <div className='col-6'>
                bbb
            </div>


        </div>
        
    </div>
  )
}
