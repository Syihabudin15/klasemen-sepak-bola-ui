import { Row, Col, Spin } from 'antd';
import { Fragment, useEffect } from 'react';
import ListKlub from '../Components/ListKlub';
import { useDispatch, useSelector } from 'react-redux';
import { getPertandingan } from '../Redux/Actions/PertandinganSlice';

function Main(){
    const { isLoading, data } = useSelector(state => state.pertandingans);
    const dis = useDispatch();
    console.log(data)
    useEffect(() => {
        dis(getPertandingan(null));
    }, [dis]);
    return(
        <Fragment>
            <ListKlub/>
            <Spin spinning={isLoading}>
                <section title="Main Page">
                    <div className="main-top">
                        <h3>Daftar Pertandingan</h3>
                        <div className='list-pertandingan'>
                            {data && 
                                data.map((e,i) => (
                                    <div className='pertandingan-wrap' key={i}>
                                        <div className='pertandingan-card'>
                                            <Row style={{fontWeight: 'bold'}}>
                                                <Col span={5}>{e.m_detail_pertandingans[0].m_klub.nama_klub}</Col> 
                                                <Col span={5} style={{fontStyle: 'italic'}}>VS</Col> 
                                                <Col span={5}>{e.m_detail_pertandingans[1].m_klub.nama_klub}</Col>
                                            </Row>
                                            <Row style={{marginLeft: 20}}>
                                                <Col span={5}>{e.m_detail_pertandingans[0].skor}</Col> <Col span={5}>-</Col> 
                                                <Col>{e.m_detail_pertandingans[1].skor}</Col>
                                            </Row>
                                        </div>
                                        <div className='status-pertandingan'>
                                            <p>{e.selesai === true ? 'Selesai' : 'Berlangsung'}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </Spin>
        </Fragment>
    )
};

export default Main;