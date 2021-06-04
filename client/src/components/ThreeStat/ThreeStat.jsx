import React from "react";
import mod from './ThreeStat.module.scss';
import {BrowserRouter} from "react-router-dom";
import First from "./First";
import SecondStat from "./SecondStat";
import ThirdStat from "./ThirdStat";

const ThreeStat = () => {
  return(
    <div className={mod.container}>

      <First/>
      <SecondStat/>
      <ThirdStat/>

    </div>
  )
}

export default ThreeStat;

