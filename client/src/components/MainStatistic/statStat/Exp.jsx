import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SelHoz from "../Recharts/SelHoz";
import mod from "../MainStatistic.module.scss";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import Promysh from "../Recharts/Promysh";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import {green} from "@material-ui/core/colors";
import ImportExportIcon from "@material-ui/icons/ImportExport";

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
    padding: theme.spacing(2, 6, 3),
  },
}));

export default function Exp() {
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
      <div className={mod.stat}onClick={handleOpen}>
        <div className={mod.logo}>
          <ImportExportIcon style={{fontSize: 40}}/>
        </div>
        <div className={mod.description}>
          <div className={mod.mainText}>
            Экспорт
          </div>
          <div className={mod.text}>
            на 01.02.2012 г
          </div>
        </div>
        <div className={mod.number}>
          <div>88.5 %</div>
          <div className={mod.icon}><TrendingUpIcon style={{fontSize: 30}} color={'secondary'}/></div>
        </div>
      </div>
      {/*  end--- stat*/}
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
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <Promysh/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}