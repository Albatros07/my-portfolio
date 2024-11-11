import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
const footer = () => {
  return (
    <div className='bg-blue-50'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-600">

     <Image src={require("../../../public/assets/portfolio.png")} alt='portfolio' width={100} height={100} className='w-16'/>
      <span className="ml-3 text-pretty">Rehman's Portfolio</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 All rights reserved
    <div className='ml-1 text-pretty'>Author : Abdul Rehman     
    </div>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link 
      target="blank"
      href={'https://www.linkedin.com/in/abdul-rehman-83690925b/'} className="text-gray-500">
      <FaLinkedin  className='text-2xl hover:text-[#0059ff]'/>
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default footer
