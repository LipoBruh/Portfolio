import React, { useState,useEffect } from 'react';


export const CategoryPicker = ({ setCategory }) => {

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
    <div className='col my-4 bg-primary'>

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
  return (
    <div
      className={`col-2 bg-danger ${isToggled ? "border-bottom" : ""}`}
      onClick={onClick}
    >
      <div className='row bg-primary align-items-center'>
        <div className='col'>{category}</div>
      </div>
    </div>
  );
};
