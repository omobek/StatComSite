import React from "react";
import mod from './ThreeStat.module.scss';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ReceiptIcon from "@material-ui/icons/Receipt";

const SecondStat = () => {
  return(
    <div className={mod.case}>
      <div className={mod.icon}>
        <ReceiptIcon style={{ fontSize: 40 }}/>
      </div>
      <div className={mod.text}>
        <div className={mod.title}>
          Мониторинг цен
        </div>
        <div className={mod.subText}>
          Средние цены на потрибительские товары
        </div>
      </div>
    </div>
      )
}

export default SecondStat;

