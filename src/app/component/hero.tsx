import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
      <section className="text-gray-600 body-font bg-fixed  bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font  font-serif sm:text-4xl text-3xl mb-4 font-medium text-blue-600">
        I am 
        <br className="hidden lg:inline-block"/>
        Full Stack Developer
      </h1>
      <div className="w-[150px] h-[2px] bg-blue-700"></div>
      <p className="mb-8 leading-relaxed">
      Hello! I'm Abdul Rehman,im a full stack developer from pakistan,
       passionate about creating intuitive and dynamic user interfaces. Proficient in HTML, CSS, and JavaScript,
     I strive to deliver high-quality, responsive websites. I enjoy learning new technologies and improving my skills to provide exceptional user experiencesI am a dedicated frontend developer from Pakistan, passionate about creating intuitive and dynamic user interfaces. Proficient in HTML, CSS, and JavaScript, I strive to deliver high-quality, responsive websites. 
      I enjoy learning new technologies and improving my skills to provide exceptional user experiences
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[20rem]"
        alt="hero"
        width={500}
        height={500}
        src={require("../../../public/assets/banner_bg.jpeg")}
      />
    </div>
  </div>
</section>
  )
}

export default Hero
