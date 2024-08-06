import React, {useState} from 'react'
import { Carousel } from './Carousel'
import { CategoryPicker } from './CategoryPicker'
//images 3d modeling
import image11 from '../assets/3D_Modeling/blender.png'
import image12 from '../assets/3D_Modeling/room_model.png'
import image13 from '../assets/3D_Modeling/ramen_model.png'
import image14 from '../assets/3D_Modeling/sword_model.png'
import image15 from '../assets/3D_Modeling/trophee_model.png'
import image16 from '../assets/3D_Modeling/gun_model.png'
//3d printing
import image21 from '../assets/3D_Printing/print1.png'
import image22 from '../assets/3D_Printing/print2.png'
import image23 from '../assets/3D_Printing/print3.png'
import image24 from '../assets/3D_Printing/print4.png'
//images adobe
import image31 from '../assets/Adobe/photoshop1.png'
import image32 from '../assets/Adobe/photoshop2.png'
import image33 from '../assets/Adobe/photoshop3.png'
import image34 from '../assets/Adobe/photoshop4.png'
import image35 from '../assets/Adobe/photoshop5.png'
import image36 from '../assets/Adobe/lightroom1.png'
import image37 from '../assets/Adobe/illustrator1.png'
//Web dev
//import image41 from '../assets/Web_Devlopment/calque1.png'
//import image42 from '../assets/Web_Devlopment/calque2.png'
//Python
import image51 from '../assets/Python/bot1.png'
import image52 from '../assets/Python/bot2.png'
//Microbiology
import image61 from '../assets/Microbiology/microbiology1.jpg'
import image62 from '../assets/Microbiology/microbiology2.jpg'
import image63 from '../assets/Microbiology/microbiology3.jpg'
import image64 from '../assets/Microbiology/microbiology4.jpg'
import image65 from '../assets/Microbiology/microbiology5.png'
import { Description } from './Description'
//
//
//
export const Body = () => {


    const _3dmodeling = [
        {
          src: image11,
          title: 'Armatures',
          description: 'Designing models and rigging them for animation puposes.'
        },
        {
          src: image12,
          title: 'Bedroom',
          description: 'Stylized representation of my old bedroom.'
        },
        {
          src: image13,
          title: 'Ramen',
          description: 'For the hungry. An early attempt at realism.'
        },
        {
          src: image14,
          title: 'Master Sword',
          description: 'One of the many 3d models I have made that are designed for 3d printing.'
        },
        {
          src: image15,
          title: 'AÉDIROUM Trophy',
          description: 'Another print made for a card game tournament. Was used for two tournaments so far.'
        },
        {
          src: image16,
          title: 'Big Iron',
          description: 'One of my better attemps at realism.'
        }
      ];
    

      const _3dprinting = [
        {
          src: image21,
          title: 'Birthday Gift',
          description: ''
        },
        {
          src: image22,
          title: 'Video Game Creature',
          description: 'The big bad from the Diablo franchise'
        },
        {
          src: image23,
          title: 'Chess pieces',
          description: 'Another gift for the family :)'
        },
        {
          src: image24,
          title: 'Master Sword In Real Life',
          description: 'Final result once the model is printed and assembled.'
        }
      ];

    
      
      const adobe =[
        {
          src: image36,
          title: 'Lightroom',
          description: 'I do photography every now and then.'
        },
        {
          src: image35,
          title: 'Digital Art',
          description: 'One of the many drawings I have done on photoshop.'
        },
        {
          src: image37,
          title: 'Illustrator',
          description: 'Ideal for vectorial art when I need a more corporate art style.'
        },
        {
          src: image31,
          title: 'Poster for a student club',
          description: 'This one used a midjourney prompt to make the dragon.'
        },
        {
          src: image33,
          title: 'Poster for a student club',
          description: 'Pixel art is a relaxing activity.'
        },
        {
          src: image34,
          title: 'Poster for the student association',
          description: ''
        },
        {
          src: image32,
          title: 'Speed drawing',
          description: 'A few minutes of fun.'
        }
      ];
    
const webdevelopment = []

      const python =[
        {
          src: image51,
          title: 'Discord Bot',
          description: 'Discord bot I have made in Python for the student club.'
        },
        {
          src: image52,
          title: 'Discord Bot',
          description: 'The bot also welcomes the users and registers it into our database.'
        }]

   const microbiology =[
          {
            src: image61,
            title: 'Preparing samples for flux cytometry',
            description: 'Frozen samples need to be thawed and washed with nutritive medium.'
          },
          {
            src: image62,
            title: 'Staphylococcus Aureus Swabs',
            description: 'Quality control of breast milk donated to newborns.'
          },
          {
            src: image63,
            title: 'Histology',
            description: 'Pancreas alveolar gland seen in class.'
          },
          {
            src: image64,
            title: 'Working with cord blood',
            description: 'Marking stem cells with immunofluorescent markers.'
          },
          {
            src: image65,
            title: 'Stem cells growth on nutritive medium',
            description: 'Different populations of stem cells grow on this medium and are counted for quality control.'
          }]


    const [category, setCategory] = useState("")

    const carouselPicker = () => {
        switch (category) {

          case '3D Modeling':
            return <> <Carousel entries={_3dmodeling} /> <Description text={"I have been 3D modeling as a hobby for about 5 years. I use Blender for my all of my projects, it allows me to explore all of the branches of the field. Nowadays I design all of my 3d prints myself !"}/> </>

          case '3D Printing':
            return <> <Carousel entries={_3dprinting} /><Description text={"One of my favorite hobbies. Allows me to express a lot of creativity and it allows me to pretend to be an engineer. Pairs perfectly with 3d modeling."}/> </>

          case 'Adobe':
            return <> <Carousel entries={adobe} /><Description text={"I have used Adobe products since highschool. I usually use Photoshop, Illustrator and Lightroom the most. I've also done a lot of editing in Premiere as a teenager. "}/> </>

          case 'Web Development':
            return <> <Carousel entries={webdevelopment} /><Description text={"Over the summer, I have worked on multiple React projects. My biggest was a web application that implements the MERN stack with typescript. We implemented a REST API with express and mongodb to implement authentification routes and database communication.\nWe also implemented a interactive D3.js canvas that uses Redux to manage application states. "}/> </>

          case 'Python':
             return <> <Carousel entries={python} /><Description text={"Last year, I have experimented with the discord API to design a bot that enhances the user experience for the discord chatroom of our Dungeons & Dragon club. It serves two puproses : monitor new users, and query our database for specific data. It is a short and rudimentary python script that handles the logic and the connectivity."}/> </>

          case 'Microbiology':
            return <> <Carousel entries={microbiology} /><Description text={"I also graduated from as bachelor in microbiology. I was a lab technician for 2 years. I worked in a blood bank and participated in the quality control of the blood products. I also participated on research initiatives offered by the laboratory. "}/> </>

          default:
            return <h1>Page Not Found</h1>;
        }
      };






  return (
    <div    className='row color2' >

        <CategoryPicker setCategory={setCategory}/>

        <div> {carouselPicker()} </div>


    </div>
  )
}
