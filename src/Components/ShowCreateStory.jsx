import React, { useState } from 'react'

const ShowCreateStory = (props) => {
  console.log("CreateStory Components Rendered")
  return (
    <div className='bg-white mt-10  h-fit w-fit px-10 py-5 text-black flex gap-2 flex-col'>
      <h1 className='text-xl font-semibold'>{props.heading}</h1>
      <textarea name="" id="" className='outline-none ' placeholder='write something here' cols={30} rows={10} 
      value={props.postText} onChange={props.Change}>
      </textarea>
      <button onClick={props.showAddedPost} className='px-5 py-2 rounded-md bg-black text-white'>Post Now</button>
    </div>
  )
}

export default ShowCreateStory
