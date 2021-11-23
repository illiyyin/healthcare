
import React from 'react'

const Navbar = () => {
    return (
        
            <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-8 navbar-expand-lg bg-transparent">
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
      <a className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 blackspace-nowrap uppercase text-black" href="#">Healthcare</a><button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" >
        <i className="text-black fas fa-bars"></i>
      </button>
    </div>
    <div className="lg:flex flex-grow items-center bg-black lg:bg-opacity-0 lg:shadow-none hidden bg-blueGray-800" id="example-collapse-navbar">
      <ul className="flex flex-col lg:flex-row list-none mr-auto">
        <li className="flex items-center">
          <a className="text-gray-700 lg:hover:text-blueGray-200  px-3 py-4 lg:py-2 flex items-center text-base uppercase font-bold" href="#"><i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"></i>
            About</a>
        </li>

        <li className="flex items-center">
          <a className="text-gray-700 lg:hover:text-blueGray-200  px-3 py-4 lg:py-2 flex items-center text-base uppercase font-bold" href="#"><i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"></i>
            Services</a>
        </li>
        <li className="flex items-center">
          <a className="text-gray-700 lg:hover:text-blueGray-200  px-3 py-4 lg:py-2 flex items-center text-base uppercase font-bold" href="#"><i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"></i>
            Doctors</a>
        </li>
        <li className="flex items-center">
          <a className="text-gray-700 lg:hover:text-blueGray-200  px-3 py-4 lg:py-2 flex items-center text-base uppercase font-bold" href="#"><i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"></i>
            Blog</a>
        </li>
        <li className="flex items-center">
          <a className="text-gray-700 lg:hover:text-blueGray-200  px-3 py-4 lg:py-2 flex items-center text-base uppercase font-bold" href="#"><i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"></i>
            Contact</a>
        </li>
      </ul>
      <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
        
        
        <li className="flex items-center">
          {/* <a className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" href="#" > */}
          <a href="" className="bg-yellow-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-yellow-600 mr-6">
          Appointment
            </a>
            {/* <i className="fas fa-arrow-alt-circle-down"></i>  */}
          {/* </a> */}
        </li>
      </ul>
    </div>
  </div>
</nav>
            
       
    )
}

export default Navbar

{/* <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"> */}
{/* <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"> */}



