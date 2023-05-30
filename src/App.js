import { Routes, Route, useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Col, Row , Menu, Button, Drawer } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import Main from './VIews/Main';
import './style.css';
import CreateKlub from './VIews/CreateKlub';
import Klasemen from './VIews/Klasemen';
import UpdateSkor from './VIews/UpdateSkor';
import UpdateAllSkor from './VIews/UpdateAllSkor';

function App(){
    const [curr, setCurr] = useState();
    const [open, setOpen] = useState(false);
    const nav = useNavigate();
    
    const items = [
        {label: 'Buat Klub', key: '/buat-klub'},
        {label: 'Update Skor', key: '/update-skor'},
        {label: 'Klasemen', key: '/klasemen'}
    ];

    const handleClick = (e) => {
        setCurr(e.key);
        nav(e.key);
    };
    return(
        <Fragment>
            <Row>
            <Col span={10}>
                    <Menu items={[{label: 'La Liga', key: '/'}]} selectedKeys={curr} onClick={(e) => handleClick(e)} 
                    style={{fontWeight: 'bold', textShadow: '2px 2px 3px #aaa'}}/>
                </Col>
                <Col offset={8} className="menu-pc" span={6}>
                    <Menu items={items} selectedKeys={curr} mode="horizontal" onClick={(e) => handleClick(e)} />
                </Col>
                <Col className="menu-mobile" offset={10} >
                    <Button onClick={() => setOpen(true)}>
                        <MenuOutlined/>
                    </Button>
                </Col>
                <Drawer open={open} onClose={() => setOpen(false)} width={'80%'}>
                    <Menu items={items} selectedKeys={curr} mode="inline" onClick={(e) => handleClick(e)} />
                </Drawer>
            </Row>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/buat-klub' element={<CreateKlub/>} />
                <Route path='/update-skor' element={<UpdateSkor/>} />
                <Route path='/klasemen' element={<Klasemen/>} />
                <Route path='/update-all-skor' element={<UpdateAllSkor/>} />
            </Routes>
        </Fragment>
    )
};

export default App;