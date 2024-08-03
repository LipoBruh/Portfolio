import React, {useState} from 'react'
import { Carousel } from './Carousel'
import { CategoryPicker } from './CategoryPicker'

export const Body = () => {


    const carouselEntries = [
        {
          src: 'https://via.placeholder.com/800x400?text=Slide+1',
          title: 'Slide 1',
          description: 'Description for slide 1.'
        },
        {
          src: 'https://via.placeholder.com/800x400?text=Slide+2',
          title: 'Slide 2',
          description: 'Description for slide 2.'
        },
        {
          src: 'https://via.placeholder.com/800x400?text=Slide+3',
          title: 'Slide 3',
          description: 'Description for slide 3.'
        }
      ];
    


    const [category, setCategory] = useState("")

    const carouselPicker = () => {
        switch (category) {

          case '3D Modeling':
            return <Carousel entries={carouselEntries} />

          case '3D Printing':
            return <Carousel entries={carouselEntries} />

          case 'Adobe':
            return <Carousel entries={carouselEntries} />

          case 'Web Development':
            return <Carousel entries={carouselEntries} />

          case 'Python':
             return <Carousel entries={carouselEntries} />

          case 'Microbiology':
            return <Carousel entries={carouselEntries} />

          default:
            return <h1>Page Not Found</h1>;
        }
      };






  return (
    <div    className='row bg-secondary'   >

        <CategoryPicker setCategory={setCategory}/>

        <div> {carouselPicker()} </div>


    </div>
  )
}
