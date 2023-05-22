// import React from 'react'
// import Nav from './Nav';
import Group2 from './Assest/Group2.jpg'
import "./List.css"

// const data = [{
//   id: "1",
//   image: Group2,
//   title: "Numeric.work",
// }, {
//   id: "2",
//   image: Group2,
//   title: "Revolution Travel CRM"
// },
// {
//   id: "3",
//   image: Group2,
//   title: "Revolution Travel CRM"
// },
// {
//   id: "4",
//   image: Group2,
//   title: "Revolution Travel CRM"
// },

// ]
// const Bi = () => {
//   return (
   
//     <div className="bg-black w-full h-[1230px]">
//       <Nav />
//       <div className='flex justify-between items-center flex-col lg:flex-row bg-black'>
//         <div >
//         <span className='text-5xl mt-5 ml-32 inline-block text-white'>Our work portfolio</span>
//         <p className='max-w-md ml-32 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit Impedit corrupti numquam explicabo exercitationem est Adipisci similique aperiam rem delectus</p>
//         </div>
//         <div className='md:flex justify-end mr-16'>
//           <button className="md:flex' h-[60px] rounded-2xl md:items-center justify-end from-inherit bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-12 text-white">
//             Contact Us!
//           </button>
//         </div>

//       </div>
//       <div className="md:flex flex-wrap bg-black ml-28">
//       {data.map((item, i) => {
//         return (
//           <div className="md:flex m-3 max-w-full">
//         <div className="max-w-full rounded overflow-hidden shadow-lg" key={i}>
//           <img className="w-96 h-80 mb-4 rounded-xl" src={item.image} alt="Sunset in the mountains" />
//           <div>
//             <p className='text-white mb-4'> {item.title}</p>
//           </div>
//           </div>
//         </div>
//         )
//       })}

//     </div>
//     <div  className='mt-8 bg-black'>
//       <span className='text-white text-6xl ml-28 mb-4 mt-16 font-semibold'>GET STARTED WITHIN 2 BUSINESS</span>
//       <div >
//         <p className='max-w-md ml-32 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit Impedit corrupti numquam explicabo exercitationem est Adipisci similique aperiam rem delectus</p>
//         </div>
//         <div className='md:flex justify-end mr-16'>
//           <button className="md:flex' h-[60px] rounded-2xl  md:items-center justify-end from-inherit bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-12 text-white">
//             Contact Us!
//           </button>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Bi;
// import React, { useState } from 'react'
// import { Carousel, IconButton } from "@material-tailwind/react";
// import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

// const data = [
//   {
//   id:"1",
//   image:Group2
// },
// {
//   id:"2",
//   image:Group2
// }
// ]

// import React from 'react'

// const data = [
//     {
//     id:"1",
//     image:Group2
//   },
//   {
//     id:"2",
//     image:Group2
//   }, {
//     id:"3",
//     image:Group2
//   }, {
//     id:"4",
//     image:Group2
//   },
//   ]
// const Bi = () => {
//   const [currentSlide,setCurrentSlide] = useState(0)
//   return (
//     <div>
//       <div style={{padding:"60px",backgroundColor:"black",display:"flex",flexWrap:"wrap"}}>
//       {
//         data.map((item,i)=>{
//           return(
//           <>
//           {/* <div style={{padding:"60px",backgroundColor:"black"}}></div> */}
//           <img style={{width:"90px",margin:"23px"}}src={item.image} alt="" />
          
//           </>
//         )})
//       }
//       </div>
     
//     </div>
//   )
// }

// export default Bi

// import React, { useState } from 'react'

// const Bi = () => {
//   const [showImage, setShowImage] = useState(false)

//   const onHandleClick=()=>{
//     setShowImage(!showImage)
//   }
//   return (
//     <div>
//       <button onClick={onHandleClick}>toggle</button>
//       {
//         showImage && (
//           <>
//           <img src={Group2} alt="" />
//           {/* <img src={Group2} alt="" />
//           <img src={Group2} alt="" /> */}
//           </>
//         )
//       }
//     </div>
//   )
// }

// export default Bi

// import React, { useState } from 'react';

// const ImageComponent = () => {
//   const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleClick = () => {
//     // Update the current image index based on the array length
//     console.log("clicked")
//     setCurrentImageIndex((currentImageIndex + 1) % images.length);
//   };

//   return (
//     <div>
//       <img src={images[currentImageIndex]} alt="" />
//       <button onClick={handleClick}>Change Image</button>
//     </div>
//   );
// };

// export default ImageComponent;
// import React, { useState } from 'react'

// const Bi = () => {
//   const [theme, setTheme] = useState("light")

//   const handleClick=()=>{
//    theme === "light"? setTheme("dark") : setTheme("light")
//     alert("hi")
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>toggle2</button>
//     </div>
//   )
// }

// export default Bi
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(prevMode => !prevMode);


//   };
//   return (
//     <div className={isDarkMode ? 'app dark' : 'app light'}>
//       <h1>Toggle Dark/Light Mode</h1>
//       <button onClick={toggleTheme}>
//         {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//       </button>
//       <p>This is some content in the app.</p>
//     </div>
//   );
// }
// export default App;
// import React, { useState } from 'react'

// const Bi = () => {
//   const [theme, setTheme] = useState("light")

//   const onToggle =()=>{
//     theme === "light" ? setTheme("dark") : setTheme("light")
//   }
//   return (
//     <div className={theme}>
//        <button onClick={onToggle}>toggle</button>
//     </div>
//   )
// }

// export default Bi
import React, { useRef, useState } from 'react';

// const DatePicker = () => {
//   const [date, setDate] = useState('');
//   const dateInputRef = useRef(null);

//   const handleChange = (e) => {
//     setDate(e.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="date"
//         onChange={handleChange}
//         ref={dateInputRef}
//       />
//       <p>Selected Date: {date}</p>
//     </div>
//   );
// };

// export default DatePicker;
// import React from 'react'

const Bi = () => {
  return (
    <div>
      
    </div>
  )
}

export default Bi














