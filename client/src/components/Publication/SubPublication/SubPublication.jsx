import React from 'react';
import mod from './SubPublication.module.css'
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import img from './nasPreisStat.jpg'
import GetAppIcon from '@material-ui/icons/GetApp';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const SubPublication = () => {
  return (
    <div className={mod.container}>
      <div className={mod.crumb}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
           Главное
          </Link>
          <Link color="inherit" href="/" onClick={handleClick}>
            Публикации
          </Link>
          <Typography color="textPrimary">Национальные счета Кыргызской Республики</Typography>
        </Breadcrumbs>
      </div>

      <div className={mod.title}> Национальные счета Кыргызской Республики</div>
      <div className={mod.case}>
        <div className={mod.img}><img src={img} alt="image"/>
        <div className={mod.download}>
          <GetAppIcon/> Скачать публикацию
        </div></div>
        <div className={mod.text}>
          <h5>Периодичность: Годовая</h5>
          <h5>Сроки выхода публикаций: Декабрь</h5>
          <div className={mod.descryption}>В ежегодно издаваемом сборнике  содержатся данные,
            характеризующие  все стороны процесса воспроизводства как в целом по экономике республики, так и п
            о ее секторам и отраслям: объем, динамика и структура валового внутреннего продукта (ВВП) и его основных компонентов; производство товаров и услуг; образование, распределение, перераспределение и использование доходов; формирование и
            сточников финансирования инвестиций и изменения в капитале; внешнеэкономические операции и др.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubPublication;