import React from 'react'
const list =[
    {name:"Cases", link:"/Cases"},
    {name:"Services",link:"/Services"},
    {name:"Career",link:"/Career"},
    {name:"Contact",link:"/Contact"},
    {name:"Culture",link:"/Culture"},
]

const Nav = () => {
  return (
      <div>   
        <div className=" md:flex justify-between text-white py-4 md:px-10  ">
      <div className='text-white bg-black'>
        <span className="ml-32 mt-5 inline-block font-semibold">brain inventory</span>
      </div>
     <div>
      <ul className= 'bg-black md:flex md:items-center gap-8 mr-14' >
   
        {
            list.map((item,i)=>{
                return <li key={i} className="text-white ">
              <a href={item.link}>{item.name}</a>
               </li>
            })
        }
       
      </ul>
      </div>
    </div>

    </div>
  )
}

export default Nav
