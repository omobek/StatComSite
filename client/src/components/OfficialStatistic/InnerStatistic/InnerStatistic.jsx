import React from 'react';
import mod from './InnerStatistic.module.css'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import StatTable from "./StatTable";

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const InnerStatistic = () => {
  return (
    <div className={mod.container}>
      <div className={mod.left}>
          <div className={mod.links}>
          <div>Календарь официальная статистика</div>
          <div>Метаданные</div>
          <div> Национальные счета</div>
          <div>Цены и индексы</div>
          <div>Инвестиции</div>
          <div>Строительство</div>
          <div>Внутренняя торговля</div>
          <div>Сельское хозяйство</div>
          <div>Промышленность</div>
          <div>Экология</div>
          <div>Услуги</div>
          <div>Демография</div>
          <div> Рынок труда</div>
          <div> Уровень жизни населения</div>
          <div>Социальная сфера</div>
          <div>Малый бизнес и предпринимательство</div>
          <div>Демография предприятий и организаций</div>
          <div>Правонарушение</div>
          <div>Окружающая среда</div>
          <div>Перейти на портал открытых данных>></div>
          </div>
      </div>
      <div className={mod.right}>
          <div className={mod.crumbs}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/" onClick={handleClick}>
                Главное
              </Link>
              <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                Статистика
              </Link>
              <Typography color="textPrimary"> Цены </Typography>
            </Breadcrumbs>
          </div>
        <div className={mod.title}> Цены </div>
        <div>
          <StatTable/>
        </div>
      </div>
    </div>
  );
};

export default InnerStatistic;