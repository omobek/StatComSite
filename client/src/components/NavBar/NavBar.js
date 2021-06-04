import React, {useContext} from 'react';
import {Context} from "../../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {BrowserRouter, NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {Button, Form, FormControl} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import mod from './NavBar.module.css';

import NavbarMater from "./NavbarMater";
// import {PropTypes, Slide, useScrollTrigger} from "@material-ui/core";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import * as PropTypes from "prop-types";
import AuthButtons from "./AuthButtons";

import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import {Tooltip} from "@material-ui/core";

function HideOnScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({target: window ? window() : undefined});

    return (
      <Slide appear={false} direction="down" in={!trigger}>
          {children}
      </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const NavBar = observer((props) => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        history.push('/')

    }

    return (

      <HideOnScroll >
        <Navbar className={mod.container}>

                <NavLink  className={mod.logo} to={"/"} >статистический комитет</NavLink>

            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button ><SearchIcon/></Button>
            </Form>

                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>

                        <Tooltip title="АДМИН ПАНЕЛЬ" arrow>

                        <Button className={mod.button}
                            // variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            <LockOpenIcon/>
                        </Button>
                        </Tooltip>


                        <Tooltip title="ВЫЙТИ" arrow>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            <CancelPresentationIcon/>
                        </Button>
                        </Tooltip>
                    </Nav>
                    :
                    <Nav className={mod.button}>
                        <Tooltip title="АВТОРИЗАЦИЯ" arrow>
                        <Button  onClick={() => history.push(LOGIN_ROUTE)}><PersonAddIcon/></Button>
                        </Tooltip>

                    </Nav>

                }


                <NavbarMater/>
        </Navbar>
</HideOnScroll>

    );
});

export default NavBar;
