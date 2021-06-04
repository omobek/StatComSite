import React, {useState} from "react";
import mod from './MainStatistic.module.scss';

import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ExposureIcon from '@material-ui/icons/Exposure';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

import { green } from '@material-ui/core/colors';

import BackToTop from "../BackToTop";

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Example from "../Example";
import SelHoz from "./Recharts/SelHoz";
import Sel from "./statStat/Sel";
import Prom from "./statStat/Prom";
import Exp from "./statStat/Exp";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #fffff',
    borderRadius:'5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const MainStatistic = () => {
  let TradeUp= 'style={{fontSize: 30}} style={{ color: green[500] }}';

  // const [modalActive, setModalActive] = useState(true);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div className={mod.container}>
      <h3 className={mod.title}>ОСНОВНЫЕ МАКРОЭКОНОМИЧЕСКИЕ ПОКАЗАТЕЛИ В МАЕ-АПРЕЛЕ 2021 ГОДА</h3>
      <div className={mod.cont}>

        <div className={mod.row}>
          <div className={mod.stat} onClick={handleOpen}>
            <div className={mod.logo}>
              <PeopleAltIcon style={{fontSize: 40}}/>
            </div>
            <div className={mod.description}>
              <div className={mod.mainText}>
                Население
              </div>
              <div className={mod.text}>
                на 01.02.2012 г
              </div>
            </div>
            <div className={mod.number}>
              <div>6.6 млн</div>
              <div className={mod.icon}><TrendingUpIcon style={{fontSize: 30}} style={{ color: green[500] }}/></div>
            </div>
          </div>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h5 id="transition-modal-title">Население Кыргызстана</h5>
                <p id="transition-modal-description">За последние 5 лет</p>
                <Example/>
              </div>
            </Fade>
          </Modal>
          {/*  end--- stat*/}


          {/*<div className={mod.stat} onClick={handleOpen}>*/}

          {/*  <div className={mod.logo}>*/}
          {/*    <FilterVintageIcon style={{fontSize: 40}}/>*/}
          {/*  </div>*/}
          {/*  <div className={mod.description}>*/}
          {/*    <div className={mod.mainText}>*/}
          {/*      Cельское хозяйство*/}
          {/*    </div>*/}
          {/*    <div className={mod.text}>*/}
          {/*      на 01.02.2012 г*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className={mod.number}>*/}
          {/*    <div>100.9 %</div>*/}
          {/*    <div className={mod.icon}>*/}
          {/*      <TrendingDownIcon style={{fontSize: 30}} color={'secondary'}/>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
         <Sel/>

          {/*  end--- stat*/}

          {/*<div className={mod.stat}>*/}
          {/*  <div className={mod.logo}>*/}
          {/*    <WbIncandescentIcon style={{fontSize: 40}}/>*/}
          {/*  </div>*/}
          {/*  <div className={mod.description}>*/}
          {/*    <div className={mod.mainText}>*/}
          {/*      Промышленность*/}
          {/*    </div>*/}
          {/*    <div className={mod.text}>*/}
          {/*      индекс физ.обьема*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className={mod.number}>*/}
          {/*    <div>87.0 %</div>*/}
          {/*    <div className={mod.icon}> <TrendingUpIcon style={{fontSize: 30}} style={{ color: green[500] }}/></div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*  end--- stat*/}
          <Prom/>
        </div>
      {/*  end ---- row */}


        <div className={mod.row}>
          {/*<div className={mod.stat}onClick={handleOpen}>*/}
          {/*  <div className={mod.logo}>*/}
          {/*    <ImportExportIcon style={{fontSize: 40}}/>*/}
          {/*  </div>*/}
          {/*  <div className={mod.description}>*/}
          {/*    <div className={mod.mainText}>*/}
          {/*      Экспорт*/}
          {/*    </div>*/}
          {/*    <div className={mod.text}>*/}
          {/*      на 01.02.2012 г*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className={mod.number}>*/}
          {/*    <div>88.5 %</div>*/}
          {/*    <div className={mod.icon}><TrendingUpIcon style={{fontSize: 30}} color={'secondary'}/></div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <Exp/>
          {/*  end--- stat*/}


          <div className={mod.stat}>
            <div className={mod.logo}>
              <DonutSmallIcon style={{fontSize: 40}}/>
            </div>
            <div className={mod.description}>
              <div className={mod.mainText}>
                Валовый внутрений продукт
              </div>
              <div className={mod.text}>
                на 01.02.2012 г
              </div>
            </div>
            <div className={mod.number}>
              <div>91.1 %</div>
              <div className={mod.icon}><TrendingUpIcon style={{fontSize: 30}} style={{ color: green[500] }}/></div>
            </div>
          </div>
          {/*  end--- stat*/}

          <div className={mod.stat}>
            <div className={mod.logo}>
              <AccountBalanceIcon style={{fontSize: 40}}/>
            </div>
            <div className={mod.description}>
              <div className={mod.mainText}>
                Инвестиции в основной капитал
              </div>
              <div className={mod.text}>
                на 01.02.2012 г
              </div>
            </div>
            <div className={mod.number}>
              <div>74.5%</div>
              <div className={mod.icon}> <TrendingUpIcon style={{fontSize: 30}} style={{ color: green[500] }}/></div>
            </div>
          </div>
          {/*  end--- stat*/}
        </div>
        {/*  end ---- row */}

        <div className={mod.row}>
          <div className={mod.stat}>
            <div className={mod.logo}>
              <ExposureIcon style={{fontSize: 40}}/>
            </div>
            <div className={mod.description}>
              <div className={mod.mainText}>
                Инфляция
              </div>
              <div className={mod.text}>
                на 01.02.2012 г
              </div>
            </div>
            <div className={mod.number}>
              <div>2.0%</div>
              <div className={mod.icon}><TrendingUpIcon style={{fontSize: 30}} color={'secondary'}/></div>
            </div>
          </div>
          {/*  end--- stat*/}


          <div className={mod.stat}>
            <div className={mod.logo}>
              <ImportExportIcon style={{fontSize: 40}}/>
            </div>
            <div className={mod.description}>
              <div className={mod.mainText}>
                Импорт
              </div>
              <div className={mod.text}>
                на 01.02.2012 г
              </div>
            </div>
            <div className={mod.number}>
              <div>67.9 %</div>
              <div className={mod.icon}> <TrendingUpIcon style={{fontSize: 30}} style={{ color: green[500] }}/></div>
            </div>
          </div>
          {/*  end--- stat*/}

          <div className={mod.stat}>
            <div className={mod.logo}>
              <ShoppingCartIcon style={{fontSize: 40}}/>
            </div>
            <div className={mod.description}>
              <div className={mod.mainText}>
                Розничный товарообарот
              </div>
              <div className={mod.text}>
                на 01.02.2012 г
              </div>
            </div>
            <div className={mod.number}>
              <div>101.8 %</div>
              <div className={mod.icon}><TrendingUpIcon style={{fontSize: 30}} color={'secondary'}/></div>
            </div>
          </div>


          {/*  end--- stat*/}
        </div>
        {/*  end ---- row */}
        <div className={mod.more}>
          Подробнее...
        </div>
        {/*<ModalW active={modalActive} setActive={setModalActive}/>*/}
      </div>
      <BackToTop/>
    </div>
  )
};

export default MainStatistic;
