import { Row, Col, Button, Spin, Input, Modal, Form, notification } from 'antd';
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAktifPertandingan } from '../Redux/Actions/AktifPertandinganSlice';
import axios from 'axios';
import { getPertandingan } from '../Redux/Actions/PertandinganSlice';

function EditSkor(){
    const { isLoading, datas } = useSelector(state => state.aktifPertandingans);
    const [open ,setOpen] = useState(false);
    const [per1, setPer1] = useState();
    const [per2, setPer2] = useState();
    const [load, setLoad] = useState(false);
    const dis = useDispatch();
    const base = process.env.BASE_URL || 'http://localhost:5000';

    const handleFinish = async (perId) => {
        let data = [per1, per2];
        setLoad(true);
        try{
            let result = await axios.post(`${base}/api/pertandingan/update?id=${perId}`, data = {skors:data});
            notification.success({message: result.data.msg});
            console.log(result);
            dis(getAktifPertandingan());
            dis(getPertandingan());
        }catch(err){
            console.log(err);
            notification.error({message: err.response.data.msg});
        }
        setLoad(false);
    };

    useEffect(() => {
        dis(getAktifPertandingan());
    }, [dis]);
    return(
        <Fragment>
            <Spin spinning={isLoading}>
                {datas && 
                    datas.map((e,i) => {
                        return <div key={i}>
                                <div className='list-edit-skor'>
                                    <Row style={{width: '80%'}}>
                                        <Col span={5}>{e.m_detail_pertandingans[0].m_klub.nama_klub}</Col>
                                        <Col span={3}>VS</Col>
                                        <Col span={5}>{e.m_detail_pertandingans[1].m_klub.nama_klub}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button onClick={() => setOpen(true)}>Edit Skor</Button>
                                        </Col>
                                    </Row>
                                </div>
                                <Modal title='Update Skor' open={open} onCancel={() => setOpen(false)} footer={[]}>
                                    <Form>
                                        <Form.Item label={e.m_detail_pertandingans[0].m_klub.nama_klub} name='skor1'>
                                            <Input placeholder='0' onChange={(m) => {
                                                setPer1({
                                                    id: e.m_detail_pertandingans[0].id,
                                                    skor: m.target.value
                                                })
                                            }}/>
                                        </Form.Item>

                                        <Form.Item label={e.m_detail_pertandingans[1].m_klub.nama_klub} name='skor2'>
                                            <Input placeholder='0' onChange={(m) => {
                                                setPer2({
                                                    id: e.m_detail_pertandingans[1].id,
                                                    skor: m.target.value
                                                })
                                            }}/>
                                        </Form.Item>

                                        <Form.Item>
                                            <Button block type='primary' onClick={() => handleFinish(e.id)} loading={load} htmlType='submit'>Kirim</Button>
                                        </Form.Item>
                                    </Form>
                                </Modal>
                            </div>
                    })
                }
            </Spin>
        </Fragment>
    )
};

export default EditSkor;