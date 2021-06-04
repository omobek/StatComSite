import React from "react";
import mod from './ThreeStat.module.scss';
import AssessmentIcon from '@material-ui/icons/Assessment';
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";

const ThirdStat = () => {
  return(
    <div className={mod.case}>
      <div className={mod.icon}>
        <DateRangeOutlinedIcon style={{ fontSize: 40 }}/>
      </div>
      <div className={mod.text}>
        <div className={mod.title}>
          Прожиточный минимум
        </div>
        <div className={mod.subText}>
          Установленный прожиточный минимум
        </div>
      </div>
    </div>
      )
}

export default ThirdStat;

