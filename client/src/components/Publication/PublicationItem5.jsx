import React from "react";
import mod from './PublicationItem.module.scss';
// import img1 from './PubImg/nasPreisStat.jpg'
import img1 from './PubImg/nasPreisStat.jpg'
import img2 from './PubImg/PreisPub.jpg'
import img3 from './PubImg/SelHos.jpg'
import img4 from './PubImg/TenStat.jpg'
import img5 from './PubImg/TurismStat.jpg'
import img6 from './PubImg/VneshTor.jpg'
import img7 from './PubImg/ZdorovNas.jpg'



const PublicationItem5 = ()=>{
  // const images = [img1,img2,img3,img4,img5,img6,img7];
  // const imageItems = images.map((number) =>
  //   <li>{number}</li>
  // );
  return(
    <div className={mod.container}>
      <img src={img5} alt=""/>
    </div>
  )
}

export default PublicationItem5;