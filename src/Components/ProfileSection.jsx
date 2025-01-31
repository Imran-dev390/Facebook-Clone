import React, { useState } from 'react'

const ProfileSection = (props) => {
  console.log("ProfileSection Page Rendered")
    //let classNameButtonPRofile = " className='px-3 py-2 overflow-hidden font-semibold font-sans bg-white text-black absolute rounded-md cursor-pointer translate-x-[130px] translate-y-[130px]  left-1/2 top-1/2' " ;
  return (
   <div className='h-screen  relative flex flex-col ml-32 items-center gap-4'>
      <div className="imagesBox relative w-4/5 h-fit oveflow-hidden rounded-2xl">
        <img src={props.profileImage} alt="" className='w-4/5 h-96 overflow-hidden rounded-xl' />
        <input type="file" accept='image/*' onChange={props.update} className=" className='px-3 py-2 overflow-hidden font-semibold font-sans bg-white text-black absolute rounded-md cursor-pointer translate-x-[130px] translate-y-[130px]  left-1/2 top-1/2"/>
      <div className="profile absolute top-1/2 translate-y-[80px] translate-x-[50px]">
        <img src={props.coverPhoto} alt="" className='w-52 h-60 rounded-full'/>
   <div className="absolute flex items-center cursor-pointer top-1/2 left-1/2 -translate-x-[210px]">
 <img  src='https://www.shareicon.net/data/512x512/2017/05/30/886519_camera_512x512.png'  alt=''className='w-9'/>
 <input type="file" accept='image/*' onChange={props.updatecover} /> 
    </div> 
    <div className="flex float-right gap-10 items-center ml-32">
        <h1 className='text-2xl font-semibold '> {props.username}</h1>
        <button className='bg-[#0861F2] px-10 text-white rounded-md py-2'>+ Add to story</button>
      <button className='bg-slate-400 text-black rounded-md px-5 py-2'>Edit Profile</button>
      <button className='bg-slate-400 text-black rounded-md px-5 py-2'>^</button>
      </div>
      </div>
      </div>
      <div className="flex flex-col px-1 w-fit  justify-start mt-40 border-slate-300 border-[1px]  gap-3">
     <h1 className='text-xl font-semibold font-sans'>People You May Know</h1>
     <div className="grid grid-cols-7 ml-2 items-center gap-3">
     <div className="profile1 flex  pb-2 flex-col items-center gap-1 bg-white  border-slate-300">
      <img src="https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-1/459957831_1258211222001477_1903722180063183730_n.jpg?stp=c0.0.720.720a_dst-jpg_s240x240_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE6JgTLOaWRuB09HGZfTPnZ8KTxtb9DPCrwpPG1v0M8Ku2_NccgjNBrfRUJVPH_cR4RQ50to-bHiyXzFxkw4QaU&_nc_ohc=LyZttaQTVnMQ7kNvgEowisH&_nc_oc=Adg7d0o0ydAt50zPQgonEwThGIPKQjztl3PnsfLQkrZ7oGCXvgw_jcqBrjH2X3LUads&_nc_zt=24&_nc_ht=scontent.fkhi4-3.fna&_nc_gid=Ay4ayOhqkr59e1CyPSBXAcH&oh=00_AYBYXkRWK6Z8rMmPPXdgBG3Gne-0OllOrS1WN5DbWeOfRg&oe=678A0452" alt="" className='w-40 object-cover rounded-xl'/>
      <h1>Haadi Baba</h1>
      <p>Followed By 3.7k</p>
      <div className='flex items-center gap-1'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Msm80-vY25Ecm4cOhOTAG1P21zKBax8-KA&s" alt="" className='w-4 rounded-xl'/>
      <button className='px-4 py-2 bg-[#DFE9F2]'>Add Friend</button>
      </div>
     </div>
     <div className="profile2 flex pb-2 flex-col items-center border-[1px]  border-slate-300 ">
     <img src="https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-1/470173093_122126982230560490_5706013756499472349_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEY93gDmAqxlrHuz1MWNifPjJ3q3LRFlWqMnerctEWVast-D8PVQU_BO8WQxTLVLTWJjdxEIDMUant2rwns9kxO&_nc_ohc=xHZFhLQSCo0Q7kNvgGUVRtu&_nc_oc=AdjF2yn4jNzR9ZJjSlAhwIi8k2t_qshBAYYCpNiZzCksDL-QjEtD9aa6GquBIliqX9A&_nc_zt=24&_nc_ht=scontent.fkhi4-3.fna&_nc_gid=Ay4ayOhqkr59e1CyPSBXAcH&oh=00_AYBzysX2c0zEHEjk6tVODb2PONrE51pY1AzoCUa7bJ9HPA&oe=678A15E4" alt="" className='w-40 object-cover rounded-xl'/>
      <h1>Amir Khosa</h1>
      <h2>Followed 45.5k</h2>
      <div className='flex items-center gap-1'>
        <img src="https://cdn-icons-png.flaticon.com/512/9324/9324103.png" alt="" className='w-4'/>
      <button className='px-4 py-2 bg-[#DFE9F2]'>Add Friend</button>
      </div>
     </div>
     <div className="profile3 flex pb-2 flex-col items-center border-[1px] border-slate-300 ">
     <img src="https://scontent.fkhi4-4.fna.fbcdn.net/v/t39.30808-1/469164371_122127898844495483_1699141268119534697_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=110&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGl5f6LmoFzqD20cqBMVz-U6-OAyQfjHATr44DJB-McBODpx_mf2wj4A5PKiKz_LQezTDF7f5B9skM1RJ9WtzRX&_nc_ohc=wbdV-9NUV8MQ7kNvgG4-7KK&_nc_oc=AdgkiSyfUmRaK4wK_Y_xBXirfIu-2E2Ap2NdbSyuz0hW8j39aSDHWa1fG1XwGaYp2Fc&_nc_zt=24&_nc_ht=scontent.fkhi4-4.fna&_nc_gid=Ay4ayOhqkr59e1CyPSBXAcH&oh=00_AYBv1tBkn3Cp5sUvDIFjblg8CbA9D9S6EEpQSJVUQnk-Xg&oe=678A1013" alt="" className='w-40 object-cover rounded-xl'/>
      <h1>M Amjad</h1>
      <h2>Followed 45.5k</h2>
      <div className='flex items-center  gap-1'>
        <img src="https://cdn-icons-png.flaticon.com/512/9324/9324103.png" alt="" className='w-4'/>
      <button className='px-4 py-2 bg-[#DFE9F2]'>Add Friend</button>
      </div>
     </div>
     <div className="profile4 flex pb-2 flex-col items-center border-[1px] border-slate-300 ">
     <img src="https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-1/434070946_285458427919378_510907318638400616_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGdDrKg_zpAm4GUAcBlzeJz-jr4ZeAKwtT6Ovhl4ArC1F1lesNBU4XMGguNuFi-tOQr2NMxBtQw3Tux5pQ2lfaQ&_nc_ohc=5aQMDzlRhJEQ7kNvgECmcmd&_nc_oc=AdhKasaBLZ61YJ6lpJXkdo8aAZUzaRDNnYwwfhUXDTJfjBYQBE3z_FBX9sqalip_C04&_nc_zt=24&_nc_ht=scontent.fkhi4-3.fna&_nc_gid=Ay4ayOhqkr59e1CyPSBXAcH&oh=00_AYCQZMnqYcRVxbD0Iv71LZ8O8lDy9abrQ3FUqsp5YGVgCw&oe=678A15CE" alt="" className='w-40 object-cover rounded-xl'/>
      <h1>M Osmam S</h1>
      <h2>Followed 25.5k</h2>
      <div className='flex items-center  gap-1'>
        <img src="https://cdn-icons-png.flaticon.com/512/9324/9324103.png" alt="" className='w-4'/>
      <button className='px-4 py-2 bg-[#DFE9F2]'>Add Friend</button>
      </div>
     </div>
     <div className="profile5 flex pb-2 flex-col items-center border-[1px] border-slate-300 ">
     <img src="https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-1/277348440_3173680286240458_59184225215056231_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE2QsI7zWVbRXovVEZi23Gu9ikBDA0VlLv2KQEMDRWUuwiJ7x8g1h_APPOOJdDEvBAGsm94KYsWRH1Iys9T2R-I&_nc_ohc=oTWGErT6tuQQ7kNvgFaFF2x&_nc_oc=Adhvo6nPHawlw0VXCxbnahe2gpCYlsNhJMeB02QslJHeakhLa_4ZTxGYs7hx42pW7EI&_nc_zt=24&_nc_ht=scontent.fkhi4-3.fna&_nc_gid=Ay4ayOhqkr59e1CyPSBXAcH&oh=00_AYAHUYecIBeGQmtgI_Ps0kgz-aCowGuBZj03QGPaczxuyA&oe=678A0B20" alt="" className='w-40 object-cover rounded-xl'/>
      <h1>Amir Khan</h1>
      <h2>Followed 25.5k</h2>
      <div className='flex items-center  gap-1'>
        <img src="https://cdn-icons-png.flaticon.com/512/9324/9324103.png" alt="" className='w-4'/>
      <button className='px-4 py-2 bg-[#DFE9F2]'>Add Friend</button>
      </div>
     </div>
     <div className="profile5 flex pb-2 flex-col items-center border-[1px] border-slate-300 ">
     <img src="https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-1/320799025_452377600425929_1505905876873386428_n.jpg?stp=c0.0.720.720a_dst-jpg_s240x240_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHEzghedX-Kma9UL8BI01dH_feBYxHFHpb994FjEcUelgBx1sYOGhG3nZouy9UQsU9_FuMAXSy3xK05b5MYpnvm&_nc_ohc=dlNPbCfbo1oQ7kNvgEhq6AB&_nc_oc=AdjlyNfOTZ4P25GZjrMdfrayoY_kKagQm3pUrrPk4AuwkQwiPBlmJe3-KBmMWQoDfzM&_nc_zt=24&_nc_ht=scontent.fkhi4-3.fna&_nc_gid=AS_nPN-beQFNBZomp8D9czl&oh=00_AYBW-wN2DNXOdPqdVsoVOasDlmLsGoAjXQHObdqDHRRUyA&oe=678A1F0B" className='w-40 object-cover rounded-xl'/>
      <h1>M Hassan Jamali</h1>
      <h2>Followed 25.5k</h2>
      <div className='flex items-center  gap-1'>
        <img src="https://cdn-icons-png.flaticon.com/512/9324/9324103.png" alt="" className='w-4'/>
      <button className='px-4 py-2 bg-[#DFE9F2]'>Add Friend</button>
      </div>
     </div>
     <div className="profile5 flex pb-2 flex-col items-center border-[1px] border-slate-300 ">
     <img src="https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-1/470597128_122143585412341060_5651170907509249700_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHVClrApZ-5QmjI_rKY11bTT5NhGPFTWCdPk2EY8VNYJxdWs2YjOEwqkbO9woWH-ewu-QU9I2y1Y0jMblsTJsj-&_nc_ohc=G80gDbkj_ZcQ7kNvgFB5ptg&_nc_oc=AdgumZIkjhRxgpJ4WZvMS0Fr_QM5AlvlYiGKVzzpQqiUtgcRH5EPiOOSzKCg_frLDc0&_nc_zt=24&_nc_ht=scontent.fkhi4-3.fna&_nc_gid=Ay4ayOhqkr59e1CyPSBXAcH&oh=00_AYAT4F608BRZeD2FrnwOYUgYAPN-sN7-CvS_U4zLlEbmTA&oe=678A0B1E" className='w-40 object-cover rounded-xl'/>
      <h1>Rahman Sakhi</h1>
      <h2>Followed 25.5k</h2>
      <div className='flex items-center  gap-1'>
        <img src="https://cdn-icons-png.flaticon.com/512/9324/9324103.png" alt="" className='w-4'/>
      <button className='px-4 py-2 bg-[#DFE9F2]'>Add Friend</button>
      </div>
     </div>
     </div>
      </div>
      <div className="flex px-2 h-60 w-4/5 bg-white text-slate-800 items-center gap-2 justify-between">
       <div className="ul flex px-2 py-4 items-center gap-5">
      {["Post","about","friends","photos","videos","check-ins","more"].map((links,idx)=>{
        return (<a href="" key={idx} className='capitalize underline   text-xl'>{links}</a>
        )
      })}
       </div>
       <div className='flex items-center'>
        <button className='px-7 py-3 text-xl rounded-xl bg-slate-200'>...</button>
       </div>
      </div>
      <div className="flex  items-center gap-6">
   <div className="flex bg-[#FFFFFF] flex-col  gap-2">
   <h1 className='font-semibold text-xl '>Intro</h1>
    {["Add bio","edit details","add featured"].map((buttons,ide)=>{
       return <button className='px-5 capitalize  w-[25vw] py-2 bg-slate-300 rounded-xl'>{buttons}</button>
    })}
   </div>
   <div>
    <img src="https://scontent.fkhi4-4.fna.fbcdn.net/v/t39.30808-6/466419695_122096716640629118_8922844929439043846_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e09983&_nc_eui2=AeFqxXVATPRkl5I-DXVjfdjFPcgdipZPD889yB2Klk8Pz7XSNt77rlCZP6keDPoTJ65DpE4AQ8CCZrQG0terH5lZ&_nc_ohc=tTdB_sSpqi8Q7kNvgHydPDe&_nc_oc=AdhwFfjeA2ly7Sjenmnxg-sTZ9KIiOCfuKox2y0nB0x_D3olABiShiOE5XKdAHrl48I&_nc_zt=23&_nc_ht=scontent.fkhi4-4.fna&_nc_gid=AzoIvcUx0-9jklul_Zjvh2L&oh=00_AYDs7xxHM_ioSvO5Piy3idU9gyXplIXY3yELbWivrHwR-A&oe=6789F247" alt="" className='rounded-xl'/>
   </div>
   <div className="parent  rounded-xl pb-5 gap-3  bg-white flex flex-col items-center">
    <div className='flex px-10 py-2 pb-4 border-b-[1px] border-slate-400  item-center gap-4 text-black'>
        <img src="https://scontent.fkhi4-4.fna.fbcdn.net/v/t39.30808-1/466947208_122096868680629118_2119366977800609091_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGPCUhk3hLyFfQ_pgNBl7j0U2k7tLnXt7ZTaTu0ude3tgZN6AEl4atQGaCWWEsf0UO-ov8r5tNsw7ZHNpGIdEKu&_nc_ohc=lU6xvvCu3xAQ7kNvgFK1p6w&_nc_oc=AdjKi178iCzwy79r1wIlV7gh3q506KSasNI91klfZYEpc2Mdq6LtITTRskXp6QYQS0s&_nc_zt=24&_nc_ht=scontent.fkhi4-4.fna&_nc_gid=AWpPgloAr1gJJxc9bRWLWI4&oh=00_AYChC4O2DZD1l2m_-QkJ7iFveSrcAuYmoDy3tw2Glb1tJQ&oe=6788CD1C" alt="" className='rounded-full h-12 w-12'/>
    <input type="text" placeholder='Whats on your mind Imran' className='px-8  border-[1px] border-none bg-[#F0F2F5] rounded-full outline-none w-[32vw]'/>
    </div>
    <div className="flex items-center gap-4 py-2">
        <div className='cursor-pointer hover:bg-slate-300 rounded-xl px-2 py-2 flex items-center gap-2'>
      <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png?_nc_eui2=AeEiAd1p_mzKoFEF5s0qG09BueRic5Ym8Wm55GJzlibxaSCVXXzBgjAE1KBkAr027l31OcW3_AVv0o2ilAzOFR_w" alt=""/>
      <a href="">Live Video</a>
      </div>
      <div className='flex cursor-pointer items-center gap-2  hover:bg-slate-300 rounded-xl px-2 py-2'>
      <img src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeGT7JspfC4xv9032KFGIpfVkBVQC4m7dx6QFVALibt3HlSiwYg3hZW-CozE5x-YHJkb1y9RM1a6ehxNeeuzMFLm" alt="" />
      <a href="">Photo/video</a>
      </div>
      <div className="flex cursor-pointer items-center gap-2  hover:bg-slate-300 rounded-xl px-2 py-2">
      <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeEmLbfhntV42ICwea0VVAYYfPQ6N5_OUfV89Do3n85R9byc81wiBqCoXkDoiRFqYwziHKuYjWS2268vkb3geZf7" alt="" />
      <a href="">Feeling/activity</a>
      </div>
      </div>
    </div> 
    </div>
    </div>
  );
}
export default ProfileSection
