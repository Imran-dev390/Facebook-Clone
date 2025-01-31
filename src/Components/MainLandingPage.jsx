import React from 'react'

const MainLandingPage = (props) => {
  return (
    <div data-scroll data-scroll-speed="-.2" className='h-full w-full flex overflow-y-scroll bg-[#F2F4F7]'>
      <div className="sidebar gap-2 py-3 px-2 text-left  flex flex-col">
      <div className="image gap-3 flex items-center text-xl font-semibold font-sans">
        <img className='rounded-full w-10 object-cover' src="https://scontent.fkhi4-4.fna.fbcdn.net/v/t39.30808-1/466947208_122096868680629118_2119366977800609091_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=fe756c&_nc_eui2=AeGPCUhk3hLyFfQ_pgNBl7j0U2k7tLnXt7ZTaTu0ude3tgZN6AEl4atQGaCWWEsf0UO-ov8r5tNsw7ZHNpGIdEKu&_nc_ohc=lU6xvvCu3xAQ7kNvgGjRgEq&_nc_oc=AdjOoYfCJk2YGMss9kdxGcUiTT3Tpt6jV4Izdw_5JfHqmUsUPjk2Gmk9VtPKlsIfvOs&_nc_zt=24&_nc_ht=scontent.fkhi4-4.fna&_nc_gid=Ar_UD3PxbKSNSv0z7Mb36d1&oh=00_AYC1KCmvsTPaLTx-wnLEMlXQIsydVgiEu1-zQhUn24g81w&oe=67885C9C" alt="" height={"50px"} width={"50px"}/>
        <a href="">{props.username}</a>
        </div>
        <div className="flex-col  font-semibold text-xl text-left flex gap-4 ml-4">
       <div className="flex items-center gap-2">   
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJaAZ0uEvWL06ZV7XE8Fp9ESJf2HRbAh_Mk9rb_qToxSXsMfTt3rQ-3zEs0f1eSw2IkI&usqp=CAU" alt="" height={"20px"} width={"30px"}/>
        <a href="">Friends</a>
        </div>
        <div className='flex items-center gap-2'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7kbLR76mMcyL2jwciqil9yo2xK1KxUIM1g&s" alt="" className='h-5 w-7' />
        <a href="">Memories</a>
        </div>
        <div className="flex gap-2  items-center">
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
        <details><a href="">See More</a>
        </details>
        </div>
        <p className=''>Privacy  · Terms  · Advertising  · Ad Choices<br></br>   · Cookies  ·   · Meta © 2025</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, magni molestiae reprehenderit, vero earum in velit ad aperiam voluptatibus numquam eveniet dolorum voluptatem nesciunt sequi voluptate laborum sint quis maiores!</p>
      </div>
    </div>
  )
}

export default MainLandingPage
