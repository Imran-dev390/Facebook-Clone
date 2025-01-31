import CenterHome from './CenterHome';
import React,{useState} from 'react';
import RightSide from './RightSide';
import ShowCreateStory from './ShowCreateStory';
import ShowAdPost from './ShowAdPost';
const MainLandingPage2 = (props) => {
    console.log("LeftSide Page Component Rendered")
    const [Seemore, setSeemore] = useState("See More");
    const [isVisible, setIsVisible] = useState(false);
     const [likes,setlikes] = useState(383);
     const [Comment,setComment] = useState();
     const [shares,setshares] = useState();
    const showMore = (e) => {
        e.preventDefault();
        setIsVisible(prevState => !prevState); // Toggle visibility
        setSeemore(prevState => (prevState === "See More" ? "See Less" : "See More")); // Toggle button text
    }
    const [showstory,setshowstory] = useState(false);
    const [showCenter,setShowcenter] = useState(true);
    const [ShowAdistrue,setShowAdistrue] = useState(false);
    const [heading,setheading] = useState("Create a Post")
    const handleStory = ()=>{
        setShowcenter(false);
        setshowstory(true);
    }
        const [post, setpost] = useState("");
        const changepost = (e)=>{
            setpost(e.target.value);
        }
    const showNewPost = (e)=>{
        setshowstory(false);
        setheading("New Post Buy Clothes")
        setShowAdistrue(true);
    }
    const setcount = (e)=>{
     //  e.preventDefault();
       setlikes(384)
       alert("working")
    }
    const addshares = ()=>{
        setshares(1);
    }
    const addcomment = ()=>{
        let n =prompt("Add Your Comment Here");
        alert(`Your Comment Added SuccessFully ${n}`);
        setComment(1);
    }

    return (
        <div data-scroll data-scroll-speed="-.7"   className='h-screen  w-full gap-28 flex bg-[#F2F4F7]'>
            <div className="sidebar  flex sticky top-0 h-auto   z-9  flex-col py-3 px-2 w-1/4 overflow-y-auto">
                <div className="image gap-3 flex items-center text-xl font-semibold font-sans">
                    <img onClick={props.renderProfile} className='rounded-full w-10 object-cover' 
                         src="https://scontent.fkhi4-4.fna.fbcdn.net/v/t39.30808-1/466947208_122096868680629118_2119366977800609091_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=fe756c&_nc_eui2=AeGPCUhk3hLyFfQ_pgNBl7j0U2k7tLnXt7ZTaTu0ude3tgZN6AEl4atQGaCWWEsf0UO-ov8r5tNsw7ZHNpGIdEKu&_nc_ohc=lU6xvvCu3xAQ7kNvgGjRgEq&_nc_oc=AdjOoYfCJk2YGMss9kdxGcUiTT3Tpt6jV4Izdw_5JfHqmUsUPjk2Gmk9VtPKlsIfvOs&_nc_zt=24&_nc_ht=scontent.fkhi4-4.fna&_nc_gid=Ar_UD3PxbKSNSv0z7Mb36d1&oh=00_AYC1KCmvsTPaLTx-wnLEMlXQIsydVgiEu1-zQhUn24g81w&oe=67885C9C" 
                         alt="" height={"50px"} width={"50px"} />
                    <a href="">{props.username}</a>
                </div>

                <div className="flex-col font-semibold text-xl text-left flex gap-4 ml-4">
                    {/* Menu items */}
                    <div className="flex items-center gap-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJaAZ0uEvWL06ZV7XE8Fp9ESJf2HRbAh_Mk9rb_qToxSXsMfTt3rQ-3zEs0f1eSw2IkI&usqp=CAU" alt="" height={"20px"} width={"30px"} />
                        <a href="">Friends</a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7kbLR76mMcyL2jwciqil9yo2xK1KxUIM1g&s" alt="" className='h-5 w-7' />
                        <a href="">Memories</a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo4APa7AR_Kp66o03ANueqh9fl8JlhxX_b3w&s" alt="" className='h-5 w-7'/>
                        <a href="">Saved</a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/11820/11820089.png" alt="" className='w-7 h-5'/>
                        <a href="">Groups</a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe73-p5ZOOLEdp_gRcnLHrPDnupXuP7lJdIg&s" alt="" className='w-7 h-5'/>
                        <a href="">Video</a>
                    </div>
                    <div className="flex items-center">
                        <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/05/facebookmarketplace2.jpg" alt="" className='w-9 h-9'/>
                        <a href="">Market place</a>
                    </div>
                    <div className="flex items-center gap-2">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/eECk3ceTaHJ.png?_nc_eui2=AeGyQZjbJMrcApLtJKhJjuioF-F-rSS5bMUX4X6tJLlsxdev5CGfPqB94lWSfhdpsvXzK7TWZewXmYB8uiuoaWal" alt="" className='w-9 h-7'/>
        <a href="">Feeds</a>
        </div>
        <div className="flex items-center">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4A2sOD2hy4h7bRPvNxWJw7JlPb23K_RdY8g&s" alt="" className='h-7 w-7'/>
        <a href="">Events</a>
        </div>
        <div className="flex items-center">
         <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yN/r/ATlxuj_J5ty.png?_nc_eui2=AeGDEHrGCRBjAujkCsucoJM7MI82ItSUC8QwjzYi1JQLxByezfTlJ4WzF-hzPy37-VWAvPo0ceyrbeOOPga5LmC8" alt="" className='w-7 h-7'/> 
        <a href="">Ads Manager</a>
        </div>
        <div className="flex items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSUZV6rEIBwRI2v3pdSFcfmQU1H_gx3jZmIg&s" alt="" className='w-7 h-7'/>
        <a href="">Fundraiser</a>
        </div>

                    {/* Additional content that will toggle visibility */}
                    {isVisible && (
                        <div className="flex flex-col gap-2 ">
                            <div className="flex gap-2 items-center">
                                <img src="https://w7.pngwing.com/pngs/183/934/png-transparent-gift-giphy-facebook-messenger-icon-gift-box-miscellaneous-blue-ink.png" alt="" className='w-7 h-7'/>
                                <a href="">Birthdays</a>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v4/y3/r/Jr0q8qKF2-Y.png?_nc_eui2=AeHmGR0xLR48iEvjzWKa6Irv_9Y0ODmmH63_1jQ4OaYfrYNffWk7fHDBzn4PshZGjMzHeqiW7tUIFzLPBL0-6mhS" alt="" className='w-7 h-7'/>
                                <a href="">Climate Science Center</a>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yJ/r/fGWbDwbx9W4.png?_nc_eui2=AeGCVVgkp-RcHpaKALGsObsiNoblHaYXmrY2huUdpheatudTnKlouBAK27iv8Zual_kAakDJ3TO3XcfjlC_0mRck" alt="" className='w-7 h-7'/>
                                <a href="">Gaming Video</a>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src="https://cdn4.iconfinder.com/data/icons/social-media-2285/1024/logo-512.png" alt="" className='w-7 h-7'/>
                                <a href="">Messenger</a>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Messenger_Kids_2021.svg/500px-Messenger_Kids_2021.svg.png" alt="" className='w-7 h-7'/>
                                <a href="">Messenger kid</a>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yv/r/GJ4EaivDaSj.png?_nc_eui2=AeGxpLHCic4ff3y6z3JxkNEI_Cuq91SY0xb8K6r3VJjTFgG47lSiv1ls4QrL69SFPs4SsTqcU3jp-CGQ1Pzf9Fmo" alt="" className='w-7 h-7'/>
                                <a href="">Order and Payments</a>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXi6xYfSBMZ4hKG50Isy4tb1rY_sIDokG-4g&s" alt="" className='w-7 h-7'/>
                                <a href="">Pages</a>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWkdJkjexXWDvHk2Va6maqPxsFvF4WksBeR98u0vHKDEayB663iSS8yqu8iEVKb_PX-CA&usqp=CAU" alt="" className='w-7 h-7'/>
                                <a href="">Play Game</a>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex gap-2 items-center">
                    <svg  viewBox="0 0 16 16" width="20" height="20" fillRule="currentColor" aria-hidden="true" className="xfx01vb cursor-pointer x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq">
                        <g fill-rule="evenodd" transform="translate(-448 -544)">
                            <path fill-rule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path>
                        </g>
                    </svg>
                    <a href="" className='text-lg font-semibold font-sans' onClick={showMore}>{Seemore}</a>
                </div>
                <p className=''>Privacy · Terms · Advertising · Ad Choices<br /> · Cookies · · Meta © 2025</p>
            </div>
      {showCenter  &&    <CenterHome title="Makkah Madinah" likes={likes} createStory={handleStory} shares={shares}  Comment={Comment} click={()=>setcount()} comment={()=>addcomment()} Shair={()=>addshares()}/> }
       {showstory && <ShowCreateStory  showAddedPost={showNewPost} Change={changepost}  postText={post} heading={heading}/>}
       {ShowAdistrue && <ShowAdPost/>}
        <RightSide/>
        </div>
    )
}

export default MainLandingPage2;