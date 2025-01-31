import React from 'react'

const CenterHome = (props) => {
  console.log("Center Component Rendered")
  return (
    <div data-scroll-speed=".3" className="h-screen mt-10 flex flex-col gap-3">
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
    <div className="flex flex-col  mt-8 bg-white px-5 py-2">
        <div className="flex items-center rounded-xl cursor-pointer px-2 py-2 hover:bg-slate-200  gap-3">
       <img onClick={props.createStory} src="https://icon-library.com/images/create-icon-png/create-icon-png-8.jpg" alt="" className='w-8 h-7s'/>
      <sup> <h1 className='text-xl font-semibold'>Create Story</h1>
      <p className='text-lg'>Share a photo or write something</p>
      </sup>
    </div>
    </div>
    {/* Posted Videos or Photos in Facebook */}
    <div className="min-h-fit bg-white flex-col flex  min-w-fit">
         <div className=" flex py-2 px-3 gap-4 items-center ">
          <img src="https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-6/439638175_1960219517727406_2628621387042824705_n.jpg?stp=c0.55.716.716a_cp0_dst-jpg_s50x50_tt6&_nc_cat=1&ccb=1-7&_nc_sid=33e84f&_nc_eui2=AeERV3wueERNlG0FEHl6zSBguGAf_A-5LIa4YB_8D7kshiQ1qHQBEi2NdpiVDb1qzbybBJ3h8HKCGz2bH57pRCDf&_nc_ohc=obPhvI2SjIYQ7kNvgE38Lsz&_nc_oc=AdjFrC-tsdKT_4emWoLipGg155NBRRUCRXoYKPmjbFE5WR0LjO0_z59ta0pit8NRjxM&_nc_zt=23&_nc_ht=scontent.fkhi4-3.fna&_nc_gid=A97KpWp46N_luZPCWUjVlQt&oh=00_AYBKCE4Nt_PaGjPckz4vs5AZXQPfCvWz3nUwQlLyxxX2_A&oe=6788F210" alt="" className='w-9 h-8 rounded-xl'/>
        <sup><h1 className={`text-xl`}>{props.title}.<span className='text-sky-500'>Join</span></h1>
        <p className='text-lg'>আমরাই পারবো .january 5 at 11:56 AM .</p>
        </sup>
         </div>
         <div className="text flex  flex-col  gap-2">
        <p className='w-[40.5vw] px-3 postp'> The history of #photography 
began with the discovery of two critical principles: The first is camera obscura image projection, the second is the discovery that some substances are visibly altered by exposure to light[2]. There are no artifacts or descriptions that indicate any attempt to capture images with light sensitive materials prior to the 18th century.
View from the Window at Le Gras 1826 or 1827, believed to be the earliest surviving camera photograph.[1] Original … See more
        </p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAuYZs83zqWea5ERz3sfeSv-ByHnvtz9y2_w&s" alt="" className='w-full sm::max-w-96'/>
      <div className='flex border-b-[1px] pb-3 justify-between border-slate-400 items-center gap-2'>
       <div className='flex gap-2 items-center'>
        <img src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" alt=""  className='w-6'/>
        <h1>{props.likes} </h1>
        </div>
        <div className='flex items-center gap-2 flex-grow-1'>
        <h2>Comments</h2>
          <h2>{props.Comment}</h2>
        </div>
        <div className='flex items-center gap-2'>
          <h1>Shares</h1>
          <h2>{props.shares}</h2>
        </div>
         </div>
         <div className="flex  px-14 justify-between">
      <div className='flex gap-2  items-center'>
     <img src="https://i.pinimg.com/1200x/ea/69/d3/ea69d37b95aaf9a6b51cc01894cee7ee.jpg" alt="" className='w-5'/>
      <button onClick={props.click}>Like</button>
      </div>
      <div className="flex items-center gap-2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HuhGBO1nYadROU_Y60knIxQpqgITzT5HHw&s" alt="" className='w-5'/>
      <button onClick={props.comment}>Comment</button>
      </div>
      <div className="flex gap-2 items-center">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/323/648/small/phone-icon-flat-style-isolated-on-white-background-free-vector.jpg" alt="" className='w-10'/>
       <button>Send</button>
       </div>
       <div className="flex items-center gap-2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOCU9DzNRekTF_8uUfeolKq2Rhww603Qu5nw&s" alt="" className='w-5'/>
       <button onClick={props.Shair}>Share</button>
       </div>
         </div>
         </div>
    {/* Second Components of Posts  */}

    <div className=" flex mt-10 py-2 bg-white px-3 gap-4 items-center ">
          <img src="https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-6/439638175_1960219517727406_2628621387042824705_n.jpg?stp=c0.55.716.716a_cp0_dst-jpg_s50x50_tt6&_nc_cat=1&ccb=1-7&_nc_sid=33e84f&_nc_eui2=AeERV3wueERNlG0FEHl6zSBguGAf_A-5LIa4YB_8D7kshiQ1qHQBEi2NdpiVDb1qzbybBJ3h8HKCGz2bH57pRCDf&_nc_ohc=obPhvI2SjIYQ7kNvgE38Lsz&_nc_oc=AdjFrC-tsdKT_4emWoLipGg155NBRRUCRXoYKPmjbFE5WR0LjO0_z59ta0pit8NRjxM&_nc_zt=23&_nc_ht=scontent.fkhi4-3.fna&_nc_gid=A97KpWp46N_luZPCWUjVlQt&oh=00_AYBKCE4Nt_PaGjPckz4vs5AZXQPfCvWz3nUwQlLyxxX2_A&oe=6788F210" alt="" className='w-9 h-8 rounded-xl'/>
        <sup><h1 className={`text-xl`}>Home interior Designs.<span className='text-sky-500'>Join</span></h1>
        <p className='text-lg'>Rosan Hayden .january 5 at 11:56 AM .</p>
        </sup>
        </div>
         <div className="text flex  flex-col  gap-2">
        <p className='w-[39.5vw] px-3 flex gap-3 '>I NEED THIS 
          <img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t66/1/16/1f493.png" alt="" className='w-5 object-cover'/>
        <img src="https://static.xx.fbcdn.net/images/emoji.php/v9/tea/1/16/1f970.png" alt="" className='w-5 object-cover'/>
        </p>
       <img src="https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-6/472712603_122179164086062417_4303555003273485050_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=1&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFmkh1iAGbH815EpTXpvCd2KHaZDQj7LWEodpkNCPstYZC1bU89wtsEUA3WC0GiUAmB25ymP-PDLrrjvbJUAxg9&_nc_ohc=0N0SqFHVkZYQ7kNvgHU3U8s&_nc_oc=Adhv6m79dqp1aClFJNti91iOrCHfOtjvwLD_K8UEF6wub14Y_rtTNOY4n4OVlD6TXsg&_nc_zt=23&_nc_ht=scontent.fkhi4-3.fna&_nc_gid=A60Stl2dlRbcfcEnQnqLH2I&oh=00_AYA9cJvtXN6k8LJ-LwLXLlZejSSIUpL0zhGLVf_IBwTI7Q&oe=678A4212" alt=""className='w-full' /> 
      <div className='flex border-b-[1px] pb-3 justify-between border-slate-400 items-center gap-2'>
       <div className='flex gap-2 items-center'>
        <img src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" alt=""  className='w-6'/>
        <h1> 400k</h1>
        </div>
        <div className='flex items-center gap-2 flex-grow-1'>
        <h2>Comments</h2>
          <h2>{props.Comment}</h2>
        </div>
        <div className='flex items-center gap-2'>
          <h1>Shares</h1>
          <h2>{props.shares}</h2>
        </div>
         </div>
         <div className="flex  px-14 justify-between">
      <div className='flex gap-2  items-center'>
     <img src="https://i.pinimg.com/1200x/ea/69/d3/ea69d37b95aaf9a6b51cc01894cee7ee.jpg" alt="" className='w-5'/>
      <button onClick={props.click}>Like</button>
      </div>
      <div className="flex items-center gap-2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HuhGBO1nYadROU_Y60knIxQpqgITzT5HHw&s" alt="" className='w-5'/>
      <button onClick={props.comment}>Comment</button>
      </div>
      <div className="flex gap-2 items-center">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/323/648/small/phone-icon-flat-style-isolated-on-white-background-free-vector.jpg" alt="" className='w-10'/>
       <button>Send</button>
       </div>
       <div className="flex items-center gap-2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOCU9DzNRekTF_8uUfeolKq2Rhww603Qu5nw&s" alt="" className='w-5'/>
       <button onClick={props.Shair}>Share</button>
       </div>
         </div>
         </div>
         </div>
    </div>
  )
}

export default CenterHome;
