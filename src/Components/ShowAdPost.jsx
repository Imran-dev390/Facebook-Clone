import React from 'react'
import ShowCreateStory from './ShowCreateStory'
const ShowAdPost = (props) => {
  console.log("ShowAdPost Component Rendered")
  return (
    <div>
      <ShowCreateStory  showAddedPost={props.showAddedPost} 
   Change={props.changepost}  postText={props.post} heading={props.heading}   
     
     />
    </div>
  )
}

export default ShowAdPost
