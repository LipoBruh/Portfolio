import React, { useState, useEffect } from 'react';
//icons
import { IoMdClose } from "react-icons/io";
import { FaRegSquareFull } from "react-icons/fa6";
import { MdMinimize } from "react-icons/md";

export const Description = ({text}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isCursorVisible, setIsCursorVisible] = useState(true);
    const typingSpeed = 30; // speed of typing in milliseconds
    const cursorBlinkSpeed = 500; // speed of cursor blinking in milliseconds
    //
    //
    useEffect(() => {
        let typingTimeout;
        let cursorBlinkTimeout;
        
        const typeCharacter = (index) => {
          if(index==0){
            setDisplayedText((prev) => text[index]);
            typingTimeout = setTimeout(() => typeCharacter(index + 1), typingSpeed);
          }  
          else if (index < text.length) {
            setDisplayedText((prev) => prev + text[index]);
            typingTimeout = setTimeout(() => typeCharacter(index + 1), typingSpeed);
          }
        };
        typeCharacter(0);

        cursorBlinkTimeout = setInterval(() => {
          setIsCursorVisible((prev) => !prev);
        }, cursorBlinkSpeed);
    
        return () => {
          clearTimeout(typingTimeout);
          clearInterval(cursorBlinkTimeout);
        };
      }, [text]);


  return (
    <div className='color1  row py-4 px-4 text-start' style={{}}>

        <div className='col-3'></div>
        <div
            className='color2 rounded-bottom col-6'
            style={{
                fontFamily: "JetBrains",
                textAlign:"left",
                minHeight:"100px"
            }}>
                <div className='row border-bottom'><div style={{backgroundColor:"rgb(40,40,40)"}}><IoMdClose  style = {{height:"20px", display:"inline"}}/><FaRegSquareFull style = {{height:"10px", display:"inline"}}/><MdMinimize style = {{height:"20px", display:"inline",marginBottom:"3"}}/></div></div>

                {displayedText}{isCursorVisible && '_'}
        </div>
    </div>
  )
}
