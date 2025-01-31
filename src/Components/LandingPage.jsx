import React from 'react'

const LandingPage = () => {
  console.log("Landing Page Rendered")
  return (
    <div className='h-screen w-full gap-52 flex flex-col justify-center items-center'>
    <div className="logo mt-32">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s" alt=""height="100px" width="100px"/>
    </div>
    <div className="text flex items-center flex-col">
    <p className='text-slate-400 text-xl'>From</p>
    <p className='text-sky-500 text-2xl'>&Meta</p>
    </div>
    </div>
  )
}

export default LandingPage
