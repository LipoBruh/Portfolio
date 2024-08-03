import React, {useState} from 'react'
import { Carousel } from './Carousel'
import { CategoryPicker } from './CategoryPicker'

export const Body = () => {

    const [category, setCategory] = useState("")

    const carouselItems = [
        {
          src: "image1.jpg",
          alt: "First slide",
          captionTitle: "Slide 1",
          captionText: "Description for slide 1."
        }
    ]


    const carouselPicker = () => {
        switch (category) {
          case '3D Modeling':
            return <h1>Welcome to the Home Page</h1>;
          case 'about':
            return <h1>About Us</h1>;
          case 'contact':
            return <h1>Contact Us</h1>;
          default:
            return <h1>Page Not Found</h1>;
        }
      };



  return (
    <div
    className='row bg-secondary'
    >

        <CategoryPicker setCategory={setCategory}/>

        <div> {carouselPicker()} </div>


    </div>
  )
}
