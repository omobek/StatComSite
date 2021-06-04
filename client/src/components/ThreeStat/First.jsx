import React from "react";
import mod from './ThreeStat.module.scss';
import AssessmentIcon from '@material-ui/icons/Assessment';
import {useHistory} from "react-router-dom";

const First = () => {
  const history = useHistory()

  return(
      <div className={mod.case} onClick={()=>history.push('month')}>
        <div className={mod.icon}>
          <AssessmentIcon style={{ fontSize: 40 }}/>
        </div>
        <div className={mod.text}>
          <div className={mod.title}>
            Ежемесячный обзор
          </div>
          <div className={mod.subText}>
            Социально экномическое положение Кыргызстана
          </div>
        </div>
      </div>
      )
}

export default First;

