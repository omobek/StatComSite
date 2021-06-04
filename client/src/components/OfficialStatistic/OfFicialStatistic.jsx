import React from "react";
import mod from './OfficialSatistic.module.scss';
import MoneyIcon from '@material-ui/icons/Money';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import GrainIcon from '@material-ui/icons/Grain';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import WorkIcon from '@material-ui/icons/Work';
import BarChartIcon from '@material-ui/icons/BarChart';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import GavelIcon from '@material-ui/icons/Gavel';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import CommuteIcon from '@material-ui/icons/Commute';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import {useHistory} from "react-router-dom";

const OfficialStatistic = ()=>{
  const fs=40;
  const history = useHistory();
  return(
    <div className={mod.container}>
      <div className={mod.title}>Официальная статистика</div>
      <div className={mod.case}>
        <div className={mod.statistic}>
          <div className={mod.icon}>
            <MoneyIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
              ВВП
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
              <LocalAtmIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
            Гос. бюджет и кредитование
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
            <LocalHospitalIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
            Здравоохранение
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
            <EmojiPeopleIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
              Индексы доверия населения
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
              <GrainIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
                Культура
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
            <CastForEducationIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
            образование
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
              <MoodBadIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
              Престурность
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
              <NaturePeopleIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
              Сельское хозяйство
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
              <MarkunreadMailboxIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
              Торговля и услуги
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
            <WorkIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
            Труд и занятость
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
              <BarChartIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
            Уровень жизни
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
            <MonetizationOnIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name} onClick={()=>history.push('innerStatistic')}>
            Цены
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
            <TransferWithinAStationIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
            Внешняя торговля
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
              <HomeWorkIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
            Жилищний фонд
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
              <ShoppingBasketIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
              Инвестиции
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
              <FilterVintageIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
              Индикаторы зеленого роста
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
                <SupervisorAccountIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
              население
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
              <EmojiNatureIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
            Окружающая среда
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
            <GavelIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
            Промышленность
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
              <LocationCityIcon  style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
              Строительство
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
              <CommuteIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
            Транспорт и связь
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
            <FlightTakeoffIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
              Туризм
          </div>
        </div>

        <div className={mod.statistic}>
          <div className={mod.icon}>
            <ThumbUpAltIcon style={{ fontSize:fs }}/>
          </div>
          <div className={mod.name}>
            Цели устойчивого развития
          </div>
        </div>


      </div>
    </div>
  )
};

export default OfficialStatistic;