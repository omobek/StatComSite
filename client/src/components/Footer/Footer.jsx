import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import mod from './Footer.module.css'
import Divider from "@material-ui/core/Divider";

function Copyright() {
  return (
    <div className={mod.crightText}>
    <Typography variant="body2" color="white">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Оморов Бексултан
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
     minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.info.main : theme.palette.primary.light,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={mod.container}>
      <footer className={mod.footer}>
        {/*<Container maxWidth="sm">*/}
          {/*<Typography variant="body1" color="white">My sticky footer can be found here.</Typography>*/}
          <div className={mod.prava}>
            <div className={mod.title}>© Все права защищены</div>
            <div className={mod.text}>При использовании статистических данных в средствах массовой информации и научных трудах, распространении в информационных сетях, на бумажных, магнитных и иных носителях пользователи обязаны ссылаться на их источник (ст. 17 Закона о Государственной статистике)</div>
          </div>
        <div className={mod.divider}><Divider/></div>

          <div className={mod.copuR}>
          <Copyright />
          </div>
        {/*</Container>*/}
      </footer>
    </div>
  );
}