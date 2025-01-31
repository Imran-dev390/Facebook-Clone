import React from 'react'
const RightSide = () => {
  console.log("RightSide Components Rendered")
  return (
    <div data-scroll-speed=".3" className='Rightbar flex sticky top-0 h-60 flex-col mt-10  items-center gap-4'>
      <h1 className='text-xl font-semibold text-slate-600 font-sans'>Sponsored</h1>
    <div className="flex  items-center gap-2">
<img src="https://scontent.fkhi11-2.fna.fbcdn.net/v/t45.1600-4/462591951_6598471709854_908309767177715578_n.jpg?stp=cp0_dst-jpg_q75_s960x960_spS444_tt6&_nc_cat=101&ccb=1-7&_nc_sid=c02adf&_nc_eui2=AeHm1M9ZryKnadhl5kBxoPwW1MG7u6J1NJ3Uwbu7onU0nSGExEe7ZELUHKB_NYF4T5jiafQXuk0YPPC6S6ShYgqp&_nc_ohc=EX9mKOqOvVkQ7kNvgGL_d86&_nc_oc=AdgSnH6V9ePKMctLnvChtZG1SDmhVA_rzgunIWjgyiCrXQexdNDuv8KGGxnDpN5odKhyPPD5D7bBN4p_x1HLp7B6&_nc_zt=1&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=AUI1LRmi9P4xGy6vMpdSNS6&oh=00_AYDqRy79an4sQ5nMjecw5KdL_yD3u5evTaEqr6bNyGq00g&oe=6789AB7F" alt="" className='w-28 rounded-xl'/>

<sup><h1 className='text-lg font-sans font-semibold uppercase'>Winter Collection</h1>
<a href="" className='text-lg font-light mt-2'>Ismailfarid.com</a></sup>
    </div>
    {/* Second Box */}
    <div className="flex pb-5 border-b-[1px] border-slate-400  items-center gap-2">
<img src="https://scontent.fkhi11-1.fna.fbcdn.net/v/t45.1600-4/472356923_120214979970970642_5706690948619472013_n.png?stp=c0.35.285.285a_dst-png_p285x285&_nc_cat=103&ccb=1-7&_nc_sid=11850a&_nc_eui2=AeGYoq_PtHjyR6W_eM0Kuzt4Tv9Rel95vudO_1F6X3m-51A-9ZiupucY5uABDQhiFhgX_yuMZCZ2Jb7PTu36xtAp&_nc_ohc=W0ytRfxASUYQ7kNvgEhRjgL&_nc_oc=AdiU4i-raCpcvh54vIXREkBAvEJxadon4t_ZctHl_KsVAP381-nxSPycUPE22tmFuUkCJXsqYIJ9PJqjaL-Dj2Pv&_nc_zt=1&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=AUI1LRmi9P4xGy6vMpdSNS6&oh=00_AYAmB0misPx8W6zwdOZPm-0caRDzfJnk_IkrM5FFNCPaVA&oe=678997FB" alt="" className='w-28 rounded-xl'/>

<sup><h1 className='text-lg font-sans font-semibold  capitalize'>renew your glow with ice roller</h1>
<a href="" className='text-lg font-light mt-2'>thebeautytypegeon.com</a></sup>
</div>
<div className="flex-col flex items-center gap-2">
     <h1 className='text-lg  text-slate-600'>Groups Chat</h1>
     <div className="flex items-center gap-2">
      <div className='px-4 py-4 bg-slate-300 rounded-full'>+</div>
      <h1 className='text-xl font-semibold font-sans'>Create Group chat</h1>
     </div>
    </div>
    </div>
  )
}

export default RightSide
