import React from 'react'
//icons
import { IoShareSocialSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const ProfileName = ({toggle}) => {
  return (
    <div className='col-8'>
        <h1 className='display-1 clickable'>Émanuel Rollin</h1>

        <div
        className='color2 row rounded-bottom border-top'
        style={{
            fontFamily: "JetBrains",
            textAlign:"left",
            overflow: "hidden",
            transition: "height ease 0.5s",
            height: toggle ? "100px" : "0px"
        }}
        >
            <div className='col-6'>
                3rd Year BSc Computer Science <br/>
                Bsc Microbiology & Immunology 
                <br/><br/>
                Montreal, QC

            </div>
            <div className='col-6'>
                <a href="https://github.com/LipoBruh" target="_blank" rel="noopener noreferrer" style={{color:"#FFFFFF","textDecoration": "none"}}> <FaGithub /> Github</a> <br/>
                <a href="https://www.thingiverse.com/lipo_bruh" target="_blank" rel="noopener noreferrer" style={{color:"#FFFFFF","textDecoration": "none"}}> <IoShareSocialSharp /> Thignyverse</a> <br/>
                <br/>
                <a href="emanuel.rollin@umontreal.ca" target="_blank" rel="noopener noreferrer" style={{color:"#FFFFFF","textDecoration": "none"}}> <MdEmail /> Email</a> <br/>
            </div>


        </div>
        
    </div>
  )
}
