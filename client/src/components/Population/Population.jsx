import React, {Component} from "react";
import mod from './Population.module.scss';
import FaceIcon from '@material-ui/icons/Face';
import PublicIcon from '@material-ui/icons/Public';
import KgPop from "./KgPop";
import {makeStyles} from "@material-ui/core/styles";


// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 6, 3),
//   },
// }));
// const classes = useStyles();
// const [open, setOpen] = React.useState(false);
//
// const handleOpen = () => {
//   setOpen(true);
// };
//
// const handleClose = () => {
//   setOpen(false);

class Population extends Component{

  constructor(props) {
    super(props);
    this.state = {
      count:7500234000
    }
  }




render() {
    const {count} = this.state



  return(
    <div className={mod.container}>
      {/*<div className={mod.kg}>*/}
      {/*  <div className={mod.title}>*/}
      {/*    Население Кыргызстана*/}
      {/*  </div>*/}
      {/*  <div className={mod.numeric}>*/}
      {/*    <div className={mod.icon}>*/}
      {/*        <FaceIcon style={{fontSize: 50}}/>*/}
      {/*    </div>*/}
      {/*    <div className={mod.number}>*/}
      {/*      6 500 324*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <KgPop/>
      <div className={mod.world} >
        <div className={mod.title}>
          Население Земли
        </div>
        <div className={mod.numeric}>
          <div className={mod.icon}>
              <PublicIcon style={{fontSize: 50}}/>
          </div>
          <div className={mod.number}>
            {count.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  )
}

componentDidMount() {
    this.myInterval = setInterval(()=>{
      this.setState(prevState =>({
        count: prevState.count + 1
      }))

    },1000)
  }

};

export default Population;