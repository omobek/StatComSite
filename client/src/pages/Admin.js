import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import mod from './Admin.module.css'
import ComputerIcon from '@material-ui/icons/Computer';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
      <div className={mod.container}>

          <div className={mod.subContainer}>
              <div className={mod.title}>Админ панель</div>
              <div className={mod.icon}><ComputerIcon color="primary" style={{ fontSize: 80 }}/></div>

          </div>
        <Container className={mod.buttons}>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2 w-50"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип новостей
            </Button>
            {/*<Button*/}
            {/*    variant={"outline-dark"}*/}
            {/*    className="mt-4 p-2 w-50"*/}
            {/*    onClick={() => setBrandVisible(true)}*/}
            {/*>*/}
            {/*    Добавить еще тип*/}
            {/*</Button>*/}
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2 w-50"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить новости
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
      </div>
    );
};

export default Admin;
