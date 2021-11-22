
import React from 'react'

const Navbar = () => {
    return (
        
            <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-100">
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
      <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 blackspace-nowrap uppercase text-black" href="../../index.html">Healthcare</a><button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" >
        <i className="text-black fas fa-bars"></i>
      </button>
    </div>
    <div className="lg:flex flex-grow items-center bg-black lg:bg-opacity-0 lg:shadow-none hidden bg-blueGray-800" id="example-collapse-navbar">
      <ul className="flex flex-col lg:flex-row list-none mr-auto">
        <li className="flex items-center">
          <a className="lg:text-black lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus?ref=njs-register"><i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"></i>
            Docs</a>
        </li>
      </ul>
      <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
        <li className="inline-block relative">
          <a className="lg:text-black lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="#pablo" >
            Demo Pages
          </a>
          <div className="hidden bg-black text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="demo-pages-dropdown">
            <span className="text-sm pt-2 pb-0 px-4 font-bold block w-full blackspace-nowrap bg-transparent text-blueGray-400">
              Admin Layout
            </span>
            <a href="../admin/dashboard.html" className="text-sm py-2 px-4 font-normal block w-full blackspace-nowrap bg-transparent text-blueGray-700">
              Dashboard
            </a>
            <a href="../admin/settings.html" className="text-sm py-2 px-4 font-normal block w-full blackspace-nowrap bg-transparent text-blueGray-700">
              Settings
            </a>
            <a href="../admin/tables.html" className="text-sm py-2 px-4 font-normal block w-full blackspace-nowrap bg-transparent text-blueGray-700">
              Tables
            </a>
            <a href="../admin/maps.html" className="text-sm py-2 px-4 font-normal block w-full blackspace-nowrap bg-transparent text-blueGray-700">
              Maps
            </a>
            <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100"></div>
            <span className="text-sm pt-2 pb-0 px-4 font-bold block w-full blackspace-nowrap bg-transparent text-blueGray-400">
              Auth Layout
            </span>
            <a href="./login.html" className="text-sm py-2 px-4 font-normal block w-full blackspace-nowrap bg-transparent text-blueGray-700">
              Login
            </a>
            <a href="./register.html" className="text-sm py-2 px-4 font-normal block w-full blackspace-nowrap bg-transparent text-blueGray-700">
              Register
            </a>
            <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100"></div>
            <span className="text-sm pt-2 pb-0 px-4 font-bold block w-full blackspace-nowrap bg-transparent text-blueGray-400">
              No Layout
            </span>
            <a href="../landing.html" className="text-sm py-2 px-4 font-normal block w-full blackspace-nowrap bg-transparent text-blueGray-700">
              Landing
            </a>
            <a href="../profile.html" className="text-sm py-2 px-4 font-normal block w-full blackspace-nowrap bg-transparent text-blueGray-700">
              Profile
            </a>
          </div>
        </li>
        <li className="flex items-center">
          <a className="lg:text-black lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-js%2F" ><i className="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg"></i><span className="lg:hidden inline-block ml-2">Share</span></a>
        </li>
        <li className="flex items-center">
          <a className="lg:text-black lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-js%2F&amp;text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20JavaScript%20UI%20Kit%20and%20Admin.%20Let%20Notus%20JS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level." ><i className="lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg"></i><span className="lg:hidden inline-block ml-2">Tweet</span></a>
        </li>
        <li className="flex items-center">
          <a className="lg:text-black lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://github.com/creativetimofficial/notus-js?ref=njs-register" ><i className="lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg"></i><span className="lg:hidden inline-block ml-2">Star</span></a>
        </li>
        <li className="flex items-center">
          <a className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" href="https://www.creative-tim.com/product/notus-js?ref=njs-index" >
            <i className="fas fa-arrow-alt-circle-down"></i> Download
          </a>
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



