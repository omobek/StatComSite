import React, {useEffect, useState} from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useHistory, useParams} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import mod from './Device.module.css';
const DeviceItem = ({device}) => {
    const history = useHistory();

    return (
      <div className={mod.container}>
        <Col md={3} className={"mt-4"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card className={mod.card} style={{width: 200, cursor: 'pointer'}} border={"none"}>
                <Image width={200} height={250} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>{device.createdAt}</div>
                    <div className="d-flex align-items-center">
                        {/*<div>{device.rating}</div>*/}
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div className={mod.descryption}>{device.name}</div>
            </Card>
        </Col>
      </div>
    );
};

export default DeviceItem;
