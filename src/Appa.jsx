import React, { useEffect, useState } from 'react';
import { Login } from './Components/Login';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import { ToastContainer, toast } from 'react-toastify';
import MainLandingPage2 from './Components/MainLandingPage2';
import ProfileSection from './Components/ProfileSection';  // Profile page component
import gsap from 'gsap';
//import gsap from 'gsap/dist/gsap';

const Appa = () => {
  const [showMain, setShowMain] = useState(false);
  const [Homeistrue, setHomeistrue] = useState(false);
  const [landingistrue, setLandingistrue] = useState(false);
  const [showProfile, setShowProfile] = useState(false);  // New state to toggle profile view
  const [isLoggedin, setisLoggedin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
     setHomeistrue(true);
      setLandingistrue(false);
      setShowMain(true);
    }, 5000);
   // setLandingistrue(true);
   // setShowMain(true);

    return () => clearTimeout(timer);
  }, []);
  const [Notication,setNotication] = useState("");
  const notify = () => toast(Notication)

const[toastify,settoastify] = useState(false);
  const handleProfileClick = () => {
    setShowProfile(true); // Set showProfile to true when the sidebar image is clicked
    setShowMain(false);    // Hide the main landing page when profile is shown
  };

  // Profile section
  const [profileImage, setProfileImage] = useState(
      "https://scontent.fkhi4-4.fna.fbcdn.net/v/t39.30808-1/466947208_122096868680629118_2119366977800609091_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGPCUhk3hLyFfQ_pgNBl7j0U2k7tLnXt7ZTaTu0ude3tgZN6AEl4atQGaCWWEsf0UO-ov8r5tNsw7ZHNpGIdEKu&_nc_ohc=u72HmgX23ScQ7kNvgHV2ISB&_nc_oc=AdhnpkEokbm1EXgRM7_46Cn9XaxGhG4PsKQzKpnLdnl023sT6cjhAxd3HNoJG8p2VeY&_nc_zt=24&_nc_ht=scontent.fkhi4-4.fna&_nc_gid=AKbpDHxQetWGtwTuXktcYB5&oh=00_AYCksDHWfsShUw157ZoK4tjG-bG98RK7D2bH-HKjcRrZCQ&oe=6789AE1C"
    );
    const[coverPhoto,setCoverphoto] = useState(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdKkn0m7xoViIyjgRCIOanuWc0j9ulV1cb1g&s"
    )
  const handleImageChange2 = (event) => {
    setNotication("SuccsessFully Updated Cover Photo")
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverphoto(reader.result);
        notify()
        settoastify(true);   // Set the image URL as the profile image
      };
      reader.readAsDataURL(file);
      //alert("Profile Photo Updated")  // Read the selected file as a data URL
    }
    //let classNameButtonPRofile = " className='px-3 py-2 overflow-hidden font-semibold font-sans bg-white text-black absolute rounded-md cursor-pointer translate-x-[130px] translate-y-[130px]  left-1/2 top-1/2' " ;
  }
  const handleImageChange = (event) => {
    setNotication("SuccsessFully Updated Profile Photo")
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        notify();
        settoastify(true);   // Set the image URL as the profile image
      };
      reader.readAsDataURL(file);
     // alert("Profile Photo Updated")  // Read the selected file as a data URL
    }
  };
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const username = "Harry";
  const userpassword = "44321";
  const changeText = (e) => {
      setName(e.target.value)
};
const changePassword = (e) => {
      setPassword(e.target.value);
};
const handleLogin = () => {
  if(name === username && password === userpassword){
  setisLoggedin(true);
  setLandingistrue(true);
  toast.success("SuccessFully Logged In To The Account!")
   // Triggered when the user logs in
   // here we will test the problem//
   const timer = setTimeout(() => {
    setHomeistrue(true);
     setLandingistrue(false);
     setShowMain(true);
   }, 5000);
} else{
    if(name!==username){
      toast.error("Wrong Username!")
    } if(password !==userpassword){
      toast.error("Wrong UserPassword!")
    }
}
}
  return (
    <>
      {!isLoggedin ? (
        <Login onLogin={handleLogin} changeText={changeText} changePassword={changePassword} password={password} name={name}/> // Show login page if not logged in
      ) : (
        <>
          {landingistrue && <LandingPage />}
          {Homeistrue && <Home />}
          {showMain && <MainLandingPage2 username={name} renderProfile={handleProfileClick} />}
          {showProfile && <ProfileSection username="Imran Khan" update={handleImageChange} updatecover={handleImageChange2}profileImage={profileImage} coverPhoto={coverPhoto}/>}  {/* Render the ProfileSection when showProfile is true */}
        </>
      )}
      <ToastContainer/>
    </>
  );
};

export default Appa;
