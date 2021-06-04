import React from 'react';
import mod from './Month.module.scss';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import AssessmentIcon from "@material-ui/icons/Assessment";
import ReceiptIcon from "@material-ui/icons/Receipt";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import DateMonth from "./DateMonth";
import GetAppIcon from '@material-ui/icons/GetApp';
import img from './EjeMonth.jpg'

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Month = () => {
  return (
    <div className={mod.container}>
      <div className={mod.left}>

        <div className={mod.case}>
          <div className={mod.icon}>
            <AssessmentIcon style={{ fontSize: 40 }}/>
          </div>
          <div className={mod.text}>
            <div className={mod.left_title}>
              Ежемесячный обзор
            </div>
            <div className={mod.subText}>
              Социально экномическое положение Кыргызстана
            </div>
          </div>
        </div>
      {/*  ///////////////////*/}

        <div className={mod.case}>
          <div className={mod.icon}>
            <ReceiptIcon style={{ fontSize: 40 }}/>
          </div>
          <div className={mod.text}>
            <div className={mod.left_title}>
              Мониторинг цен
            </div>
            <div className={mod.subText}>
              Средние цены на потрибительские товары
            </div>
          </div>
        </div>
      {/*  ///////////////////*/}

        <div className={mod.case}>
          <div className={mod.icon}>
            <DateRangeOutlinedIcon style={{ fontSize: 40 }}/>
          </div>
          <div className={mod.text}>
            <div className={mod.left_title}>
              Прожиточный минимум
            </div>
            <div className={mod.subText}>
              Установленный прожиточный минимум
            </div>
          </div>
        </div>

        <div>
          <DateMonth/>
        </div>
      </div>

      <div className={mod.right}>
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            Главная
          </Link>

          <Link color="inherit" href="/" onClick={handleClick}>
            Публикации
          </Link>

          <Typography color="textPrimary">Социально-экономическое положение Кыргызской Республики
          </Typography>
        </Breadcrumbs>
      </div>

        <div className={mod.title}>Социально-экономическое положение Кыргызской Республики</div>

        <div className={mod.rightContainer}>

          <div className={mod.image}>
            <img src={img} alt="img"/>
          </div>

          <div className={mod.textContainer}>
              <h5>Периодичность: Месячная</h5>
              <h5>Сроки выхода публикаций: До 20 числа</h5>
              <h5>Доклад «Социально-экономическое положение Кыргызской Республики»</h5>
            <div className={mod.links}>
              <Link color="inherit" href="/" >
                Социально-экономическое положение Кыргызской Республики в 2019г. (Архив)
              </Link>
              <Link color="inherit" href="/" >
                Социально-экономическое положение Кыргызской Республики в 2019г. (Архив)
              </Link>
              <Link color="inherit" href="/" >
                Социально-экономическое положение Кыргызской Республики в 2019г. (Архив)
              </Link>
              <Link color="inherit" href="/" >
                Социально-экономическое положение Кыргызской Республики в 2019г. (Архив)
              </Link>
              <Link color="inherit" href="/" >
                Социально-экономическое положение Кыргызской Республики в 2019г. (Архив)
              </Link>
              <Link color="inherit" href="/" >
                Социально-экономическое положение Кыргызской Республики в 2019г. (Архив)
              </Link>
              <Link color="inherit" href="/" >
                Социально-экономическое положение Кыргызской Республики в 2019г. (Архив)
              </Link>
              <Link color="inherit" href="/" >
              Социально-экономическое положение Кыргызской Республики в 2019г. (Архив)
            </Link>

            </div>

            <div className={mod.download}>
              <Link color="inherit" href="/" >
                <GetAppIcon/>Скачать публикацию
              </Link>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Month;