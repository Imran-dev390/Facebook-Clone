import React from 'react'

const Home = () => {
  console.log("Navbar Component Rendered")
  return (
    <div className='Navbar flex items-center justify-between bg-white text-black '>
      <div className="logo ml-6 flex gap-3 w-fit items-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s" alt=""height="50px" width="50px" className='object-cover'/>
      <input type="text" placeholder='Search Here' className='border-[1px] outline-none px-6 bg-[#F0F2F5] py-2 rounded-full  border-slate-300'/>
      </div>
     <div className="centerlinks gap-8 flex justify-center items-center">
    <a href="" title='Home'><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq" Style="--color: var(--primary-button-background);"><path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"></path></svg>
    </a>
    <a href="" title='Friends'> 
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq" Style="--color:var(--secondary-icon)"><path d="M12.496 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-9 2.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM5.5 15a5 5 0 0 0-5 5 3 3 0 0 0 3 3h8.006a3 3 0 0 0 3-3 5 5 0 0 0-5-5H5.5zm-3 5a3 3 0 0 1 3-3h4.006a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1zm12-9.5a5.04 5.04 0 0 0-.37.014 1 1 0 0 0 .146 1.994c.074-.005.149-.008.224-.008h4.006a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-3.398a1 1 0 1 0 0 2h3.398a3 3 0 0 0 3-3 5 5 0 0 0-5-5H14.5z"></path></svg>
      </a>
   <a href="" title='Groups'>
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"
    className="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq" 
    Style="--color:var(--secondary-icon)">
      <path d="M12 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
      <path d="M12 .5C5.649.5.5 5.649.5 12S5.649 23.5 12 23.5 23.5 18.351 23.5 12 18.351.5 12 .5zM2.5 12c0-.682.072-1.348.209-1.99a2 2 0 0 1 0 3.98A9.539 9.539 0 0 1 2.5 12zm4 0a4.001 4.001 0 0 0-3.16-3.912A9.502 9.502 0 0 1 12 2.5a9.502 9.502 0 0 1 8.66 5.588 4.001 4.001 0 0 0 0 7.824 9.514 9.514 0 0 1-1.755 2.613A5.002 5.002 0 0 0 14 14.5h-4a5.002 5.002 0 0 0-4.905 4.025 9.515 9.515 0 0 1-1.755-2.613A4.001 4.001 0 0 0 6.5 12zm13 0a2 2 0 0 1 1.791-1.99 9.538 9.538 0 0 1 0 3.98A2 2 0 0 1 19.5 12zm-2.51 8.086A9.455 9.455 0 0 1 12 21.5c-1.83 0-3.54-.517-4.99-1.414a1.004 1.004 0 0 1-.01-.148V19.5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v.438a1 1 0 0 1-.01.148z">
        </path>
        </svg>
        </a>
     </div>
     <div className="sideLinks px-3 flex items-center gap-8">
      <button className='outline-none font-semibold font-sans border-none rounded-full py-2 px-3 bg-slate-300'>Find Friends</button>
  <div className="menu px-3 py-3 bg-slate-300 rounded-full">
   <a href="" title='Menu'>   
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq" Style="--color:var(--primary-icon)"><path d="M18.5 1A1.5 1.5 0 0 0 17 2.5v3A1.5 1.5 0 0 0 18.5 7h3A1.5 1.5 0 0 0 23 5.5v-3A1.5 1.5 0 0 0 21.5 1h-3zm0 8a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 21.5 9h-3zm-16 8A1.5 1.5 0 0 0 1 18.5v3A1.5 1.5 0 0 0 2.5 23h3A1.5 1.5 0 0 0 7 21.5v-3A1.5 1.5 0 0 0 5.5 17h-3zm8 0A1.5 1.5 0 0 0 9 18.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3zm8 0a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3zm-16-8A1.5 1.5 0 0 0 1 10.5v3A1.5 1.5 0 0 0 2.5 15h3A1.5 1.5 0 0 0 7 13.5v-3A1.5 1.5 0 0 0 5.5 9h-3zm0-8A1.5 1.5 0 0 0 1 2.5v3A1.5 1.5 0 0 0 2.5 7h3A1.5 1.5 0 0 0 7 5.5v-3A1.5 1.5 0 0 0 5.5 1h-3zm8 0A1.5 1.5 0 0 0 9 2.5v3A1.5 1.5 0 0 0 10.5 7h3A1.5 1.5 0 0 0 15 5.5v-3A1.5 1.5 0 0 0 13.5 1h-3zm0 8A1.5 1.5 0 0 0 9 10.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 13.5 9h-3z"></path></svg></a></div>
   <div className="messeages px-3 py-3 bg-slate-300 rounded-full">
    <a href="" title='Messenger' className='hover::border-b-2 border-sky-500'>
    <svg viewBox="0 0 12 13" width="20" height="20" fill="currentColor" className="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq" Style="--color:var(--primary-icon)"><g fillRule="evenodd" transform="translate(-450 -1073)"><path d="m459.603 1077.948-1.762 2.851a.89.89 0 0 1-1.302.245l-1.402-1.072a.354.354 0 0 0-.433.001l-1.893 1.465c-.253.196-.583-.112-.414-.386l1.763-2.851a.89.89 0 0 1 1.301-.245l1.402 1.072a.354.354 0 0 0 .434-.001l1.893-1.465c.253-.196.582.112.413.386M456 1073.5c-3.38 0-6 2.476-6 5.82 0 1.75.717 3.26 1.884 4.305.099.087.158.21.162.342l.032 1.067a.48.48 0 0 0 .674.425l1.191-.526a.473.473 0 0 1 .32-.024c.548.151 1.13.231 1.737.231 3.38 0 6-2.476 6-5.82 0-3.344-2.62-5.82-6-5.82"></path></g></svg>
    </a>
   </div>
   <div className="notifications px-3 py-3 bg-slate-300 rounded-full">
    <a href="" title='Notifiactions'>
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq" Style="--color:var(--primary-icon)"><path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path></svg>
    </a>
   </div>
   <div className="profileImage">
   <image  Style="height:40px;width:40px" x="0" y="0" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xlinkHref="https://scontent.fkhi4-4.fna.fbcdn.net/v/t39.30808-1/466947208_122096868680629118_2119366977800609091_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&amp;_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=e99d92&amp;_nc_eui2=AeGPCUhk3hLyFfQ_pgNBl7j0U2k7tLnXt7ZTaTu0ude3tgZN6AEl4atQGaCWWEsf0UO-ov8r5tNsw7ZHNpGIdEKu&amp;_nc_ohc=lU6xvvCu3xAQ7kNvgGMIbhg&amp;_nc_oc=AdhrGpBAjLM3HQla1muYwGaHveYlahihoemaAfhtloDByclKG8nCLh5AJqwISqH6uGM&amp;_nc_zt=24&amp;_nc_ht=scontent.fkhi4-4.fna&amp;_nc_gid=ANxeegOzS0-7e5Mz2CTaDsD&amp;oh=00_AYB3LvEdAOPpjsaAr-ATTMQW2agQVFeod6mR9fhlgdnf4w&amp;oe=6788245C"></image>
   </div>
     </div>
    </div>
  )
}

export default Home
