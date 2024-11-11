import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCloudDownloadAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-blue-600 mb-4 md:mb-0">
      <Image src={require("../../../public/assets/portfolio.png")} alt='portfolio' width={100} height={100} className='w-16'/>

      <span className="ml-3 text-xl">My Portfolio</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-600">
      Home
      </Link>
      <Link href={"#About"} className="mr-5 hover:text-blue-600">
      About
      </Link>
      <Link href={"#Skill"} className="mr-5 hover:text-blue-600">
      Skill
      </Link>
      <Link href={"#project"} className="mr-5 hover:text-blue-600">
      projects
      </Link>
      <Link href={"#Contact"} className="mr-5 hover:text-blue-600">
      contact
      </Link>
    </nav>
     <a href="/assets/resume (2).pdf">
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
     Downlaod cv
     <FaCloudDownloadAlt className='text-xl ml-2' />
    </button>
     </a>
  </div>
</header>
    </div>
  )
}

export default Navbar
