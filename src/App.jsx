import React, { useEffect, useState } from 'react'
import {Login} from './Components/Login';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import MainLandingPage2 from './Components/MainLandingPage2';
import CenterHome from './Components/CenterHome';
const App = () => {
  //const [username,Setusername] = useState("");
  const [showMain,setshowMain] = useState(false);
  const [Homeistrue, setHomeistrue] = useState(false);
  const [landingistrue,setlandingistrue] = useState(true);
 useEffect(() => {
  const timer = setTimeout(()=>{
    setHomeistrue(true);
    setlandingistrue(false);
    setshowMain(true);
   },5000)
// CleanUp the Timer when the Component unmounts
return()=> clearTimeout(timer);
},[])

  return (
    <>
  {/*<Login/> */}
 {landingistrue && <LandingPage/>}
  {Homeistrue && <Home/>}
  {showMain && <MainLandingPage2 username="Imran Khan" renderProfile={()=>showProfile()}/>}

    </>
  )
}

export default App
