import { Row, Col } from 'antd';
import { Fragment } from 'react';
import ListKlub from '../Components/ListKlub';

function Main(){
    return(
        <Fragment>
            <ListKlub/>
            <section title="Main Page">
                <div className="main-top">
                    <h3>Daftar Riwayat Pertandingan</h3>
                    <div className='list-pertandingan'>
                        <div className='pertandingan-wrap'>
                            <div className='pertandingan-card'>
                                <Row style={{fontWeight: 'bold'}}>
                                    <Col span={5}>Persib</Col> 
                                    <Col span={5} style={{fontStyle: 'italic'}}>VS</Col> 
                                    <Col span={5}>Persija</Col>
                                </Row>
                                <Row style={{marginLeft: 20}}>
                                    <Col span={5}>1</Col> <Col span={5}>-</Col> <Col>0</Col>
                                </Row>
                            </div>
                            <div className='status-pertandingan'>
                                <p>Berlangsung</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default Main;