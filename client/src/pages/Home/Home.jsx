import React from 'react';
import MainStatistic from "../../components/MainStatistic/MainStatistic";
import AppRouter from "../../components/AppRouter";
import Shop from "../Shop";
import ThreeStat from "../../components/ThreeStat/ThreeStat";
import Population from "../../components/Population/Population";
import Month from "../../components/ThreeStat/InnerMonth/Month";
import Reklama from "../../components/Reklama/Reklama";
import OfficialStatistic from "../../components/OfficialStatistic/OfFicialStatistic";
import Publication from "../../components/Publication/Publication";
import CarouselContainer from "../../components/Carousel/CarouselContainer";
import SubPublication from "../../components/Publication/SubPublication/SubPublication";
import InnerStatistic from "../../components/OfficialStatistic/InnerStatistic/InnerStatistic";
import MainMap from "../../components/svgMap/mainMap";



const Home = () => {
  return (
    <div>
      <MainStatistic/>
      {/*<InnerStatistic/>*/}
      <ThreeStat/>

      <Population/>
      {/*<SubPublication/>*/}
      <AppRouter/>

      <Reklama/>
      <OfficialStatistic/>
      <CarouselContainer/>
      <MainMap/>
      <Publication/>
    </div>
  );
};

export default Home;