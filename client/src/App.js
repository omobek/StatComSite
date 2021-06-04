import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import NavbarMater from "./components/NavBar/NavbarMater";
import Footer from "./components/Footer/Footer";
import MainStatistic from "./components/MainStatistic/MainStatistic";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import {CssBaseline} from "@material-ui/core";
import {REGISTRATION_ROUTE} from "./utils/consts";
import DeviceItem from "./components/DeviceItem";
import DevicePage from "./pages/DevicePage";
import Month from "./components/ThreeStat/InnerMonth/Month";
import SubPublication from "./components/Publication/SubPublication/SubPublication";
import InnerStatistic from "./components/OfficialStatistic/InnerStatistic/InnerStatistic";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
          <CssBaseline/>
            <NavBar/>
            <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/login'} exact component={Auth} />
              <Route path={REGISTRATION_ROUTE} exact component={Auth} />
              <Route path={'/admin'}  exact component={Admin} />
              <Route path={'/device/:id'} exact component={DevicePage}/>
              <Route path={'/month'} exact component={Month}/>
              <Route path={'/subPublication'} exact component={SubPublication}/>
              <Route path={'/innerStatistic'} exact component={InnerStatistic}/>

            {/*<AppRouter />*/}
            </Switch>
            <Footer/>


        </BrowserRouter>
    );
});

export default App;
