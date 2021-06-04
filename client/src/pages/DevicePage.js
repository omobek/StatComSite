import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from '../assets/star.png'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import mod from './DevicePage.module.css'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <div className={mod.container}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    Главное
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Новости
                </Link>
                <Typography color="textPrimary">{device.name}</Typography>
            </Breadcrumbs>

            <div className={mod.img}>
                <Image width={400} height={500} src={process.env.REACT_APP_API_URL + device.img}/>
            </div>
            {/*<Row>*/}
            {/*    <Col md={4}>*/}
            {/*        <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>*/}
            {/*    </Col>*/}
            {/*    /!*<Col md={4}>*!/*/}
            {/*    /!*    <Row className="d-flex flex-column align-items-center">*!/*/}
            {/*    /!*        <h2>{device.name}</h2>*!/*/}
            {/*    /!*        <div*!/*/}
            {/*    /!*            className="d-flex align-items-center justify-content-center"*!/*/}
            {/*    /!*            style={{background: `url($star}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}*!/*/}
            {/*    /!*        >*!/*/}
            {/*    /!*            /!*{device.rating}*!/*!/*/}
            {/*    /!*        </div>*!/*/}
            {/*    /!*    </Row>*!/*/}
            {/*    /!*    *!/*/}
            {/*    /!*</Col>*!/*/}
            {/*    <Col md={4}>*/}
            {/*        <Card*/}
            {/*            className="d-flex flex-column align-items-center justify-content-around"*/}
            {/*            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}*/}
            {/*        >*/}
            {/*            <h3>От: {device.price} руб.</h3>*/}
            {/*            <Button variant={"outline-dark"}>Сохранить к себе</Button>*/}
            {/*        </Card>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            <Row className="d-flex flex-column m-3">
                <h6>{device.createdAt}</h6>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </div>
    );
};

export default DevicePage;
