import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SelHoz from "../Recharts/SelHoz";
import mod from "../MainStatistic.module.scss";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 8, 3),
  },
}));

export default function Sel() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/*<button type="button" onClick={handleOpen}>*/}
      {/*  react-transition-group*/}
      {/*</button>*/}
      <div className={mod.stat} onClick={handleOpen}>

        <div className={mod.logo}>
          <FilterVintageIcon style={{fontSize: 40}}/>
        </div>
        <div className={mod.description}>
          <div className={mod.mainText}>
            Cельское хозяйство
          </div>
          <div className={mod.text}>
            на 01.02.2012 г
          </div>
        </div>
        <div className={mod.number}>
          <div>100.9 %</div>
          <div className={mod.icon}>
            <TrendingDownIcon style={{fontSize: 30}} color={'secondary'}/>
          </div>
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
            <h3 id="transition-modal-title">Cельское хозяйство</h3>
            <p id="transition-modal-description">Показано за последние 5 лет</p>
            <SelHoz/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}