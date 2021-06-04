import React, {useContext} from 'react';
import Nav from "react-bootstrap/Nav";
import {Button} from "react-bootstrap";
import mod from "./NavBar.module.css";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";

const AuthButtons = () => {
  const {user} = useContext(Context)
  const history = useHistory()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <div>
      {user.isAuth ?
        <Nav className="ml-auto" style={{color: 'white'}}>
          <Button className={mod.button}
            // variant={"outline-light"}
                  onClick={() => history.push(ADMIN_ROUTE)}
          >
            Админ панель
          </Button>
          <Button
            variant={"outline-light"}
            onClick={() => logOut()}
            className="ml-2"
          >
            Выйти
          </Button>
        </Nav>
        :
        <Nav className={mod.button}>
          <Button  onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
        </Nav>
      }
    </div>
  );
};

export default AuthButtons;