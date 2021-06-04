import React from "react";
import img from './img/PerepisNas.png';
import mod from './Reklama.module.scss';

const Reklama = () => {
  return (
    <div className={mod.container}>
      <div className={mod.img}>
        <img src={img} alt=""/>
      </div>
    </div>
  )
};

export default Reklama;