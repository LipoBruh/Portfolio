import React, { useState,useEffect } from 'react';


export const CategoryPicker = ({ setCategory }) => {

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

    useEffect(() => {
        handleCategoryClick("3D Modeling")
      }, []); 

  const [toggledCategory, setToggledCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setCategory(category);
    setToggledCategory(category);
  };


  const categories = [
    "3D Modeling",
    "3D Printing",
    "Adobe",
    "Web Development",
    "Python",
    "Microbiology"
  ];

  return (
    <div className='col color1'>

      <div className='row'>
        {categories.map((category) => (

          <Category
            key={category}
            category={category}
            isToggled={toggledCategory === category}
            onClick={() => handleCategoryClick(category)}
          />


        ))}
      </div>
    </div>
  );
};




const Category = ({ category, isToggled, onClick }) => {

  //responsive font resizer
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

  //will add an event listener on first render
  useEffect(() => {
    const handleResize = () => {setIsWideScreen(window.innerWidth > 1000);};
    window.addEventListener('resize', handleResize); //will update the hook upon trigger
    //
    return () => {window.removeEventListener('resize', handleResize);};
  }, []);

  return (
    <div
      className={`col-2 clickable ${isToggled ? "border-bottom" : ""}`}
      onClick={onClick}
    >
      <div className='row align-items-center'>
        <div className='col' style={{fontFamily: "JetBrains", "fontSize":`${isWideScreen ? "1.1rem" : "0.8rem"}`,overflowWrap: "break-word"}}>{category}</div>
      </div>
    </div>
  );
};
