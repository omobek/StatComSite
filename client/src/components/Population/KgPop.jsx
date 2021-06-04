import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import mod from "./Population.module.scss";
import FaceIcon from "@material-ui/icons/Face";
import SelHoz from "../MainStatistic/Recharts/SelHoz";
import ChartKg from "./ChartKg";

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

export default function KgPop() {
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
      <div className={mod.kg} onClick={handleOpen}>
        <div className={mod.title}>
          Население Кыргызстана
        </div>
        <div className={mod.numeric}>
          <div className={mod.icon}>
            <FaceIcon style={{fontSize: 50}}/>
          </div>
          <div className={mod.number}>
            6 500 324
          </div>
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
            <h2 id="transition-modal-title">Население Кыргызстана</h2>
            <p id="transition-modal-description">Количество мужчин и женщин</p>
            <ChartKg/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}