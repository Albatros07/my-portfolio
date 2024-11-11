import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects 
      </h1>
     
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
        {/* projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assets/resumebuilder.webp')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Downlaodable resume builder
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              resume builder
            </h1>
            <p className="leading-relaxed line-clamp-2">
              A Typescript-based downlaodable resumr built with HTML and CSS, allowing user to showcase their skills dynamically. 
            </p>
            <Link target='blank' href={"https://milestone-resume-builder-rc6v.vercel.app/"}>
            <p className="leading-relaxed  text-blue-500 hover:underline"> view project</p>
            </Link>
          </div>
        </div>
      </div>
        {/* projects */}
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assets/resume.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
             static resume builder 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              resume
            </h1>
            <p className="leading-relaxed line-clamp-2">
              A Typescript-based static resume built with HTML and CSS, allowing user to showcase their skills dynamically. 
            </p>
            <Link target='blank' href={"https://hackathon-milestones-ashen.vercel.app/"}>
            <p className="leading-relaxed  text-blue-500 hover:underline"> view project</p>
            </Link>
          </div>
        </div>
      </div>
        {/* projects */}
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assets/figma taplate.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
             figma tamplate 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              tamplate
            </h1>
            <p className="leading-relaxed line-clamp-2">
              A figma tamplate selling on internet like a pro,with HTML,Tailwind CSS, NextJS, 
            </p>
            <Link target='blank' href={"https://github.com/Albatros07/Ass-2-Figma-Template"}>
            <p className="leading-relaxed  text-blue-500 hover:underline"> view project</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
